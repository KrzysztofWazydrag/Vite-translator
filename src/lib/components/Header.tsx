import { Images } from 'assets'
import { useTranslations } from 'lib/hooks'
import styled from 'styled-components'

export const Header = () => {
    const T = useTranslations()

    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={Images.Logo} />
                <Title>
                    {T.appName}
                </Title>
            </LogoContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    height: 60px;
    background-color: ${({ theme }) => theme.colors.foreground};
`
const LogoContainer = styled.div`

`

const Logo = styled.img`
    width: 36px;
    height: 36px;

`

const Title = styled.h1`
    display: inline;
`
