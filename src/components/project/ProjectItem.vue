<script setup lang="ts">
import { ArrowUpRightIcon } from "@/assets/icons"
import Avatar from '@/assets/images/logo.svg';
import { THEME_MODE } from "@/constants/config";
import { cls } from "@/utils";
import { onMounted, ref, watch } from "vue";
defineProps<{
    name: string,
    description: string,
    technologies: string[],
    link: string
}>()


</script>

<template>
    <div
        class="pl-5 group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg lg:group-hover:bg-slate-800/50">
        </div>
        <div class="z-10 sm:order-2 sm:col-span-6">
            <h3>
                <a class="inline-flex items-baseline leading-tight  hover:text-cyan-300 focus-visible:text-cyan-300  group/link text-base"
                    :href="link" target="_blank" rel="noreferrer noopener" :aria-label="`${name} (opens in a new tab)`">
                    <span
                        class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span class="font-medium ">
                        {{ name }}<!-- -->
                        <span class="inline-block">
                            <ArrowUpRightIcon />
                        </span>
                    </span>
                </a>
            </h3>
            <p class="mt-2 text-sm leading-normal">{{ description }}
            </p>

            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                <li v-for="item in technologies" :key="item" class="mr-1.5 mt-2">
                    <div
                        class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                        {{ item }}</div>
                </li>

            </ul>
        </div>
        <img :alt="name" loading="lazy" width="200" height="48" decoding="async" data-img="1"
            class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 mx-auto"
            style="color:transparent" :srcset="Avatar" :accesskey="Avatar">
    </div>
</template>
