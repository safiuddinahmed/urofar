'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Award, Calendar, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/constants';
import Beams from '@/components/Beams';
import { useState, useEffect } from 'react';

// Animated counter component
function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '70vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        background: '#1e3a8a',
        overflow: 'hidden',
      }}
    >
      {/* Beams background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      >
        <Beams 
          beamWidth={3.5}
          beamHeight={30}
          beamNumber={24}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={2}
          scale={0.2}
          rotation={30}
        />
      </Box>

      {/* Subtle overlay for depth */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(30, 64, 175, 0.15) 0%, transparent 50%)',
          opacity: 0.8,
        }}
      />

      {/* Vignette effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.2) 100%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 4, sm: 6, md: 8 } }}>
        <Box sx={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              sx={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #ffffff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                mb: { xs: 1, sm: 1.5, md: 2 },
                lineHeight: 1.2,
                textShadow: '0 0 40px rgba(255,255,255,0.5)',
              }}
            >
              {COMPANY_INFO.name}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h2"
              sx={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 600,
                fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
                mb: { xs: 1.5, sm: 2, md: 3 },
              }}
            >
              {COMPANY_INFO.tagline}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                fontSize: { xs: '0.85rem', sm: '1rem', md: '1.15rem', lg: '1.25rem' },
                mb: { xs: 2, sm: 3, md: 4 },
                lineHeight: 1.6,
              }}
            >
              {COMPANY_INFO.description}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Box sx={{ display: 'flex', gap: { xs: 1, sm: 1.5, md: 2 }, flexWrap: 'nowrap' }}>
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  href="/services"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRight size={18} />}
                  sx={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                    color: 'primary.main',
                    px: { xs: 2, sm: 3, md: 4 },
                    py: { xs: 1, sm: 1.25, md: 1.5 },
                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' },
                    fontWeight: 600,
                    boxShadow: '0 4px 20px rgba(255,255,255,0.3)',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
                      boxShadow: '0 10px 30px rgba(255,255,255,0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Services
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component="a"
                  href={`tel:${COMPANY_INFO.phone.primary.replace(/\./g, '-')}`}
                  variant="outlined"
                  size="large"
                  startIcon={<Phone size={18} />}
                  sx={{
                    borderColor: 'white',
                    borderWidth: 2,
                    color: 'white',
                    px: { xs: 2, sm: 3, md: 4 },
                    py: { xs: 1, sm: 1.25, md: 1.5 },
                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.1rem' },
                    fontWeight: 600,
                    backdropFilter: 'blur(10px)',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Call Now
                </Button>
              </motion.div>
            </Box>
          </motion.div>

          {/* Glassmorphism Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Box
              sx={{
                mt: { xs: 3, sm: 4, md: 5, lg: 6 },
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: { xs: 1, sm: 1.5, md: 2 },
                alignItems: 'stretch',
              }}
            >
              {[
                { icon: Calendar, value: 15, suffix: '+', label: 'Years Experience' },
                { icon: Award, value: 6, suffix: '+', label: 'Certifications' },
                { icon: Users, value: 500, suffix: '+', label: 'Happy Clients' },
                { icon: CheckCircle, value: 15, suffix: '+', label: 'Services' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    style={{ height: '100%' }}
                  >
                    <Box
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backdropFilter: 'blur(10px)',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: { xs: 1.5, sm: 2 },
                        p: { xs: 1.5, sm: 2, md: 2.5 },
                        textAlign: 'center',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.15)',
                          boxShadow: '0 12px 40px rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    >
                      <Icon size={24} color="white" style={{ marginBottom: 6 }} />
                      <Typography
                        variant="h3"
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' },
                          mb: 0.25,
                        }}
                      >
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontWeight: 500,
                          fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.8rem', lg: '0.875rem' },
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                );
              })}
            </Box>
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <Box
              sx={{
                mt: { xs: 2, sm: 3, md: 4 },
                pt: { xs: 2, sm: 3, md: 4 },
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                gap: { xs: 0.75, sm: 1.5, md: 2, lg: 2.5 },
                flexWrap: 'nowrap',
                justifyContent: { xs: 'flex-start', md: 'center' },
                alignItems: 'center',
                overflowX: { xs: 'auto', md: 'visible' },
                mx: { xs: -2, sm: -3, md: 0 },
                px: { xs: 2, sm: 3, md: 0 },
                '&::-webkit-scrollbar': {
                  height: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '2px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '2px',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.4)',
                  },
                },
              }}
            >
              {COMPANY_INFO.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: { xs: 0.5, sm: 0.6, md: 0.75 },
                      px: { xs: 1.25, sm: 1.5, md: 1.75, lg: 2 },
                      py: { xs: 0.6, sm: 0.7, md: 0.75 },
                      borderRadius: { xs: 1.5, sm: 2 },
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(5px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 5, sm: 5, md: 6 },
                        height: { xs: 5, sm: 5, md: 6 },
                        borderRadius: '50%',
                        bgcolor: '#10b981',
                        boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)',
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.95)',
                        fontWeight: 500,
                        fontSize: { xs: '0.75rem', sm: '0.78rem', md: '0.8rem', lg: '0.85rem' },
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
