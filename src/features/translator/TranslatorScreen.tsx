import { Confidence, ExchangeLanguage, Loader, Message, SelectLanguage, TextCounter, TextInput } from 'lib/components'
import styled from "styled-components"
import { useSupportedLanguages } from './useSupportedLanguages'
import { useEffect, useState } from 'react'
import { Language } from 'lib/models'
import { useTranslations } from 'lib/hooks'


type TranslatorScreenProps = {
    languages: Array<Language>
}

//component delete this line of code
export const TranslatorScreen: React.FunctionComponent<TranslatorScreenProps> = ({
    languages
}) => {
    const T = useTranslations()
    
        return(
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
        )
    }
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
const FetchLoaderContainer = styled.div`
    width: 50%;
    align-self: center;
    display: flex;
`
const LoaderText = styled.div`
    color: ${({ theme }) => theme.colors.typography};
    margin-top: 10px;
`
const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
`
