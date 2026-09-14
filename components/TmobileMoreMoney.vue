<script setup lang="ts">
const props = defineProps({
  apy: {
    type: String,
    default: '1.00',
  },
  qualifyingApy: {
    type: String,
    default: '4.00',
  },
  cashBack: {
    type: String,
    default: '3,000',
  },
  afterApy: {
    type: String,
    default: '1.00',
  },
  graphSrc: {
    type: String,
    default: '/tmobile-email/bargraph.png',
  },
  detailsLink: {
    type: String,
    default: 'https://www.t-mobilemoney.com/en/perks/interest.html',
  },
})

const compareLink =
  'https://www.t-mobilemoney.com/en/features/no-fee-banking.html'
</script>

<template>
  <Container class="bg-tmobile-white">
    <Row>
      <Column class="w-full text-center">
        <Spacer class="h-2.5" />
        <Heading
          as="h2"
          class="m-0 px-4 font-noto-sans text-[30px] font-bold text-tmobile-magenta"
        >
          More interest = more MONEY
        </Heading>
        <Spacer class="h-2.5" />
        <Text class="m-0 px-4 font-noto-sans text-base text-tmobile-black">
          Everyone earns {{ props.apy }}% APY* on all balances. T-Mobile
          wireless customers with qualifying service can earn
          {{ props.qualifyingApy }}% APY* on balances up to ${{ props.cashBack }}
          and {{ props.afterApy }}% APY after that in their T-Mobile MONEY
          checking account by depositing at least $200/month and registering
          for perks.
        </Text>
        <Spacer class="h-2.5" />
        <Text class="m-0 px-4 font-noto-sans text-base text-tmobile-black">
          * Click here for APY details or see below.
        </Text>
        <Spacer class="h-5" />
      </Column>
    </Row>
    <Row>
      <Column class="w-full">
        <Img
          :src="props.graphSrc"
          alt="T-Mobile MONEY 4.00 percent APY compared to the national average"
          width="600"
          class="block w-full"
        />
        <Spacer class="h-5" />
      </Column>
    </Row>
    <Row>
      <Column class="w-full text-center">
        <Button
          :href="props.detailsLink"
          class="inline-block border-2 border-solid border-tmobile-magenta bg-tmobile-magenta px-5 py-2 font-noto-sans text-base font-bold text-tmobile-white no-underline"
        >
          See how it works
        </Button>
        <Spacer class="h-5" />
      </Column>
    </Row>
  </Container>

  <Container class="bg-tmobile-light-gray">
    <Row>
      <Column class="w-7/12 sm:w-full">
        <Spacer class="h-5" />
        <Section class="px-4">
          <Heading
            as="h2"
            class="m-0 font-noto-sans text-[30px] font-bold leading-[1.2] text-tmobile-black"
          >
            No more account<br />fees.
          </Heading>
          <Spacer class="h-2.5" />
          <Text class="m-0 font-noto-sans text-base text-tmobile-black">
            It’s your money. Keep it. No overdraft fees. No maintenance fees.
            No fees at Allpoint<sup>®</sup> ATMs.<br /><br />
            No minimum balance.
          </Text>
          <Spacer class="h-4" />
          <Button
            :href="compareLink"
            class="inline-block border-2 border-solid border-tmobile-magenta bg-tmobile-magenta px-5 py-2 font-noto-sans text-base font-bold text-tmobile-white no-underline"
          >
            See how we compare
          </Button>
        </Section>
        <Spacer class="h-5" />
      </Column>
      <Column class="w-5/12 sm:w-full">
        <Spacer class="h-5" />
        <Img
          src="/tmobile-email/home-fees-image.png"
          alt="$0 in fees — no overdraft, maintenance, minimum balance, or ATM fees"
          width="250"
          class="mx-auto block w-full"
          style="max-width: 250px;"
        />
        <Spacer class="h-5" />
      </Column>
    </Row>
  </Container>
</template>
