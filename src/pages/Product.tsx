import {FC, useEffect} from 'react';
import BreadCrumps from '../components/BreadСrumps/BreadCrumpts';
import ProductBottom from '../components/Product/ProductBottom/ProductBottom';
import ProductCenter from '../components/Product/ProductCenter/ProductCenter';
import ProductTop from '../components/Product/ProductTop/ProductTop';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const ProductPage: FC = () => {
    const { getPlant } = useActions();
    const { SliderPlants } = useTypedSelector(state => state.Plant);

    useEffect(() => {
        getPlant();
    }, []);

    return (
        <main>
            <div className="container">
                <BreadCrumps Url={'Shop'} />
                <ProductTop />
                <ProductCenter />
                <ProductBottom SliderPlants={SliderPlants}  />
            </div>
        </main>
    );
};

export default ProductPage;