import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import 'swiper/css';
import styled, { css } from 'styled-components';
import Logo from "/images/logo.png"

const Main = () => {
    const [controlledSwiper, setControlledSwiper] = useState(null);

    // const slideToMainSwiper = (swiper, index) => {
    //     swiper.slideTo(index);
    //     mainSwiper.slideTo(index);
    // }

    return (
        <>
            <Azureheader>
                <h1>
                    <img src={Logo} alt='애져 로고' />
                </h1>

                <AzureSearchForm>
                    <fieldset>
                        <legend>검색</legend>
                        <input type="search" />
                        <button type='submit' /> 
                    </fieldset>
                </AzureSearchForm>
            </Azureheader>

            <AzureGnb>
                <Swiper
                    wrapperTag='ul'
                    slidesPerView={'auto'}
                    modules={[Controller]} 
                    onSwiper={setControlledSwiper}
                    // onClick={(swiper) => slideToMainSwiper(swiper, swiper.clickedIndex)}
                >
                    <SwiperSlide tag='li'>
                        <button type='button'>홈</button>
                    </SwiperSlide>
                    <SwiperSlide tag='li'>
                        <button type='button'>뉴스</button>
                    </SwiperSlide>
                    <SwiperSlide tag='li'>
                        <button type='button'>연예</button>
                    </SwiperSlide>
                    <SwiperSlide tag='li'>
                        <button type='button'>스포츠</button>
                    </SwiperSlide>
                    <SwiperSlide tag='li'>
                        <button type='button'>웹툰</button>
                    </SwiperSlide>
                    <SwiperSlide tag='li'>
                        <button type='button'>게임</button>
                    </SwiperSlide>
                    <SwiperSlide tag='li'>
                        <button type='button'>쇼핑</button>
                    </SwiperSlide>
                    <SwiperSlide tag='li'>
                        <button type='button'>자동차</button>
                    </SwiperSlide>
                    <SwiperSlide tag='li'>
                        <button type='button'>리빙</button>
                    </SwiperSlide>
                    <SwiperSlide tag='li'>
                        <button type='button'>우리동네</button>
                    </SwiperSlide>
                </Swiper>
            </AzureGnb>

            <AzureMain>
                <Swiper
                    tag='section'
                    slidesPerView={1}
                    modules={[Controller]} 
                    controller={{ control: controlledSwiper }} 
                >
                    <SwiperSlide>홈</SwiperSlide>
                    <SwiperSlide>뉴스</SwiperSlide>
                    <SwiperSlide>연예</SwiperSlide>
                    <SwiperSlide>스포츠</SwiperSlide>
                    <SwiperSlide>웹툰</SwiperSlide>
                    <SwiperSlide>게임</SwiperSlide>
                    <SwiperSlide>쇼핑</SwiperSlide>
                    <SwiperSlide>자동차</SwiperSlide>
                    <SwiperSlide>리빙</SwiperSlide>
                    <SwiperSlide>우리동네</SwiperSlide>
                </Swiper>
            </AzureMain>

            <AzureFooter>
                <span>© 2023. azure All rights reserved.</span>
            </AzureFooter>
        </>
    )
}

const FlexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Azureheader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    padding: 0 12px;
    background-color: ${props => props.theme.neutralA};
    font-size: 20px;
    line-height: 48px;

    h1 {
        ${FlexCenter};
        width: 32px;
        height: 32px;

        img {
            width: 100%;
        }
    }
`

const AzureSearchForm = styled.form`
    display: none;
    flex: 1;
`

const AzureGnb = styled.nav`
    position: sticky;
    top: 0;
    background-color: ${props => props.theme.primaryColor};

    .swiper-slide { 
        width: auto; 
        padding: 0 12px;

        button {
            ${FlexCenter};
            position: relative;
            width: 100%;
            height: 48px;
            font-size: 20px;
            color: ${props => props.theme.neutralB};
            opacity: 0.7;

            &::after {
                content: '';
                width: 100%;
                height: 4px;
                position: absolute;
                left: 0;
                bottom: 0;
                background-color: transparent;
            }
        }

        &.swiper-slide-active {
            button {
                color: ${props => props.theme.neutralA};
                opacity: 1;

                &::after {
                    background-color: ${props => props.theme.neutralA};
                }
            }
        }
    }
`

const AzureMain = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;

    .swiper {
        width: 100%;
    }

    .swiper-slide {
        padding: 12px;
    }
`

const AzureFooter = styled.footer`
    ${FlexCenter};
    height: 36px;
    border-top: 1px ${props => props.theme.neutralB} solid;
    color: ${props => props.theme.neutralD};
`

export default Main;
