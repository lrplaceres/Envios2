//ATOMS
import { LoginForm } from "@molecules/LoginForm";
//INETERFACE
import { CustomButtonInterface } from "@interfaces/CustomButton.interface";
import { CustomInputInterface } from "@interfaces/CustomInput.interfaces";
import { propsLoginFormInterface } from "@interfaces/propsLoginForm.interface";

const Login = () => {
  const inputUsername: CustomInputInterface = {
    name: "username",
    type: "text",
    placeholder: "Usuario",
    className: "border border-slate-300 border-solid mb-2 rounded",
  };

  const inputPassword: CustomInputInterface = {
    name: "username",
    type: "password",
    placeholder: "Contraseña",
    className: "border border-slate-300 border-solid mb-2 rounded",
  };

  const buttonLogin: CustomButtonInterface = {
    text:"Acceder",
    className:"w-full rounded bg-slate-600 text-white hover:text-slate-600"
  }

  const propsLoginForm: propsLoginFormInterface = {
    inputUsername,
    inputPassword,
    title: "Inicio de sesión",
    buttonLogin,
    description: "Al hacer clic en Acceder, usted acepta nuestros Términos del servicio y Política de privacidad."
  };

  return <LoginForm {...propsLoginForm} />;
};

export default Login;
