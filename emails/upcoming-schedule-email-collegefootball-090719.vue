<script setup lang="ts">
const subject = "Today's slate of games"
const preheaderText = 'Upcoming college football games on ESPN+'

const button1Copy = 'see full schedule'
const button1Link = 'https://tinyurl.com/y6tqpnow'
const button2Copy = 'stream now'
const button2Link = 'https://tinyurl.com/yy8jshxs'

const schedule = [
  {
    home: 'Coastal Carolina vs Kansas',
    time: 'SAT 9/7, 7:00 PM/ET',
    awayLogo: '/upcoming-schedule-email/cc-espn.png',
    awayAlt: 'Coastal Carolina',
    homeLogo: '/upcoming-schedule-email/ku-espn.png',
    homeAlt: 'Kansas Jayhawks',
  },
  {
    home: 'Charlotte vs Appalachian State',
    time: 'SAT 9/7, 3:30 PM/ET',
    awayLogo: '/upcoming-schedule-email/charlotte-espn.png',
    awayAlt: 'Charlotte',
    homeLogo: '/upcoming-schedule-email/appstate-espn.png',
    homeAlt: 'Appalachian State',
  },
  {
    home: 'North Dakota vs North Dakota State',
    time: 'SAT 9/7, 3:30 PM/ET',
    awayLogo: '/upcoming-schedule-email/nd-espn.png',
    awayAlt: 'North Dakota',
    homeLogo: '/upcoming-schedule-email/ndsu-espn.png',
    homeAlt: 'North Dakota State University',
  },
  {
    home: 'Western Kentucky vs Florida International',
    time: 'SAT 9/7, 3:30 PM/ET',
    awayLogo: '/upcoming-schedule-email/westkentucky-espn.png',
    awayAlt: 'Western Kentucky',
    homeLogo: '/upcoming-schedule-email/fiu-espn.png',
    homeAlt: 'Florida International',
  },
]
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
      <Row>
        <Column>
          <Img
            src="/upcoming-schedule-email/espn-collegefootball.jpg"
            alt="Upcoming college football on ESPN+"
            width="600"
          />
        </Column>
      </Row>
      <EspnGoldBar />
      <Row>
        <Column>
          <Img
            src="/upcoming-schedule-email/osu-espn.png"
            alt="McNeese vs Oklahoma St."
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
            Big 12 Now on ESPN+
          </Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Heading :level="2"
            class="m-0 px-2.5 text-center text-[30px] font-bold leading-9 text-espn-body"
          >
            McNeese vs Oklahoma State
          </Heading>
        </Column>
      </Row>
      <Row>
        <Column>
          <Text class="m-0 px-2.5 pb-[5px] text-center text-[15px] leading-[18px] text-espn-body">
            <strong>SAT 9/7, 7:00 PM/ET</strong>
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
          <Text class="m-0 px-5 py-2.5 text-center text-lg leading-6 text-espn-body">
            The Oklahoma State Cowboys take on McNeese in their home opener
            tonight in Stillwater.<br />
            Streaming live exclusively on Big 12 Now on ESPN+.
          </Text>
        </Column>
      </Row>
    </Container>

    <!-- Button 1 -->
    <Container class="bg-white text-center">
      <Row>
        <Column>
          <Spacer class="h-2.5 leading-2.5" />
          <EspnButton :href="button1Link">{{ button1Copy }}</EspnButton>
          <Spacer class="h-2.5 leading-2.5" />
        </Column>
      </Row>
    </Container>

    <!-- Week 2 schedule highlights -->
    <Container class="bg-white text-center">
      <Row>
        <Column>
          <Spacer class="h-10 leading-10" />
          <Heading :level="2"
            class="m-0 px-2.5 text-center text-[30px] font-bold leading-9 text-espn-body"
          >
            Week 2 Schedule Highlights
          </Heading>
          <Spacer class="h-10 leading-10" />
        </Column>
      </Row>

      <template v-for="(game, i) in schedule" :key="game.home">
        <Row>
          <Column class="w-[22%] align-middle">
            <Img :src="game.awayLogo" :alt="game.awayAlt" width="106" style="width: 100%; max-width: 106px; height: auto;" />
          </Column>
          <Column class="w-[50%] align-middle">
            <Text class="m-0 px-5 py-2.5 text-center text-lg leading-6 text-espn-body">
              {{ game.home }}
            </Text>
            <Text class="m-0 px-2.5 pb-[5px] text-center text-[15px] leading-[18px] text-espn-body">
              <strong>{{ game.time }}</strong>
            </Text>
          </Column>
          <Column class="w-[22%] align-middle">
            <Img :src="game.homeLogo" :alt="game.homeAlt" width="106" style="width: 100%; max-width: 106px; height: auto;" />
          </Column>
        </Row>
        <Row v-if="i < schedule.length - 1">
          <Column class="w-full">
            <Hr class="mx-auto w-[15%] border-0 border-t-[5px] border-solid border-espn-gold" />
          </Column>
        </Row>
      </template>

      <Row>
        <Column>
          <Spacer class="h-1.5 leading-1.5" />
        </Column>
      </Row>
    </Container>

    <!-- Les Miles episode banner -->
    <Container class="bg-white">
      <Row>
        <Column>
          <Img
            src="/upcoming-schedule-email/lesmiles-espn.png"
            alt="Coach Les Miles and the Kansas Jayhawks"
            width="600"
          />
        </Column>
      </Row>
    </Container>

    <!-- Episode block -->
    <Container class="bg-white text-center">
      <Row>
        <Column>
          <Spacer class="h-1.5 leading-1.5" />
          <Text class="m-0 px-2.5 text-center text-base text-espn-body">
            ESPN+ Exclusive
          </Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Spacer class="h-2.5 leading-2.5" />
          <Heading :level="2"
            class="m-0 px-2.5 text-center text-[30px] font-bold leading-9 text-espn-body"
          >
            Episode 5: The First Test
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
          <Text class="m-0 px-5 py-2.5 text-center text-lg leading-6 text-espn-body">
            Coach Miles and the Jayhawks prepare for their first game together
            as they host Indiana State.<br />
            Kansas' newly designated starting quarterback gets put to the test
            late in the fourth quarter with the game on the line.<br />
            Streaming exclusively on Big 12 Now on ESPN+.
          </Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Spacer class="h-2.5 leading-2.5" />
        </Column>
      </Row>
    </Container>

    <!-- Button 2 -->
    <Container class="bg-white text-center">
      <Row>
        <Column>
          <EspnButton :href="button2Link">{{ button2Copy }}</EspnButton>
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
