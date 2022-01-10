import './style.css';
import { ButtonHTMLAttributes } from 'react';

type IInputProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ ...rest }: IInputProps): JSX.Element {
  return (
    <div className="buttonContainer">
      <button className="button" type="button" {...rest} />
    </div>
  );
}
