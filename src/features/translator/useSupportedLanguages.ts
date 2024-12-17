import { useEffect, useState } from "react"

export const useSupportedLanguages = () => {
    const [isLoading, setLoading] = useState<boolean>()
    const [hasError, setHasError] = useState<boolean>()

    useEffect(() => {
        fetch('https://libretranslate.com/languages')
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])

}
