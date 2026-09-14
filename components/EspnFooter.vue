<script setup lang="ts">
import espnData from '../data/upcoming-schedule-email/espnData.json'

const email = espnData.email

const optOutLink =
  'https://privacychoices.thewaltdisneycompany.com/unsubscribe?ee=mgLwiTAsmx8AAAFbgtVQzAGGKq4dHt%2FcEpsPcsf2%2BgSMqXwd%2FlzIXtky%2FSZmcMbChnQSExHSS7uU808NSEdMWI4%3D&pe=RVNQTitfTA%3D%3D&langPref=en-US&sender=true&source=Welcome&clientId=DTSS-EPC.KMS-PROD&campaignId=DSS-ESPNPlus-Live_Event-Engagement-20190826_SPOTLIGHT_USOPEN-USA-Tennis-NA-Spotlight-Email-SEE_SCHEDULE-NA&espData='
</script>

<template>
  <Container class="bg-espn-navy text-center">
    <Row>
      <Column>
        <Spacer class="h-8 leading-8" />
      </Column>
    </Row>
    <Row>
      <Column class="text-center">
        <Img
          src="/upcoming-schedule-email/espnlogo-small.png"
          alt="ESPN"
          width="148"
        />
      </Column>
    </Row>
    <Row>
      <Column>
        <Spacer class="h-4 leading-4" />
      </Column>
    </Row>
    <Row>
      <Column>
        <Text class="m-0 text-center text-[11px] leading-5 text-espn-footer-text">
          This email was sent to: {{ email }}.
        </Text>
        <Text class="m-0 text-center text-[11px] leading-5 text-espn-footer-text">
          Please do not reply to this email as this address is not monitored.
        </Text>
      </Column>
    </Row>
    <Row>
      <Column>
        <Spacer class="h-4 leading-4" />
      </Column>
    </Row>
    <Row>
      <Column>
        <Text class="m-0 text-center text-[11px] leading-5 text-espn-footer-text">
          This email contains an advertisement from: BAMTech, LLC,
        </Text>
        <Text class="m-0 text-center text-[11px] leading-5 text-espn-footer-text">
          75 Ninth Avenue, 6th Floor, New York NY 10011.
        </Text>
        <Text class="m-0 text-center text-[11px] leading-5 text-espn-footer-text">
          ESPN+ is operated by BAMTech, LLC, an affiliate of Disney Streaming
          Services, LLC
        </Text>
      </Column>
    </Row>
    <Row>
      <Column>
        <Spacer class="h-4 leading-4" />
      </Column>
    </Row>
    <Row>
      <Column>
        <Text class="m-0 text-center text-[11px] leading-5 text-espn-footer-text">
          If you do not want to receive future marketing email messages from
          ESPN+, please
          <Link :href="optOutLink" class="font-extrabold text-espn-footer-text underline">opt-out</Link>
          here.
        </Text>
        <Text class="m-0 text-center text-[11px] leading-5 text-espn-footer-text">
          ©2019 ESPN. All Rights Reserved.
        </Text>
      </Column>
    </Row>
    <Row>
      <Column>
        <Spacer class="h-8 leading-8" />
      </Column>
    </Row>
  </Container>
</template>
