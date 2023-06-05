// import logo from './logo.svg';
import './App.css';
// import Button from '@mui/material/Button'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import ManageAccount from './pages/ManageAccount/ManageAccount';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import RootLayout from './pages/RootLayout/RootLayout';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="home" element={<Home/>}/>
      <Route path="account" element={<About/>}/>
      <Route path="settings" element={<ManageAccount/>}/>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
