import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        alert("Form submitted!");
        resetForm();
      }}
    >
      <Form>
        <h2>Formik Registration Form</h2>

        <label>Username</label>
        <Field name="username" />
        <ErrorMessage name="username" component="div" />

        <label>Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" />

        <label>Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}