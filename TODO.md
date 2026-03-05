# TODO - Role Validation Fix

## Task: Fix login role validation so admin credentials don't work on student login and vice versa

### Steps:
- [x] 1. Modify `/app/api/auth/login/route.js` - Add role validation
- [x] 2. Modify `/app/login/page.js` - Send selected role to API
- [x] 3. Test the fix

### Status: Completed

## Summary of Changes

### 1. `/app/api/auth/login/route.js`
- Added role parameter validation
- Validates that the user's role in the database matches the requested role
- Returns specific error messages like "Invalid credentials for student login"

### 2. `/app/login/page.js`
- Sends the selected userType (role) along with email and password to the API
- Shows the API error message when login fails due to role mismatch

