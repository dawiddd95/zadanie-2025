import { useRoutes } from 'react-router-dom'
import { routes } from './routes'
import MainLayout from './components/layout/MainLayout'

function App() {
  const element = useRoutes(routes)

  return (
    <MainLayout>{element}</MainLayout>
  )
}

export default App
