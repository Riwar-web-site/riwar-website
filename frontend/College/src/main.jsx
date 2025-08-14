import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App.jsx'
import SmoothScroll from './Component/SmoothScroll.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SmoothScroll/>
    <App />
  </BrowserRouter>,
)
