import { Field, Form, Formik } from 'formik';
import { FC, useState } from 'react';
import s from './../Categories.module.css';

interface PriceSort {
    GetPlants: any,
    Plants: [],
    Category: string | undefined,
    Size: string | undefined,
    NewArrivals: boolean,
    Sale: boolean,
    PriceCount: number | undefined,
    SetPriceCount: any
}

const PriceSort: FC<PriceSort> = (props: PriceSort) => {
    return (
        <Formik
            initialValues={{ price: 199 }}
            onSubmit={values => {
                props.GetPlants(props.NewArrivals, props.Sale, props.Category, props.Size, values.price);
            }}
        >
            {({ values, handleBlur }) => (
                <Form className={s.price__block}>
                    <Field
                        type='range'
                        name='price'
                        className={s.price}
                        min='39'
                        max='199'
                        values={values}
                        handleChange={props.SetPriceCount(values.price)}
                        handleBlur={handleBlur}
                    />
                    <p className="price__count">Price: <span>${props.PriceCount}</span></p>
                    <button className="button filter__button" type='submit'>Filter</button>
                </Form>
            )}
        </Formik>
    );
};

export default PriceSort;