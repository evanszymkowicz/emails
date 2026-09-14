<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { twMerge } from 'tailwind-merge'

const props = defineProps({
  href: {
    type: String,
    default: '#',
  },
})

const attrs = useAttrs()

const baseClasses =
  'inline-block no-underline text-center font-bold border border-solid border-espn-gold bg-espn-gold text-black uppercase px-4 py-2 text-base'

const mergedClass = computed(() => twMerge(baseClasses, attrs.class as string))
</script>

<template>
  <a :href="props.href" :class="mergedClass">
    <slot />
  </a>
</template>
