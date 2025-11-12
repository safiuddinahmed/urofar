import { groq } from 'next-sanity'

// Get all categories
export const CATEGORIES_QUERY = groq`*[_type == "category"] | order(name asc) {
  _id,
  name,
  description
}`

// Get all products with their category information
export const PRODUCTS_QUERY = groq`*[_type == "product"] | order(title asc) {
  _id,
  title,
  description,
  price,
  quantity,
  image,
  category->{
    _id,
    name,
    description
  }
}`

// Get products grouped by category
export const PRODUCTS_BY_CATEGORY_QUERY = groq`*[_type == "category"] | order(name asc) {
  _id,
  name,
  description,
  "products": *[_type == "product" && references(^._id)] | order(title asc) {
    _id,
    title,
    description,
    price,
    quantity,
    image
  }
}`
