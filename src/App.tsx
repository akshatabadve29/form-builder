import React, { useEffect, useState } from "react";
import FormBuilder from "./components/FormBuilder";
import { FormSchema } from "./types/schema";
import "./app.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
    <>
      {" "}
      <Header />
      <div className="container p-30">
        <div className="form-container">
          {isLoading ? (
            <div className="loading-container">
              <h2>Form is loading...!</h2>
            </div>
          ) : schema ? (
            <FormBuilder schema={schema} />
          ) : (
            <p>No form data</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
