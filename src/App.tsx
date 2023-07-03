import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components'
import { Category, Homepage, ReviewDetails } from './pages';

const App = () => {
    return <>
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Homepage />} />

                    <Route path='/details/:id' element={<ReviewDetails />} />

                    <Route path='/category/:id' element={<Category />} />
                </Routes>
            </BrowserRouter>
        </div>
    </>
};

export default App;