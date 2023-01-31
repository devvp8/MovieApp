import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import SimpleBottomNavigation from './components/Navbar/navbar';
import Trending from './Pages/Trending/Trending';
import Series from './Pages/Series/Series';
import Search from '@mui/icons-material/Search';
import Movies from './Pages/Movies/Movies';
import { Container } from '@mui/system';

function App() {
  return (
    <BrowserRouter>
    <Header/>
<div className='App'>

   
      <Routes>
        <Route path='/'element={<Trending/>}/>
        <Route path='/movies'element={<Movies/>}/>
        <Route path='/series'element={<Series/>}/>
        <Route path='/search'element={<Search/>}/>
      </Routes>
    
    </div>
    
<SimpleBottomNavigation/>
    </BrowserRouter>
   
  
  );
}

export default App;
