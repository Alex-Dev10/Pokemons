

import './App.css'
import { Home } from './components/Home/Home';
import { Search } from './components/Search/Search';
import { Welcome } from './components/welcome/Welcome'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
 

  return (

    
    <div className='app'>
<BrowserRouter>
<Routes>
<Route path='/' element={<Welcome/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/Seach' element={<Search/>}/>

</Routes>
</BrowserRouter>
    
    </div>
  )
}

export default App
