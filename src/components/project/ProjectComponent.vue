<template>
  <div class="project">
    <ul class="group/list">
      <li class="mb-12" v-for="(item, index) in projects" :key="index">
        <ProjectItem
          :name="item.name"
          :description="item.description"
          :technologies="item.technologies"
          :link="item.link"
          :position="item.position"
          :image="item?.image"
        />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { projects } from '@/constants/data.json'
import ProjectItem from './ProjectItem.vue'
</script>
