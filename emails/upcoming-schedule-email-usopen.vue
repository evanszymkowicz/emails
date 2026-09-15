<script setup lang="ts">
const subject = "Don't miss the US Open on ESPN+"
const preheaderText = 'Stream all the action from your computer.'

const buttonCopy = 'see schedule'
const buttonLink = 'https://tinyurl.com/y6lmejqp'
</script>

<template>
  <Layout
    :title="subject"
    font-family="Roboto"
    google-font="Roboto:wght@400;700"
    class="font-roboto"
  >
    <Preheader>{{ preheaderText }}</Preheader>

    <Container class="bg-white">
      <Row>
        <Column>
          <Spacer class="h-4 leading-4" />
        </Column>
      </Row>
    </Container>

    <!-- Hero -->
    <Container class="bg-white">
      <Row style="font-size: 0; line-height: 0;">
        <Column>
          <Img
            src="/upcoming-schedule-email/espnlogotop.jpg"
            alt="ESPN+"
            width="600"
            class="block w-full"
          />
        </Column>
      </Row>
      <EspnGoldBar />
      <Row style="font-size: 0; line-height: 0;">
        <Column>
          <Img
            src="/upcoming-schedule-email/espn-usopen.jpg"
            alt="US Open on ESPN+"
            width="600"
            class="block w-full"
          />
        </Column>
      </Row>
    </Container>

    <!-- Copy block -->
    <Container class="bg-white text-center">
      <Row>
        <Column>
          <Text class="m-0 px-2.5 pt-2.5 text-center text-lg leading-9 text-espn-body">
            Tennis
          </Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Spacer class="h-2.5 leading-2.5" />
          <Heading :level="3"
            class="m-0 px-2.5 text-center text-[28px] font-bold leading-9 text-espn-body"
          >
            US Open
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
          <Text class="m-0 px-2.5 pb-[5px] text-center text-[15px] leading-[18px] text-espn-body">
            Stream daily coverage of the US Open from the USTA Billie Jean King
            National Tennis Center in New York.<br />
            Get access to exclusive live matches every day, replays on demand,
            and more on ESPN+.
          </Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Spacer class="h-2.5 leading-2.5" />
        </Column>
      </Row>
    </Container>

    <!-- Button -->
    <Container class="bg-white text-center">
      <Row>
        <Column>
          <EspnButton :href="buttonLink">{{ buttonCopy }}</EspnButton>
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
