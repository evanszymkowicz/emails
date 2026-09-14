<script setup lang="ts">
const articles = [
  {
    title: 'why frequent maintenances are essential for secure heroku data services →',
    body: 'Learn how we roll out maintenances and updates to Heroku Postgres, Heroku Redis, and Apache Kafka on Heroku, so that your data stays safe, all with minimal disruption to your applications and users.',
  },
  {
    title: '[Technical Session] Going Fast Without Breaking Things →',
    body: 'Heroku Product Manager DeVaris Brown and CLI Engineer Philipe Navarro show you how to get your startup’s product and engineering practices set up right from day one.',
  },
  {
    title: '[Technical Session] The Life-Changing Magic of Tidying Active Record Allocations →',
    body: 'Heroku Ruby Engineer Richard Schneeman shows you how to use memory profiling to keep only those Active Record objects that are necessary, useful, clean, and performant, so that your application sparks joy.',
  },
  {
    title: '[Life Blog] Equality Through Accessibility →',
    body: 'Learn why designing for accessibility is important to us, and why we encourage everyone to incorporate these design principles into their software design process.',
  },
  {
    title: '[Engineering Blog] Designing for Accessibility: Contrast Ratio →',
    body: 'Read about our design and development process as we dive into contrast ratio as an aspect of advancing accessibility in the Heroku product.',
  },
  {
    title: 'Do More With, and Get More From, Your Data on Heroku →',
    body: 'Learn more about building data-driven apps with Heroku Postgres, Heroku Redis, and Apache Kafka on Heroku.',
  },
  {
    title: '[Webinar] Build Apps that Customers Love with Heroku + Salesforce →',
    body: 'ReadHeroku syncs seamlessly with Salesforce, making it easier to build personalized apps using CRM data. Join our webinar to learn more, with special guest Cory Haber of Furnished Quarters, on',
    date: 'Wednesday, August 28th, 10am PDT.',
  },
]

const secondaryStories = [
  'Trolls and Bots are Disrupting Social Media — Here’s how AI can Stop Them →',
  'Identifying Trolls and Bots on Reddit with Machine Learning →',
  'The Surprising Portability of Heroku Apps →',
  '[Podcast] Attacking and Defending Kubernetes with Heroku’s Ian Coldwater on the Kubernetes Podcast from Google →',
]

const gaAddons = [
  {
    title: 'ParrotQA →',
    body: 'Run your tests automatically every time you deploy to Heroku.',
  },
  {
    title: 'Flight Formation →',
    body: 'Automatically schedule, scale, and restart your application.',
  },
]

const betaAddons = [
  {
    title: 'Advanced Scheduler →',
    body: 'Use a reliable and powerful task scheduling as a service.',
  },
  {
    title: 'My V02 →',
    body: 'Enable employees to sync timesheets and expenses to a Salesforce org.',
  },
]

const builtOn = {
  title: 'Dubsmash Chose to Re-Launch and Scale Its Service on Heroku →',
  body: 'Learn why Dubsmash renewed its investment in Heroku and build a highly scalable second generation video sharing service on the platform.',
}

const events = [
  {
    title: 'DevOpsDays →',
    dates: 'August 27-28 - Chicago, IL',
    body: 'Heroku is a proud sponsor of DevOpsDays Chicago. The conference brings development, operations, QA, InfoSec, management, and leadership together to discuss the culture and tools that help make better organizations and products. The 2019 event will be the sixth time we have sponsored DevOpsDays Chicago, and it should be bigger and better than ever before!',
  },
  {
    title: 'PostGresOpen →',
    dates: 'September 11-13 Orlando, FL',
    body: 'Heroku is a proud sponsor of DevOpsDays Chicago. The conference brings development, operations, QA, InfoSec, management, and leadership together to discuss the culture and tools that help make better organizations and products. The 2019 event will be the sixth time we have sponsored DevOpsDays Chicago, and it should be bigger and better than ever before!',
  },
  {
    title: 'DjangoCon →',
    dates: 'September 22-27 - San Diego, CA',
    body: 'Heroku is a proud sponsor of DevOpsDays Chicago. The conference brings development, operations, QA, InfoSec, management, and leadership together to discuss the culture and tools that help make better organizations and products. The 2019 event will be the sixth time we have sponsored DevOpsDays Chicago, and it should be bigger and better than ever before!',
  },
  {
    title: 'Strata Data Conference →',
    dates: 'September 23-26 - New York, NY',
    body: 'Swing by the Heroku booth to meet with the Heroku data team and grab thoughtfully-designed Heroku swag. Strata Data Conference is where cutting-edge science and new business fundamentals intersect and merge. It’s a deep dive into emerging techniques and technologies. You’ll dissect case studies, develop new skills through in-depth tutorials, share emerging best practices in data science, and imagine the future.',
  },
]

