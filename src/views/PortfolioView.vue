<template>
  <section class="portfolio">

    <h1 class="portfolio__title">Portfolio</h1>

    <div class="portfolio__research">

      <span class="portfolio__research--label">Filter by</span>

      <select v-model="selectedStack">
        <option value="" :disabled="true">Select</option>
        <option v-for="(item, index) in stacks" :value="item" :key="index">{{ item }}</option>
      </select>

      <div class="portfolio__research--category">
        <span v-for="(cat, index) in categories" :key="index" @click="handleSearch('category', cat as Category)">
          {{ cat }}
        </span>
      </div>

    </div>

    <div class="portfolio__list" v-if="paginatedProjects.length !== 0">
      <ProjectCard :project="project" v-for="project in paginatedProjects" :key="project.id" />
    </div>

    <div class="portfolio__paginate" v-if="paginatedProjects.length !== 0">

      <button class="btn btn-danger" :class="{ 'cls-disabled': offset <= 0 }"
        @click="offset -= WEIGHT">Previous</button>

      <button class="btn btn-primary" :class="{ 'cls-disabled': offset >= (projects.length - WEIGHT) }"
        @click="offset += WEIGHT">Next</button>

      <span>Total: {{ page }}/{{ totalPages }}</span>
    </div>

    <p class="portfolio__empty" v-if="paginatedProjects.length === 0">No data found.</p>

  </section>
</template>

<script setup lang="ts">

import { techs, type Category, type Project, type Technologies } from '@/services/projects';
import { ref, onMounted, computed, watch } from 'vue'
import { projects, searchProject } from '@/services/projects';
import ProjectCard from '@/components/ui/ProjectCard.vue';

const selectedStack = ref('')
const categories = ref<string[]>(['all', 'frontend', 'mobile', 'api'])
const stacks = ref<string[]>()
const paginatedProjects = ref<any[]>([]);
const offset = ref<number>(0)
const filterType = ref<"category" | "framework">("category")
const filterStack = ref<Category | Technologies>("all")
const total = ref(0)
const WEIGHT: number = 6
const LIMIT: number = 6

const page = computed(() => {
  return Math.floor(offset.value / WEIGHT) + 1
})

const totalPages = computed(() => Math.ceil(total.value / LIMIT))

const handleSearch = (type: "category" | "framework", stack: Technologies | Category) => {
  console.log('stack', stack)
  offset.value = 0
  filterType.value = type
  filterStack.value = stack
  const data = searchProject(type, stack, offset.value, WEIGHT)
  console.log('SEARCH ', data)
  paginatedProjects.value = data.data as Project[] || []
}

watch([offset, filterType, filterStack], () => {
  const result = searchProject(filterType.value, filterStack.value, offset.value, LIMIT)
  paginatedProjects.value = result.data
  total.value = result.total
}, { immediate: true })

watch(selectedStack, (newValue) => {
  if (newValue) {
    handleSearch('framework', newValue as Technologies)
  }
})

onMounted(() => {
  const techList = techs.map(tech => tech.name)
  console.log('tech list', techList)
  stacks.value = techList

  paginatedProjects.value = searchProject("category", "all", offset.value, LIMIT).data;
  console.log('ProjectsSection mounted, paginated projects:', paginatedProjects.value);
})

</script>