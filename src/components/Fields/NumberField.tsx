import React from "react";
import { Field } from "../../types/schema";

const NumberField: React.FC<{
  field: Field;
  value: number;
  error?: string;
  onChange: (id: string, value: number) => void;
}> = ({ field, value, error, onChange }) => (
  <div>
    <label>{field.label}</label>
    <input
      type="number"
      placeholder={field.placeholder}
      value={value ?? ""}
      onChange={(e) => onChange(field.id, Number(e.target.value))}
    />
    {error && <div style={{ color: "red" }}>{error}</div>}
  </div>
);

export default NumberField;
