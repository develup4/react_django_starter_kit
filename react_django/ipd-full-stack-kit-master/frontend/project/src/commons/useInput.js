import React, { useState } from 'react';

export const useInput = (defaultValue, maxLength = 0) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    if (maxLength !== 0 && value.length > maxLength) {
      return;
    }
    setValue(value);
  };

  return { value, onChange, setValue };
};
