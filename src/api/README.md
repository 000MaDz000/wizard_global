# Strapi TypeScript Client

A comprehensive TypeScript client library for your Strapi CMS with full type safety, React hooks, and pagination support.

## Features

- 🔷 **Full TypeScript Support** - Complete type definitions for all content types and components
- 🪝 **React Hooks** - Ready-to-use hooks with React Query integration
- 📄 **Pagination Support** - Built-in pagination handling for collection types
- 🔍 **Advanced Filtering** - Support for Strapi's filtering and population features
- 🚀 **Easy to Use** - Simple API with sensible defaults

## Installation

\`\`\`bash
npm install @tanstack/react-query axios
\`\`\`

## Setup

1. Set your Strapi base URL in environment variables:
\`\`\`env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
\`\`\`

2. Wrap your app with React Query provider:
\`\`\`tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your app */}
    </QueryClientProvider>
  );
}
\`\`\`

## Usage Examples

### Single Types (Pages)

\`\`\`tsx
import { useHomepage } from './hooks';

function HomePage() {
  const { data, isLoading, error } = useHomepage(['hero', 'about', 'services']);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading homepage</div>;
  
  const homepage = data?.data;
  
  return (
    <div>
      <h1>{homepage?.attributes.hero.title}</h1>
      <p>{homepage?.attributes.hero.subtitle}</p>
    </div>
  );
}
\`\`\`

### Collection Types with Pagination

\`\`\`tsx
import { useArticles } from './hooks';

function ArticlesPage() {
  const { data, isLoading } = useArticles({
    page: 1,
    pageSize: 10,
    populate: ['image', 'article_category'],
    sort: 'createdAt:desc'
  });
  
  const articles = data?.data || [];
  const pagination = data?.meta.pagination;
  
  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <h2>{article.attributes.title}</h2>
          <p>{article.attributes.summary}</p>
        </div>
      ))}
      
      {pagination && (
        <div>
          Page {pagination.page} of {pagination.pageCount}
          ({pagination.total} total articles)
        </div>
      )}
    </div>
  );
}
\`\`\`

### Filtering and Search

\`\`\`tsx
import { useCars } from './hooks';

function CarsPage() {
  const { data } = useCars({
    filters: {
      'brand.name': 'Toyota',
      'year': { $gte: 2020 },
      'condition': 'new'
    },
    populate: ['brand', 'model', 'images'],
    sort: 'price:asc'
  });
  
  return (
    <div>
      {data?.data.map(car => (
        <div key={car.id}>
          <h3>{car.attributes.brand?.data.attributes.name} {car.attributes.model?.data.attributes.name}</h3>
          <p>Year: {car.attributes.year}</p>
          <p>Price: ${car.attributes.price}</p>
        </div>
      ))}
    </div>
  );
}
\`\`\`

### Single Item Fetching

\`\`\`tsx
import { useArticle } from './hooks';

function ArticleDetail({ id }: { id: number }) {
  const { data, isLoading } = useArticle(id, ['image', 'article_category']);
  
  if (isLoading) return <div>Loading...</div>;
  
  const article = data?.data;
  
  return (
    <div>
      <h1>{article?.attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article?.attributes.content }} />
    </div>
  );
}
\`\`\`

## Available Hooks

### Collection Types
- `useArticles()` / `useArticle(id)`
- `useArticleCategories()` / `useArticleCategory(id)`
- `useCars()` / `useCar(id)`
- `useCarBrands()` / `useCarBrand(id)`
- `useCarFuelTypes()` / `useCarFuelType(id)`
- `useCarModels()` / `useCarModel(id)`
- `useProjects()` / `useProject(id)`
- `useECommerceFutureProjects()` / `useECommerceFutureProject(id)`
- `useTestimonials()` / `useTestimonial(id)`

### Single Types
- `useHomepage()`
- `useCarsPage()`
- `useECommerce()`
- `useIT()`
- `useTerm()`

## Pagination Parameters

\`\`\`typescript
interface PaginationParams {
  page?: number;           // Page number (default: 1)
  pageSize?: number;       // Items per page (default: 25)
  sort?: string;           // Sort field and direction (e.g., 'createdAt:desc')
  filters?: Record<string, any>; // Strapi filters
  populate?: string | string[] | Record<string, any>; // Relations to populate
}
\`\`\`

## Environment Variables

Make sure to set your Strapi URL:

\`\`\`env
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-instance.com
\`\`\`

## Type Safety

All responses are fully typed with TypeScript interfaces that match your Strapi content types. This provides excellent IntelliSense support and compile-time error checking.
