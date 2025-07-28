import React, { useEffect, useState } from "react";
import FormBuilder from "./components/FormBuilder";
import { FormSchema } from "./types/schema";

const App: React.FC = () => {
  const [schema, setSchema] = useState<FormSchema | null>(null);
  const [isLoading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://sharejson.com/api/v1/uzjxOUc_5VccqT-1XiEYf")
      .then((res) => res.json())
      .then((data: FormSchema) => {
        setSchema(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Dynamic Form Builder</h1>
      {isLoading ? (
        <p>Form is loading...!</p>
      ) : schema ? (
        <FormBuilder schema={schema} />
      ) : (
        <p>No form data</p>
      )}
    </div>
  );
};

export default App;
