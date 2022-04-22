import { useState } from 'react'

import './App.css' 

import Header from './components/header/header.component'
import CardList from './components/card-list/card-list.component'

function App() {
  const [option, setOption] = useState('recommended')

  return (
    <div className="App">
      <Header setOption={setOption} />
      <CardList option={option} />
    </div>
  ) 
}

export default App 
