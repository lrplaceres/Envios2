import { CustomButtonInterface } from "./CustomButton.interface";

export interface propsClientsHeaderInterface {
  textButtonNewCustomSheet: string;
  textHeaderCustomSheet?: string;
  textDescriptionCustomSheet?: string;
  viewToRenderCustomSheet: JSX.Element;
  buttonSave: CustomButtonInterface
}
