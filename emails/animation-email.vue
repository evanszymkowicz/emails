<script setup lang="ts">
const preheaderText =
  'Fire. Spice. Char. There’s nothing quite like the magic that happens when fresh proteins and bold flavors meet open flame.'

const sizzleCopy =
  'Fire. Spice. Char. There’s nothing quite like the magic that happens when fresh proteins and bold flavors meet open flame. Satisfy those grilled-kissed cravings with these protein pairings.'

const secondCopy =
  'Prefer to man your own grill? We respect that. Before you fire things up, grab CAVA Dips + Spreads and add these recipes to your roster.'

const orderLink =
  'https://order.cava.com/stores?utm_campaign=17ff18f480-EMAIL_2019_Summer_CWF_Protein_EC_080619&utm_medium=email&utm_source=CAVA+Communications&utm_term=0_0781726cfb-17ff18f480-195867929'

const grillTipsLink =
  'http://forthosewhosavor.com/tag/grilling-recipes/?utm_source=CAVA+Communications&utm_campaign=17ff18f480-EMAIL_2019_Summer_CWF_Protein_EC_080619&utm_medium=email&utm_term=0_0781726cfb-17ff18f480-195867929'

const instagramLink =
  'https://www.instagram.com/cava/?utm_source=CAVA+Communications&utm_campaign=17ff18f480-EMAIL_2019_Summer_CWF_Protein_EC_080619&utm_medium=email&utm_term=0_0781726cfb-17ff18f480-195867929'

const unsubscribeLink = 'https://cava.us3.list-manage.com/unsubscribe/post'

const socials = [
  {
    href: 'https://shorturl.at/jnuvY',
    alt: 'Facebook',
    src: '/animation-email/fa-facebook.png',
  },
  {
    href: 'https://shorturl.at/aklpJ',
    alt: 'Instagram',
    src: '/animation-email/fa-instagram.png',
  },
  {
    href: 'https://shorturl.at/qBT19',
    alt: 'Twitter',
    src: '/animation-email/fa-twitter.png',
  },
  {
    href: 'https://shorturl.at/bsDGH',
    alt: 'YouTube',
    src: '/animation-email/fa-youtube.png',
  },
]
</script>

