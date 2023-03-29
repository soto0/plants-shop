import {FC, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumps from '../components/BreadCrumps/BreadCrumps';
import Checkout from '../components/Checkout/Checkout';
import { useTypedSelector } from '../hooks/useTypedSelector';

const CheckoutPage: FC = () => {
    const { User } = useTypedSelector(state => state.Login);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!User.userName) {
            navigate('/');
        }
    }, [User]);

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