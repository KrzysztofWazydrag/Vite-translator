import React, { useEffect, useState } from "react"
import styled from "styled-components"


type CounterProps = {
    //ponizej deklaracja propsow od rodzica(TranslatorScreen.tsx) do dziecka(Counter.tsx)
    //rodzic przekazuje funkcje -> jest to pusty arrow function -> zobacz w TranslatorScreen.tsx onAdd={() =>{
    //onAdd nic nie dostaje i nic nie zwraca
    /* w react Rodzic moze przekazac informacje do dziecka poprzez przekazanie liczby, boolean, stringa,
    tablicy, obiektu a nawet funkcji
    Dziecko moze wyswietlic te propsy za pomoca bracketsów {} w dowolnym miejscu np {value}, {name}
    Moze je uzyc do ustawienia domyslnego stanu(initialState)
    Moze uzyc funkcji ktora dostaje w propsach aby powiadomic rodzica ze cos np sie kliknelo, zmienilo
    PAMIETAJ: Propsy dzialaja w dwie strony: mozna przekazac cos z rodzica ale dziecko moze tez wywolac funkcje
    tak ze rodzic bedzie wiedziec ze cos sie zmienilo
    */
    initialValue: number,
    onAdd(): void


}

//({    initialValue }) => {     below there is destructuring to get to initial value
export const Counter: React.FunctionComponent<CounterProps> = ({
    initialValue,
    onAdd
}) => {
    //uzywamy hooka useState - ten hook cos przyjmuje i cos zwraca. w przypadku 'stanu' przekazujemy wartosc poczatkowa
    // zeby np ustawic poczatkowa wartosc na 100 dajemy 'initial value' - React zwraca tablice dwuelementowa -> const []
    //uzywamy tam gdzie chcemy zeby react automatycznie przerenederowal nasz komponent
    //pierwsza wartosc -> value ktora trzyma stan a druga to funkcja ktora zaktualizuje ten stan -> setValue
    //propsy(atrybuty) nie zmieniaja sie w czasie(chyba ze pod propsa podepniemy stan 'useState')
    //sluza do przekazywania informacji z gory do dolu

    const [value, setValue] = useState(initialValue)
    const [name, setName] = useState('Krzysiek')

    /* useEffect przyjmuje funkcje() i nic nie zwraca, drugim parametrem jest rowniez tablica []
    */


    useEffect(() => {
        
    }, [])

        return(
            <CounterContainer>
                <Sub onClick ={() => {
                    setValue(50)
                }}>
                    -
                </Sub>
                <Result>
                    {value} - {name}
                </Result>
               <Add onClick={() =>{
                setName('Antek')
                onAdd()
               }}>
                +
                </Add>
            </CounterContainer>
        )
}

const CounterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex: 1;
    // background-color: #F1D3CE;
    justify-content: center;




`

const Sub = styled.div`
    font-size: 22px;
    background-color: #F1D3CE;
    border-radius: 16px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    color: #000;
    cursor: pointer;
`

const Add = styled.div`
    font-size: 22px;
    background-color: #F1D3CE;
    border-radius: 16px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    color: #000;
    cursor: pointer;
`

const Result = styled.div`
    font-size: 26px;
    margin: 0 15px;
    color: ${({ theme }) => theme.colors.typography};
`
