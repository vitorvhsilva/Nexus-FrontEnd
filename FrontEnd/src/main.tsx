import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.tsx'
import Home from './routes/Home/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import Login from './routes/Login/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import PaginaUsuario from './routes/PaginaUsuario/index.tsx'
import Teste from './routes/Teste/index.tsx'
import Diagnostico from './routes/Diagnostico/index.tsx'
import Agendamento from './components/Agendamento/Agendamento.tsx'
import AdicionarVeiculo from './routes/AdicionarVeiculo/AdicionarVeiculo.tsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/integrantes",
        element: <Integrantes/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/cadastro",
        element: <Cadastro/>
      },
      {
        path: "/user",
        element: <PaginaUsuario/>
      },
      {
        path: "/user/adicionarveiculo",
        element: <AdicionarVeiculo/>
      },
      {
        path: "/diagnostico",
        element: <Diagnostico/>
      },
      {
        path: "/orcamento",
        element: <Teste/>
      },
      {
        path: "/agendamento",
        element: <Agendamento/>
      },
      {
        path: "/teste",
        element: <Teste/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
