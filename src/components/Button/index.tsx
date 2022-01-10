import './style.css';
import { InputHTMLAttributes } from 'react';

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

export function Button({ ...rest }: IInputProps): JSX.Element {
  return (
    <div className="buttonContainer">
      <input type="button" {...rest} />
    </div>
  );
}
