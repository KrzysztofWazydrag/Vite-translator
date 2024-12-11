export const useSupportedLanguages = () =>{
    fetch('https://google.pl')
        .then(response => response.json())
        .then(data => console.log(data))
}
