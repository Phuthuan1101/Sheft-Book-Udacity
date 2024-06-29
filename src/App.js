import { Routes, Route} from 'react-router-dom'
import './App.css'
import Search from './components/Search'
import MainPage from './components/MainPage'

const App = () => {
 
  return (
    <Routes>
        <Route path='/search' element={<Search />} />
        <Route path='/' element={<MainPage />} />
    </Routes>
  )
}
export default App;