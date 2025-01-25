import React, { useEffect, useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { theme } from 'lib/styles'
import { TranslatorScreen } from "features/translator"
import { Footer, Header, Loader, Message } from "lib/components"
import { useTranslations } from "lib/hooks"
import { useSupportedLanguages } from "features/translator/useSupportedLanguages"
import { Language } from "lib/models"

export const App = () => {
    const T = useTranslations()
    const [languages, setLanguages] = useState<Array<Language>>([])
    const { isLoading, hasError, fetch: getSupportedLanguages } = useSupportedLanguages(setLanguages)

    useEffect(() => {
        getSupportedLanguages()
    }, [])

    if (isLoading) {
        return (
            <FetchLoaderContainer>
                <Loader>
                    <LoaderText>
                        {T.screen.translator.loading}
                    </LoaderText>
                </Loader>
            </FetchLoaderContainer>
        )
    }

    if (hasError) {
        return (
            <CenterContainer>
                <Message
                withButton
                message = {T.screen.translator.error}
                onClick={() => getSupportedLanguages()}
                />
            </CenterContainer>
        )
    }

    if (languages.length === 0 ) {
        return (
            <CenterContainer>
                <Message message = {T.screen.translator.empty}/>
            </CenterContainer>
        )
    }


   return (
    <ThemeProvider theme={theme}>
        <AppContainer>
            <Header />
            <TranslatorScreen languages={languages} />
            <Footer />
        </AppContainer>
    </ThemeProvider>
)
}

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.background};
    display: flex;
    flex-direction: column;
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
