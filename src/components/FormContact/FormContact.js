import React from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { FormField, Form, ErrorMessage, Label, Button } from './FormContact.styled';
import PropTypes from 'prop-types';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { MdContactPhone } from 'react-icons/md';



const ContactSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});


export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}

      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAddContact({ ...values, id: nanoid() });
        // console.log (values);
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
        <Label>
          <MdContactPhone size="20"/>
          Name</Label>
          <Field  
          type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required/>
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          <Label>
          <BsFillTelephonePlusFill size="20"/>
          Number</Label>
          <Field  
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required/>
          <ErrorMessage name="name" component="div" /> 
        </FormField>
    
        <Button type="submit">Add contact</Button>
      </Form>
    
    </Formik>

  )}

  ContactForm.propType = {
    onSubmit: PropTypes.func.isRequired,
  };