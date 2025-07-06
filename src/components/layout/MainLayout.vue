<template>
  <div class="main">
    <Nav />
    <main class="main__content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script lang="ts" setup>

import Footer from './Footer.vue';
import Nav from './Nav.vue';

</script>