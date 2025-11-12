'use client'

import { Box, Container, Typography, Breadcrumbs, Link as MuiLink, Divider, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { ChevronRight, Package } from 'lucide-react'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard/ProductCard'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface Product {
  _id: string
  title: string
  description: string
  price: number
  quantity: number
  image: SanityImageSource
}

interface CategoryWithProducts {
  _id: string
  name: string
  description: string
  products: Product[]
}

interface ProductsContentProps {
  categories: CategoryWithProducts[]
}

export default function ProductsContent({ categories }: ProductsContentProps) {
  const hasProducts = categories.some(cat => cat.products && cat.products.length > 0)
  const totalProducts = categories.reduce((sum, cat) => sum + (cat.products?.length || 0), 0)

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
                Products
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
              Our Products
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
              Quality computer products and accessories for all your technology needs
            </Typography>

            {/* Stats */}
            {hasProducts && (
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
                    {categories.length}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Categories
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {totalProducts}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Products Available
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                    100%
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Quality Guaranteed
                  </Typography>
                </Box>
              </Box>
            )}
          </motion.div>
        </Container>
      </Box>

      {/* Products Section */}
      <Box sx={{ py: 10, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          {!hasProducts ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 8,
                  textAlign: 'center',
                  backgroundColor: 'white',
                  borderRadius: 3,
                  border: '2px dashed',
                  borderColor: 'divider',
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    p: 3,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    color: 'primary.main',
                    mb: 3,
                  }}
                >
                  <Package size={48} />
                </Box>
                <Typography variant="h4" color="text.primary" gutterBottom sx={{ fontWeight: 600 }}>
                  No Products Available Yet
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 500, mx: 'auto' }}>
                  Products will appear here once they are added to the catalog. Visit the Studio to start adding your products.
                </Typography>
                <Box
                  sx={{
                    mt: 4,
                    p: 3,
                    backgroundColor: 'info.light',
                    borderRadius: 2,
                    display: 'inline-block',
                  }}
                >
                  <Typography variant="body2" color="info.dark" sx={{ fontWeight: 600 }}>
                    Admin: Visit{' '}
                    <a href="/studio" style={{ color: 'inherit', textDecoration: 'underline' }}>
                      /studio
                    </a>{' '}
                    to manage products and categories
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          ) : (
            categories.map((category, categoryIndex) => {
              if (!category.products || category.products.length === 0) return null
              
              return (
                <motion.div
                  key={category._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <Box sx={{ mb: 8 }}>
                    {/* Category Header */}
                    <Box sx={{ mb: 5, textAlign: 'center' }}>
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
                        CATEGORY
                      </Typography>
                      <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom
                        sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}
                      >
                        {category.name}
                      </Typography>
                      {category.description && (
                        <Typography 
                          variant="h6" 
                          color="text.secondary"
                          sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400 }}
                        >
                          {category.description}
                        </Typography>
                      )}
                      <Divider sx={{ mt: 3, maxWidth: 100, mx: 'auto', borderWidth: 2, borderColor: 'primary.main' }} />
                    </Box>

                    {/* Products Grid */}
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                        gap: 3,
                      }}
                    >
                      {category.products.map((product, productIndex) => (
                        <motion.div
                          key={product._id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: productIndex * 0.1 }}
                        >
                          <ProductCard
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            quantity={product.quantity}
                            image={product.image}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              )
            })
          )}

          {/* Admin Note */}
          {hasProducts && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  mt: 8,
                  p: 3,
                  backgroundColor: 'info.light',
                  borderRadius: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="body2" color="info.dark" sx={{ fontWeight: 600 }}>
                  <strong>Admin:</strong> To manage products and categories, visit{' '}
                  <a href="/studio" style={{ color: 'inherit', textDecoration: 'underline' }}>
                    /studio
                  </a>
                </Typography>
              </Box>
            </motion.div>
          )}
        </Container>
      </Box>
    </>
  )
}
