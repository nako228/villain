
import NewCurs1 from "../../assets/images/NewCurs1.png"
import NewCurs2 from "../../assets/images/NewCurs2.png"

import "./style.scss"
import Time from "../../assets/images/time.png";
import Money from "../../assets/images/money.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';


function NewExcurc(props) {
    return ( 
        <div className="main-excurs">
         <div className="second-excurs">
            <span>Популярные экскурсии</span>
            <span>Смотреть все</span>
         </div>
         
         

         <div className="values-wrapper">
            <Swiper
                slidesPerView={5}
                spaceBetween={55}

                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    230: {
                        slidesPerView: 1,
                        spaceBetween: 11,
                    },
                    430: {
                        slidesPerView: 2,
                        spaceBetween: 55,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 44,
                    },
                    1024: {
                        slidesPerView: 4.8,
                        spaceBetween: 44,
                    },
                }}
                speed={300}
                modules={[Pagination]}
                className="mySwiper"
            >
              
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs2})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>Конный тур</h5>
                            <h3>Конные прогулки</h3>
                            <h6><img src={Time} alt="watch-icon" />1.5 часа</h6>
                            <h6><img src={Money} alt="money-icon" />1809 ₽</h6>
                            <p>Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...</p>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs1})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>Квадротур</h5>
                            <h3>Пасть дракона</h3>
                            <h6><img src={Time} alt="watch-icon" />2.5 часов</h6>
                            <h6><img src={Money} alt="money-icon" />3515 ₽</h6>
                            <p>Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или 'Пасть Дракона' (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...</p>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>
              
              
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs2})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>Конный тур</h5>
                            <h3>Конные прогулки</h3>
                            <h6><img src={Time} alt="watch-icon" />1.5 часа</h6>
                            <h6><img src={Money} alt="money-icon" />1809 ₽</h6>
                            <p>Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...</p>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs1})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>Квадротур</h5>
                            <h3>Пасть дракона</h3>
                            <h6><img src={Time} alt="watch-icon" />2.5 часов</h6>
                            <h6><img src={Money} alt="money-icon" />3515 ₽</h6>
                            <p>Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или 'Пасть Дракона' (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...</p>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs2})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>Конный тур</h5>
                            <h3>Конные прогулки</h3>
                            <h6><img src={Time} alt="watch-icon" />1.5 часа</h6>
                            <h6><img src={Money} alt="money-icon" />1809 ₽</h6>
                            <p>Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...</p>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs1})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>Квадротур</h5>
                            <h3>Пасть дракона</h3>
                            <h6><img src={Time} alt="watch-icon" />2.5 часов</h6>
                            <h6><img src={Money} alt="money-icon" />3515 ₽</h6>
                            <p>Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или 'Пасть Дракона' (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...</p>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>   <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs2})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>Конный тур</h5>
                            <h3>Конные прогулки</h3>
                            <h6><img src={Time} alt="watch-icon" />1.5 часа</h6>
                            <h6><img src={Money} alt="money-icon" />1809 ₽</h6>
                            <p>Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...</p>
                            <button className="blue-btn">Подробнее</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="value-item">
                        <div className='value-info' style={{
                            backgroundImage: `url(${NewCurs1})`,
                            height: "497px",
                            borderRadius: "10px"
                        }}>
                            <h5>Квадротур</h5>
                            <h3>Пасть дракона</h3>
                            <h6><img src={Time} alt="watch-icon" />2.5 часов</h6>
                            <h6><img src={Money} alt="money-icon" />3515 ₽</h6>
                            <p>Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или 'Пасть Дракона' (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...</p>
                            <button className="blue-btn">Подробнее</button>
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

   


         </div>
       
     );
}

export default NewExcurc;