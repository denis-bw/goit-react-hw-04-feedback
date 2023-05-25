import styled from '@emotion/styled'

export const BTNfeedback = styled.button`
    padding: 8px;
    min-width: 140px;
    min-height: 50px;
    border: solid;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    border-radius: 25px;
    color: #FFFFFF;
    background: ${
    (prop) => {
        if (prop.children === "good") return prop.theme.colors.green;
        if (prop.children === "neutral") return prop.theme.colors.neutral;
        if (prop.children === "bad") return prop.theme.colors.bad;
    }};
    
`
// #50b873

export const ContainetButonsFeedback = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

