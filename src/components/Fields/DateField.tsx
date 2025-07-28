import React from "react";
import { Field } from "../../types/schema";

const DateField: React.FC<{
  field: Field;
  value: string;
  error?: string;
  onChange: (id: string, value: string) => void;
}> = ({ field, value, error, onChange }) => (
  <div>
    <label>{field.label}</label>
    <input
      type="date"
      value={value || ""}
      onChange={(e) => onChange(field.id, e.target.value)}
    />
    {error && <div style={{ color: "red" }}>{error}</div>}
  </div>
);

export default DateField;
