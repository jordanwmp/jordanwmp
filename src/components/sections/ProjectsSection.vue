<template>
  <section class="projects">
    <h2 class="projects__title">Portfolio</h2>
    <div class="projects__list">
      <ProjectCard :project="project" v-for="project in paginatedProjects" :key="project.id" />
    </div>
    
    <button class="btn btn-danger projects__load-more" @click="router.push('/portfolio')">
      See all
    </button>

  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { paginateProjects } from '@/services/projects';
import ProjectCard from '@/components/ui/ProjectCard.vue';

import { useRouter } from 'vue-router';

const router = useRouter()

const paginatedProjects = ref<any[]>([]);


onMounted(() => {
  paginatedProjects.value = paginateProjects(0, 6).data; //handlePaginate();
  console.log('ProjectsSection mounted, paginated projects:', paginatedProjects.value);
});

</script>