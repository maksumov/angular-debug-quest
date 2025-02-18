# Bug ticket

// TODO: Add a description of the bug

## Current behavior

<img src="../<%= name %>-e2e/screenshots/bug-screenshot.png" alt="Bug Screenshot" />

## Expected behavior

<img src="../<%= name %>-e2e/screenshots/approval-screenshot.png" alt="Approval Screenshot" />

# Developer notes

## Run the complete project

```bash
nx run-many -t serve --projects=<%= name %>,<%= name %>-api
```

## Run the frontend

```bash
npx nx serve <%= name %>
```

## Run the API

```bash
npx nx serve <%= name %>-api
```
