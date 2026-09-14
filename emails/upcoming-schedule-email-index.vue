<script setup lang="ts">
const subject = 'My Email Templates'
const preheaderText = 'ESPN+ upcoming schedule emails'

const links = [
  {
    href: 'upcoming-schedule-email-usopen.html',
    copy: 'Watch the U.S. Open on ESPN+',
  },
  {
    href: 'upcoming-schedule-email-collegefootball-090719.html',
    copy: 'Upcoming College Football',
  },
  {
    href: 'upcoming-schedule-email-ufc242.html',
    copy: 'Khabib vs Poirier is tomorrow at 2PM/ET!',
  },
  {
    href: 'upcoming-schedule-email-disneyplus.html',
    copy: 'Disney Bundle: Get Disney+ Now',
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

    <Container class="bg-white text-center">
      <Row>
        <Column>
          <Spacer class="h-6 leading-6" />
        </Column>
      </Row>
      <Row v-for="link in links" :key="link.href">
        <Column>
          <Link :href="link.href" class="block py-2.5 text-center text-base text-espn-body no-underline">
            {{ link.copy }}
          </Link>
        </Column>
      </Row>
      <Row>
        <Column>
          <Spacer class="h-4 leading-4" />
        </Column>
      </Row>
    </Container>

    <Container class="bg-white text-center">
      <Row>
        <Column>
          <Text class="m-0 text-center text-sm text-espn-body">
            © 2019 Evan Szymkowicz
          </Text>
          <Spacer class="h-4 leading-4" />
        </Column>
      </Row>
    </Container>
  </Layout>
</template>
