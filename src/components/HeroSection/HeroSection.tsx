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
          beamNumber={30}
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                mb: 2,
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
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                mb: 3,
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
                fontSize: { xs: '1rem', sm: '1.25rem' },
                mb: 4,
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
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  component={Link}
                  href="/services"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRight />}
                  sx={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 20px rgba(255,255,255,0.3)',
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
                  startIcon={<Phone />}
                  sx={{
                    borderColor: 'white',
                    borderWidth: 2,
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(10px)',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
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
                mt: 6,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: 2,
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
                  >
                    <Box
                      sx={{
                        backdropFilter: 'blur(10px)',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: 2,
                        p: 2.5,
                        textAlign: 'center',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.15)',
                          boxShadow: '0 12px 40px rgba(255, 255, 255, 0.2)',
                        },
                      }}
                    >
                      <Icon size={32} color="white" style={{ marginBottom: 8 }} />
                      <Typography
                        variant="h3"
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '2rem',
                          mb: 0.5,
                        }}
                      >
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontWeight: 500,
                          fontSize: '0.875rem',
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
                mt: 4,
                pt: 4,
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                gap: { xs: 2, sm: 2, md: 2.5 },
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                justifyContent: 'center',
                alignItems: 'center',
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
                      gap: 0.75,
                      px: { xs: 1.5, md: 2 },
                      py: 0.75,
                      borderRadius: 2,
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(5px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
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
                        fontSize: { xs: '0.8rem', md: '0.85rem' },
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
