'use client';

import { Box, Container, Typography, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  HardDrive, 
  Gauge, 
  Laptop, 
  Download, 
  Database,
  ArrowRight,
  LucideIcon
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/constants';

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  HardDrive,
  Gauge,
  Laptop,
  Download,
  Database,
};

// Map service IDs to image filenames
const imageMap: Record<string, string> = {
  'computer-consultancy': 'consultancy.jpg',
  'data-recovery': 'data-recovery.jpg',
  'system-optimization': 'optimization.jpg',
  'laptops-desktops': 'hardware.jpg',
  'installations-upgrades': 'optimization.jpg',
  'backups-restores': 'security.jpg',
};

export default function ServicesGrid() {
  // Show first 6 services on home page
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <Box sx={{ py: { xs: 6, sm: 8, md: 10, lg: 12 }, bgcolor: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 5, md: 6, lg: 8 } }}>
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
              WHAT WE OFFER
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: 'text.primary',
                mb: { xs: 1.5, sm: 2 },
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem', lg: '2.5rem' },
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.6,
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem', lg: '1.25rem' },
              }}
            >
              Comprehensive IT solutions tailored to your needs, from data recovery to system optimization
            </Typography>
          </Box>
        </motion.div>

        {/* Bento Grid Layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' },
            gap: { xs: 2, sm: 2.5, md: 3 },
            mb: { xs: 4, sm: 5, md: 6 },
          }}
        >
          {featuredServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            const imageSrc = imageMap[service.id] || 'data-recovery.jpg';
            
            // Bento grid layout: first card is large (spans 8 cols), others span 4 cols
            const gridColumn = index === 0 
              ? { xs: 'span 1', md: 'span 8' }
              : { xs: 'span 1', md: 'span 4' };
            
            const isLarge = index === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ gridColumn: '1 / -1' }}
              >
                <Box
                  component={Link}
                  href="/services"
                  sx={{
                    position: 'relative',
                    gridColumn: gridColumn,
                    height: isLarge ? { xs: 350, sm: 400, md: 450, lg: 500 } : { xs: 300, sm: 350, md: 400 },
                    borderRadius: { xs: 2, sm: 2.5, md: 3 },
                    overflow: 'hidden',
                    display: 'block',
                    textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                      '& .service-image': {
                        transform: 'scale(1.1)',
                      },
                      '& .service-overlay': {
                        background: 'linear-gradient(to top, rgba(30, 58, 138, 0.95) 0%, rgba(30, 58, 138, 0.7) 50%, rgba(30, 58, 138, 0.3) 100%)',
                      },
                      '& .learn-more': {
                        opacity: 1,
                        transform: 'translateX(0)',
                      },
                    },
                  }}
                >
                  {/* Background Image */}
                  <Box
                    className="service-image"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <Image
                      src={`/images/services/${imageSrc}`}
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    />
                  </Box>

                  {/* Gradient Overlay */}
                  <Box
                    className="service-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(30, 58, 138, 0.9) 0%, rgba(30, 58, 138, 0.6) 50%, rgba(30, 58, 138, 0.2) 100%)',
                      transition: 'background 0.4s ease',
                    }}
                  />

                  {/* Content */}
                  <Box
                    sx={{
                      position: 'relative',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: isLarge ? { xs: 2.5, sm: 3, md: 3.5, lg: 4 } : { xs: 2, sm: 2.5, md: 3 },
                      zIndex: 1,
                    }}
                  >
                    {/* Category Badge */}
                    <Chip
                      label={service.category}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: { xs: 16, sm: 18, md: 20 },
                        right: { xs: 16, sm: 18, md: 20 },
                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: { xs: '0.7rem', sm: '0.72rem', md: '0.75rem' },
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                      }}
                    />

                    {/* Icon */}
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: { xs: 1, sm: 1.25, md: 1.5 },
                        borderRadius: { xs: 1.5, sm: 2 },
                        bgcolor: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        mb: { xs: 1.5, sm: 2 },
                        width: 'fit-content',
                      }}
                    >
                      {Icon && <Icon size={isLarge ? 28 : 24} />}
                    </Box>

                    {/* Title */}
                    <Typography
                      variant={isLarge ? 'h3' : 'h5'}
                      sx={{
                        fontWeight: 700,
                        color: 'white',
                        mb: { xs: 1, sm: 1.25, md: 1.5 },
                        fontSize: isLarge ? { xs: '1.4rem', sm: '1.6rem', md: '2rem', lg: '2.25rem' } : { xs: '1.1rem', sm: '1.2rem', md: '1.35rem', lg: '1.5rem' },
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.6,
                        mb: { xs: 1.5, sm: 2 },
                        fontSize: isLarge ? { xs: '0.85rem', sm: '0.9rem', md: '0.95rem', lg: '1rem' } : { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                        display: '-webkit-box',
                        WebkitLineClamp: isLarge ? 3 : 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Learn More Link */}
                    <Box
                      className="learn-more"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 0.75, sm: 1 },
                        color: 'white',
                        fontWeight: 600,
                        opacity: 0.8,
                        transform: 'translateX(-10px)',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 600, fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.875rem' } }}>
                        Learn More
                      </Typography>
                      <ArrowRight size={16} />
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Button
              component={Link}
              href="/services"
              variant="contained"
              size="large"
              endIcon={<ArrowRight />}
              sx={{
                px: { xs: 3, sm: 4, md: 5 },
                py: { xs: 1.5, sm: 1.65, md: 1.75 },
                fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0 4px 14px rgba(30, 58, 138, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(30, 58, 138, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              View All Services
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
