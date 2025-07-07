<template>
  <div class="drawer-container">
    <!-- Botão de abrir drawer  -->
    <button class="drawer-toggle" @click="isOpen = true">
      ☰
    </button>

    <!-- Overlay (fade) -->
    <transition name="drawer-fade">
      <div
        v-if="isOpen"
        class="drawer__overlay"
        @click="isOpen = false"
      />
    </transition>

    <!-- Painel lateral (slide) -->
    <transition name="drawer-slide">
      <nav v-if="isOpen" class="drawer">
        <button class="drawer__close" @click="isOpen = false">×</button>
        <ul class="drawer__list">
          <li class="drawer__item">
            <!-- <a href="#home" @click="isOpen = false">Início</a> -->
             <router-link to="/"  @click="isOpen = false">Home</router-link>
          </li>
          <li class="drawer__item">
            <!-- <a href="#projects" @click="isOpen = false">Projetos</a> -->
             <router-link to="/portfolio"  @click="isOpen = false">Portfolio</router-link>
          </li>
          <li class="drawer__item">
            <!-- <a href="#tech" @click="isOpen = false">Tecnologias</a> -->
             <router-link to="/about"  @click="isOpen = false">About me</router-link>
          </li>
          <!-- <li class="drawer__item">
            <a href="#contact" @click="isOpen = false">Contato</a>
          </li> -->
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>