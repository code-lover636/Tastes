import { BrowserRouter, Routes, Route} from 'react-router-dom';


import { Welcome, Home } from './Pages';

function App(){
    return(
        <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Welcome />} />
                    <Route path='/home' element={<Home/>} />
                </Routes>
        </BrowserRouter>
    );
}


export default App;