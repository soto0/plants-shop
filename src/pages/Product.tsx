import {FC, useEffect} from 'react';
import BreadCrumps from '../components/BreadCrumps/BreadCrumps';
import ProductBottom from '../components/Product/ProductBottom/ProductBottom';
import ProductCenter from '../components/Product/ProductCenter/ProductCenter';
import ProductTop from '../components/Product/ProductTop/ProductTop';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const ProductPage: FC = () => {
    const { getSliderPlants, getPlant, getLargeIcon } = useActions();
    const { SliderPlants, Plant, LargeIcon } = useTypedSelector(state => state.Plant);
    const productId = Number(window.location.pathname.slice(9));
    const { User } = useTypedSelector(state => state.Login);
    const { getLikesProduct } = useActions();

    useEffect(() => {
        getSliderPlants();
        getPlant(productId);

        if(User.userName) {
            getLikesProduct(User.userName);
        };
    }, [User, productId]);

    return (
        <main>
            <div className="container">
                <BreadCrumps Url={'Shop'} />
                <ProductTop Plant={Plant} GetLargeIcon={getLargeIcon} LargeIcon={LargeIcon} User={User} GetLikesProduct={getLikesProduct} />
                <ProductCenter PlantDescription={Plant.description} />
                <ProductBottom SliderPlants={SliderPlants} PlantTitle={Plant.title}  />
            </div>
        </main>
    );
};

export default ProductPage;