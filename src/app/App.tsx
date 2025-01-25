import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { theme } from 'lib/styles'
import { TranslatorScreen } from "features/translator"
import { Footer, Header } from "lib/components"
import { useTranslations } from "lib/hooks"

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
            <TranslatorScreen />
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
