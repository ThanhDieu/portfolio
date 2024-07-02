<template>
  <header
    class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:h-screen"
  >
    <div class="lg:flex">
      <figure class="logo lg:block w-[125px] mx-auto lg:mx-1 mb-5">
        <img alt="Vue logo" :src="Avatar" />
      </figure>
      <div class="wrapper pl-3">
        <Information :name="about.fullName" :title="about.title" :info="about.info" />
        <nav class="w-full mt-5">
          <RouterLink to="/">About</RouterLink>
          <RouterLink to="/experience">Experiences</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
        </nav>
      </div>
    </div>
    <ul
      class="social-outer mt-5 flex items-center justify-center gap-4 lg:static fixed bg-[var(--color-background)] z-10 lg:flex-row flex-col"
      aria-label="Social media"
    >
      <SocialItem :link="about.socials.github" title="Github">
        <template #icon>
          <GithubIcon />
        </template>
      </SocialItem>
      <SocialItem :link="about.socials.linked_in" title="LinkedIn">
        <template #icon>
          <LinkedInIcon />
        </template>
      </SocialItem>
      <SocialItem :link="about.socials.facebook" title="Facebook">
        <template #icon>
          <TwitterIcon />
        </template>
      </SocialItem>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { GithubIcon, LinkedInIcon, TwitterIcon } from '@/assets/icons'
import Avatar from '@/assets/images/avatar.jpeg'
import { Information, SocialItem } from '@/components/about'
import { about } from '@/constants/data.json'
</script>

<style scoped>
nav a.router-link-exact-active {
  color: rgb(103 232 249 / 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (max-width: 1024px) {
  .social-outer {
    left: 1rem;
    bottom: 3rem;
  }
}
</style>
