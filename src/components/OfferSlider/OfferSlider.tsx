import {FC} from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './../Main/ProductCard/ProductCard';

interface OfferSlider {
    LikesProduct: any,
    BasketToggle: any,
    FilterSlider: any
};

const OfferSlider: FC<OfferSlider> = (props: OfferSlider) => {
    return (
        <Swiper
                className="offer__slider"
                slidesPerView={'auto'}
                modules={[Pagination]}
                spaceBetween={52}
                pagination={{ clickable: true }}
            >
                {
                    props.FilterSlider.map((plant: any) => {
                        return (
                            <SwiperSlide className="offer__slide">
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
                                    LikesProduct={props.LikesProduct} 
                                    BasketToggleProduct={props.BasketToggle} 
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
    );
};

export default OfferSlider;