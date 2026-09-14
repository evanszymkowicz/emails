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
  <Container class="bg-tmobile-white">
    <Row>
      <Column class="w-full">
        <Img
          src="/tmobile-email/tmobile-money-store.jpg"
          alt="T-Mobile storefront with the T-Mobile MONEY app and debit card"
          width="600"
          class="block w-full"
        />
      </Column>
    </Row>
  </Container>

  <Container
    class="bg-tmobile-black bg-cover bg-center"
    style="background-image: url('/tmobile-email/tmobile-purple-bg.jpg');"
  >
    <Row style="font-size: 0;">
      <Column class="w-7/12 align-top sm:w-full">
        <Spacer class="h-6" />
        <Heading
          level="1"
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
        <Spacer class="h-6" />
      </Column>
      <Column class="w-5/12 align-top sm:w-full">
        <Spacer class="h-9" />
        <Spacer class="h-9" />
        <Spacer class="h-6" />
        <Spacer class="h-4" />
        <Section class="px-5">
          <Row style="font-size: 0;">
            <Column class="w-6/12 align-top sm:w-full sm:text-center">
              <Button
                :href="props.signupLink"
                class="inline-block border-2 border-solid border-tmobile-magenta bg-tmobile-magenta px-4 py-1.5 font-noto-sans text-sm font-bold text-tmobile-white no-underline"
              >
                Sign up
              </Button>
            </Column>
            <Column class="w-6/12 align-top sm:w-full sm:text-center">
              <Img
                src="/tmobile-email/btn-app-store.png"
                alt="Download on the App Store"
                width="90"
              />
            </Column>
          </Row>
        </Section>
        <Spacer class="h-6" />
      </Column>
    </Row>
  </Container>
</template>
