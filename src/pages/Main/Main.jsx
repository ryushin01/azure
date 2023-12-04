import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import styled, { css } from 'styled-components';
import Logo from "/images/logo.png"
import 'swiper/css';
import "swiper/css/pagination";

const Main = () => {

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
                <AzureMenuList>
                    <AzureMenuListItem className='menu' />
                </AzureMenuList>
            </AzureGnb>

            <AzureMain>
                <Swiper
                    tag='section'
                    slidesPerView={1}
                    modules={[Pagination]} 
                    pagination={{
                        el: '.menu',
                        clickable: true,
                        type: 'custom',
                        renderCustom: function () {
                            return `<button type="button">menu</button>`;
                        },
                    }}
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
`

const AzureMenuList = styled.ul`
    ${FlexCenter};
`

const AzureMenuListItem = styled.li`
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

    // button {
    //     color: ${props => props.theme.neutralA};
    //     opacity: 1;

    //     &::after {
    //         background-color: ${props => props.theme.neutralA};
    //     }
    // }
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
