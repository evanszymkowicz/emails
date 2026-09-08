<script setup lang="ts">
import customerData from '../data/transaction-email/customerData.json'

const orderNumber = customerData.orderNumber
</script>

<template>
  <Layout class="bg-adidas-light-gray">
    <Preheader>
      Your custom Adidas order is almost ready — view your design and order details.
    </Preheader>

    <TopHeader />

    <EmailHeader />

    <Container class="bg-adidas-white hero">
      <Row>
        <Column class="w-full">
          <Spacer class="h-10" />
          <Heading
            as="h1"
            class="font-open-sans text-[42px] font-bold tracking-tight text-adidas-black"
          >
            You're Almost Finished!
          </Heading>
          <Text
            class="inline-block border-b-2 border-adidas-black font-roboto-condensed text-base font-bold uppercase tracking-widest text-adidas-black"
          >
            ORDER NUMBER: {{ orderNumber }}
          </Text>
        </Column>
      </Row>

      <Row>
        <Column class="w-full">
          <Row>
            <Column class="w-6/12 text-center">
              <IconOutlineButton />
              <Img
                src="/transaction-email/product-t-shirt.png"
                alt="T-shirt"
                width="270"
              />
            </Column>
            <Column class="w-6/12 text-center">
              <IconOutlineButton />
              <Img
                src="/transaction-email/product-shoes.png"
                alt="Shoes"
                width="270"
              />
            </Column>
          </Row>
        </Column>
      </Row>

      <Row>
        <Column class="w-full">
          <Text class="text-adidas-black">
            Your custom item is looking great. Everything is almost ready! You will get another email from us when it is completed and ready to be shipped!
          </Text>
          <Spacer class="h-5" />
          <Button
            href="#"
            class="inline-block border-2 border-adidas-black bg-adidas-black px-5 py-4 font-roboto-condensed text-sm font-normal uppercase tracking-widest text-adidas-white no-underline transition-colors duration-200 hover:bg-adidas-white hover:text-adidas-black"
          >
            VIEW YOUR DESIGN ⟶
          </Button>
          <Spacer class="h-5" />
        </Column>
      </Row>
    </Container>

    <Container class="bg-adidas-white help">
      <Row>
        <Column class="w-full">
          <Heading
            as="h2"
            class="font-open-sans text-[30px] font-bold tracking-tight text-adidas-black"
          >
            NEED HELP?
          </Heading>
          <Text class="text-adidas-black">
            If there's something else you'd like to know, please click on one the link below, or contact our <Link href="#" class="text-adidas-black no-underline">Customer Care Team directly</Link>.
          </Text>
          <Spacer class="h-5" />
          <Link
            href="#"
            class="block border-t border-adidas-black/30 py-4 font-roboto-condensed text-lg font-extrabold uppercase tracking-widest text-adidas-black no-underline transition-colors duration-200 hover:bg-adidas-light-gray"
          >
            ORDER TRACKING
          </Link>
          <Link
            href="#"
            class="block border-t border-adidas-black/30 py-4 font-roboto-condensed text-lg font-extrabold uppercase tracking-widest text-adidas-black no-underline transition-colors duration-200 hover:bg-adidas-light-gray"
          >
            YOUR CART
          </Link>
          <Link
            href="#"
            class="block border-t border-adidas-black/30 py-4 font-roboto-condensed text-lg font-extrabold uppercase tracking-widest text-adidas-black no-underline transition-colors duration-200 hover:bg-adidas-light-gray"
          >
            RETURNS & EXCHANGES
          </Link>
          <Link
            href="#"
            class="block border-t border-b border-adidas-black/30 py-4 font-roboto-condensed text-lg font-extrabold uppercase tracking-widest text-adidas-black no-underline transition-colors duration-200 hover:bg-adidas-light-gray"
          >
            FAQ PAGE
          </Link>
          <Spacer class="h-16" />
        </Column>
      </Row>
    </Container>

    <Container class="bg-adidas-white best-of-adidas">
      <Row>
        <Column class="w-full">
          <Heading
            as="h2"
            class="font-open-sans text-[30px] font-bold tracking-tight text-adidas-black"
          >
            SIMILAR TO YOUR ORDER
          </Heading>
        </Column>
      </Row>
      <Row>
        <Column class="w-[24%] sm:w-[48%]">
          <Img
            src="/transaction-email/product-tights.png"
            alt="Climaheat Ultra Tights"
            width="130"
            class="mx-auto"
          />
          <Spacer class="h-2.5" />
          <Text class="text-center text-sm text-adidas-black">
            CLIMAHEAT ULTRA TIGHTS
          </Text>
          <Text class="text-center text-sm text-adidas-black">$69</Text>
        </Column>
        <Column class="w-[24%] sm:w-[48%]">
          <Img
            src="/transaction-email/product-tights.png"
            alt="Climaheat Ultra Tights"
            width="130"
            class="mx-auto"
          />
          <Spacer class="h-2.5" />
          <Text class="text-center text-sm text-adidas-black">
            ADIDAS CLOUDFOAM SHOES
          </Text>
          <Text class="text-center text-sm text-adidas-black">$59</Text>
        </Column>
        <Column class="w-[24%] sm:w-[48%]">
          <Img
            src="/transaction-email/product-tights.png"
            alt="Climaheat Ultra Tights"
            width="130"
            class="mx-auto"
          />
          <Spacer class="h-2.5" />
          <Text class="text-center text-sm text-adidas-black">
            ADIDAS MEN'S 3g TANK
          </Text>
          <Text class="text-center text-sm text-adidas-black">$25</Text>
        </Column>
        <Column class="w-[24%] sm:w-[48%]">
          <Img
            src="/transaction-email/product-tights.png"
            alt="Climaheat Ultra Tights"
            width="130"
            class="mx-auto"
          />
          <Spacer class="h-2.5" />
          <Text class="text-center text-sm text-adidas-black">
            ADIDAS SUPERSTAR SHOES MEN'S
          </Text>
          <Text class="text-center text-sm text-adidas-black">$58</Text>
        </Column>
      </Row>
      <Row>
        <Column>
          <Spacer class="h-16" />
        </Column>
      </Row>
    </Container>

    <Section class="bg-adidas-white border-y border-adidas-black">
      <Container class="world">
        <Row>
          <Column>
            <Spacer class="h-8" />
          </Column>
        </Row>
        <Row>
          <Column class="w-4/12">
            <Img
              src="/transaction-email/icons-adidas-app.png"
              alt="Adidas App"
              width="80"
            />
          </Column>
          <Column class="w-8/12">
            <Heading
              as="h3"
              class="font-open-sans text-[28px] font-bold tracking-tight text-adidas-black"
            >
              <span class="sm:hidden">CONNECT</span> WITH ADIDAS
            </Heading>
            <Link
              href="#"
              class="font-roboto-condensed text-lg font-extrabold uppercase tracking-widest text-adidas-black no-underline"
            >
              DISCOVER
            </Link>
          </Column>
        </Row>
        <Row>
          <Column>
            <Spacer class="h-2.5" />
          </Column>
        </Row>
      </Container>
    </Section>

      <EmailFooter />
  </Layout>
</template>
