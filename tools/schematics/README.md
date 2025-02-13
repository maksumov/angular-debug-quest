# Schematics

This library contains custom generators for Nx workspace. The main generator is the app-generator which helps create new Angular applications with predefined configurations.

## App Generator

The app generator (`app-generator.ts`) creates a new Angular application with the following features:

### Features

- Generates a random lowercase name for the application (8 characters)
- Sets up the application in the `apps/{name}` directory
- Configures with modern tooling:
  - ESLint for linting
  - Jest for unit testing
  - Playwright for e2e testing
  - Tailwind CSS for styling
  - CSS as the default style format

### Usage

To generate a new application:

```bash
npx nx generate app-generator
```