<template>
  <Layout title="John, grill school is in session">
    <Preheader>{{ preheaderText }}</Preheader>

    <!-- Top header: "View this email in your browser" bar -->
    <Section class="bg-cava-light-gray">
      <Container class="bg-cava-light-gray">
        <Row>
          <Column class="w-full text-center">
            <Spacer class="h-2.5" />
            <Text class="m-0 font-sans text-xs text-cava-medium-gray">
              <em>You don’t have to say goodbye to these summer flames.</em>
              //
              <Link href="#" class="text-cava-medium-gray underline">
              View this email in your browser
              </Link>
            </Text>
            <Spacer class="h-2.5" />
          </Column>
        </Row>
      </Container>
    </Section>

    <!-- One continuous white container, like the old outer container -->
    <Section class="bg-cava-light-gray">
      <Container class="bg-cava-white">
        <!-- CAVA name banner -->
        <Row style="font-size: 0; line-height: 0;">
          <Column>
            <Img src="/animation-email/cava.jpg" alt="CAVA" width="600" class="block w-full" />
          </Column>
        </Row>

        <!-- Big animated GIF hero -->
        <Row style="font-size: 0; line-height: 0;">
          <Column>
            <Img src="/animation-email/banner-img.gif" alt="Stay fired up" width="600" class="block w-full" />
          </Column>
        </Row>

        <Spacer class="h-[15px]" />

        <!-- Sizzle copy -->
        <Row>
          <Column class="w-full">
            <Text class="m-0 px-[18px] py-2.5 text-center font-cava-serif text-base text-cava-black">
              {{ sizzleCopy }}
            </Text>
            <Spacer class="h-[15px]" />
          </Column>
        </Row>

        <!-- Protein-powered bowls: heading + 3 composite card images -->
        <Row>
          <Column class="w-full">
            <Heading as="h1"
              class="m-0 px-4 pb-5 font-sans text-base font-bold uppercase tracking-[2px] text-cava-black text-center">
              protein-powered bowls:
            </Heading>
          </Column>
        </Row>
        <Row>
          <Column>
            <Img src="/animation-email/seasonal.jpg" alt="Seasonal Roasted Veggies" width="600"
              class="block w-full" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Spacer class="h-2.5" />
            <Img src="/animation-email/meatballs.jpg" alt="Grilled Meatballs + Spicy Lamb Meatballs" width="600"
              class="block w-full" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Spacer class="h-2.5" />
            <Img src="/animation-email/grilled-chicken.jpg" alt="Grilled Chicken" width="600"
              class="block w-full" />
          </Column>
        </Row>

        <Spacer class="h-5" />

        <!-- First CTA: bring the heat -->
        <Row>
          <Column class="w-full text-center">
            <Button :href="orderLink"
              class="inline-block border-2 border-solid border-cava-orange bg-cava-orange px-4 py-2 font-sans text-[15px] font-bold uppercase tracking-[2px] text-cava-black no-underline">
              bring the heat
            </Button>
          </Column>
        </Row>

        <Spacer class="h-5" />
        <Row>
          <Column>
            <Hr class="border-cava-black" />
          </Column>
        </Row>
        <Spacer class="h-2.5" />

        <!-- Second copy block -->
        <Row>
          <Column class="w-full">
            <Text class="m-0 px-[18px] py-2.5 text-center font-cava-serif text-base text-cava-black">
              {{ secondCopy }}
            </Text>
          </Column>
        </Row>

        <!-- Second CTA: see our grill tips -->
        <Row>
          <Column class="w-full text-center">
            <Spacer class="h-2.5" />
            <Button :href="grillTipsLink"
              class="inline-block border-2 border-solid border-cava-orange bg-cava-orange px-4 py-2 font-sans text-[15px] font-bold uppercase tracking-[2px] text-cava-black no-underline">
              see our grill tips
            </Button>
            <Spacer class="h-5" />
          </Column>
        </Row>

        <!-- Footer: hashtag GIF strip + social row + copy + address -->
        <Row>
          <Column>
            <Link :href="instagramLink">
            <Img src="/animation-email/cookwithfire.gif" alt="#cookwithfire" width="600" class="block w-full" />
            </Link>
          </Column>
        </Row>
        <Row>
          <Column class="w-full text-center">
            <Spacer class="h-2.5" />
            <Link v-for="social in socials" :key="social.alt" :href="social.href" target="_blank"
              class="mx-2.5 inline-block">
            <Img :src="social.src" :alt="social.alt" width="24" />
            </Link>
          </Column>
        </Row>
        <Spacer class="h-6" />
        <Row>
          <Column class="w-full">
            <Text class="m-0 text-center font-sans text-xs italic text-cava-black">
              Copyright © 2019 CAVA, All rights reserved.
            </Text>
            <Spacer class="h-2.5" />
            <Text class="m-0 text-center font-sans text-xs not-italic text-cava-black">
              You’re receiving this email because you’ve communicated with CAVA before.<br />
              To ensure delivery to your inbox, add hello@cava.com to your address book.
            </Text>
            <Spacer class="h-5" />
          </Column>
        </Row>
        <Row>
          <Column class="w-full">
            <Text class="m-0 text-center font-sans text-xs text-cava-black">
              <strong>CAVA</strong><br />
              702 H Street NW<br />
              Second Floor<br />
              Washington, DC 20001<br />
              <Link :href="unsubscribeLink" class="text-xs underline text-cava-black">
              Unsubscribe
              </Link>
            </Text>
            <Spacer class="h-4" />
          </Column>
        </Row>
      </Container>
    </Section>

    <Container>
      <Spacer class="h-4" />
    </Container>
  </Layout>
</template>
