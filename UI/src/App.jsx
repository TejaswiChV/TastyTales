import { useState, useEffect } from 'react'
import './App.css'
import { getWebsiteName } from './api/home'
function App() {
  const [name, setName] = useState('')
  const fetchWebsiteName = async () => {
    let res = await getWebsiteName()
    setName(res)
  }
  useEffect(()=>{
    fetchWebsiteName()
  },[])
  return (
    <>
      <div>
       { name }
      </div>
    </>
  )
}

export default App
