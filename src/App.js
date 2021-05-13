import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markDown, setMarkDown] = useState('# Brown Munde')

  return (
    <section className="markdown">
      <textarea className="input" value={markDown} onChange={((e) => setMarkDown(e.target.value))}>
      </textarea>
      <article className="result"><ReactMarkdown>{markDown}</ReactMarkdown></article>
    </section >
  )
}

export default App
