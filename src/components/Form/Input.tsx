import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { FieldError, FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
  register: UseFormRegister<FieldValues>;
  validationRules?: RegisterOptions;
  error?: FieldError;
}

export function Input({ 
  name, 
  label, 
  register, 
  validationRules = {},
  error = null,
  ...rest 
}: InputProps) {  
  return (
    <FormControl isInvalid={!!error}>
      {!!label  && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput  
        id={name}
        name={name}                 
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        {...rest}
        {...register(name, validationRules)}
      />

      {!!error && (
        <FormErrorMessage>{error.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}