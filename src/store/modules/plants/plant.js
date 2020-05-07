import { random } from '@/utils';

class Plant {
  constructor(options) {
    this.id = options.id || 0;
    this.typeId = options.typeId || null;
    this.name = options.name;
    this.description = options.description;
    this.image = options.image;
    this.imageBud = options.imageBud;
    this.imageSeed = options.imageSeed;
    this.position = options.position || 0;
    this.boughtAt = options.boughtAt || 0; // in-game time (periods)
    this.price = options.price;

    // 0 = seed
    // 1 = budding
    // 2 = producing
    this.stage = options.stage || 0;
    this.progress = options.progress || 0;
    this.growthRate = options.growthRate || 0;
    this.dailyGrowth = options.dailyGrowth;
    this.ready = options.ready || false;
    this.cookieHealth = options.cookieHealth || 21;
    this.defaultCookieHealth = options.defaultCookieHealth || 21;
    this.water = options.waterCapacity;
    this.waterCapacity = options.waterCapacity;
    this.dry = options.dry || false;
    this.health = options.health || 17;
    this.defaultHealth = options.defaultHealth || 17;
    this.isDead = false;
  }

  check() {
    const hydrated = this.water > 0;
    const readyToHarvest = this.ready;
    const needPhotosyntesis = hydrated && !readyToHarvest;

    if (hydrated) {
      this.dry = false;
      this.health = this.defaultHealth;
    }

    if (needPhotosyntesis) this.photosynthesis();
    else if (readyToHarvest) this.bloom();
    else this.dehydrate();
  }

  setPosition(position) {
    this.position = position;
  }

  photosynthesis() {
    const self = this;

    function setToReady() {
      if (!self.ready) {
        self.ready = true;
        // console.log(`${self.id} ready to collect.`);
      }
    }

    function checkProgress() {
      if (self.stage === 2 && self.progress >= 100) {
        self.progress = 100;
        setToReady();
      } else if (self.stage < 2 && self.progress >= 100) {
        self.stage += 1;
        self.progress = 0;
      }
    }

    // consume water to get progress and ready to harvest
    if (this.progress < 100 && !this.ready) {
      // if(!app.player.auto_watering){
      this.water -= 1;
      // }
      this.progress += random(true, this.dailyGrowth - 5, this.dailyGrowth);

      checkProgress();
    } else {
      checkProgress();
    }
  }

  bloom() {
    this.cookieHealth -= 1;
    if (this.cookieHealth === 0) {
      this.decay();
    }
  }

  collect() {
    this.cookieHealth = this.defaultCookieHealth;
    this.ready = false;
    this.progress = 0;
  }

  hydrate() {
    this.dry = false;
    this.water = this.waterCapacity;
    this.health = this.defaultHealth;
  }

  dehydrate() {
    // no water!
    this.dry = true;
    this.water = 0;
    this.health -= 1;
    if (this.health === 0) {
      this.destroy();
    }
  }

  decay() {
    this.progress = 0;
    this.ready = false;
    this.cookieHealth = this.defaultCookieHealth;
  }

  destroy() {
    this.isDead = true;
  }
}

export default Plant;
