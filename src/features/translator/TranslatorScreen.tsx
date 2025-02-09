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
                    //przekazujemy języki
                    languages={languages}
                    //przekazujemy co nie moze byc na tej liscie jezykow(po lewej)
                    exclude={[selectedLanguages.target]}
                    //przekazujemy co jest obecnie zaznaczone
                    selectedLanguage={selectedLanguages.source}
                    //ustawiamy co uzytkownik aktualnie wybral w wypadku source(ponizej)
                    onChange={newCode => setSelectedLanguages(prevState => ({
                        ...prevState,
                        source: newCode
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
                    exclude={[selectedLanguages.source]}
                    //ustawiamy co uzytkownik aktualnie wybral w wypadku target(ponizej)
                    onChange={newCode => setSelectedLanguages(prevState => ({
                        ...prevState,
                        target: newCode
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

