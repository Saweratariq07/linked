import { Container, Grid, Box } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCard from '../components/feature-card.js';
import Performance from '../assets/feature/performance.svg';
import Partnership from '../assets/feature/partnership.svg';
import Subscription from '../assets/feature/subscription.svg';
import Support from '../assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: ' Earn Steady Passive Income',
    text:
      'Turn your LinkedIn profile into a revenue stream. With our service, you receive monthly payments without having to put in extra work.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: ' Safe & Secure',
    text:
      'We prioritize your privacy and account security. Our rigorous verification process ensures only trusted businesses rent your profile, while advanced measures protect your details.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partnership deal',
    title: '  Effortless Management',
    text:
      'Once your account is listed, we handle everything—from matching you with reputable clients to managing rental transactions. You just enjoy the benefits.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Fast & Simple Onboarding',
    text:
      'Our streamlined application process means you can start earning in just a few days. We’re here to support you every step of the way.',
  },
];

export default function Feature() {
  return (
    <Box sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Why Rent Out "
          title="Your LinkedIn Profile to Us?
"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
