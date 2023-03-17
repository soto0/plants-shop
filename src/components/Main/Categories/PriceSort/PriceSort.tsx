import { Field, Form, Formik } from 'formik';
import { FC, useState } from 'react';
import s from './../Categories.module.css';

interface PriceSort {
    GetPlants: any
}

const PriceSort: FC<PriceSort> = (props: PriceSort) => {
    const [ priceCount, setPriceCount ] = useState<any>();
    
    return (
        <Formik
            initialValues={{ price: 39 }}
            onSubmit={values => {
                props.GetPlants(undefined, undefined, undefined, undefined, values.price)
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
                        handleChange={setPriceCount(values.price)}
                        handleBlur={handleBlur}
                    />
                    <p className="price__count">Price: <span>${priceCount}</span></p>
                    <button className="button filter__button" type='submit'>Filter</button>
                </Form>
            )}
        </Formik>
    );
};

export default PriceSort;

<div className={s.price__block}>
            <input type="range" min="39" max="1230" className={s.price} />
            <p className="price__count">Price: <span>$39</span></p>
            <button className="button filter__button">Filter</button>
        </div>