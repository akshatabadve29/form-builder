import { Field } from "../../types/schema";

const validateField = (field: Field, value: any): string | null => {
  if (!field.validation) return null;

  for (const rule of field.validation) {
    switch (rule.type) {
      case "required":
        if (value === undefined || value === "" || value === null || value === false) {
          return rule.message;
        }
        break;
      case "minLength":
        if (typeof value === "string" && value.length < (rule.value || 0)) {
          return rule.message;
        }
        break;
      case "maxLength":
        if (typeof value === "string" && value.length > (rule.value || 0)) {
          return rule.message;
        }
        break;
      case "min":
        if (typeof value === "number" && value < (rule.value || 0)) {
          return rule.message;
        }
        break;
      case "max":
        if (typeof value === "number" && value > (rule.value || 0)) {
          return rule.message;
        }
        break;
      default:
        break;
    }
  }

  return null;
};

export default validateField;
