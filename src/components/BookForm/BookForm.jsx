import { Field, Form, Formik } from "formik";

import toast from "react-hot-toast";

import CustomDateInput from "../CustomDateInput/CustomDateInput.jsx";

import css from "./BookForm.module.css";

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
    <div className={css.wrap}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.label}>
        Stay connected! We are always ready to help you.
      </p>
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
            className={css.textarea}
            placeholder="Comment"
            name="comment"
          />

          <button className={css.btn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
