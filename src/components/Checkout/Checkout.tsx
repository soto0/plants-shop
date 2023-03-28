import { FC, useState } from 'react';
import * as yup from 'yup';
import s from './Checkout.module.css';
import { Field, Form, Formik } from 'formik';
import CheckoutCountrySelector from './CheckoutSelectors/CheckoutCountrySelector';
import CheckoutNumberCodeSelector from './CheckoutSelectors/CheckoutNumberCodeSelector';
import CheckoutProducts from './CheckoutProducts/CheckoutProducts';
import { addOrder } from '../../api/AddOrder';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Checkout: FC = () => {
    const { User } = useTypedSelector(state => state.Login);
    const [ country, setCountry ] = useState('Select a country / region');
    const [ numberCode, setNumberCode ] = useState('+7');

    const zipValidation = /^\d+$/;
    const validationSchema = yup.object().shape({
        first_name: yup.string().required('*'),
        last_name: yup.string().required('*'),
        city: yup.string().required('*'),
        street: yup.string().required('*'),
        zip: yup.string().required('*').matches(zipValidation, '*'),
        email: yup.string().required('*').email('Email is invalid'),
    });

    return (
        <Formik
            initialValues={{
                first_name: '',
                last_name: '',
                city: '',
                street: '',
                street_two: '',
                zip: '',
                email: ''
            }}
            onSubmit={(values, { resetForm })=> {
                addOrder(
                    values.first_name, 
                    values.last_name, 
                    country, 
                    values.city, 
                    values.street, 
                    values.street_two, 
                    values.zip, 
                    values.email, 
                    numberCode,
                    User.userName
                );
                resetForm();
            }}
            validationSchema={validationSchema}
        >
            {({ values, handleChange, handleBlur, isValid, errors }) => (
                <Form className={s.form}>
                    <div className={s.form__left}>
                        <h3 className={s.title}>Billing Address</h3>
                        <div className={s.form__blocks}>
                            <div className={s.form__block}>
                                <label htmlFor="first_name" className={s.form__field_label}>
                                    First Name
                                    {errors.first_name && <p className={s.error}>{errors.first_name}</p>}
                                </label>
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
                                <label htmlFor="last_name" className={s.form__field_label}>
                                    Last Name
                                    {errors.last_name && <p className={s.error}>{errors.last_name}</p>}
                                </label>
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
                                <label htmlFor="country" className={s.form__field_label}>
                                    Country / Region{country === 'Select a country / region' ? <p className={s.error}>*</p> : undefined}
                                </label>
                                <CheckoutCountrySelector SelectorValue={country} SelectorSetValue={setCountry} />
                            </div>
                            <div className={s.form__block}>
                                <label htmlFor="city" className={s.form__field_label}>
                                    Town / City
                                    {errors.city && <p className={s.error}>{errors.city}</p>}
                                </label>
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
                                <label htmlFor="street" className={s.form__field_label}>
                                    Street Address
                                    {errors.street && <p className={s.error}>{errors.street}</p>}
                                </label>
                                <Field
                                    id='street'
                                    type='text'
                                    name='street'
                                    className={s.form__field}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.street}
                                />
                            </div>
                            <div className={s.form__block}>
                                <Field
                                    type='text'
                                    name='street_two'
                                    className={s.form__field}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.street_two}
                                />
                            </div>
                            <div className={s.form__block}>
                                <label htmlFor="zip" className={s.form__field_label}>
                                    Zip
                                    {errors.zip && <p className={s.error}>{errors.zip}</p>}
                                </label>
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
                                <label htmlFor="email" className={s.form__field_label}>
                                    Email address
                                    {errors.email && <p className={s.error}>{errors.email}</p>}
                                </label>
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
                                <CheckoutNumberCodeSelector SelectorValue={numberCode} SelectorSetValue={setNumberCode} />
                            </div>
                        </div>
                    </div>
                    <div className={s.form__right}>
                        <h3 className={s.title}>Your Order</h3>
                        <CheckoutProducts User={User} />
                        <button type='submit' disabled={!isValid && country === 'Select a country / region'} className="order button">Place Order</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Checkout;