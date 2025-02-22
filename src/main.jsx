import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import TopBar from './Components/TopBar.jsx'
import ItemsDisplay from './Components/ItemsDisplay.jsx'
import OffersSection from './Components/OffersSection.jsx'
import RestaurantList from './Components/RestaurantList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <TopBar />
    <ItemsDisplay />
    <OffersSection />
    <RestaurantList />
    </BrowserRouter>
  </React.StrictMode>,
)
