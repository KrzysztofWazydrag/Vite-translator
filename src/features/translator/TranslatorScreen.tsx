import { Confidence, Counter, ExchangeLanguage, Loader, SelectLanguage, TextCounter, TextInput } from 'lib/components'
import React from 'react'
import styled from "styled-components"


//component delete this line of code
export const TranslatorScreen: React.FunctionComponent = () => {
    return (
        <Container2>
            <Counter
            initialValue={60}
            onAdd={() =>{
                alert('Add clicked')
            }}
            />
            <Container>
            <TranslatorContainer>
                <InputContainer>
                    <SelectLanguage />
                    <TextInput />
                    <LoaderContainer>
                        <Loader />
                    </LoaderContainer>
                    <InputFooter>
                        <Confidence />
                        <TextCounter />
                    </InputFooter>
                </InputContainer>
                <ExchangeLanguage />
                <InputContainer>
                    <SelectLanguage />
                    <TextInput />
                    <LoaderContainer>
                        <Loader />
                    </LoaderContainer>
                </InputContainer>
            </TranslatorContainer>
        </Container>
    </Container2>
    )
}

const Container2 = styled.div`
    display: flex;
    flex-direction: column;

`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: ${({ theme }) => theme.colors.typography}
`
const TranslatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5px;
`

const LoaderContainer = styled.div`
    padding: 5 10px;
    background-color: grey;
`

const InputFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
