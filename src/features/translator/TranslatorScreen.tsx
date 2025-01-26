import React, { useState } from 'react'
import { Confidence, ExchangeLanguage, Loader, Message, SelectLanguage, TextCounter, TextInput } from 'lib/components'
import styled from "styled-components"
import { Language, LanguageCode } from 'lib/models'
import { SelectedLanguages } from './types'


type TranslatorScreenProps = {
    languages: Array<Language>
}

export const TranslatorScreen: React.FunctionComponent<TranslatorScreenProps> = ({
    languages
}) => {
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>
    ({
    source: LanguageCode.Polish,
    target: LanguageCode.English
    })


    return(
            <Container>
            <TranslatorContainer>
                <InputContainer>
                    <SelectLanguage
                    languages={languages}
                    exclude={[selectedLanguages.target]}
                    selectedLanguage={selectedLanguages.source}
                    onChange={newLanguage => setSelectedLanguages(prevState => ({
                        ...prevState,
                        source: newLanguage.code
                    }))}
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
                    onChange={newLanguage => setSelectedLanguages(prevState => ({
                        ...prevState,
                        target: newLanguage.code
                    }))}
                    selectedLanguage={selectedLanguages.target}
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

