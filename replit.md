# Portfolio Website - Replit.md

## Overview

This is a modern portfolio website for a frontend developer named Shahzad Ali, built with a full-stack architecture using React, Express, and TypeScript. The application showcases professional experience, projects, skills, and provides a contact form. It features a modern design with 3D animations, dark/light theme support, and responsive layouts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with separate client and server directories, utilizing a modern web development stack with TypeScript throughout.

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: GSAP for smooth animations and Three.js for 3D background effects
- **State Management**: TanStack Query for server state, React Context for theme management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM (configured but using in-memory storage currently)
- **Authentication**: Basic user schema defined but not fully implemented
- **API**: RESTful endpoints for contact form and file downloads

## Key Components

### Client-Side Components
1. **Layout Components**: Navigation, Hero, About, Skills, Experience, Education, Projects, Contact, Footer
2. **UI Components**: Comprehensive shadcn/ui component library including buttons, forms, dialogs, etc.
3. **Theme System**: Dark/light mode with CSS variables and system preference detection
4. **Animation System**: GSAP integration for scroll-triggered animations and Three.js for background effects

### Server-Side Components
1. **Route Handlers**: Contact form submission, CV download endpoint
2. **Storage Layer**: Abstract storage interface with in-memory implementation
3. **Database Schema**: User table defined with Drizzle ORM
4. **Development Tools**: Vite integration for development mode

### Shared Components
1. **Database Schema**: Shared TypeScript types and Zod validation schemas
2. **Type Definitions**: Common interfaces used across client and server

## Data Flow

1. **Static Content**: Portfolio information is hardcoded in components (projects, skills, experience)
2. **Contact Form**: Client-side form validation → API endpoint → console logging (placeholder for email service)
3. **File Downloads**: Direct file serving through Express static middleware
4. **Theme State**: Managed in React Context with localStorage persistence
5. **Animations**: Triggered by scroll events and component mounting

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, Radix UI components
- **Animations**: GSAP, ScrollTrigger, Three.js
- **Forms**: React Hook Form with Hookform Resolvers
- **State Management**: TanStack React Query
- **Utilities**: clsx, class-variance-authority, date-fns

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless, connect-pg-simple
- **Validation**: Drizzle-zod for schema validation
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin
- **TypeScript**: Full TypeScript configuration with path mapping
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Development Mode
- Vite dev server for frontend with HMR
- tsx for running TypeScript server directly
- Concurrent development with middleware integration

### Production Build
- Vite builds optimized React application to `dist/public`
- esbuild bundles server code to `dist/index.js`
- Express serves static files and API routes
- Environment variable configuration for database connections

### Database Strategy
- Drizzle ORM configured for PostgreSQL with migrations
- Currently using in-memory storage for development
- Schema ready for production database integration
- Environment-based database URL configuration

### File Structure
- **Monorepo**: Client, server, and shared code in organized directories
- **Asset Management**: Static files served through Express
- **TypeScript Paths**: Configured aliases for clean imports
- **Environment Configuration**: Separate configs for development and production

The application is designed to be easily deployable to platforms like Replit, Vercel, or traditional hosting providers with minimal configuration changes.