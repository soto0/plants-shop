import { FC } from 'react';
import s from './Checkout.module.css';
import { Field, Form, Formik } from 'formik';

const Checkout: FC = () => {
    return (
        <Formik
            initialValues={{
                first_name: '',
                last_name: '',
                city: '',
                street_address: '',
                street_address_two: '',
                zip: '',
                email: '',
                order_notes: ''
            }}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({ values, handleChange, handleBlur, isValid, touched, errors }) => (
                <Form className={s.form}>
                    <div className={s.form__left}>
                        <div className={s.form__block}>
                            <label htmlFor="first_name" className={s.form__field_label}>First Name</label>
                            <Field
                                id='first_name'
                                type='text'
                                name='first_name'
                                className={s.form__field}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.first_name}
                            />
                        </div>
                        <div className={s.form__block}>
                            <label htmlFor="last_name" className={s.form__field_label}>Last Name</label>
                            <Field
                                id='last_name'
                                type='text'
                                name='last_name'
                                className={s.form__field}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.last_name}
                            />
                        </div>
                        <div className={s.form__block}>
                            <label htmlFor="country" className={s.form__field_label}>Country / Region</label>
                            <div className={s.country__selector} id='country'>Select a country / region</div>
                        </div>
                        <div className={s.form__block}>
                            <label htmlFor="city" className={s.form__field_label}>Town / City</label>
                            <Field
                                id='city'
                                type='text'
                                name='city'
                                className={s.form__field}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                            />
                        </div>
                        <div className={s.form__block}>
                            <label htmlFor="street" className={s.form__field_label}>Street Address</label>
                            <Field
                                id='street'
                                type='text'
                                name='street_address'
                                className={s.form__field}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.street_address}
                            />
                        </div>
                        <div className={s.form__block}>
                            <Field
                                type='text'
                                name='street_address_two'
                                className={s.form__field}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.street_address_two}
                            />
                        </div>
                        <div className={s.form__block}>
                            <label htmlFor="state" className={s.form__field_label}>State</label>
                            <div className={s.state__selector} id='state'>Select a state</div>
                        </div>
                        <div className={s.form__block}>
                            <label htmlFor="zip" className={s.form__field_label}>Zip</label>
                            <Field
                                id='zip'
                                type='text'
                                name='zip'
                                className={s.form__field}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.zip}
                            />
                        </div>
                        <div className={s.form__block}>
                            <label htmlFor="email" className={s.form__field_label}>Email address</label>
                            <Field
                                id='email'
                                type='email'
                                name='email'
                                className={s.form__field}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />

                        </div>
                        <div className={s.form__block}>
                            <label htmlFor="phone" className={s.form__field_label}>Phone Number</label>
                            <div className={s.phone__selector} id='phone'>+966</div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Checkout;