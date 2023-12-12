import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home/header/header'
import { FormSection } from './Home/FormSection/index'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <FormSection />
  </React.StrictMode>,
)
