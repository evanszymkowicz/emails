<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { twMerge } from 'tailwind-merge'

const props = defineProps({
  href: {
    type: String,
    default: '#',
  },
  variant: {
    type: String as () => 'primary' | 'secondary',
    default: 'primary',
  },
  size: {
    type: String as () => 'default' | 'large',
    default: 'default',
  },
  expand: {
    type: Boolean,
    default: false,
  },
})

const attrs = useAttrs()

const baseClasses = computed(() => {
  const classes = [
    'inline-block',
    'no-underline',
    'text-center',
    'font-bold',
    'rounded',
    'border-2',
    'border-solid',
  ]

  if (props.variant === 'primary') {
    classes.push('bg-glens-green', 'text-white', 'border-glens-green')
  } else {
    classes.push('bg-transparent', 'text-glens-green', 'border-glens-green')
  }

  if (props.size === 'large') {
    classes.push('px-5', 'py-[10px]', 'text-xl')
  } else {
    classes.push('px-4', 'py-2', 'text-base')
  }

  if (props.expand) {
    classes.push('w-full')
  }

  return classes.join(' ')
})

const mergedClass = computed(() => twMerge(baseClasses.value, attrs.class as string))
</script>

<template>
  <a :href="href" :class="mergedClass">
    <slot />
  </a>
</template>
