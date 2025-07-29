import React from "react";
import { Field } from "../../types/schema";

const CheckboxField: React.FC<{
  field: Field;
  value: boolean;
  error?: string;
  onChange: (id: string, value: boolean) => void;
}> = ({ field, value, error, onChange }) => (
  <div className="mb-3 ">
    <label className="form-label">
      <input
        type="checkbox"
        className={`form-check-input ${error ? "is-invalid" : ""}`}
        checked={value || false}
        onChange={(e) => onChange(field.id, e.target.checked)}
      />
      {field.label}
    </label>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default CheckboxField;
