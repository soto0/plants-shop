import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumps from '../components/BreadСrumps/BreadCrumpts';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import ShoppingCartSlider from '../components/ShoppingCart/ShoppingCartSlider/ShoppingCartSlider';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const ShoppingCartPage: FC = () => {
    const { getSliderPlants, getLikesProduct, getShoppingCart } = useActions();
    const { User } = useTypedSelector(state => state.Login);
    const navigate = useNavigate();

    useEffect(() => {
        getSliderPlants();

        if (User.userName !== undefined) {
            getLikesProduct(User.userName);
        } else {
            navigate('/');
        }

        getShoppingCart(User.userName);
    }, [User]);

    return (
        <main>
            <div className="container">
                <BreadCrumps Url={'Shop / Shopping Cart'} />
                <ShoppingCart User={User} GetShoppingCart={getShoppingCart} />
                <ShoppingCartSlider />
            </div>
        </main>
    );
};

export default ShoppingCartPage;