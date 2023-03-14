import { FC } from 'react';
import * as yup from 'yup';
import s from './../Footer.module.css';
import { Field, Form, Formik } from 'formik';

const FooterForm: FC = () => {
    const validationSchema = yup.object().shape({
        email: yup.string().required('Email is required').email('Email is invalid'),
    });

    return (
        <div className={s.footer__form}>
            <p className={s.form__title}>Would you like to join newsletters?</p>
            <Formik
                initialValues={{ email: '' }}
                onSubmit={values => {
                    console.log(values);
                }}
                validationSchema={validationSchema}
            >
                {({ values, handleChange, handleBlur, isValid, touched, errors }) => (
                    <Form className={s.form}>
                        <Field
                            type='email'
                            name='email'
                            className={s.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder='enter your email address...'
                        />
                        {touched.email && errors.email && <p className={s.error}>{errors.email}</p>}
                        <button className='button send' type='submit' disabled={!isValid}>Join</button>
                    </Form>
                )}
            </Formik>
            <p className={s.form__text}>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
        </div>
    );
};

export default FooterForm;