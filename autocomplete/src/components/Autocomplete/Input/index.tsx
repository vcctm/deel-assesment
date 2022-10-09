import { forwardRef } from 'react';
import * as S from './styles';

interface IInputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus: React.FocusEventHandler<HTMLInputElement> | undefined;
  value: string;
  placeHolder: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ onChange, onFocus, value, placeHolder }, ref) => {
    return (
      <S.InputWrapper
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        placeholder={placeHolder}
        ref={ref}
        type='search'
      />
    );
  },
);
