import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './routes/header';
import List from './routes/list';
import Detail from './routes/detail';
import Favourite from './routes/favourite';
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<List />} />
          <Route path='detail' element={<Detail />} />
          <Route path='favourite' element={<Favourite />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
