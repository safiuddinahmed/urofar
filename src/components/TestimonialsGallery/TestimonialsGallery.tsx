'use client';

import { useState } from 'react';
import { Box, Dialog, IconButton, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  filename: string;
  title: string;
}

const testimonials: Testimonial[] = [
  { id: 1, filename: '01  Appreciation from Paul Hill.jpg', title: 'Appreciation from Paul Hill' },
  { id: 2, filename: '02  Reference Letter from G4S IT Director.jpg', title: 'Reference Letter from G4S IT Director' },
  { id: 3, filename: '03  Appreciation Letter from Ted Sullivan.jpg', title: 'Appreciation Letter from Ted Sullivan' },
  { id: 4, filename: '04  G4S Aviation BC - One Year Completion.jpg', title: 'G4S Aviation BC - One Year Completion' },
  { id: 5, filename: '05  Thanks from G4S Executives - At Contract End.jpg', title: 'Thanks from G4S Executives - At Contract End' },
  { id: 6, filename: '06  Recommendations of LinkedIn - Burger King Resources.jpg', title: 'Recommendations of LinkedIn - Burger King Resources' },
  { id: 7, filename: '07  Appreciation Letter from Burger King.jpg', title: 'Appreciation Letter from Burger King' },
  { id: 8, filename: '08  Congratulate on doing Volunteer Job - From MPP.jpg', title: 'Congratulate on doing Volunteer Job - From MPP' },
  { id: 9, filename: '09  Work Experience from Barbara Janik.jpg', title: 'Work Experience from Barbara Janik' },
  { id: 10, filename: '10  Work Performance Letter from Nitin Dhora.jpg', title: 'Work Performance Letter from Nitin Dhora' },
  { id: 11, filename: '11 Appreciation from Senior Director - PepsiCo.jpg', title: 'Appreciation from Senior Director - PepsiCo' },
  { id: 12, filename: '12 Appreciation for LinkedIn.jpg', title: 'Appreciation for LinkedIn' },
  { id: 13, filename: '13  Recognition from Cambridge Who\'s Who_page-0001.jpg', title: 'Recognition from Cambridge Who\'s Who' },
  { id: 14, filename: '14  Best Wishes from MPP Mississauga_page-0001.jpg', title: 'Best Wishes from MPP Mississauga' },
  { id: 15, filename: '15 Successfully Completion of Internship Program from Career Bridge_page-0001.jpg', title: 'Successfully Completion of Internship Program from Career Bridge' },
  { id: 16, filename: '16 Completion of Ontario Self-Employment Benefit Program Completion_page-0001.jpg', title: 'Completion of Ontario Self-Employment Benefit Program' },
  { id: 17, filename: '17 Letter from Job Skills_page-0001.jpg', title: 'Letter from Job Skills' },
  { id: 18, filename: '18 MCSE Diploma from triOS College_page-0001.jpg', title: 'MCSE Diploma from triOS College' },
  { id: 19, filename: '19 MCSE Diploma from triOS College_page-0001.jpg', title: 'MCSE Diploma from triOS College' },
  { id: 20, filename: '20 Official Transcript of Grades - MCSE_page-0001.jpg', title: 'Official Transcript of Grades - MCSE' },
  { id: 21, filename: '21 Letter from triOS College_page-0001.jpg', title: 'Letter from triOS College' },
  { id: 22, filename: '22 Certificate of Completion - Dimensions of Data Privacy_page-0001.jpg', title: 'Certificate of Completion - Dimensions of Data Privacy' },
  { id: 23, filename: '23 Certificate of Information Security_page-0001.jpg', title: 'Certificate of Information Security' },
];

export default function TestimonialsGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % testimonials.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
          gap: 3,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Box
              onClick={() => handleOpen(index)}
              sx={{
                position: 'relative',
                height: 350,
                borderRadius: 2,
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  '& .testimonial-overlay': {
                    opacity: 1,
                  },
                },
              }}
            >
              <Image
                src={`/images/testimonials/${testimonial.filename}`}
                alt={testimonial.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <Box
                className="testimonial-overlay"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                  p: 2,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    lineHeight: 1.4,
                  }}
                >
                  {testimonial.title}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Fullscreen Modal */}
      <Dialog
        open={selectedIndex !== null}
        onClose={handleClose}
        maxWidth={false}
        fullScreen
        PaperProps={{
          sx: {
            bgcolor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
        onKeyDown={handleKeyDown}
      >
        <AnimatePresence mode="wait">
          {selectedIndex !== null && (
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* Close Button */}
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                  },
                  zIndex: 2,
                }}
              >
                <X size={24} />
              </IconButton>

              {/* Previous Button */}
              <IconButton
                onClick={handlePrevious}
                sx={{
                  position: 'absolute',
                  left: 20,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                  },
                  zIndex: 2,
                }}
              >
                <ChevronLeft size={32} />
              </IconButton>

              {/* Next Button */}
              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: 20,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                  },
                  zIndex: 2,
                }}
              >
                <ChevronRight size={32} />
              </IconButton>

              {/* Image */}
              <Box
                sx={{
                  width: '90%',
                  height: '90%',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    maxWidth: '1200px',
                  }}
                >
                  <Image
                    src={`/images/testimonials/${testimonials[selectedIndex].filename}`}
                    alt={testimonials[selectedIndex].title}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="90vw"
                    priority
                  />
                </Box>

                {/* Title and Counter */}
                <Box
                  sx={{
                    mt: 2,
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {testimonials[selectedIndex].title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    {selectedIndex + 1} / {testimonials.length}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Dialog>
    </>
  );
}
