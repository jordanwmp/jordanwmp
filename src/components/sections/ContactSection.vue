<template>
  <section class="contact">
    <h2 class="contact__title">Connect with me</h2>
    <p class="contact__description">Send your question or project and receive a quick response.</p>
    <button class="btn btn-dark" @click="openEmail">Message</button>
  </section>
</template>

<script lang="ts" setup>
import { openEmail } from '@/utils/openUrl';
</script>