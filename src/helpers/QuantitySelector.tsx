import { FC } from 'react';

interface QuantitySelectorProps {
    SetCount: any,
    Count: number,
}

const QuantitySelector: FC<QuantitySelectorProps> = (props: QuantitySelectorProps) => {
    const deleteCount = () => {
        props.SetCount(props.Count - 1);
    };

    const addCount = () => {
        props.SetCount(props.Count + 1);
    };

    return (
        <div className="count__block">
            <button type="button" disabled={props.Count === 1 ? true : false} className="count_btn" onClick={deleteCount}>-</button>
            <div className="count">{props.Count}</div>
            <button type="button" disabled={props.Count === 4 ? true : false} className="count_btn" onClick={addCount}>+</button>
        </div>
    );
};

export default QuantitySelector;