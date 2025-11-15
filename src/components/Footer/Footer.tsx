'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Box, Container, Typography, Divider } from '@mui/material';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION_ITEMS } from '@/data/constants';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1.5fr 1.5fr' }, gap: 4 }}>
          {/* Company Info */}
          <Box>
            <Image
              src="/UROFAR-logo/default.png"
              alt="UROFAR Logo"
              width={135}
              height={45}
              style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
            <Typography variant="body2" sx={{ mt: 2, mb: 1, color: 'grey.400' }}>
              {COMPANY_INFO.tagline}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.500' }}>
              {COMPANY_INFO.subtitle}
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <Phone size={18} style={{ marginTop: 2, color: '#0891b2' }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    <a href={`tel:${COMPANY_INFO.phone.primary.replace(/\./g, '-')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {COMPANY_INFO.phone.primary}
                    </a>
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    <a href={`tel:${COMPANY_INFO.phone.secondary.replace(/\./g, '-')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {COMPANY_INFO.phone.secondary}
                    </a>
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Mail size={18} style={{ color: '#0891b2' }} />
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {COMPANY_INFO.email}
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Address & Hours */}
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Visit Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <MapPin size={18} style={{ marginTop: 2, color: '#0891b2' }} />
                <Typography variant="body2" sx={{ color: 'grey.400' }}>
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.unit}<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.province} {COMPANY_INFO.address.postalCode}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <Clock size={18} style={{ marginTop: 2, color: '#0891b2' }} />
                <Box>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {COMPANY_INFO.hours.weekdays}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {COMPANY_INFO.hours.weekend}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: 'grey.800' }} />

        {/* Bottom Bar */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'grey.500', textAlign: { xs: 'center', sm: 'left' } }}>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, justifyContent: { xs: 'center', sm: 'flex-end' } }}>
            <Typography variant="body2" sx={{ color: 'grey.500' }}>
              Powered by
            </Typography>
            <a
              href="https://www.snow-peak.ca/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Image
                src="/images/snowpeak-logo-white.svg"
                alt="SnowPeak"
                width={140}
                height={35}
                style={{ objectFit: 'contain', marginLeft: '-12px' }}
              />
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
