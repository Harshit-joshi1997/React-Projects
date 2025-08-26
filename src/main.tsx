
import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import NavRoutes from './routes/route'


createRoot(document.getElementById('root')!).render(
  <StrictMode>   
       <NavRoutes/>
     </StrictMode>
)


