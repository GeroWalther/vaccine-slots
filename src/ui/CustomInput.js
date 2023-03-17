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
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <TextInput
          style={[
            stylesInput,
            // eslint-disable-next-line react-native/no-inline-styles
            {borderColor: error ? 'red' : 'rgba(0, 0, 0, 0.12)'},
          ]}
          value={value}
          onBlur={onBlur}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      )}
    />
  );
};

export default CustomInput;
