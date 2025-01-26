import React from "react"
import { Language } from "lib/models"
import { styled } from "styled-components"

type SelectLanugagesProps = {
    languages: Array<Language>,
    selectedLanguage: Language,
    exclude: Array<Language>,
    onChange(newLanguage: Language): void
}

export const SelectLanguage: React.FunctionComponent<SelectLanguageProps> = ({
    languages,
    selectedLanguage,
    exclude,
    onChange
 }) => {
    return(
        <Select>
            <Option>
                Polish
            </Option>
            <Option>
                English
            </Option>
        </Select>
    )
}

const Select = styled.select`
    max-width: 140px;
    margin-bottom: 10px;
    // -webkit-appearance: none;
    border: 0;
    font-size: 14px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.typography};
    height: 26px;
    padding: 0 10px;


`

const Option = styled.option``
