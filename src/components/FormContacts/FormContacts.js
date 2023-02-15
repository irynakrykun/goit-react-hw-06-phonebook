import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Button, FormLabel, FormErr } from './FormContacts.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(9).max(11).required(),
});

const initialValues = {
  name: '',
  number: '',
  id: nanoid(4),
};

const FormContacts = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(addContact(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormLabel autoComplete="off">
        <label htmlFor="name">
          Name  
          <Field type="text" name="name" />
          <FormErr name="name" />
        </label>
        <label htmlFor="number">
          Number  
          <Field type="tel" name="number" />
          <FormErr name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </FormLabel>
    </Formik>
  );
};

FormContacts.propTypes = {
  initialValues: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  validationSchema: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default FormContacts;
