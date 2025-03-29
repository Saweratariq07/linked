import { Box, Container, Grid } from 'theme-ui';
import { motion } from 'framer-motion';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Apply',
    title: 'Apply',
    text: 'Fill out a simple form and submit your LinkedIn profile for verification.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Verification',
    title: 'Verification',
    text: 'Our team will review your profile to ensure eligibility and security.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Get Paid',
    title: 'Get Paid',
    text: 'Once approved, start receiving monthly payments hassle-free!',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'No Hidden Fees',
    title: 'No Hidden Fees',
    text: 'There are no risks or hidden charges – just an easy way to earn money!',
  },
];

export default function KeyFeature() {
  return (
    <Box sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        {/* About Us Section */}
        <Box sx={styles.aboutUs}>
          <SectionHeader slogan="About Us" title="Your Trusted LinkedIn Leasing Partner" />
          <p>At [Your Company Name], we specialize in secure and ethical LinkedIn profile rentals. 
          We have helped hundreds of professionals earn passive income by safely renting out their LinkedIn accounts.</p>
        </Box>

        {/* Why Choose Us Section */}
        <Box sx={styles.whyChoose}>
          <SectionHeader slogan="Why Choose Us?" title="Trusted & Secure LinkedIn Leasing" />
          <ul>
            <li>✔ Trusted by Professionals Worldwide – Hundreds of users have successfully earned with us.</li>
            <li>✔ Guaranteed Monthly Payments – You receive consistent and timely earnings.</li>
            <li>✔ 100% Confidential & Secure – We ensure ethical usage and keep your data safe.</li>
            <li>✔ Fast Approvals & Hassle-Free Process – No complex steps, just easy earnings.</li>
          </ul>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginTop: '20px' }}>
            <a href="#apply" sx={styles.button}>Join Now</a>
          </motion.div>
        </Box>

        {/* How It Works Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <SectionHeader slogan="How Does It Work?" title="Simple & Secure LinkedIn Account Leasing" />
        </motion.div>

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <motion.div key={item.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: item.id * 0.2 }}>
              <FeatureCardColumn
                src={item.imgSrc}
                alt={item.altText}
                title={item.title}
                text={item.text}
              />
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)'],
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#e63946',
      transform: 'scale(1.05)',
    },
  },
  aboutUs: {
    backgroundColor: '#fff',
    padding: '30px 20px',
    textAlign: 'center',
    marginBottom: '40px',
  },
  whyChoose: {
    backgroundColor: '#f8f9fa',
    padding: '50px 20px',
    borderRadius: '12px',
    textAlign: 'center',
    marginBottom: '40px',
    ul: {
      listStyleType: 'none',
      padding: 0,
      margin: '20px 0',
      li: {
        fontSize: '18px',
        marginBottom: '10px',
      },
    },
  },
};
