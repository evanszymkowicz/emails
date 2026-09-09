<script setup lang="ts">
const buttonLink = '#'
const redeemCopy = 'Redeem Now'
const rsvpLink = 'https://www.glensgardenmarket.com/'
</script>

<template>
  <Layout
    class="font-libre-franklin"
    google-font="Libre Franklin:wght@400;700"
    font-family="Libre Franklin"
    title="What's New this August"
  >
    <Preheader>
      In the neighborhood? Come see us!
    </Preheader>

    <!-- Header -->
    <Container class="bg-white text-center">
      <Row>
        <Column>
          <Spacer class="h-2.5" />
        </Column>
      </Row>
      <Row>
        <Column class="text-center p-4">
          <Link href="#">
            <Img
              src="/restaurant-emails/glensgardenmarket.jpg"
              alt="Glen's Garden Market"
              width="50"
            />
          </Link>
        </Column>
      </Row>
    </Container>

    <!-- Hero image -->
    <Container class="text-center">
      <Row>
        <Column>
          <Img
            src="/restaurant-emails/glens-specials.png"
            alt="Come see our August specials"
            width="590"
          />
          <Spacer class="h-5" />
        </Column>
      </Row>
    </Container>

    <!-- Buttons / offer -->
    <Container class="bg-white text-center">
      <Row>
        <Column>
          <h4 class="text-center m-0 text-[24px] font-bold text-glens-black" style="text-align: center">
            Beat the heat with a special offer from us!
          </h4>
        </Column>
      </Row>
      <Row>
        <Column>
          <p class="text-center m-0 text-sm text-glens-black" style="text-align: center">
            Print the code &ldquo;EMAIL5&rdquo; for $5 off next time you check out.
          </p>
        </Column>
      </Row>
      <Spacer class="h-2.5" />
      <Row>
        <Column class="text-center">
          <Button
            :href="buttonLink"
            variant="primary"
            size="large"
            class="px-16"
          >
            {{ redeemCopy }}
          </Button>
        </Column>
      </Row>
      <Row>
        <Column>
          <Spacer class="h-1.5" />
          <p class="text-center m-0 text-[10px] text-glens-black" style="text-align: center">
            <small>Must have a minimum of $25<br />*Expires August 29</small>
          </p>
        </Column>
      </Row>
      <Spacer class="h-5" />
    </Container>

    <!-- Events -->
    <Container class="bg-glens-cream text-center">
      <Spacer class="h-1.5" />
      <Row>
        <Column>
          <h3 class="text-center m-0 text-[28px] font-bold text-glens-green" style="text-align: center">
            Upcoming Events:
          </h3>
        </Column>
      </Row>
      <Spacer class="h-5" />
      <Row>
        <Column>
          <Img
            src="/restaurant-emails/thursdays.png"
            alt="Thursday Night Cookout"
            width="590"
          />
        </Column>
      </Row>
      <Spacer class="h-5" />
      <Row>
        <Column>
          <p class="text-center m-0 text-sm text-glens-black" style="text-align: center">
            Cookout season is here and we&rsquo;re celebrating every Thursday night,
            weather permitting, on our patio! Mark your calendars and plan to come by
            after work for sliders (veggie or meat), hot dogs and craft beer!
          </p>
        </Column>
      </Row>
      <Spacer class="h-5" />
      <Row>
        <Column>
          <Link :href="rsvpLink" class="text-center block no-underline" style="text-align: center">
            <h4 class="text-center m-0 text-[24px] font-bold text-glens-black uppercase" style="text-align: center">
              Click HERE to RSVP!
            </h4>
          </Link>
        </Column>
      </Row>
      <Spacer class="h-5" />
    </Container>

    <!-- Footer -->
    <Container class="bg-white text-center">
      <Row>
        <Column>
          <Spacer class="h-12" />
        </Column>
      </Row>
      <Row>
        <Column style="text-align: center">
          <Link href="#">
            <Img
              src="/restaurant-emails/glensgardenmarket.jpg"
              alt="Glen's Garden Market"
              width="100"
            />
          </Link>
          <p class="text-center block text-sm text-glens-black" style="text-align: center">
            Address and Hours:
          </p>
          <p class="text-center m-0 text-[10px] text-glens-black" style="text-align: center">
            2001 S St NW<br />
            Washington, DC 20009
          </p>
          <p class="text-center m-0 text-[10px] text-glens-black" style="text-align: center">
            Mon-Fri : 8:00 am &ndash; 10:00 pm<br />
            Sat-Sun: 9:00 am &ndash; 9:00 pm
          </p>
          <p class="text-center m-0 text-[10px] text-glens-black" style="text-align: center">
            (202) 588-5698
          </p>
        </Column>
      </Row>
    </Container>

    <Container class="bg-white text-center">
      <Spacer class="h-2.5" />
      <Row>
        <Column style="text-align: center">
          <Link
            href="https://www.glensgardenmarket.com/"
            class="text-[10px] uppercase tracking-wide text-glens-medium-gray no-underline"
            style="text-align: center"
          >
            &copy; 2019 Glen's Garden Market
          </Link>
        </Column>
      </Row>
      <Spacer class="h-2.5" />
    </Container>
  </Layout>
</template>
