<template>
  <section class="header">

    <div class="header__description">

      <h2 class="header__description-subtitle">Hi, I'm Jordan Willian!</h2>
      <h1 class="header__description-title">FRONTEND <span>DEVELOPER</span></h1>

      <p class="header__description-text">
        Jordan Willian is a Computer Engineer passionate about Front-End and AR/VR technologies. With a focus on
        details, he seeks to create modern experiences, transforming ideas into real experiences for the web.
      </p>

      <div class="header__description-btns">
        <button class="btn btn-primary" @click="openUrl('https://www.linkedin.com/in/jordan-willian-7aa391281/')">LinkedIn</button>
        <button class="btn btn-secondary" @click="openUrl('mailto:jordanwillian.ecp@gmail.com')">HIRE ME</button>
      </div>
    </div>

    <div class="header__photo">
      <img src="/images/jordan-willian.png" loading="lazy" alt="Jordan Willian" class="header__photo-image">
    </div>

  </section><!-- END ABOUT HEADER -->

</template>

<script lang="ts" setup>
import { openUrl } from '@/utils/openUrl';

</script>