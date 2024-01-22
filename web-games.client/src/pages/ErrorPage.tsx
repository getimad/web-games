import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  const errorMessage = isRouteErrorResponse(error) ? 'This page does not exist!' : 'An unexpected error occurred!';

  return (
    <Box padding={5}>
      <Heading>Oops!</Heading>
      <Text>{errorMessage}</Text>
      <Button
        marginTop={5}
        leftIcon={<ArrowBackIcon />}
        onClick={() => navigate('/')}
      >
        Return To Home Page
      </Button>
    </Box >
  );
}

export default ErrorPage;
