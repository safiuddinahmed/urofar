import { Container, Typography, Box, Grid, Paper, Divider } from '@mui/material'
import { client } from '@/sanity/lib/client'
import { PRODUCTS_BY_CATEGORY_QUERY } from '@/sanity/lib/queries'
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

async function getProductsByCategory(): Promise<CategoryWithProducts[]> {
  const categories = await client.fetch(PRODUCTS_BY_CATEGORY_QUERY, {}, {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  })
  return categories
}

export default async function ProductsPage() {
  const categories = await getProductsByCategory()
  const hasProducts = categories.some(cat => cat.products && cat.products.length > 0)

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Our Products
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Browse our selection of quality computer products and accessories
        </Typography>
      </Box>

      {/* Products by Category */}
      {!hasProducts ? (
        <Paper
          elevation={0}
          sx={{
            p: 6,
            textAlign: 'center',
            backgroundColor: 'background.default',
            border: '2px dashed',
            borderColor: 'divider',
          }}
        >
          <Typography variant="h5" color="text.secondary" gutterBottom>
            No Products Available
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Products will appear here once they are added to the catalog.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Visit <strong>/studio</strong> to add products and categories.
          </Typography>
        </Paper>
      ) : (
        categories.map((category) => {
          if (!category.products || category.products.length === 0) return null
          
          return (
            <Box key={category._id} sx={{ mb: 8 }}>
              {/* Category Header */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: 600, color: 'primary.main' }}
                >
                  {category.name}
                </Typography>
                {category.description && (
                  <Typography variant="body1" color="text.secondary">
                    {category.description}
                  </Typography>
                )}
                <Divider sx={{ mt: 2 }} />
              </Box>

              {/* Products Grid */}
              <Grid container spacing={3}>
                {category.products.map((product) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product._id}>
                    <ProductCard
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      quantity={product.quantity}
                      image={product.image}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )
        })
      )}

      {/* Admin Note */}
      <Box
        sx={{
          mt: 8,
          p: 3,
          backgroundColor: 'info.light',
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="info.dark">
          <strong>Admin:</strong> To manage products and categories, visit{' '}
          <a href="/studio" style={{ color: 'inherit', textDecoration: 'underline' }}>
            /studio
          </a>
        </Typography>
      </Box>
    </Container>
  )
}

export const metadata = {
  title: 'Products | UROFAR Computer Solutions',
  description: 'Browse our selection of quality computer products and accessories',
}
