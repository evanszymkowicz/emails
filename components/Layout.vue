<script setup lang="ts">
import { computed, useAttrs, createStaticVNode, type PropType } from 'vue'
import { twMerge } from 'tailwind-merge'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  bodyClass: {
    type: String,
    default: ''
  },
  lang: {
    type: String,
    default: 'en'
  },
  dir: {
    type: String as PropType<'ltr' | 'rtl'>,
    default: 'ltr'
  },
  doubleHead: {
    type: [Boolean, String],
    default: false
  },
  ariaLabel: {
    type: String,
    default: undefined
  },
})

const attrs = useAttrs()
const bodyMergedClass = computed(() => twMerge('m-0 p-0 size-full [word-break:break-word]', props.bodyClass))
const articleMergedClass = computed(() => twMerge('[font-size:max(16px,1rem)] font-inter', attrs.class as string))

const EmptyHead = () => createStaticVNode('<head></head>', 1)

const MsoHead = () => createStaticVNode(
  `<!--[if mso]>
    <style>
      td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
      .mso-break-all {word-break: break-all;}
    </style>
  <![endif]-->`,
  1
)

const msoBody = `<!--[if mso]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    <w:WordDocument>
      <w:DontUseAdvancedTypographyReadingMachine />
    </w:WordDocument>
  </xml>
<![endif]-->`

const htmlXmlns = {
  'xmlns:v': 'urn:schemas-microsoft-com:vml',
  'xmlns:o': 'urn:schemas-microsoft-com:office:office',
}
</script>

<template>
  <html :lang="lang" :dir="dir" v-bind="htmlXmlns">
  <EmptyHead v-if="props.doubleHead === true || props.doubleHead === 'true'" />
  <head>
    <meta charset="utf-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <MsoHead />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" media="screen">
    <style>
      @import "../tailwind.css";

      img {
        @apply max-w-full align-middle;
      }
    </style>
  </head>
  <body :xml:lang="lang" :class="bodyMergedClass">
    <span style="display: none" v-html="msoBody"></span>
    <div
      role="article"
      aria-roledescription="email"
      :aria-label="ariaLabel"
      :lang="lang"
      :dir="dir"
      style="font-size: medium;"
      data-juice-duplicates
      v-bind="{ ...attrs, class: undefined }"
      :class="articleMergedClass"
    >
      <slot />
    </div>
  </body>
  </html>
</template>
