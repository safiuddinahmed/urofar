'use client'

import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material'
import { Package } from 'lucide-react'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface ProductCardProps {
  title: string
  description: string
  price: number
  quantity: number
  image: SanityImageSource
}

export default function ProductCard({ title, description, price, quantity, image }: ProductCardProps) {
  const imageUrl = image ? urlFor(image).width(600).height(400).url() : '/placeholder.jpg'
  const inStock = quantity > 0

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: 'white',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '1px solid',
        borderColor: 'grey.100',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
          borderColor: 'primary.main',
          '& .product-image': {
            transform: 'scale(1.08)',
          },
          '& .product-overlay': {
            opacity: 1,
          },
          '& .price-tag': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: 'relative',
          paddingTop: '66.67%', // 3:2 aspect ratio
          overflow: 'hidden',
          bgcolor: 'grey.100',
        }}
      >
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          className="product-image"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />

        {/* Stock Badge */}
        <Chip
          icon={<Package size={14} />}
          label={inStock ? 'In Stock' : 'Out of Stock'}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            bgcolor: inStock ? 'success.main' : 'error.main',
            color: 'white',
            fontWeight: 600,
            fontSize: '0.7rem',
            height: 24,
            '& .MuiChip-icon': {
              color: 'white',
              marginLeft: '6px',
            },
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        />
      </Box>

      {/* Content */}
      <CardContent 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column',
          p: 3,
          '&:last-child': {
            pb: 3,
          },
        }}
      >
        {/* Title */}
        <Typography 
          variant="h6" 
          component="h3" 
          sx={{ 
            fontWeight: 700,
            mb: 1.5,
            color: 'text.primary',
            fontSize: '1.1rem',
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '2.6rem',
          }}
        >
          {title}
        </Typography>
        
        {/* Description */}
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 3,
            flexGrow: 1,
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {description}
        </Typography>
        
        {/* Footer */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            pt: 2,
            borderTop: '1px solid',
            borderColor: 'grey.100',
          }}
        >
          {/* Price */}
          <Box
            className="price-tag"
            sx={{
              transition: 'transform 0.3s ease',
            }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 800,
                color: 'primary.main',
                fontSize: '1.75rem',
                lineHeight: 1,
              }}
            >
              ${price.toFixed(2)}
            </Typography>
          </Box>

          {/* Quantity Badge */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: 2,
              bgcolor: inStock ? 'rgba(46, 125, 50, 0.08)' : 'rgba(211, 47, 47, 0.08)',
              border: '1.5px solid',
              borderColor: inStock ? 'success.main' : 'error.main',
            }}
          >
            <Package size={16} color={inStock ? '#2e7d32' : '#d32f2f'} />
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 700,
                color: inStock ? 'success.dark' : 'error.dark',
                fontSize: '1.1rem',
              }}
            >
              {quantity}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
