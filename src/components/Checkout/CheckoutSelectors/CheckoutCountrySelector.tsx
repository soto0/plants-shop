import { FC } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import s from './../Checkout.module.css';

interface CheckoutSelectorProps {
    SelectorValue: string,
    SelectorSetValue: any,
};

const CheckoutCountrySelector: FC<CheckoutSelectorProps> = (props: CheckoutSelectorProps) => {
    const { getCountries, ClearSelectors } = useActions();
    const { Countries } = useTypedSelector(state => state.Checkout);

    const setValue = (e: any) => {
        props.SelectorSetValue(e.target.innerText);
        ClearSelectors();
    };

    const popupToggle = () => {
        if ( Countries.length === 0) {
            getCountries();
        } else {
            ClearSelectors();
        }
    };

    return (
        <div className={s.selector}>
            <p className={s.selector__value} onClick={popupToggle}>{props.SelectorValue}</p>
            <div className={s.selector__options}>
                {
                    Countries ?
                        Countries.map((country: any) => {
                            return (
                                <p className={s.selector__option} onClick={setValue} key={country.name.official}>{country.name.official}</p>
                            )
                        })
                        : undefined
                }
            </div>
        </div>
    );
};

export default CheckoutCountrySelector;