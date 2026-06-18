# Whistle Assessment

A responsive frontend application built using **React, TypeScript, Vite, and SCSS Modules** based on the provided Figma design.

## Features Implemented

* Responsive Hero Section
* Form validation for Name and Mobile Number
* Dynamic button enable/disable state
* Custom Checkbox and Radio components
* Reusable UI Components (Button, Input, Card, Accordion)
* Why Whistle Section with API integration
* FAQ Section with API integration
* Loading and Error state handling
* Single-open Accordion functionality
* Mobile, Tablet, and Desktop responsive layouts

## APIs Used

### Why Whistle Section

https://fakestoreapi.com/products

### FAQ Section

https://jsonplaceholder.typicode.com/posts

## Setup Instructions

```bash
git clone <repository-url>
cd whistle-assessment
npm install
npm run dev
```

### Build Project

```bash
npm run build
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Accordion
│   ├── Button
│   ├── Card
│   ├── Checkbox
│   ├── Input
│   └── Radio
├── container/
│   ├── HeroSection
│   ├── WhyWhistleSection
│   └── FAQSection
├── styles/
├── utils/
└── App.tsx
```

## Approach

The application was developed using a reusable component-based architecture to ensure scalability and maintainability. API data is fetched dynamically with proper loading and error handling, while TypeScript is used for type safety. The UI is fully responsive and closely follows the provided Figma designs across different screen sizes.

### Note

The public APIs provided for the assessment do not exactly match the content shown in the Figma designs. However, the APIs were integrated as required, and the returned data was mapped appropriately to demonstrate dynamic rendering, API integration, loading states, error handling, and reusable component usage.

