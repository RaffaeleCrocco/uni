
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/app.scss"
import "./style/custom.scss"
import FAQ from "./components/FAQ";
import Courses from "./components/Courses";
import Navigation from "./components/Navigation";
import Info from "./components/Info";
import Help from './components/Help';

function App() {
  return (
    <div>
      <Navigation/>
      <br/><br/>
      <Courses/>
      <br/><br/><br/><br/><br/>
      <Info/>
      <FAQ/>
      <br/><br/><br/><br/><br/>
      <Help/>
      <br/><br/><br/><br/><br/><br/><br/>

    </div>
  );
}

export default App;
