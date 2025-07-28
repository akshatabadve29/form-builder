export type FieldType = "text" | "number" | "select" | "checkbox" | "date";

export interface FieldValidationRule {
  type: "required" | "minLength" | "maxLength" | "min" | "max";
  value?: number;
  message: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface FieldDependency {
  fieldId: string;
  condition: "equals";
  value: any;
}

export interface Field {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: SelectOption[];
  validation?: FieldValidationRule[];
  dependsOn?: FieldDependency;
}

export interface SubmitButton {
  text: string;
  loadingText: string;
}

export interface FormSchema {
  title: string;
  fields: Field[];
  submitButton: SubmitButton;
}
