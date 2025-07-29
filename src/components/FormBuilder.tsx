import React, { useState } from "react";
import { Field, FormSchema } from "../types/schema";
import TextField from "./fields/TextField";
import NumberField from "./fields/NumberField";
import SelectField from "./fields/SelectField";
import CheckboxField from "./fields/CheckboxField";
import DateField from "./fields/DateField";
import validateField from "./utils/validation";

const FormBuilder: React.FC<{ schema: FormSchema }> = ({ schema }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (id: string, value: any) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const isFieldVisible = (field: Field): boolean => {
    if (!field.dependsOn) return true;
    const { fieldId, value, condition } = field.dependsOn;
    if (condition === "equals") {
      return formData[fieldId] === value;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    schema.fields.forEach((field) => {
      if (isFieldVisible(field)) {
        const error = validateField(field, formData[field.id]);
        if (error) newErrors[field.id] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsSubmitting(true);
      setTimeout(() => {
        alert("Form Submitted:\n" + JSON.stringify(formData, null, 2));
        setIsSubmitting(false);

        // ✅ Reset form fields
        const resetData: Record<string, any> = {};
        schema.fields.forEach((field) => {
          resetData[field.id] = field.type === "checkbox" ? false : "";
        });
        setFormData(resetData);
      }, 1000);
    }
  };

  const renderField = (field: Field) => {
    if (!isFieldVisible(field)) return null;

    const props = {
      field,
      value: formData[field.id],
      error: errors[field.id],
      onChange: handleChange,
    };

    switch (field.type) {
      case "text":
        return <TextField key={field.id} {...props} />;
      case "number":
        return <NumberField key={field.id} {...props} />;
      case "select":
        return <SelectField key={field.id} {...props} />;
      case "checkbox":
        return <CheckboxField key={field.id} {...props} />;
      case "date":
        return <DateField key={field.id} {...props} />;
      default:
        return null;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="form-title">
            <h2>{schema.title}</h2>
          </div>
          <div className="">{schema.fields.map(renderField)}</div>
          <div className="">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? schema.submitButton.loadingText
                : schema.submitButton.text}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormBuilder;