const podcastBody =
  'Zach Feldman tells us how Getaway has built fault-tolerant and responsive IoT systems that run in places without Internet and cellular connectivity.'

const podcasts = [
  '26. Connectivity in the Woods (July 23, 2019) →',
  '27. Behind the Brand with Heroku’s Lead Designer (July 30, 2019) →',
  '28. Effective Leadership Development (August 6, 2019) →',
  '29.Technology and Art (August 13, 2019) →',
  '30. The Infasctructure Behind Salesforce’s Chatbots (August 20, 2019) →',
]

const socialsTop = [
  { href: '#', alt: 'RSS feed', src: '/augnewsletter-email/rssicon.png' },
  { href: '#', alt: 'Stitcher', src: '/augnewsletter-email/stitcher.png' },
  { href: '#', alt: 'Twitter', src: '/augnewsletter-email/twittericon.png' },
  { href: '#', alt: 'Instagram', src: '/augnewsletter-email/instagramicon.png' },
]

const socialsBottom = [
  { href: '#', alt: 'Facebook', src: '/augnewsletter-email/fbicon.png' },
  { href: '#', alt: 'GitHub', src: '/augnewsletter-email/giticon.png' },
  { href: '#', alt: 'LinkedIn', src: '/augnewsletter-email/linkdnicon.png' },
]
</script>

