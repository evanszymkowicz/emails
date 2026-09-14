<script setup lang="ts">
const subject = 'Khabib vs Poirier is tomorrow at 2PM/ET!'
const preheaderText = 'Your Exclusive Home for UFC PPV'

const buttonCopy = 'buy now'
const buttonLink = 'https://tinyurl.com/yx9ggdye'

const streamHelpLink =
  'https://help.espnplus.com/hc/en-us/sections/360004092971-Device-Linking?ex_cid=ESPN-EML-PLUSESPNCOM-ALL-20190906_SPOTLIGHT_UFC242PPV_V1MDB-General-ESPN-20190906'
</script>

<template>
  <Layout
    :title="subject"
    font-family="Roboto"
    google-font="Roboto:wght@400;700"
    class="font-roboto"
  >
    <Preheader>{{ preheaderText }}</Preheader>

    <!-- Hero -->
    <Container class="bg-white">
      <Row>
        <Column>
          <Img
            src="/upcoming-schedule-email/espn-ufc.jpg"
            alt="UFC on ESPN+"
            width="600"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Img
            src="/upcoming-schedule-email/khabib-poirier.jpg"
            alt="Khabib vs Poirier on ESPN+"
            width="600"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Img
            src="/upcoming-schedule-email/buynow.jpg"
            alt="buy now"
            width="600"
          />
        </Column>
      </Row>
    </Container>

    <!-- Headline block -->
    <Container class="bg-white text-center">
      <Row>
        <Column>
          <Text class="m-0 px-2.5 pt-10 text-center text-base text-espn-body">
            UFC 242
          </Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Heading :level="2"
            class="m-0 px-2.5 text-center text-[30px] font-bold leading-9 text-espn-body"
          >
            Khabib vs Poirier
          </Heading>
        </Column>
      </Row>
      <Row>
        <Column>
          <Text class="m-0 px-2.5 pb-[5px] text-center text-[15px] leading-[18px] text-espn-body">
            <strong>SAT 9/7, 2:00 PM/ET</strong>
          </Text>
        </Column>
      </Row>
      <Row>
        <Column class="w-full">
          <Hr class="mx-auto w-[5%] border-0 border-t-[5px] border-solid border-espn-gold" />
        </Column>
      </Row>
      <Row>
        <Column>
          <Spacer class="h-2.5 leading-2.5" />
          <Text class="m-0 px-5 py-2.5 text-center text-lg leading-6 text-espn-body">
            Unbeaten lightweight champion Khabib “The Eagle” Nurmagomedov
            collides with interim champ Dustin “The Diamond” Poirier at an early
            start time of 2PM/ET to unify the division straps.<br />
            Khabib has dominated the division, but Poirier is on a streak of
            taking down champions—Max Holloway, Anthony Pettis, Justin Gaethje,
            Eddie Alvarez—and seeks to shock the world and take the belts for
            himself.
          </Text>
          <Text class="m-0 px-5 py-2.5 text-center text-lg leading-6 text-espn-body">
            Save over 30% when you buy UFC 242 and upgrade to an annual plan for
            only <strong>$79.98</strong> (original total value of $119.87).
          </Text>
        </Column>
      </Row>
    </Container>

    <!-- Button -->
    <Container class="bg-white text-center">
      <Row>
        <Column>
          <Spacer class="h-2.5 leading-2.5" />
          <EspnButton :href="buttonLink">{{ buttonCopy }}</EspnButton>
          <Spacer class="h-2.5 leading-2.5" />
        </Column>
      </Row>
    </Container>

    <!-- Stream help + main event -->
    <Container class="bg-white text-center">
      <Row>
        <Column>
          <Text class="m-0 text-center text-xs leading-[19px] text-espn-body">
            <Link :href="streamHelpLink" class="text-xs underline">How to stream on your TV</Link>
          </Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Spacer class="h-2.5 leading-2.5" />
        </Column>
      </Row>
      <Row>
        <Column>
          <Img
            src="/upcoming-schedule-email/main-event.jpg"
            alt="main event"
            width="600"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Spacer class="h-4 leading-4" />
        </Column>
      </Row>
    </Container>

    <EspnFooter />

    <Container>
      <Row>
        <Column>
          <Spacer class="h-4 leading-4" />
        </Column>
      </Row>
    </Container>
  </Layout>
</template>
