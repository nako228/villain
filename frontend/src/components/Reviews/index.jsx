import "./style.scss"
import ivan from "../../assets/images/ivan.png"
import ivan2 from "../../assets/images/ivan2.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';

function Reviews() {
    return (
        <div className="reviews-wrapper">
            <div className="top">
                <span>Отзывы</span>
                <span>Смотреть все</span>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    230: {
                        slidesPerView: 1.3,
                        spaceBetween: 11,
                    },
                    430: {
                        slidesPerView: 1.5,
                        spaceBetween: 55,
                    },
                    768: {
                        slidesPerView: 2,
                    }
                }}
                speed={300}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="container">
                        <img src={ivan} alt="Reviews-images-1" />
                        <div>
                            <h3>Иван Иванов, 25 лет</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <img src={ivan2} alt="Reviews-images-1" />
                        <div>
                            <h3>Иван Иванов, 25 лет</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <img src={ivan} alt="Reviews-images-1" />
                        <div>
                            <h3>Иван Иванов, 25 лет</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <img src={ivan2} alt="Reviews-images-1" />
                        <div>
                            <h3>Иван Иванов, 25 лет</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <img src={ivan} alt="Reviews-images-1" />
                        <div>
                            <h3>Иван Иванов, 25 лет</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <img src={ivan2} alt="Reviews-images-1" />
                        <div>
                            <h3>Иван Иванов, 25 лет</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>
            </Swiper>
        </div>
    );
}

export default Reviews;