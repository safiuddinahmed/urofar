'use client';

import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
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
import Link from 'next/link';
import { SERVICES } from '@/data/constants';

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

export default function ServicesGrid() {
  // Show first 6 services on home page
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <Box sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Comprehensive IT solutions tailored to your needs
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {featuredServices.map((service, index) => {
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
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
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
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={Link}
            href="/services"
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            View All Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
