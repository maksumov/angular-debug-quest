# Getting Started With Schematics

This repository contains schematics for generating Angular applications with pre-configured settings and templates.

## Available Schematics

### app-generator

Generates a new Angular application within your workspace with a randomly generated name based on the specified scope.

Usage:

```bash
schematics .:app-generator --scope=<scope>
```

Options:

- `scope`: (required) The scope/category of the application. Available options:
  - `core` - Core Angular functionality
  - `router` - Router related
  - `di` - Dependency Injection
  - `http` - HTTP functionality
  - `signals` - Signals related
  - `rxjs` - RxJS functionality
  - `forms` - Forms related
  - `ssr` - Server-side rendering
  - `test` - Test related
  - `multi` - Multiple scopes

The generated application will:

- Have a randomly generated name prefixed with the selected scope
- Use CSS for styling
- Include Tailwind CSS configuration
- Be created in the `projects/<app-name>` directory

Example:

```bash
schematics .:app-generator --scope=core
# Creates an app like: projects/core-lfiwanfi
```

## Testing

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.
