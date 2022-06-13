import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login, Main, Detail, Update, Add, SignUp} from './pages';
import { Header } from './components';
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/add' element={<Add />} />
        <Route path='/update/:id' element={<Update/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/sign_up' element={<SignUp/>} />
      </Routes>


    </div>
  );
}
// 수정
export default App;
