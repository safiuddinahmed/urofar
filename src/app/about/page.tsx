'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';
import CallToAction from '@/components/CallToAction/CallToAction';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide the highest quality and cost effective services to our clients in order to help them resolve their issues.',
    },
    {
      icon: Heart,
      title: 'Our Commitment',
      description: 'We strive each day to help our clients in their computer related issues through honest, reliable, efficient and professional services.',
    },
    {
      icon: Award,
      title: 'Our Standards',
      description: 'We follow the highest moral, ethical and legal standards by providing the maximum economical and efficient solutions to our clients requirements.',
    },
    {
      icon: Users,
      title: 'Our Clients',
      description: 'We serve both business and home users with the same level of dedication, ensuring minimal disruption to their computing needs.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                textAlign: 'center',
              }}
            >
              About {COMPANY_INFO.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                opacity: 0.9,
              }}
            >
              {COMPANY_INFO.tagline}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Mission Statement */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 6,
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  textAlign: 'center',
                  color: 'primary.main',
                }}
              >
                MISSION STATEMENT
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 3,
                }}
              >
                UROFAR Computer and Data Recovery Solutions&apos; mission is to provide the highest quality and cost effective services to its clients in order to help them resolve their issues.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                We, at UC&DRS;, will strive each day to help our clients in their computer related issues through honest, reliable, efficient and professional services. We will follow the highest moral, ethical and legal standards by providing the maximum economical and efficient solutions to our client&apos;s requirements.
              </Typography>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      {/* Values Grid */}
      <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 6,
                textAlign: 'center',
              }}
            >
              Our Core Values
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Box key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      sx={{
                        p: 4,
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            p: 1.5,
                            borderRadius: 2,
                            bgcolor: 'primary.main',
                            color: 'white',
                            mr: 2,
                          }}
                        >
                          <Icon size={28} />
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                          }}
                        >
                          {value.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                        }}
                      >
                        {value.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Owner Info */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paper sx={{ p: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  textAlign: 'center',
                }}
              >
                Meet Our Owner
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: 'primary.main',
                }}
              >
                {COMPANY_INFO.owner.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  mb: 1,
                }}
              >
                {COMPANY_INFO.owner.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  mb: 3,
                }}
              >
                {COMPANY_INFO.owner.specialization}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                With years of expertise in computer consultancy and technical support, our owner brings the highest level of professionalism to serve our clients. Holding multiple industry certifications including Microsoft and CompTIA credentials, we ensure quality service for all your IT needs.
              </Typography>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      <CallToAction />
    </>
  );
}
