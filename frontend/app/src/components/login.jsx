import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Link, Stack, Text } from '@chakra-ui/react';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, login logic would go here
    console.log("Login submitted");
  };

  return (
    <Stack direction="row" spacing={8} justify="center" align="center" height="100vh">
      {/* Left Side - Input Fields */}
      <Stack spacing={4} width="25%" p={4} borderRadius="md" boxShadow="xl" as="form" onSubmit={handleSubmit}>
        <Text color="black" fontSize='large' fontWeight="bold" textAlign="center">Login</Text>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Email" variant="filled" autoFocus />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password" variant="filled" />
        </FormControl>
        <Stack justify="center" align="center">
          <Button colorScheme="blue" variant="solid" width="80%" type="submit">
            Login
          </Button>
          
          <Link color="blue.500" textAlign="center" href="/register">Register</Link>
        </Stack>
      </Stack>

      {/* Right Side - Image */}
      <Box width="40%">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          alt="Login illustration"
          style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
        />
      </Box>
    </Stack>
  );
};

export default Login;
