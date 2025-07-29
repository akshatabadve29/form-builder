import React from "react";
import { Field } from "../../types/schema";

const SelectField: React.FC<{
  field: Field;
  value: string;
  error?: string;
  onChange: (id: string, value: string) => void;
}> = ({ field, value, error, onChange }) => (
  <div className="mb-3">
    <label className="form-label">{field.label}</label>
    <select
      className={`form-select ${error ? "is-invalid" : ""}`}
      value={value || ""}
      onChange={(e) => onChange(field.id, e.target.value)}
    >
      <option value="">Select</option>
      {(field.options || []).map((opt) => (
        <option
          key={typeof opt === "string" ? opt : opt.value}
          value={typeof opt === "string" ? opt : opt.value}
        >
          {typeof opt === "string" ? opt : opt.label}
        </option>
      ))}
    </select>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default SelectField;
