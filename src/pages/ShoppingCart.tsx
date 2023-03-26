import { FC, useEffect } from 'react';
import BreadCrumps from '../components/BreadСrumps/BreadCrumpts';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';
import ShoppingCartSlider from '../components/ShoppingCart/ShoppingCartSlider/ShoppingCartSlider';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const ShoppingCartPage: FC = () => {
    const { getSliderPlants, getLikesProduct } = useActions();
    const { User } = useTypedSelector(state => state.Login);

    useEffect(() => {
        getSliderPlants();

        if (User.userName !== undefined) {
            getLikesProduct(User.userName);
        }
    }, [User]);

    return (
        <main>
            <div className="container">
                <BreadCrumps Url={'Shop / Shopping Cart'} />
                <ShoppingCart />
                <ShoppingCartSlider />
            </div>
        </main>
    );
};

export default ShoppingCartPage;