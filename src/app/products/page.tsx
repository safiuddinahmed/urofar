import { client } from '@/sanity/lib/client'
import { PRODUCTS_BY_CATEGORY_QUERY } from '@/sanity/lib/queries'
import ProductsContent from '@/components/ProductsContent/ProductsContent'
import CallToAction from '@/components/CallToAction/CallToAction'
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
    next: { revalidate: 60 }
  })
  return categories
}

export default async function ProductsPage() {
  const categories = await getProductsByCategory()

  return (
    <>
      <ProductsContent categories={categories} />
      <CallToAction />
    </>
  )
}

export const metadata = {
  title: 'Products | UROFAR Computer Solutions',
  description: 'Browse our selection of quality computer products and accessories',
}
