<template>
  <Container class="bg-adidas-white top-header">
    <Row>
      <Column class="w-1/2 sm:w-full">
        <Spacer class="h-1" />
        <Text class="m-0 text-sm font-light text-adidas-black">
          See more
        </Text>
      </Column>
      <Column class="inline-block w-1/2 text-right sm:hidden">
        <Spacer class="h-1" />
        <Link href="#" class="text-sm font-light text-adidas-black">
          View this email online
        </Link>
      </Column>
      <Column class="hidden sm:inline-block sm:w-full">
        <Link href="#" class="text-sm font-light text-adidas-black">
          View this email online+
        </Link>
        <Spacer class="h-4" />
      </Column>
    </Row>
  </Container>
</template>
