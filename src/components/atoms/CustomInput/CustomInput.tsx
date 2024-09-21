import { Input } from "@/components/ui/input";
//INTERFACES
import { CustomInputInterface } from "@interfaces/CustomInput.interfaces";

const CustomInput = ({
  id,
  name,
  type,
  placeholder,
  className,
}: CustomInputInterface) => {
  return <Input {...{ id, name, type, placeholder, className }} />;
};

export default CustomInput;
