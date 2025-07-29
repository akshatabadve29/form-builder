import React from "react";
import { Field } from "../../types/schema";

const DateField: React.FC<{
  field: Field;
  value: string;
  error?: string;
  onChange: (id: string, value: string) => void;
}> = ({ field, value, error, onChange }) => (
  <div className="mb-3">
    <label className="form-label">{field.label}</label>
    <input
      type="date"
      value={value || ""}
      className={` ${error ? "is-invalid" : ""}`}
      onChange={(e) => onChange(field.id, e.target.value)}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default DateField;
