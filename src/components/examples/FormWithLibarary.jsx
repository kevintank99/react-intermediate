import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = { name: "", email: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = (values) => {
    console.log("Formik Form Data:", values);
  };

  return (
    <div className="p-4 border rounded mt-4">
      <h2 className="text-lg font-bold mb-4 text-black">Formik Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={true} 
      >
        <Form>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className="border p-2 mb-1 w-full text-black"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 mb-2"
          />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 mb-1 w-full text-black"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 mb-2"
          />

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
