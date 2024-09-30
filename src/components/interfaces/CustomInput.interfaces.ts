import { ChangeEvent } from "react";

export interface CustomInputInterface {
  id?: string;
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
  labelText?: string;
  value?: string | number;
  onChange?: ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  disabled?: boolean;
}
