<script setup lang="ts">
import tmobileData from '../data/tmobile-email/tmobileData.json'

const offerDetails = tmobileData.offerDetails
const dataPoints = tmobileData.dataPoints
</script>

<template>
  <Layout
    class="bg-tmobile-light-gray font-noto-sans"
    bodyClass="bg-tmobile-light-gray"
    google-font="Noto+Sans:wght@400;700"
    font-family="Noto Sans"
    title="T-mobile MONEY...more than Just a Bank"
  >
    <Preheader>
      Not another bank. A better one — T-Mobile MONEY with
      {{ dataPoints.qualifyingAPY }}% APY and no account fees.
    </Preheader>

    <Container class="bg-tmobile-light-gray">
      <Spacer class="h-4" />
    </Container>

    <TmobileHeader />

    <TmobileHero
      :percent="offerDetails.percent"
      :atms="offerDetails.ATMs"
      :signup-link="dataPoints.link"
    />

    <TmobileMoreMoney
      :apy="dataPoints.APY"
      :qualifying-apy="dataPoints.qualifyingAPY"
      :cash-back="dataPoints.cashBack"
      :after-apy="dataPoints.afterAPY"
      :graph-src="dataPoints.image"
      :details-link="dataPoints.link"
    />

    <TmobileGetStarted :signup-link="offerDetails.link" />

    <TmobilePrivacy />

    <TmobileFooter />

    <Container class="bg-tmobile-light-gray">
      <Spacer class="h-4" />
    </Container>
  </Layout>
</template>
