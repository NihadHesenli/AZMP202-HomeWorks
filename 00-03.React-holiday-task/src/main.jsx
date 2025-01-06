import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async";
import FavoriteProvider from './context/FavoriteContext.jsx';
import BasketProvider from './context/BasketContext.jsx';


createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <BasketProvider>
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
      </BasketProvider>
    </BrowserRouter>
  </HelmetProvider>
)
