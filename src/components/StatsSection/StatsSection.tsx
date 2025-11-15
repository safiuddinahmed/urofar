'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, Briefcase, LucideIcon } from 'lucide-react';
import { STATS } from '@/data/constants';

const iconMap: Record<string, LucideIcon> = {
  Calendar,
  Award,
  Users,
  Briefcase,
};

export default function StatsSection() {
  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 4,
          }}
        >
          {STATS.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 2,
                    bgcolor: 'white',
                    width: '100%',
                    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      color: 'white',
                      mb: 2,
                    }}
                  >
                    <Icon size={32} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
