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
          position: 'relative',
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          overflow: 'hidden',
        }}
      >
        {/* Gradient Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #6366f1 100%)',
            opacity: 0.9,
          }}
        />

        {/* Decorative Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-10%',
            left: '-5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                textAlign: 'center',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(to right, #ffffff, #e0e7ff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              About {COMPANY_INFO.name}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                opacity: 0.95,
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              {COMPANY_INFO.tagline}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Mission Statement */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'white' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  mb: 1,
                  display: 'block',
                }}
              >
                OUR PURPOSE
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                Mission Statement
              </Typography>
            </Box>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #6366f1 100%)',
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: 'text.primary',
                  mb: 3,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 500,
                }}
              >
                UROFAR Computer and Data Recovery Solutions&apos; mission is to provide the highest quality and cost effective services to its clients in order to help them resolve their issues.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  fontSize: { xs: '0.95rem', md: '1rem' },
                }}
              >
                We, at UC&DRS;, will strive each day to help our clients in their computer related issues through honest, reliable, efficient and professional services. We will follow the highest moral, ethical and legal standards by providing the maximum economical and efficient solutions to our client&apos;s requirements.
              </Typography>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      {/* Values Grid */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  mb: 1,
                  display: 'block',
                }}
              >
                WHAT DRIVES US
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                }}
              >
                Our Core Values
              </Typography>
            </Box>
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ display: 'flex', height: '100%' }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 32px rgba(30, 58, 138, 0.15)',
                        borderColor: 'primary.main',
                        '& .value-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                          bgcolor: 'primary.dark',
                        },
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
                          className="value-icon"
                          sx={{
                            display: 'flex',
                            p: 1.5,
                            borderRadius: 2,
                            bgcolor: 'primary.main',
                            color: 'white',
                            mr: 2,
                            transition: 'all 0.3s ease',
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
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Owner Info */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: 1.5,
                  mb: 1,
                  display: 'block',
                }}
              >
                LEADERSHIP
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                }}
              >
                Meet Our Owner
              </Typography>
            </Box>

            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 4, md: 6 },
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'grey.200',
                maxWidth: '900px',
                mx: 'auto',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 12px 32px rgba(30, 58, 138, 0.1)',
                  borderColor: 'primary.main',
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 4,
                  alignItems: { xs: 'center', md: 'flex-start' },
                }}
              >
                {/* Avatar Placeholder */}
                <Box
                  sx={{
                    flexShrink: 0,
                    width: { xs: 150, md: 180 },
                    height: { xs: 150, md: 180 },
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: { xs: '3rem', md: '4rem' },
                    fontWeight: 700,
                    border: '4px solid',
                    borderColor: 'primary.light',
                    boxShadow: '0 8px 24px rgba(30, 58, 138, 0.2)',
                  }}
                >
                  {COMPANY_INFO.owner.name.split(' ').map(n => n[0]).join('')}
                </Box>

                {/* Content */}
                <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      color: 'primary.main',
                    }}
                  >
                    {COMPANY_INFO.owner.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.primary',
                      mb: 1,
                      fontWeight: 600,
                    }}
                  >
                    {COMPANY_INFO.owner.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'primary.main',
                      mb: 3,
                      fontWeight: 500,
                    }}
                  >
                    {COMPANY_INFO.owner.specialization}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: 'text.secondary',
                      fontSize: { xs: '0.95rem', md: '1rem' },
                    }}
                  >
                    With years of expertise in computer consultancy and technical support, our owner brings the highest level of professionalism to serve our clients. Holding multiple industry certifications including Microsoft and CompTIA credentials, we ensure quality service for all your IT needs.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Container>
      </Box>

      <CallToAction />
    </>
  );
}
