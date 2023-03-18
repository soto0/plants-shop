import { FC, useState } from "react";
import * as yup from "yup";
import s from "./Popups.module.css";
import { Field, Formik, Form } from "formik";
import Close from "./../../assets/images/close.svg";
import togglePasswordIcon from './../../assets/images/toggle__password.svg';
import { Registration } from "../../api/Registration";
import { NavLink } from "react-router-dom";
import { useActions } from "../../hooks/useActions";

interface PopupProps {
    PopupActive: boolean,
    OnClickPopupButton: any,
    Error: string | undefined,
    User: any
};

const Popup: FC<PopupProps> = (props: PopupProps) => {
    const { getLogin } = useActions();
    const [url, setUrl] = useState('Login');
    const [ passwordType, setPasswordType ] = useState("password");
    const [ registerError, setRegisterError ] = useState(true);

    const RegisterValidationSchema = yup.object().shape({
        userName: yup.string().required("Name is required"),
        email: yup.string().required("Email is required").email("Email is invalid"),
        password: yup.string().required("Password is required"),
        confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref("password")], "Your passwords do not match.")
    });

    const LoginValidationSchema = yup.object().shape({
        email: yup.string().required("Email is required").email("Email is invalid"),
        password: yup.string().required("Password is required"),
    });

    let togglePassword = () => {
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
                    <NavLink to='Login' className={({ isActive }) => isActive ? s.login__active : s.login} onClick={() => { setUrl('Login') }}>Login</NavLink>
                    |
                    <NavLink to='Register' className={({ isActive }) => isActive ? s.register__active : s.register} onClick={() => { setUrl('Register') }}>Register</NavLink>
                </div>
                <div className={s.form__block}>
                    <p className={s.form__text}>Enter your email and password to {url === 'Login' ? 'login' : 'register'}.</p>
                    <Formik
                        initialValues={{ userName: "", email: "", password: "", confirmPassword: "" }}
                        validationSchema={url === 'Login' ? LoginValidationSchema : RegisterValidationSchema}
                        onSubmit={values => {
                            if (url === 'Login') {
                                getLogin(values.email, props.OnClickPopupButton);
                            } else {
                                Registration(values.userName, values.email, values.password, setRegisterError, props.OnClickPopupButton, setUrl);
                            };
                        }}
                    >
                        {({ values, handleBlur, handleChange, isValid, touched, errors }) => (
                            <Form className={s.form}>
                                {
                                    url === 'Login' ?
                                        undefined :
                                        <Field
                                            type="text"
                                            name="userName"
                                            className={s.input}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.userName}
                                            placeholder="Username"
                                        />
                                }
                                {touched.userName && errors.userName && url === 'Register' && <p className={s.error}>{errors.userName}</p>}
                                { url !== 'Login' && registerError === false ? <p className={s.error}>User Name is already exists</p> : undefined} 
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
                                    <img src={togglePasswordIcon} alt="password__toggle" className={s.togglePassword} onClick={togglePassword} />
                                </div>
                                {touched.password && errors.password && <p className={s.error}>{errors.password}</p>}
                                {
                                    url === 'Login' ?
                                        undefined :
                                        <Field
                                            type="password"
                                            name="confirmPassword"
                                            className={s.input}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirmPassword}
                                            placeholder="Confirm Password"
                                        />
                                }
                                {touched.confirmPassword && errors.confirmPassword && url === 'Register' && <p className={s.error}>{errors.confirmPassword}</p>}
                                { url === 'Login' || props.Error === '' ? <p className={s.error}>{props.Error}</p> : undefined} 
                                <button type="submit" disabled={!isValid} className="button popup__btn">{url === 'Login' ? 'Login' : 'Register'}</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default Popup;