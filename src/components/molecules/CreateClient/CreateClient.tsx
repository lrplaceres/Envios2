import { CustomInput } from "@atoms/CustomInput";
import { propsCreateClientInterface } from "@interfaces/propsCreateClient.interface";
import { Label } from "@ui/label";

const CreateClient = ({
  inputName,
  inputPhone,
  inputAddress,
  inputEmail,
  inputLicense,
  inputPassport,
  inputNoUSCIS,
}: propsCreateClientInterface) => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={inputName.id} className="text-right">
          {inputName.labelText}
        </Label>
        <CustomInput {...inputName} />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={inputPhone.id} className="text-right">
          {inputPhone.labelText}
        </Label>
        <CustomInput {...inputPhone} />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={inputAddress.id} className="text-right">
          {inputAddress.labelText}
        </Label>
        <CustomInput {...inputAddress} />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={inputEmail.id} className="text-right">
          {inputEmail.labelText}
        </Label>
        <CustomInput {...inputEmail} />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={inputLicense.id} className="text-right">
          {inputLicense.labelText}
        </Label>
        <CustomInput {...inputLicense} />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={inputPassport.id} className="text-right">
          {inputPassport.labelText}
        </Label>
        <CustomInput {...inputPassport} />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={inputNoUSCIS.id} className="text-right">
          {inputNoUSCIS.labelText}
        </Label>
        <CustomInput {...inputNoUSCIS} />
      </div>
    </div>
  );
};

export default CreateClient;
