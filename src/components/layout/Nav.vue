<template>
  <header class="nav">
    <div class="nav__logo">
      <router-link to="/">
        <h1>Jordan</h1>
      </router-link>
    </div>
    <ul class="nav__list">
      <li class="nav__list-item">
        <!-- <a href="#projects">Portfolio</a> -->
        <router-link to="/portfolio">Portfolio</router-link>
      </li>
      <li class="nav__list-item">
        <!-- <a href="/about">About</a> -->
        <router-link to="/about">About</router-link>
      </li>
    </ul>
    <MobileDrawer />
  </header>
</template>

<script lang="ts" setup>
import MobileDrawer from '../ui/MobileDrawer.vue';
</script>