<template>
    <div class="experience">
        <ol class="group/list">
            <li class="mb-12" v-for="(item, index) in experiences" :key="index">
                <ExperienceItem :periods="item.periods" :company="item.company" :position="item.position"
                    :description="item.description" :technologies="item.technologies" :link="item.link" />
            </li>
        </ol>
    </div>
</template>
<script setup lang="ts">
import { experiences } from '@/constants/data.json'
import ExperienceItem from './ExperienceItem.vue'

</script>