'use client'

import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material'
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
  const imageUrl = image ? urlFor(image).width(400).height(300).url() : '/placeholder.jpg'
  const inStock = quantity > 0

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography variant="h6" component="h3" sx={{ fontWeight: 600, flexGrow: 1 }}>
            {title}
          </Typography>
          <Chip
            label={inStock ? 'In Stock' : 'Out of Stock'}
            color={inStock ? 'success' : 'error'}
            size="small"
            sx={{ ml: 1 }}
          />
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
          {description}
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>
            ${price.toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Qty: {quantity}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
