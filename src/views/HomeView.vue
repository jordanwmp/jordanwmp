<template>
  <Nav />
  <main>
    <Header />
    <ProjectsSection />
    <TechSection />
    <ContactSection />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import Nav from '@/components/layout/Nav.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import TechSection from '@/components/sections/TechSection.vue';
import Footer from '@/components/layout/Footer.vue'; 
</script>

<style lang="scss" scoped>
main {
  display: block;
  max-width: 1400px;
  margin: 0 auto;
}
</style>
