"use client";
import { ClientInterface } from "@/components/interfaces/Client.interface";
import { CustomButtonInterface } from "@/components/interfaces/CustomButton.interface";
import { CustomInputInterface } from "@/components/interfaces/CustomInput.interfaces";
import { propsCreateClientInterface } from "@/components/interfaces/propsCreateClient.interface";
import { CreateClient } from "@/components/molecules/CreateClient";
import { ClientsHeader } from "@molecules/ClientsHeader";
import { ChangeEvent, useState } from "react";

const Clients = () => {
  const [newClient, setNewClient] = useState<ClientInterface>({
    name: "",
    phone: "",
    address: "",
    email: "",
    license: "",
    passport: "",
    noUSCIS: "",
  });

  const handleChangeNewClient = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setNewClient({ ...newClient, [name]: value });
  };

  const inputName: CustomInputInterface = {
    id: "inputName",
    name: "name",
    type: "text",
    labelText: "Nombre",
    className: "col-span-3",
    value: newClient.name,
    onChange: handleChangeNewClient,
    autoComplete: "name",
  };

  const inputPhone: CustomInputInterface = {
    id: "inputPhone",
    name: "phone",
    type: "phone",
    labelText: "Teléfono",
    className: "col-span-3",
    value: newClient.phone,
    onChange: handleChangeNewClient,
    autoComplete: "tel",
  };

  const inputAddress: CustomInputInterface = {
    id: "inputAddress",
    name: "address",
    type: "text",
    labelText: "Dirección",
    className: "col-span-3",
    value: newClient.address,
    onChange: handleChangeNewClient,
    autoComplete: "address-level1",
  };

  const inputEmail: CustomInputInterface = {
    id: "inputEmail",
    name: "email",
    type: "email",
    labelText: "Correo",
    className: "col-span-3",
    value: newClient.email,
    onChange: handleChangeNewClient,
    autoComplete: "email",
  };

  const inputLicense: CustomInputInterface = {
    id: "inputLicense",
    name: "license",
    type: "text",
    labelText: "Licencia",
    className: "col-span-3",
    value: newClient.license,
    onChange: handleChangeNewClient,
    autoComplete: "on",
  };

  const inputPassport: CustomInputInterface = {
    id: "inputpassport",
    name: "passport",
    type: "text",
    labelText: "Pasaporte",
    className: "col-span-3",
    value: newClient.passport,
    onChange: handleChangeNewClient,
    autoComplete: "on",
  };

  const inputNoUSCIS: CustomInputInterface = {
    id: "inputNoUSCIS",
    name: "noUSCIS",
    type: "text",
    labelText: "No. USCIS",
    className: "col-span-3",
    value: newClient.noUSCIS,
    onChange: handleChangeNewClient,
    autoComplete: "on",
  };

  const buttonCreateCliente: CustomButtonInterface = {
    text: "Guardar cambios",
  };

  const propsCreateClient: propsCreateClientInterface = {
    inputName,
    inputPhone,
    inputAddress,
    inputEmail,
    inputLicense,
    inputPassport,
    inputNoUSCIS,
  };

  const viewToRenderCustomSheet = <CreateClient {...propsCreateClient} />;

  const propsClientsHeader = {
    textButtonNewCustomSheet: "Nuevo Cliente",
    viewToRenderCustomSheet,
    buttonSave: buttonCreateCliente,
    textHeaderCustomSheet: "Insertar Cliente",
    textDescriptionCustomSheet:
      "Tenga en cuenta que los datos insertado serán los utilizados en todos los procesos. Por favor sea cuidadoso.",
  };

  return (
    <div>
      <ClientsHeader {...propsClientsHeader} />
    </div>
  );
};

export default Clients;
