import React from 'react';
import styled from 'styled-components';

const Movies = () => {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372" />
                </Wrap>
                <Wrap>
                    <img src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/03/star-wars-order.png" />
                </Wrap>
                <Wrap>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_skywalkersaga_mobile_19267_e964ed2c.jpeg?region=0,0,640,400" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
   

    img {
        height: 100%;
        width: 100px;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    }
`;
