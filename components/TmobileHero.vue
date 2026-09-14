<script setup lang="ts">
const props = defineProps({
  percent: {
    type: String,
    default: '4.00',
  },
  atms: {
    type: String,
    default: '55,000',
  },
  signupLink: {
    type: String,
    default: 'https://www.t-mobilemoney.com/en/perks/interest.html',
  },
})
</script>

<template>
  <Container
    class="bg-tmobile-black bg-cover bg-center"
    style="background-image: url('/tmobile-email/tmobile-money-store.jpg');"
  >
    <Row>
      <Column class="w-full">
        <Spacer class="h-6" />
        <Heading
          as="h1"
          class="m-0 px-5 font-noto-sans text-[32px] font-bold leading-[1.2] text-tmobile-white"
        >
          Not another bank.<br />A better one.
        </Heading>
        <Spacer class="h-2.5" />
        <Text class="m-0 px-5 font-noto-sans text-base leading-[1.6] text-tmobile-white">
          • {{ props.percent }} Annual Percentage Yield (APY)<br />
          • No more account fees.<br />
          • Over {{ props.atms }} no-fee ATMs.<br />
          • FDIC-insured.
        </Text>
        <Spacer class="h-5" />
        <Section class="px-5">
          <Button
            :href="props.signupLink"
            class="inline-block border-2 border-solid border-tmobile-magenta bg-tmobile-magenta px-5 py-2 font-noto-sans text-base font-bold text-tmobile-white no-underline"
          >
            Sign up
          </Button>
        </Section>
        <Spacer class="h-5" />
        <Section class="px-5">
          <Img
            src="/tmobile-email/btn-app-store.png"
            alt="Download on the App Store"
            width="130"
          />
        </Section>
        <Spacer class="h-6" />
      </Column>
    </Row>
  </Container>
</template>
