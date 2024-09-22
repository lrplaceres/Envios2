import { Button } from "@ui/button";
//INTERFACE
import { CustomButtonInterface } from "@interfaces/CustomButton.interface";

const CustomButton = ({ text, variant, className }: CustomButtonInterface) => {
  return <Button {...{ variant, className }}>{text}</Button>;
};

export default CustomButton;