<template>
  <Layout class="bg-heroku-purple" body-class="bg-heroku-purple"
    title="Securing Data, Going Fast, and the Magic of Tidying Active Record">
    <Preheader>News from Heroku</Preheader>

    <!-- Header: purple band with logo + issue line -->
    <Section class="bg-heroku-purple">
      <Container class="bg-heroku-purple">
        <Row>
          <Column class="w-full">
            <Spacer class="h-4" />
            <Text class="m-0 text-right font-sans text-[11px] text-white">
              View in Browser
            </Text>
            <Spacer class="h-4" />
          </Column>
        </Row>
        <Row>
          <Column class="w-full text-center">
            <Img src="/augnewsletter-email/herokulogo.png" alt="Heroku Logo Main" width="59"
              class="mx-auto block" />
            <Spacer class="h-4" />
            <Text
              class="m-0 text-center font-sans text-base font-bold uppercase tracking-[6px] text-white">
              august 2019 newsletter
            </Text>
            <Spacer class="h-4" />
          </Column>
        </Row>
      </Container>
    </Section>

    <!-- White rounded content card -->
    <Section class="bg-heroku-purple">
      <Container class="rounded-md bg-white">
        <Section class="px-[35px] pb-[35px] pt-[30px] sm:px-5">
        <!-- Headlines -->
        <SectionTitle>headlines</SectionTitle>
        <Row v-for="article in articles" :key="article.title">
          <Column class="w-full">
            <Spacer class="h-4" />
            <Link href="#"
              class="font-sans text-[20px] capitalize leading-snug text-heroku-blue no-underline">
            {{ article.title }}
            </Link>
            <Text class="m-0 font-sans text-sm text-heroku-ink">
              {{ article.body }}
              <em v-if="article.date">{{ article.date }}</em>
            </Text>
          </Column>
        </Row>

        <!-- You may also enjoy -->
        <SectionTitle>you may also enjoy</SectionTitle>
        <Row v-for="story in secondaryStories" :key="story">
          <Column class="w-full">
            <Spacer class="h-4" />
            <Text class="m-0 font-sans text-sm text-heroku-blue">
              {{ story }}
            </Text>
          </Column>
        </Row>

        <!-- GA add-ons -->
        <SectionTitle>ADD-ON MARKETPLACE <br /> GENERALLY AVAILABLE ADD-ONS</SectionTitle>
        <Row v-for="addon in gaAddons" :key="addon.title">
          <Column class="w-full">
            <Spacer class="h-4" />
            <Link href="#"
              class="font-sans text-[20px] capitalize leading-snug text-heroku-blue no-underline">
            {{ addon.title }}
            </Link>
            <Text class="m-0 font-sans text-sm text-heroku-ink">
              {{ addon.body }}
            </Text>
          </Column>
        </Row>

        <!-- Beta add-ons -->
        <SectionTitle>ADD-ON MARKETPLACE <br /> BETA ADD-ONS</SectionTitle>
        <Row v-for="addon in betaAddons" :key="addon.title">
          <Column class="w-full">
            <Spacer class="h-4" />
            <Link href="#"
              class="font-sans text-[20px] capitalize leading-snug text-heroku-blue no-underline">
            {{ addon.title }}
            </Link>
            <Text class="m-0 font-sans text-sm text-heroku-ink">
              {{ addon.body }}
            </Text>
          </Column>
        </Row>

        <!-- Built on Heroku -->
        <SectionTitle>built on heroku</SectionTitle>
        <Row>
          <Column class="w-full">
            <Spacer class="h-4" />
            <Link href="#"
              class="font-sans text-[20px] capitalize leading-snug text-heroku-blue no-underline">
            {{ builtOn.title }}
            </Link>
            <Text class="m-0 font-sans text-sm text-heroku-ink">
              {{ builtOn.body }}
            </Text>
          </Column>
        </Row>

        <!-- Upcoming events -->
        <SectionTitle>upcoming events</SectionTitle>
        <Row v-for="event in events" :key="event.title">
          <Column class="w-full">
            <Spacer class="h-4" />
            <Link href="#"
              class="font-sans text-[20px] capitalize leading-snug text-heroku-blue no-underline">
            {{ event.title }}
            </Link>
            <Text class="m-0 font-sans text-sm font-bold text-heroku-ink">
              {{ event.dates }}
            </Text>
            <Text class="m-0 font-sans text-sm text-heroku-ink">
              {{ event.body }}
            </Text>
          </Column>
        </Row>

        <!-- Code[ish] podcasts -->
        <SectionTitle>CODE[ISH] PODCASTS</SectionTitle>
        <Row v-for="podcast in podcasts" :key="podcast">
          <Column class="w-full">
            <Spacer class="h-4" />
            <Link href="#"
              class="font-sans text-[20px] capitalize leading-snug text-heroku-blue no-underline">
            {{ podcast }}
            </Link>
            <Text class="m-0 font-sans text-sm text-heroku-ink">
              {{ podcastBody }}
              <Link href="#" class="text-sm text-heroku-blue no-underline">Listen →</Link>
            </Text>
          </Column>
        </Row>

        <Spacer class="h-4" />
        <Row>
          <Column class="w-full">
            <Hr class="border-heroku-rule" />
          </Column>
        </Row>

        <!-- Hiring -->
        <Row>
          <Column class="w-full">
            <Spacer class="h-4" />
            <Link href="#" class="font-sans text-sm text-heroku-blue no-underline">
              We’re Hiring →
            </Link>
            <Text class="m-0 font-sans text-sm text-heroku-ink">
              Join a team that’s transforming how apps are built.
              <Link href="#" class="text-sm text-heroku-blue no-underline">Come work with us →</Link>
            </Text>
          </Column>
        </Row>

        <Spacer class="h-4" />
        <Row>
          <Column class="w-full">
            <Hr class="border-heroku-rule" />
          </Column>
        </Row>

        <!-- Survey -->
        <Row>
          <Column class="w-full">
            <Spacer class="h-4" />
            <Text class="m-0 font-sans text-sm text-heroku-ink">
              Take a couple of minutes and help us make the newsletter more valuable for you.
              <Link href="#" class="text-sm text-heroku-blue no-underline">Complete this short survey →</Link>
            </Text>
          </Column>
        </Row>
        </Section>
      </Container>
    </Section>

    <Section class="bg-heroku-purple">
      <Container class="bg-heroku-purple">
        <Row>
          <Column class="w-full">
            <div style="height: 40px; line-height: 40px">&nbsp;</div>
          </Column>
        </Row>
      </Container>
    </Section>

    <!-- Footer -->
    <Section class="bg-heroku-purple">
      <Container class="bg-heroku-purple">
        <Row>
          <Column class="w-full text-center">
            <Img src="/augnewsletter-email/herokusfsmall.png" alt="Salesforce Heroku" width="120"
              class="mx-auto block" />
            <Spacer class="h-2.5" />
            <Text class="m-0 text-center font-sans text-[11px] text-heroku-lavender">
              Salesforce<br />
              415 Mission Street, 3rd Floor<br />
              San Francisco, CA 94105<br />
              <Link href="#" class="text-[11px] text-heroku-lavender underline">Update your email
              preferences</Link><br />
              <Link href="#" class="text-[11px] text-heroku-lavender underline">Privacy</Link>
            </Text>
            <Spacer class="h-2.5" />
            <Link v-for="social in socialsTop" :key="social.alt" :href="social.href"
              class="mx-1 inline-block">
            <Img :src="social.src" :alt="social.alt" width="16" />
            </Link>
            <Spacer class="h-2.5" />
            <Link v-for="social in socialsBottom" :key="social.alt" :href="social.href"
              class="mx-1 inline-block">
            <Img :src="social.src" :alt="social.alt" width="16" />
            </Link>
          </Column>
        </Row>
        <Spacer class="h-4" />
      </Container>
    </Section>
  </Layout>
</template>
