import {FC, useEffect} from 'react';
import BreadCrumps from '../components/BreadСrumps/BreadCrumpts';
import ProductBottom from '../components/Product/ProductBottom/ProductBottom';
import ProductCenter from '../components/Product/ProductCenter/ProductCenter';
import ProductTop from '../components/Product/ProductTop/ProductTop';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const ProductPage: FC = () => {
    const { getSliderPlants, getPlant } = useActions();
    const { SliderPlants, Plant } = useTypedSelector(state => state.Plant);
    const productId = Number(window.location.pathname.slice(9));

    useEffect(() => {
        getSliderPlants();
        getPlant(productId);
    }, []);

    return (
        <main>
            <div className="container">
                <BreadCrumps Url={'Shop'} />
                <ProductTop Plant={Plant} />
                <ProductCenter PlantDescription={Plant.description} />
                <ProductBottom SliderPlants={SliderPlants}  />
            </div>
        </main>
    );
};

export default ProductPage;