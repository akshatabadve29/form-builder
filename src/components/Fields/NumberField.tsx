import React from "react";
import { Field } from "../../types/schema";

const NumberField: React.FC<{
  field: Field;
  value: number;
  error?: string;
  onChange: (id: string, value: number) => void;
}> = ({ field, value, error, onChange }) => (
  <div className="mb-3">
    <label className="form-label">{field.label}</label>
    <input
      type="number"
      className={`form-control ${error ? "is-invalid" : ""}`}
      placeholder={field.placeholder}
      value={value ?? ""}
      onChange={(e) => onChange(field.id, Number(e.target.value))}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default NumberField;
