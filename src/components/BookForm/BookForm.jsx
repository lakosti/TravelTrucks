import { Field, Form, Formik } from "formik";

import toast from "react-hot-toast";

import css from "./BookForm.module.css";

import CustomDateInput from "../CustomDateInput/CustomDateInput.jsx";

const initialValue = {
  name: "",
  email: "",
  date: null,
  comment: "",
};

const BookForm = () => {
  const handleSubmit = (_, actions) => {
    toast.success("Successfully booked camper!");
    actions.resetForm();
  };

  return (
    <>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            placeholder="Name*"
            name="name"
          />
          <Field
            className={css.input}
            type="email"
            placeholder="Email*"
            name="email"
          />
          <Field name="date" component={CustomDateInput} />
          <Field
            as="textarea"
            className={css.input}
            placeholder="Comment"
            name="comment"
          />
          <button className={css.btn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default BookForm;
