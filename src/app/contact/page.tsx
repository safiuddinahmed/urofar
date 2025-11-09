'use client';

import { Box, Container, Typography, Paper, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: [
        COMPANY_INFO.address.street,
        `${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.province} ${COMPANY_INFO.address.postalCode}`,
      ],
    },
    {
      icon: Phone,
      title: 'Phone',
      content: [COMPANY_INFO.phone.primary, COMPANY_INFO.phone.secondary],
    },
    {
      icon: Mail,
      title: 'Email',
      content: [COMPANY_INFO.email],
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
              Contact Us
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
              Get in touch with our team for expert IT support and solutions
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Info Grid */}
      <Box sx={{ py: 10 }}>
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
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
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
                      }}
                    >
                      <Icon size={28} />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
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
                  </Paper>
                </motion.div>
              );
            })}
          </Box>

          {/* Contact Form and Map */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  Send us a Message
                </Typography>
                <Box
                  component="form"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Phone"
                    type="tel"
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 2,
                      py: 1.5,
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper sx={{ p: 4, height: '100%' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                  }}
                >
                  Visit Our Office
                </Typography>
                <Box
                  sx={{
                    width: '100%',
                    height: 300,
                    bgcolor: 'grey.200',
                    borderRadius: 2,
                    mb: 3,
                    overflow: 'hidden',
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.8!2d-79.6!3d43.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM2JzAwLjAiTiA3OcKwMzYnMDAuMCJX!5e0!3m2!1sen!2sca!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: 'primary.light',
                    borderRadius: 2,
                    color: 'white',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    PLEASE NOTE
                  </Typography>
                  <Typography variant="body2">
                    There are ample free parking spaces available for our clients
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </>
  );
}
