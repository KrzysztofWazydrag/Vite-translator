import React from "react"
import { Language, LanguageCode } from "lib/models"
import { styled } from "styled-components"

type SelectLanugagesProps = {
    languages: Array<Language>,
    selectedLanguage: LanguageCode,
    exclude: Array<LanguageCode>,
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
            {languages.map(language => (
                <Option key={language.code}>
                {language.name}
            </Option>
            ))}
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
