import React from 'react'
import styled from "styled-components"
import { useTranslations } from '../../lib/hooks'


export const TranslatorScreen: React.FunctionComponent = () => {
    const {} = useTranslations()

    return (
        <Container>
            Hello World!!!
        </Container>
    )
}
const Container = styled.div`
   color: ${({ theme }) => theme.colors.typography}
`

