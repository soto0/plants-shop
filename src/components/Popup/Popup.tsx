import { FC, useState } from "react";
import * as yup from "yup";
import s from "./Popup.module.css";
import { Field, Formik, Form } from "formik";
import Close from "./../../assets/images/close.svg";
import togglePasswordIcon from './../../assets/images/toggle__password.svg';
import { Registration } from "../../api/Registration";

interface PopupProps {
    PopupActive: boolean,
    OnClickPopupButton: any
};

const Popup: FC<PopupProps> = (props: PopupProps) => {
    const [passwordType, setPasswordType] = useState("password");
    const validationSchema = yup.object().shape({
        userName: yup.string().required("Name is required"),
        email: yup.string().required("Email is required").email("Email is invalid"),
        password: yup.string().required("Password is required"),
        confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref("password")], "Your passwords do not match.")
    });

    const togglePassword = () => {
        if (passwordType === "password") {
            return setPasswordType("text");
        } else {
            setPasswordType("password");
        }
    };

    return (
        <>
            <div className={props.PopupActive ? s.popup__back_active : s.popup__back} onClick={props.OnClickPopupButton}></div>
            <div className={props.PopupActive ? s.popup_active : s.popup}>
                <img src={Close} alt="close" className={s.close} onClick={props.OnClickPopupButton} />
                <div className={s.title}>
                    <p className={s.login}>Login</p>
                    |
                    <p className={s.register__active}>Register</p>
                </div>
                <div className={s.form__block}>
                    <p className={s.form__text}>Enter your email and password to register.</p>
                    <Formik
                        initialValues={{ userName: "", email: "", password: "", confirmPassword: "" }}
                        validationSchema={validationSchema}
                        onSubmit={values => {
                            Registration(values.userName, values.email, values.password);
                            props.OnClickPopupButton();
                        }}
                    >
                        {({ values, handleBlur, handleChange, isValid, touched, errors }) => (
                            <Form className={s.form}>
                                <Field
                                    type="text"
                                    name="userName"
                                    className={s.input}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.userName}
                                    placeholder="Username"
                                />
                                {touched.userName && errors.userName && <p className={s.error}>{errors.userName}</p>}
                                <Field
                                    type="email"
                                    name="email"
                                    className={s.input}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="Enter your email address"
                                />
                                {touched.email && errors.email && <p className={s.error}>{errors.email}</p>}
                                <div className={s.password__input}>
                                    <Field
                                        type={passwordType === "password" ? "password" : "text"}
                                        name="password"
                                        className={s.input}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder="Password"
                                    />
                                    <img src={togglePasswordIcon} className={s.togglePassword} onClick={togglePassword} />
                                </div>
                                {touched.password && errors.password && <p className={s.error}>{errors.password}</p>}
                                <Field
                                    type="password"
                                    name="confirmPassword"
                                    className={s.input}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    placeholder="Confirm Password"
                                />
                                {touched.confirmPassword && errors.confirmPassword && <p className={s.error}>{errors.confirmPassword}</p>}
                                <button type="submit" disabled={!isValid} className="button register">Register</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default Popup;