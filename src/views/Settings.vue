<template>
  <div class="p-2 w-2/3 mx-auto">
    <div class="flex flex-col w-1/2 mx-auto">
      <a href="#" class="nav-item" @click="save">Save</a>
      <a href="#" class="nav-item" @click="load">Load</a>

      <div>
        <textarea
          class="border border-gray-600 rounded shadow"
          cols="30"
          rows="10"
          v-model="data"
        ></textarea>
        <div class="mb-2">
          <a href="#" class="nav-item mr-2" @click="importData">Import</a>
          <a href="#" class="nav-item" @click="exportData">Export</a>
        </div>
        <a href="#" class="nav-item w-full" @click="copy">Copy to clipboard</a>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import saloimex from '@/utils/saloimex';

const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export default {
  data() {
    return {
      data: '',
    };
  },
  methods: {
    save() {
      this.$store.dispatch('getDataToSave').then((data) => {
        // !important: commit set last saved at must be before saloimex.save
        this.$store.commit('statistics/setLastSavedAt', new Date().toISOString());
        saloimex.save(data);
        this.$store.dispatch('alert/show', 'Game saved.');
      });
    },
    load() {
      this.$store.dispatch('setDataToLoad', saloimex.load());
      this.$store.dispatch('alert/show', 'Game loaded! Enjoy :)');
    },
    importData() {
      if (this.data !== '') {
        this.$store.dispatch('setDataToLoad', saloimex.import(this.data));
        this.$store.dispatch('alert/show', 'Data imported. Enjoy! :)');
      } else {
        this.$store.dispatch('alert/show', 'Nothing to import.');
      }
    },
    exportData() {
      this.$store.dispatch('getDataToSave').then((data) => {
        this.$store.commit('statistics/setLastSavedAt', new Date().toISOString());
        this.data = saloimex.export(data);
        this.$store.dispatch('alert/show', 'Data exported.');
      });
    },
    copy() {
      copyToClipboard(this.data);
      this.$store.dispatch('alert/show', 'Copied to clipboard! Save it somewhere safe :)');
    },
  },
};
</script>
