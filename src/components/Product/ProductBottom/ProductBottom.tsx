import { FC } from 'react';
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ProductCard from '../../Main/ProductCard/ProductCard';
import s from './ProductBottom.module.css';

interface ProductBottomProps {
    SliderPlants: []
};

const ProductBottom: FC<ProductBottomProps> = (props: ProductBottomProps) => {
    const { LikesProduct } = useTypedSelector(state => state.Likes);
    const { BasketToggle } = useTypedSelector(state => state.Basket);
    
    return (
        <div className={s.product__bottom}>
            <h3 className={s.product__title}>Releted Products</h3>
            <Swiper
                className={s.product__slider}
                slidesPerView={'auto'}
                modules={[Pagination]}
                spaceBetween={52}
                pagination={{ clickable: true }}
            >
                {
                    props.SliderPlants.map((plant: any) => {
                        return (
                            <SwiperSlide className={s.slide}>
                                <ProductCard 
                                    Category={plant.category} 
                                    Id={plant.id} 
                                    New={plant.new} 
                                    Price={plant.price} 
                                    Sale={plant.sale} 
                                    SaleInterest={plant.saleInterest} 
                                    OldPrice={plant.OldPrice} 
                                    Size={plant.OldPrice} 
                                    Title={plant.title} 
                                    LikesProduct={LikesProduct} 
                                    BasketToggleProduct={BasketToggle} 
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default ProductBottom;