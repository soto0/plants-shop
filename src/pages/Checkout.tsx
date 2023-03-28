import {FC} from 'react';
import BreadCrumps from '../components/BreadCrumps/BreadCrumps';
import Checkout from '../components/Checkout/Checkout';

const CheckoutPage: FC = () => {
    return (
        <main>
            <div className="container">
                <BreadCrumps Url={'Shop / Checkout'} />
                <Checkout />
            </div>
        </main>
    );
};

export default CheckoutPage;