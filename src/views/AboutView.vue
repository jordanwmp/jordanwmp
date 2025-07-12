<template>
  <section class="about">

    <div class="about__intro">
      <h1 class="about__title">About me</h1>
    </div>

    <div class="about__content">

      <section class="about__section">
        <h2 class="about__section-title">About Jordan</h2>
        <p class="about__text">
          Jordan Willian is a Front-End and Mobile developer. I work with modern technologies from the JavaScript
          ecosystem, such as Vue.js, Angular, React, and hybrid frameworks such as Ionic and React Native.
        </p>
        <p class="about__text">
          My goal is to be an excellent software architect. I seek to integrate theoretical foundations with practical
          challenges, maintaining a constant learning routine — whether through courses, reading, or personal projects.
        </p>
      </section>

      <section class="about__section">
        <h2 class="about__section-title">Education</h2>
        <ul class="about__list">
          <li>Bachelor's Degree in Computer Engineering, Federal University of Maranhão</li>
          <li>Bachelor's Degree in Science and Technology, Federal University of Maranhão</li>
        </ul>
      </section>

      <section class="about__section">
        <h2 class="about__section-title">My Resume</h2>
        <button class="btn btn-secondary" @click="downloadResume">Download</button>
      </section>

      <section class="about__section">
        <h2 class="about__section-title">Contact</h2>
        <ul class="about__list">
          <li>
            <v-icon name="bi-whatsapp" scale="1.5"></v-icon> 
            <a @click="openWhatsApp">+55 (98) 9 8718-0471</a>
          </li>
          <li>
            <v-icon name="co-gmail" scale="1.5"></v-icon> 
            <a @click="openEmail">jordan.willian.mp@gmail.com</a></li>

        </ul>
      </section>

    </div>
  </section>
</template>

<script setup lang="ts">
import { downloadResume } from '@/utils/downloadResume';
import { openEmail, openWhatsApp } from '@/utils/openUrl';
</script>
