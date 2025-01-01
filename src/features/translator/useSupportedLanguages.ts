import { useEffect, useState } from "react"

export const useSupportedLanguages = () => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    return {
        isLoading,
        hasError,
        fetch: () => {
            setLoading(true)
            setHasError(false)

            fetch('https://libretranslate.com/languages')
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(() => {
                    setHasError(true)
                })
                .finally(() => {
                    
                })
        }
    }
}
