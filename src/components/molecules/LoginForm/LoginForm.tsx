//ATOMS
import { CustomButton } from "@atoms/CustomButton";
import { CustomInput } from "@atoms/CustomInput";
//INTERFACE
import { propsLoginFormInterface } from "@interfaces/propsLoginForm.interface";

const LoginForm = ({
  inputUsername,
  inputPassword,
  title,
  buttonLogin,
  description,
}: propsLoginFormInterface) => {
  return (
    <div>
      <h1 className="font-sans text-2xl font-bold text-center mb-2">{title}</h1>
      <CustomInput {...inputUsername} />
      <CustomInput {...inputPassword} />
      <CustomButton {...buttonLogin} />

      <p className="font-sans mt-8">{description}</p>
    </div>
  );
};

export default LoginForm;
