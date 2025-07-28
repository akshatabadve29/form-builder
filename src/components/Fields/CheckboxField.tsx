import React from "react";
import { Field } from "../../types/schema";

const CheckboxField: React.FC<{
  field: Field;
  value: boolean;
  error?: string;
  onChange: (id: string, value: boolean) => void;
}> = ({ field, value, error, onChange }) => (
  <div>
    <label>
      <input
        type="checkbox"
        checked={value || false}
        onChange={(e) => onChange(field.id, e.target.checked)}
      />
      {field.label}
    </label>
    {error && <div style={{ color: "red" }}>{error}</div>}
  </div>
);

export default CheckboxField;
