import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};

export default Input;
