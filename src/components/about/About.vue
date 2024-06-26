<script setup lang="ts">
import { DocumentationIcon, EcosystemIcon, ToolingIcon } from '@/assets/icons';
import { about } from '@/constants/data.json';
import { formatText } from '@/utils';
import { WelcomeItem } from '../common';

const formatSummary = (text: string) => {
  return text
    .replace(/\$([^$]+)\$\$/g, '<span class="font-medium">$1</span>')       // Replace $$...$$ with <span>...</span>
    .replace(/1@([^@]+)@@/g, '<a href="https://halozendsoft.com/" class="font-medium underline   hover:text-cyan-300 focus-visible:text-cyan-300">$1</a>') // Replace 1@...@@ with <a href="https://halozendsoft.com/">...</a>
    .replace(/2@([^@]+)@@/g, '<a href="https://dision.tech/" class="font-medium underline  hover:text-cyan-300 focus-visible:text-cyan-300" >$1</a>'); // Replace 2@...@@ with <a href="https://dision.tech/">...</a>
};
const formattedSummary = formatSummary(about.summary);
const formattedSkills = formatText(about.technical);
const formattedEdu = formatText(about.education);

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Summary</template>
    <div v-html="formattedSummary"></div>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Education</template>
    <ul v-html="formattedEdu" class="flex flex-col gap-1 list-disc pl-5"></ul>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Technical skills</template>
    <ul v-html="formattedSkills" class="flex flex-col gap-1 list-disc pl-5"></ul>
    <ul v-html="formattedSkills" class="flex flex-col gap-1 list-disc pl-5"></ul>
  </WelcomeItem>


</template>