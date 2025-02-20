import AuthService from './src/services/auth.service';

const testFrontend = async () => {
  try {
    console.log('Testing frontend auth service...');
    
    // Test Register
    console.log('\nTesting registration...');
    const registerData = {
      email: "test@example.com",
      password: "password123",
      fullName: "Test User"
    };

    try {
      const registerResponse = await AuthService.signup(registerData);
      console.log('Register Response:', registerResponse);
    } catch (error) {
      console.log('Register Error:', error.message);
    }
    
    // Test Login
    console.log('\nTesting login...');
    const loginData = {
      email: "test@example.com",
      password: "password123"
    };

    try {
      const loginResponse = await AuthService.login(loginData);
      console.log('Login Response:', loginResponse);
    } catch (error) {
      console.log('Login Error:', error.message);
    }
    
    // Test Get Current User
    console.log('\nTesting get current user...');
    const currentUser = await AuthService.getCurrentUser();
    console.log('Current User:', currentUser);

    if (currentUser) {
      // Test Logout
      console.log('\nTesting logout...');
      await AuthService.logout();
      console.log('Logout successful');
      
      // Verify logout
      const userAfterLogout = await AuthService.getCurrentUser();
      console.log('User after logout:', userAfterLogout);
    }
    
    console.log('\nAll tests completed!');
  } catch (error) {
    console.error('\nTest Error Details:');
    console.error('Message:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Server Response:', error.response.data);
    }
  }
};

testFrontend();