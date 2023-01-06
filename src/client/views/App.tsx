import { Route, Routes } from 'react-router-dom';
import '../styles/styles.scss';
import Home from './Home';
import Login from './Login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}
