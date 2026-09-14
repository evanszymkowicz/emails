<script setup lang="ts">
const props = defineProps({
  signupLink: {
    type: String,
    default: 'https://join.t-mobilemoney.com/#!/customertype',
  },
})
</script>

<template>
  <Container
    class="bg-tmobile-black bg-cover bg-center"
    style="background-image: url('/tmobile-email/tmobile-purple-bg.jpg');"
  >
    <Row>
      <Column class="w-full text-center">
        <Spacer class="h-9" />
        <Heading
          level="3"
          class="m-0 px-4 font-noto-sans text-[28px] font-bold text-tmobile-white"
        >
          Get started in minutes.
        </Heading>
        <Spacer class="h-2.5" />
        <Text class="m-0 px-6 font-noto-sans text-base text-tmobile-white">
          Signing up is super easy. Open an account today on mobile or web and
          start your path to better MONEY!
        </Text>
        <Spacer class="h-5" />
        <Button
          :href="props.signupLink"
          class="inline-block border-2 border-solid border-tmobile-magenta bg-tmobile-magenta px-5 py-2 font-noto-sans text-base font-bold text-tmobile-white no-underline"
        >
          Sign up
        </Button>
        <Spacer class="h-9" />
      </Column>
    </Row>
  </Container>
</template>
