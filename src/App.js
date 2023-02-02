import './App.css';
import { MainPage } from './component/mainPage/MainPage';
import NavBar from './component/navBar/NavBar';

function App() {
  return (
    <div className="min-h-screen bg-red-50">
         <NavBar/>
         <MainPage/>
    </div>
  );
}

export default App;


