# Testing Documentation

## Unit Tests (Jasmine/Karma)

### Running Unit Tests

```bash
npm test
```

### Test Coverage

The project includes comprehensive unit tests for:

#### Services (45+ tests)
- **AuthService**: Login, logout, authentication state
- **CarService**: CRUD operations for cars
- **BrandService**: Brand data retrieval

#### Components (24+ tests)
- **CarsListComponent**: Grid/table view, filtering, search, delete
- **CarDetailComponent**: Loading car details, navigation, delete
- **CarFormComponent**: Form validation, create/edit operations
- **NavbarComponent**: Logout functionality, conditional rendering

#### NgRx Store (30+ tests)
- **Reducers**: State transformations for car and brand features
- **Effects**: Async operations with API calls
- **Selectors**: State selection and filtering logic

### Test Structure

Each test file follows this pattern:
```typescript
describe('ComponentName', () => {
  beforeEach(() => {
    // Setup with TestBed configuration
  });

  it('should test behavior', () => {
    // Arrange, Act, Assert
  });
});
```

## E2E Tests (Cypress + Cucumber)

### Setup

Cypress and Cucumber preprocessor are configured with:
- Feature files in `cypress/e2e/*.feature`
- Step definitions in `cypress/e2e/*.ts`
- Custom commands in `cypress/support/commands.ts`

### Running E2E Tests

```bash
# Open Cypress UI
npm run cypress:open

# Run tests headlessly
npm run cypress:run

# Run E2E tests with app server
npm run e2e
```

### Test Scenarios

#### Authentication (`authentication.feature`)
- Successful login with valid credentials
- Failed login with invalid credentials
- Logout functionality and route protection

#### Car Management (`car-management.feature`)
- View cars in grid/table layouts
- Filter cars by availability
- Search for specific cars
- Add new cars
- Edit existing cars
- Delete cars
- View car details

### Custom Commands

```typescript
cy.login('username', 'password') // Login helper
```

### Configuration

- Base URL: `http://localhost:4200`
- Viewport: 1280x720
- Screenshots on failure: Enabled
- Video recording: Disabled

## Test Best Practices

1. **Isolation**: Each test is independent
2. **Mocking**: Use MockStore and HttpClientTestingModule
3. **Cleanup**: Clear state in afterEach hooks
4. **Assertions**: Use meaningful expect statements
5. **Coverage**: Test both success and error scenarios

## CI/CD Integration

Tests can be integrated into your CI pipeline:

```yaml
# Example CI configuration
test:
  script:
    - npm install
    - npm test -- --watch=false --browsers=ChromeHeadless
    - npm run cypress:run
```

## Troubleshooting

### Unit Tests
- Ensure all dependencies are installed: `npm install`
- Check that TestBed is properly configured
- Verify mock data matches actual data structures

### E2E Tests
- Make sure the app is running: `npm run dev`
- Check Cypress config in `cypress.config.ts`
- Verify selectors match actual DOM elements
- Clear browser cache if tests fail unexpectedly

## Test Statistics

- **Total Unit Tests**: 99+
- **Total E2E Scenarios**: 11
- **Code Coverage Target**: 80%
- **Test Execution Time**: ~2-3 minutes
