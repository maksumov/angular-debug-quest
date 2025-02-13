# Contributing to Angular Debug Quest

Thank you for your interest in contributing to Angular Debug Quest! This project serves as a training ground for developers to practice debugging Angular applications.

## Important Note

This project is intentionally designed to contain bugs for learning purposes. Therefore:

- ❌ Bug fix contributions will not be accepted
- ✅ Contributions adding new (intentional) bugs are welcomed

## How to Contribute New Bugs

1. Open an issue to discuss the bug you'd like to add

The project might already include a bug you'd like to add so the first step is to open a discussion to ensure it won't be a duplicate resulting in a wasted effort at creating a pull request.

2. **Fork the Repository**

   - Create your own fork of the project
   - Clone it locally

3. **Create a new application**

   Run `npm run generate:app` to create an isolated playground for the bug you'd like to add.

   It'll create 2 folders:

   - `apps/{name}` with a basic Angular application
   - `apps/{name}-e2e` with a Playwright e2e test

   The name is randomly generated to avoid conflicts and not to spoil the learning experience.

4. **Adding Bugs**
   When contributing new bugs, please ensure they:

   - Are related to Angular concepts
   - Have a clear purpose/learning objective
   - Are not security vulnerabilities
   - Are discoverable through debugging

5. **Submit a Pull Request**
   - Provide a clear description of the bug(s) you've added
   - Explain what Angular knowledge is needed to fix it
   - Reference any related issues

## Types of Bugs to Consider Adding

> This list is not exhaustive and used as a guide.
> It won't be updated so might include bugs already added to the project.

- Component interaction issues
- Service implementation problems
- Routing configuration bugs
- Form validation errors
- Data binding issues
- Lifecycle hook misuse
- Dependency injection problems
- Template syntax errors
- RxJS usage bugs
- Performance issues

## Code Style

While the project intentionally contains bugs, please ensure your contributions:

- Follow TypeScript best practices
- Use consistent formatting

## Questions?

If you have questions about contributing, please open an issue for discussion.

Remember: The goal is to create educational debugging scenarios, not to fix the existing bugs!
