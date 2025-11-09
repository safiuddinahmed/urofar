'use client';

import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
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
  LucideIcon
} from 'lucide-react';
import { SERVICES } from '@/data/constants';
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

export default function ServicesPage() {
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
              Our Services
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
              Comprehensive IT solutions and technical support for businesses and individuals
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 3,
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            p: 2,
                            borderRadius: 2,
                            bgcolor: 'primary.main',
                            color: 'white',
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={32} />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 600,
                              mb: 2,
                              color: 'text.primary',
                            }}
                          >
                            {service.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: 'text.secondary',
                              lineHeight: 1.7,
                            }}
                          >
                            {service.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>

      <CallToAction />
    </>
  );
}
