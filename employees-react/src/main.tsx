import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { EmployeeApp } from './components/EmployeeApp';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmployeeApp />
  </StrictMode>,
)
