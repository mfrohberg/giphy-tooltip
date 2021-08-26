import './styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Tooltip } from './Tooltip'

export default function App() {
  const [selectedText, setSelectedText] = useState('')
  const [selectedUrl, setSelectedUrl] = useState('')

  const fetchGif = async (term: string) => {
    const apiKey = '4Z15yuylYr1bEQkpJiBb3dd4ffvUfs5v'
    const {
      data: { data }
    } = await axios.get(
      `https://api.giphy.com/v1/gifs/random?q=${term}&api_key=${apiKey}`
    )
    return data.images.preview_gif.url
  }

  useEffect(() => {
    const handleSelection = async () => {
      const searchString = document.getSelection()?.toString() || ''
      let url
      if (searchString.length >= 3) {
        url = await fetchGif(searchString)
        setSelectedText(searchString)
        setSelectedUrl(url)
      }
    }
    document.addEventListener('selectionchange', handleSelection)
    return () => {
      document.removeEventListener('selectionchange', handleSelection)
    }
  }, [])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>
        {selectedText && <Tooltip imgUrl={selectedUrl} term={selectedText} />}
      </p>
    </div>
  )
}
