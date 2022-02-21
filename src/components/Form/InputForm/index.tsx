import React from "react";
import { TextInputProps } from "react-native";
import { Controller, Control } from "react-hook-form";

import Input from "../Input";

import { Container, Error } from "./styles";

interface InputFormProps extends TextInputProps {
  name: string;
  control: Control;
  error: string;
}

function InputForm(props: InputFormProps) {
  const { name, control, error, ...restProps } = props;

  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={(renderProps) => {
          const { onChange, value } = renderProps.field;

          return <Input onChangeText={onChange} value={value} {...restProps} />;
        }}
      />

      {!!error && <Error>{error}</Error>}
    </Container>
  );
}

export default InputForm;
