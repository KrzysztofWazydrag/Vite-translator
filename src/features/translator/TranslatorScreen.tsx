import { Confidence, ExchangeLanguage, Loader, SelectLanguage, TextCounter, TextInput } from 'lib/components'
import React from 'react'
import styled from "styled-components"



export const TranslatorScreen: React.FunctionComponent = () => (
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
            </InputContainer>
        </TranslatorContainer>
    </Container>

)

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
