import { CustomButtonInterface } from "./CustomButton.interface";
import { CustomInputInterface } from "./CustomInput.interfaces";

export interface propsLoginFormInterface {
  inputUsername: CustomInputInterface;
  inputPassword: CustomInputInterface;
  title: string;
  buttonLogin: CustomButtonInterface;
  description: string;
}
