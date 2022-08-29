import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useFormik } from 'formik';
import validate from './validate';

import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import Api from '../../api';

import { CARD_SHADOW, BP, COLOR } from '../../styles/constants';
import { createDate } from '../../utils/date-helpers';
import { LeafLetMap } from '../shared/LeafLetMap';



export type FormValues = typeof initialValues;

const initialValues = {
  title: '',
  name: '',
  date: '',
  time: '',
  location: '',
};

const CreateEventForm = (): JSX.Element => {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async ({ date, time, ...values }: any) => {
      setSubmitting(true);
      console.log({ date, time, ...values });
      const dateAndTime = createDate(date, time).toISOString();
      console.log(dateAndTime, 'dateAndTime');
      await Api.members.create({ ...values, date: dateAndTime });
      navigate('/members');
    },
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = formik;

  const handleLocationChange = (locationText: string) => {
    setFieldValue('location', locationText);
  };

  return (
    <Container>
      <h1>Create new meeting</h1>
      <h2>Enter details below.</h2>

      <form onSubmit={handleSubmit} noValidate>
        <Input
          name="title"
          label="Meeting Title/ Cause of Meeting"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          validationMessage={touched.title ? errors.title : undefined}
        />
        <Input
          name="name"
          label="Member Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          validationMessage={
            touched.name ? errors.name: undefined
          }
        />
        <Input
          name="date"
          type="date"
          label="Date of Meeting"
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          validationMessage={touched.date ? errors.date : undefined}
        />
        <Input
          name="time"
          type="time"
          label="Time"
          value={values.time}
          onChange={handleChange}
          onBlur={handleBlur}
          validationMessage={touched.time ? errors.time : undefined}
        />
        <Input
          name="location"
          label="Please select the location from the map below !"
          value={values.location}
          disabled
          validationMessage={touched.location ? errors.location : undefined}
        />
        <LeafLetMap handleLocationChange={handleLocationChange} />

        <SubmitButton
          size="big"
          color="green"
          type="submit"
          loading={submitting}
          disabled={!!Object.keys(errors).length}
        >
          CREATE NEW MEETING
        </SubmitButton>
      </form>
    </Container>
  );
};

const Container = styled.div`
  background: ${COLOR.WHITE_PAGE_BACKGROUND};
  width: 70rem;
  padding: 4rem;
  box-shadow: ${CARD_SHADOW};
  text-align: center;
  position: relative;
  top: -4rem;
  @media (max-width: ${BP.MOBILE}) {
    width: 100%;
  }
  > form {
    margin-top: 3rem;
  }
`;
const SubmitButton = styled(Button)`
  margin: 5rem auto 0;
`;

export default CreateEventForm;
