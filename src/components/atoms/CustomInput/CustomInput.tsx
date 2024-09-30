import { Input } from "@ui/input";
//INTERFACES
import { CustomInputInterface } from "@interfaces/CustomInput.interfaces";

const CustomInput = ({
  id,
  name,
  type,
  placeholder,
  className,
  value,
  onChange,
  autoComplete,
  disabled = false,
}: CustomInputInterface) => {
  return (
    <Input
      {...{
        id,
        name,
        type,
        placeholder,
        className,
        value,
        onChange,
        autoComplete,
        disabled,
      }}
    />
  );
};

export default CustomInput;
