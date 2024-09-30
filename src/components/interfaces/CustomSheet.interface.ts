import { CustomButtonInterface } from "./CustomButton.interface";

export interface CustomSheetInterface {
  textButtonNewCustomSheet: string;
  textHeaderCustomSheet?: string;
  textDescriptionCustomSheet?: string;
  viewToRenderCustomSheet: JSX.Element;
  buttonSave: CustomButtonInterface
}
