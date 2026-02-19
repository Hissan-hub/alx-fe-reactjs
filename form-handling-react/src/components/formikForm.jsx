import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
  });

  return (
    <div>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Formik Submitted:", values);
        }}
      >
        <Form>

          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />

          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />

          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit">Submit</button>

        </Form>
      </Formik>
    </div>
  );
}