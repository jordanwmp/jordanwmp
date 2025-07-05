<template>
  <div class="card">
    
    <div class="card__image">
       <v-icon :name="props.project.logo || 'bi-code-slash'" scale="5" />
    </div>

    <div class="card__container">
      
      <div class="card__header">
        <h2>{{props.project.name}}</h2>
      </div>

      <div class="card__body">
        <p>{{props.project.description}}</p>
        <div class="card__body-tags">
          <span v-for="tech in props.project.technologies">{{ tech }}</span>
        </div>
      </div>

      <div class="card__footer">
        <button class="btn btn-dark" @click="openUrl(props.project.links?.github!)"  :class="{'cls-disabled': !props.project.links?.github!}">GitHub</button>
        <button class="btn btn-danger" @click="openUrl(props.project.links?.live!)" :class="{'cls-disabled': !props.project.links?.live!}">Live</button>
      </div>

    </div>

  </div>
</template>

<script lang="ts" setup>
import type { Project } from '@/services/projects';
import { openUrl } from '@/utils/openUrl';
import { defineProps } from 'vue';
const props = defineProps<{project: Project}>()
</script>