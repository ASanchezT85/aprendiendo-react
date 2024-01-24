import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 1).join(' ')

    fetch(`${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?size=50&color=red`)
      .then(res => {
        const { url } = res
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${imageUrl}` }
}