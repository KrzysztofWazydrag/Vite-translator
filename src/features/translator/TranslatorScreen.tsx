import React, { useState } from 'react'
import { Confidence, ExchangeLanguage, Loader, Message, SelectLanguage, TextCounter, TextInput } from 'lib/components'
import styled from "styled-components"
import { Language } from 'lib/models'
import { SelectedLanguages } from './types'


type TranslatorScreenProps = {
    languages: Array<Language>
}

export const TranslatorScreen: React.FunctionComponent<TranslatorScreenProps> = ({
    languages
}) => {
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>
    ({
    source: 'pl',
    target: 'en'
    })


    return(
            <Container>
            <TranslatorContainer>
                <InputContainer>
                    <SelectLanguage
                    languages={languages}
                    exclude={[]}
                    onChange={newLanguage => {}}
                    selectedLanguage={}
                    />
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
                    <SelectLanguage
                    languages={languages}
                    exclude={[]}
                    onChange={newLanguage => {}}
                    selectedLanguage={}
                    />
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

