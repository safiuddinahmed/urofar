'use client';

import { Box, Container, Typography, Breadcrumbs, Link as MuiLink, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  HardDrive, 
  Gauge, 
  Laptop, 
  Download, 
  Database,
  Search,
  Wrench,
  MonitorSmartphone,
  Network,
  Shield,
  Lock,
  Phone,
  Printer,
  Home,
  ChevronRight,
  LucideIcon
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES, COMPANY_INFO } from '@/data/constants';
import CallToAction from '@/components/CallToAction/CallToAction';

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  HardDrive,
  Gauge,
  Laptop,
  Download,
  Database,
  Search,
  Wrench,
  MonitorSmartphone,
  Network,
  Shield,
  Lock,
  Phone,
  Printer,
  Home,
};

// Map service IDs to image filenames
const imageMap: Record<string, string> = {
  'computer-consultancy': 'consultancy.jpg',
  'data-recovery': 'data-recovery.jpg',
  'system-optimization': 'optimization.jpg',
  'laptops-desktops': 'hardware.jpg',
  'installations-upgrades': 'optimization.jpg',
  'backups-restores': 'backup.jpg',
  'diagnosis-troubleshooting': 'diagnosis.jpg',
  'hardware-software-support': 'support.jpg',
  'remote-support': 'remote-support.jpg',
  'networking': 'networking.jpg',
  'preventive-maintenance': 'maintenance.jpg',
  'encryption-security': 'security.jpg',
  'voip-telephony': 'voip.jpg',
  'printer-configuration': 'printer.jpg',
  'home-it-solutions': 'home-it.jpg',
};

export default function ServicesPage() {
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
                Services
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
              Our Services
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
              Comprehensive IT solutions and technical support for businesses and individuals
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
                  15+
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Services Offered
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                  2,000+
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Clients Served
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                  17+
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Years Experience
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
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
                COMPLETE IT SOLUTIONS
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                All Our Services
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
                From data recovery to network solutions, we provide expert IT services tailored to your needs
              </Typography>
            </Box>
          </motion.div>

          {/* Services Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              const imageSrc = imageMap[service.id] || 'data-recovery.jpg';

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: 400,
                      borderRadius: 3,
                      overflow: 'hidden',
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
                        sizes="(max-width: 768px) 100vw, 33vw"
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
                        p: 3,
                        zIndex: 1,
                      }}
                    >
                      {/* Category Badge */}
                      <Chip
                        label={service.category}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 20,
                          right: 20,
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                        }}
                      />

                      {/* Icon */}
                      <Box
                        sx={{
                          display: 'inline-flex',
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: 'rgba(255, 255, 255, 0.15)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: 'white',
                          mb: 2,
                          width: 'fit-content',
                        }}
                      >
                        {Icon && <Icon size={28} />}
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'white',
                          mb: 1.5,
                          fontSize: '1.25rem',
                        }}
                      >
                        {service.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: 1.6,
                          fontSize: '0.9rem',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: 10, bgcolor: 'white' }}>
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
                WHY CHOOSE US
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                Certified Excellence
              </Typography>
            </Box>

            {/* Certifications Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 3,
              }}
            >
              {COMPANY_INFO.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: '#f8fafc',
                      border: '2px solid',
                      borderColor: 'primary.main',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(30, 58, 138, 0.15)',
                        bgcolor: 'primary.main',
                        '& .cert-text': {
                          color: 'white',
                        },
                      },
                    }}
                  >
                    <Typography
                      className="cert-text"
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {cert}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>

            {/* Features */}
            <Box sx={{ mt: 8 }}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                  gap: 3,
                }}
              >
                {COMPANY_INFO.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        bgcolor: 'white',
                        border: '1px solid',
                        borderColor: 'grey.200',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      <CallToAction />
    </>
  );
}
