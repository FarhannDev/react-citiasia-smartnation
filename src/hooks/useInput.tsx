import { useState, ChangeEvent } from 'react';

const useInput = (
  defaultValue: string = ''
): [string, (event: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<string>(defaultValue);
  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return [value, handleValueChange];
};

export default useInput;
