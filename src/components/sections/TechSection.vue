<template>
  <section class="tech">
    <h2 class="tech__title">Technologies</h2>
    <div class="tech__list">
      <ul>
        <li class="tech__item" v-for="(tech, index) in techList" :key="index">
          <v-icon :name="tech" :scale="iconScale" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>

import { ref, onMounted } from 'vue';

const iconScale = ref<number>(5)
const techList = ref<string[]>([
      'vi-file-type-angular', 'vi-file-type-ionic', 
      'vi-file-type-reactjs', 'vi-file-type-node',
      'vi-file-type-vue'
    ]);

</script>