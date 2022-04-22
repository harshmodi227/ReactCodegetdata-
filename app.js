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

-------------index

import React from 'react' 
import ReactDOM from 'react-dom/client' 
import './index.css' 
import App from './App' 
import reportWebVitals from './reportWebVitals' 

const root = ReactDOM.createRoot(document.getElementById('root')) 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals() 


-------------data.js

const data = {
	"recommended":[
		{
			"key": "1",
			"name": "LAKSHADWEEP & GOA CRUISE",
			"image": "https://lccintl.ezeeibe.com/cruisextranet/ITPL0102_Ship_Cruise_357.jpeg",
			"days": "3",
			"nights": "2",
			"price": "38799"
		},
		{
			"key": "2",
			"name": "SRI LANKAN EXTRAVAGANZA",
			"image": "https://lccintl.ezeeibe.com/cruisextranet/ITPL0102_Ship_Cruise_508.jpeg",
			"days": "7",
			"nights": "6",
			"price": "34899"
		},
		{
			"key": "3",
			"name": "SUNDOWNER TO GOA",
			"image": "https://lccintl.ezeeibe.com/cruisextranet/ITPL0102_Ship_Cruise_277.jpeg",
			"days": "3",
			"nights": "2",
			"price": "24999"
		}
	],
	"trending":[
		{
			"key": "4",
			"name": "WESTERN DELIGHT",
			"image": "https://lccintl.ezeeibe.com/cruisextranet/ITPL0102_Ship_Cruise_377.jpeg",
			"days": "5",
			"nights": "4",
			"price": "45899"
		},
		{
			"key": "5",
			"name": "South America from Rio De Janeiro",
			"image": "https://lccintl.ezeeibe.com/cruisextranet/ITPL0062_Ship_Cruise_804.jpeg",
			"days": "4",
			"nights": "3",
			"price": "54899"
		},
		{
			"key": "6",
			"name": "Bahamas",
			"image": "https://lccintl.ezeeibe.com/cruisextranet/ITPL0058_Ship_Cruise_187.jpeg",
			"days": "3",
			"nights": "2",
			"price": "44999"
		}
	],
	"domestic":[
		{
			"key": "7",
			"name": "LAKSHADWEEP & GOA CRUISE",
			"image": "https://lccintl.ezeeibe.com/cruisextranet/ITPL0102_Ship_Cruise_357.jpeg",
			"days": "3",
			"nights": "2",
			"price": "38799"
		},
		{
			"key": "8",
			"name": "CRUISE TO LAKSHADWEEP",
			"image": "https://lccintl.ezeeibe.com/cruisextranet/ITPL0062_Ship_Cruise_804.jpeg",
			"days": "7",
			"nights": "6",
			"price": "34899"
		},
		{
			"key": "9",
			"name": "SUNDOWNER TO GOA",
			"image": "https://lccintl.ezeeibe.com/cruisextranet/ITPL0102_Ship_Cruise_277.jpeg",
			"days": "3",
			"nights": "2",
			"price": "24999"
		}
	],
	"international":[
		{
			"key": "10",
			"name": "Bahamas",
			"image": "https://lccintl.ezeeibe.com/cruisextranet/ITPL0058_Ship_Cruise_187.jpeg",
			"days": "3",
			"nights": "2",
			"price": "44999"
		},
		{
			"key": "11",
			"name": "South America from Rio De Janeiro",
			"image": "https://lccintl.ezeeibe.com/cruisextranet/ITPL0062_Ship_Cruise_804.jpeg",
			"days": "4",
			"nights": "3",
			"price": "54899"
		},
		{
			"key": "12",
			"name": "WESTERN DELIGHT",
			"image": "https://lccintl.ezeeibe.com/cruisextranet/ITPL0102_Ship_Cruise_377.jpeg",
			"days": "5",
			"nights": "4",
			"price": "45899"
		}
	]
}

export default data;
