import React from 'react';
import {TextInput} from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  control,
  name,
  secureTextEntry,
  rules = {},
  stylesInput,
  keyboardType,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            style={stylesInput}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
          />
        )}
      />
    </>
  );
};

export default CustomInput;
