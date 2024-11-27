import { TextInput } from 'lib/components'
import React from 'react'
import styled from "styled-components"


export const TranslatorScreen: React.FunctionComponent = () => (
    <Container>
        <TranslatorContainer>
        <TextInput />
        <TextInput />
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
    margin-top: 50px
`
