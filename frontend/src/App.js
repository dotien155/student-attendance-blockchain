import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import MenuLeftGiangVien from './components/layouts/Menu-left-GV';
import { useLocation } from "react-router-dom";

function App(props) {
  const location = useLocation();
  const showMenuGV = location.pathname.includes("giangvien");

  return (
    <div className="App">
      <Header />
      <section>
        <div className="container">
          <div className="row">
            <div className="content-wrapper">
              {showMenuGV && <MenuLeftGiangVien />}
              <div className="main-content">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


export default App;
