import {styled , keyframes} from "styled-components"

const loading = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

export const Loader = () => (
    <ActivityIndicator />
)

const ActivityIndicator = styled.div`
    width: 100%;
    height: 2px;
    margin: 5px;
    background-color: ${({ theme }) => theme.colors.primary };
    border-radius: 6px;
    animation: ${loading} 1s linear infinite alternate;
`


