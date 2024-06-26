<template>
    <div
        class="pl-5 group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
            class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
        </div>
        <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
            :aria-label="`${periods[0]} to ${periods[1]}`">{{ periods[0] }} — {{ periods[1] }} </header>
        <div class="z-10 sm:col-span-6">
            <h3 class="leading-snug">
                <div>
                    <a class="inline-flex items-baseline leading-tight  hover:text-cyan-300 focus-visible:text-cyan-300  group/link text-base"
                        :href="link" target="_blank" rel="noreferrer noopener"
                        :aria-label="`${position} at ${company} (opens in a new tab)`">
                        <span
                            class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span class="font-medium ">{{ position }} ·<!-- --> <span
                                class="inline-block pl-1 font-medium ">
                                {{ company }}
                                <ArrowUpRightIcon />
                            </span>
                        </span>
                    </a>
                </div>
            </h3>
            <p class="mt-2 text-sm leading-normal">{{ description }}</p>
            <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                <li v-for="item in technologies" :key="item" class="mr-1.5 mt-2">
                    <div
                        class="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                        {{ item }}</div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowUpRightIcon } from "@/assets/icons";
defineProps<{
    periods: string[],
    company: string,
    position: string,
    description: string,
    technologies: string[],
    link: string
}>()
</script>