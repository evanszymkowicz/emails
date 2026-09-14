<script setup lang="ts">
const subject = "It's here...."
const preheaderText = 'Step up your streaming game with Disney+, Hulu and ESPN+.'

const buttonCopy = 'bundle now'
const buttonLink =
  'https://www.disneyplus.com/welcome/disney-hulu-espn-bundle?ex_cid=dss-espnplus-email-DSS-ESPNPlus-Sport-WBK-20191218_SB3_V2WBK-USA-Subscribers-NA-Newsletter-Email-Bundle_Now-NA-EPLUS_WBK_B-20191218-sfmc-687--offer_button'
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
            src="/upcoming-schedule-email/espn-noadditional.jpg"
            alt="ESPN+"
            width="600"
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Img
            src="/upcoming-schedule-email/disney+.jpg"
            alt="Disney+, Hulu and ESPN+ bundle"
            width="600"
          />
        </Column>
      </Row>
    </Container>

    <!-- Copy block -->
    <Container class="bg-white text-center">
      <Row>
        <Column>
          <Spacer class="h-10 leading-10" />
          <Heading :level="2"
            class="m-0 px-2.5 text-center text-[30px] font-bold leading-9 text-espn-body"
          >
            The Time is Now
          </Heading>
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
            Step up your streaming game with Disney+, Hulu, and ESPN+.<br />
            Get the best stories, series, and sports for a total of $12.99/mo.
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
          <Spacer class="h-4 leading-4" />
        </Column>
      </Row>
    </Container>

    <EspnFooter />
  </Layout>
</template>
