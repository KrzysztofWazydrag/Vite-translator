import React from "react";
import {styled , keyframes} from "styled-components"

const loading = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

export const Loader: React.FunctionComponent = ({ children }) => (
    <LoaderContainer>
        <ActivityIndicator />
        {children && (
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        )}
    </LoaderContainer>
)

const ActivityIndicator = styled.div`
    widdth: 100%;
    height: 2px;
    margin: 5px;
    background-color: ${({ theme }) => theme.colors.primary };
    border-radius: 6px;
    animation: ${loading} 1s linear infinite alternate;
`

const ChildrenContainer = styled.div`
    text-align: center;
`

const LoaderContainer = styled.div`
    width: 100%;


`


