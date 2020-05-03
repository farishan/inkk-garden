import { random } from '@/utils';

class Plant {
  constructor(options) {
    this.id = 0;
    this.name = options.name;
    this.description = options.description;
    this.image = options.image;
    this.image_bud = options.image_bud;
    this.position = 0;
    this.bought_at = { day: 0, period: 'day' };
    this.price = options.price;

    // 0 = seed
    // 1 = budding
    // 2 = producing
    this.stage = 0;
    this.progress = 0;
    this.growth_rate = 0;
    this.daily_growth = options.daily_growth;
    this.ready = false;
    this.cookie_health = 21;
    this.default_cookie_health = 21;
    this.water = options.water_capacity;
    this.water_capacity = options.water_capacity;
    this.dry = false;
    this.health = 21;
    this.default_health = 21;
    this.isDead = false;
  }

  check() {
    // console.log('checking my self', this)

    const hydrated = this.water > 0;
    const readyToHarvest = this.ready;
    const needPhotosyntesis = hydrated && !readyToHarvest;

    if (hydrated) {
      this.dry = false;
      this.health = this.default_health;
    }

    if (needPhotosyntesis) this.photosynthesis();
    else if (readyToHarvest) this.bloom();
    else this.dehydrate();
  }

  photosynthesis() {
    const self = this;

    function setToReady() {
      if (!self.ready) {
        self.ready = true;
        console.log(`${self.id} ready to collect.`);
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
      this.progress += random(true, this.daily_growth - 5, this.daily_growth);

      checkProgress();
      // console.log(this.name + ' progress: ' + this.progress)
    } else {
      checkProgress();
    }
  }

  bloom() {
    this.cookie_health -= 1;
    if (this.cookie_health === 0) {
      this.decay();
    }
  }

  collect() {
    this.cookie_health = this.default_cookie_health;
    this.ready = false;
    this.progress = 0;
  }

  hydrate() {
    this.dry = false;
    this.water = this.water_capacity;
    this.health = this.default_health;
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
    this.cookie_health = this.default_cookie_health;
  }

  destroy() {
    this.isDead = true;
  }
}

export default Plant;
