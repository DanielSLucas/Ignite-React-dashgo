import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
}

export default function Home() {
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm();  
  

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values);    
  }
  
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW="360px"
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Stack spacing="4">
          <Input 
            name="email" 
            label="E-mail" 
            type="email" 
            register={register}
            error={errors.email}
            validationRules={{
              required: "E-mail obrigatório"
            }}
          />
          <Input 
            name="password" 
            label="Senha" 
            type="password" 
            register={register}
            error={errors.password}    
          />
        </Stack>
        
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
};
