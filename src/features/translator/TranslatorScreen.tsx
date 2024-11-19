import React from 'react'
import styled from "styled-components"

type TranslatorScreenProps = {
    isActive: boolean,
    age?: number,
    title: string,
    onClick(): void,
    onClick2(): boolean
}

export const TranslatorScreen: React.FunctionComponent<TranslatorScreenProps> = props => (
    <Container>
        My age is {props.age}
    </Container>
)

const Container = styled.div`
   color: ${({ theme }) => theme.colors.typography}
`

