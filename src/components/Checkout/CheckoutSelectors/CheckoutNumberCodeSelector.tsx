import { FC } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import s from './../Checkout.module.css';

interface CheckoutSelectorProps {
    SelectorValue: string,
    SelectorSetValue: any,
};

const CheckoutNumberCodeSelector: FC<CheckoutSelectorProps> = (props: CheckoutSelectorProps) => {
    const { getNumberCodes, ClearSelectors } = useActions();
    const { NumberCodes } = useTypedSelector(state => state.Checkout);

    const setValue = (e: any) => {
        props.SelectorSetValue(e.target.innerText);
        ClearSelectors();
    };

    const popupToggle = () => {
        if ( NumberCodes.length === 0) {
            getNumberCodes();
        } else {
            ClearSelectors();
        }
    };

    return (
        <div className={s.selector}>
            <p className={s.selector__value} onClick={popupToggle}>{props.SelectorValue}</p>
            <div className={s.selector__options}>
                {
                    NumberCodes ?
                        NumberCodes.map((numberCode: any) => {
                            return (
                                <p className={s.selector__option} onClick={setValue}>{numberCode.dial_code}</p>
                            )
                        }) :
                        undefined
                }
            </div>
        </div>
    );
};

export default CheckoutNumberCodeSelector;