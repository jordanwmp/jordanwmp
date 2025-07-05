<template>
  <section class="projects">
    <h2 class="projects__title">Projects</h2>
    <div class="projects__list">
      <ProjectCard :project="project" v-for="project in paginatedProjects" :key="project.id" />
    </div>
    
    <button class="btn btn-danger projects__load-more " @click="handlePaginate(6)">
      See all
    </button>


  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { paginateProjects } from '@/services/projects';
import ProjectCard from '@/components/ui/ProjectCard.vue';

const paginatedProjects = ref<any[]>([]);

const handlePaginate = (offset: number = 0, limit: number = 6): any[] => {
  const paginated = paginateProjects(offset, limit);
  console.log(paginated);
  return paginated.data;
};

onMounted(() => {
  paginatedProjects.value = handlePaginate();
  console.log('ProjectsSection mounted, paginated projects:', paginatedProjects.value);
});

</script>