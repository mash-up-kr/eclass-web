interface TextInputProps {
  placeholder?: string;
}

const TextInput = ({ placeholder }: TextInputProps) => {
  return <input type="text" placeholder="" />;
};

export default TextInput;
