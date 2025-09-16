# Pixocraft Digital Marketing Agency Website

## Overview

This is a modern, full-stack digital marketing agency website for Pixocraft, a social media management company based in Jalandhar. The website serves as a marketing platform to showcase services, packages, and facilitate client contact for social media handling services across Facebook, Instagram, Snapchat, YouTube, and LinkedIn.

The application follows a modern web architecture with a React frontend using shadcn/ui components, an Express.js backend API, and PostgreSQL database integration via Drizzle ORM. The website is designed to be professional, trust-building, and conversion-focused with clear service offerings and pricing tiers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Library**: shadcn/ui components built on Radix UI primitives for accessible, modern design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Routing**: Wouter for lightweight client-side routing
- **Component Structure**: Modular component-based architecture with separate sections (Hero, About, Services, Packages, Portfolio, etc.)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with proper error handling and request logging middleware
- **Data Validation**: Zod schemas for runtime type validation of API requests
- **Development Tools**: Hot reload with Vite integration and runtime error overlay

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless connection via environment variables
- **Tables**: Users table for potential authentication and contact_submissions for form data
- **Fallback Storage**: In-memory storage implementation for development/testing

### Form Handling & Contact Management
- **Contact Forms**: React Hook Form with Zod validation for client-side form handling
- **API Endpoints**: POST /api/contact for form submissions, GET /api/contact-submissions for admin access
- **Data Persistence**: Contact submissions stored with automatic timestamps and UUID generation
- **User Feedback**: Toast notifications for form submission status

### Development & Deployment
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Development**: Hot reload with Vite dev server proxy to Express backend
- **Environment**: Environment-based configuration with proper development/production separation
- **Assets**: Static asset serving with Vite in development, Express static serving in production

### UI/UX Features
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI primitives ensure WCAG compliance
- **Visual Effects**: CSS animations, gradients, and glassmorphism effects
- **Social Integration**: Social media icons and floating action buttons for WhatsApp/phone
- **Performance**: Optimized images, lazy loading, and minimal JavaScript bundles