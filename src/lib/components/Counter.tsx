import styled from "styled-components"

export const Counter = () => {

        return(
            <CounterContainer>
                <Sub>
                    -
                </Sub>
                <Result>
                    0
                </Result>
                <Add>
                    +
                </Add>
            </CounterContainer>
        )
}

const CounterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: 1;
    // background-color: #F1D3CE;
    justify-content: center;




`

const Sub = styled.div`
    font-size: 22px;
    background-color: #F1D3CE;
    border-radius: 16px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    color: #000;
    cursor: pointer;
`

const Add = styled.div`
    font-size: 22px;
    background-color: #F1D3CE;
    border-radius: 16px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    color: #000;
    cursor: pointer;
`

const Result = styled.div`
    font-size: 26px;
    margin: 0 15px;
    color: ${({ theme }) => theme.colors.typography};
`
