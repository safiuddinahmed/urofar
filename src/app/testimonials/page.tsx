'use client';

import { Box, Container, Typography, Breadcrumbs, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import { ChevronRight, Award } from 'lucide-react';
import Link from 'next/link';
import TestimonialsGallery from '@/components/TestimonialsGallery';
import CallToAction from '@/components/CallToAction/CallToAction';

export default function TestimonialsPage() {
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
            {/* Breadcrumbs */}
            <Breadcrumbs
              separator={<ChevronRight size={16} />}
              sx={{
                mb: 3,
                '& .MuiBreadcrumbs-separator': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            >
              <MuiLink
                component={Link}
                href="/"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'white',
                    textDecoration: 'underline',
                  },
                }}
              >
                Home
              </MuiLink>
              <Typography sx={{ color: 'white', fontWeight: 600 }}>
                Testimonials
              </Typography>
            </Breadcrumbs>

            {/* Title */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(to right, #ffffff, #e0e7ff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Client Testimonials
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h5"
              sx={{
                maxWidth: '800px',
                opacity: 0.95,
                lineHeight: 1.6,
                mb: 4,
                fontWeight: 400,
              }}
            >
              Recognition, appreciation letters, and certifications from valued clients and organizations
            </Typography>

            {/* Stats */}
            <Box
              sx={{
                display: 'flex',
                gap: 4,
                flexWrap: 'wrap',
                mt: 4,
              }}
            >
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                  23
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Letters & Certificates
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                  17+
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Years of Excellence
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                  100%
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Client Satisfaction
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box sx={{ py: 10, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          {/* Section Header */}
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
                PROVEN EXCELLENCE
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                Recognition & Appreciation
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '700px',
                  mx: 'auto',
                  fontWeight: 400,
                }}
              >
                Click on any image to view it in full screen. Browse through our collection of testimonials from satisfied clients, partners, and institutions.
              </Typography>
            </Box>
          </motion.div>

          {/* Gallery */}
          <TestimonialsGallery />
        </Container>
      </Box>

      <CallToAction />
    </>
  );
}
