import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import css from "./CustomDateInput.module.css";

const CustomDateInput = ({ field, form }) => {
  return (
    <DatePicker
      selected={field.value}
      onChange={(date) => form.setFieldValue(field.name, date)}
      dateFormat="dd/MM/yyyy"
      className={css.input}
      placeholderText="Booking date*"
    />
  );
};

export default CustomDateInput;
