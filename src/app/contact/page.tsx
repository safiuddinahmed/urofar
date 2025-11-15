'use client';

import { Box, Container, Typography, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';

export default function ContactPage() {
  const fullAddress = `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.unit}, ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.province} ${COMPANY_INFO.address.postalCode}`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: [COMPANY_INFO.phone.primary, COMPANY_INFO.phone.secondary],
      action: {
        label: 'Call Now',
        href: `tel:${COMPANY_INFO.phone.primary}`,
        icon: Phone,
      },
    },
    {
      icon: MapPin,
      title: 'Address',
      content: [
        `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.unit}`,
        `${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.province} ${COMPANY_INFO.address.postalCode}`,
      ],
      action: {
        label: 'Get Directions',
        href: mapsDirectionsUrl,
        icon: Navigation,
        external: true,
      },
    },
    {
      icon: Mail,
      title: 'Email',
      content: [COMPANY_INFO.email],
      action: {
        label: 'Send Email',
        href: `mailto:${COMPANY_INFO.email}`,
        icon: Mail,
      },
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: [
        'Weekdays (Mon-Fri): 11:00 AM - 7:00 PM',
        'Weekend (Sat-Sun): By appointment',
      ],
    },
  ];

  const locationFeatures = [
    {
      icon: MapPin,
      title: 'Easy to Find',
      description: 'Located on Dundas Street East',
    },
    {
      icon: Navigation,
      title: 'Free Parking',
      description: 'Ample parking space available',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Open weekdays & by appointment',
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
                fontWeight: 800,
                mb: 2,
                textAlign: 'center',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(to right, #ffffff, #e0e7ff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Visit Our Office
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
                opacity: 0.95,
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Located in Mississauga, we&apos;re here to help with all your IT needs
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Info Grid */}
      <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: 3,
              mb: 8,
            }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const ActionIcon = info.action?.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      bgcolor: 'white',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'inline-flex',
                        p: 2,
                        borderRadius: 2,
                        bgcolor: 'primary.main',
                        color: 'white',
                        mb: 2,
                        mx: 'auto',
                      }}
                    >
                      <Icon size={28} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {info.title}
                    </Typography>
                    {Array.isArray(info.content) ? (
                      info.content.map((line, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.6,
                            mb: 0.5,
                          }}
                        >
                          {line}
                        </Typography>
                      ))
                    ) : (
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                        }}
                      >
                        {info.content}
                      </Typography>
                    )}
                    {info.action && (
                      <Box sx={{ mt: 'auto', pt: 3 }}>
                        <Button
                          component="a"
                          href={info.action.href}
                          target={info.action.external ? '_blank' : undefined}
                          rel={info.action.external ? 'noopener noreferrer' : undefined}
                          variant="contained"
                          fullWidth
                          startIcon={ActionIcon && <ActionIcon size={18} />}
                          sx={{
                            py: 1.5,
                            borderRadius: 2,
                            textTransform: 'none',
                            fontWeight: 600,
                            bgcolor: 'primary.main',
                            '&:hover': {
                              bgcolor: 'primary.dark',
                              transform: 'translateY(-2px)',
                              boxShadow: 3,
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {info.action.label}
                        </Button>
                      </Box>
                    )}
                  </Paper>
                </motion.div>
              );
            })}
          </Box>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paper sx={{ p: 4, bgcolor: 'white' }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  textAlign: 'center',
                }}
              >
                Find Us
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: 300, md: 450 },
                  borderRadius: 2,
                  mb: 4,
                  overflow: 'hidden',
                  boxShadow: 2,
                }}
              >
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="UROFAR Computer Solutions Location"
                />
              </Box>

              {/* Location Features */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                  gap: 3,
                  mb: 3,
                }}
              >
                {locationFeatures.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <Box sx={{ textAlign: 'center' }}>
                        <Box
                          sx={{
                            display: 'inline-flex',
                            p: 2,
                            borderRadius: '50%',
                            bgcolor: 'primary.light',
                            color: 'primary.main',
                            mb: 2,
                          }}
                        >
                          <FeatureIcon size={24} />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                    </motion.div>
                  );
                })}
              </Box>

              {/* Parking Note */}
              <Box
                sx={{
                  p: 3,
                  bgcolor: 'primary.light',
                  borderRadius: 2,
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: 'primary.dark',
                  }}
                >
                  PLEASE NOTE
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'primary.dark',
                  }}
                >
                  Ample free parking spaces available for our clients
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}
