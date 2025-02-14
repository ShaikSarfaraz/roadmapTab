import { useState } from 'react'
import './App.css'

function App() {
  const [content, setContent] =useState(1)
  const firstContent = () => setContent(content)
  const secondContent = () => setContent(2) 
  const thirdContent = () => setContent(3)
  const fourthContent = () => setContent(4)
  
  return (
    <>
      <nav>
        <span className='gapForTabs' onClick={firstContent}>First Tab</span>
        <span className='gapForTabs' onClick={secondContent}>Second Tab</span>
        <span className='gapForTabs' onClick={thirdContent}>Third Tab</span>
        <span className='gapForTabs' onClick={fourthContent}>Fourth Tab</span>
      </nav>
      <div className="container">
        {/* <h1>{tab1}</h1> */}
        <h1>You are on the {content}st tab</h1>
      </div>
    </>
  )
}

export default App
