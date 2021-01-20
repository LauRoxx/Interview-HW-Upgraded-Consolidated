import './App.css';
import LISPchecker from './Components/LISPchecker';
import Registration from './Components/Registration';
import QuestionCards from './Components/QuestionCards';

function App() {
  return (
    <div className="App">
      <header><div className="title">Roxanne Young: Availity Dev HW</div></header>
      <div className = "card wide">
        <QuestionCards />
      </div>
      <div className = "card">
        <LISPchecker/>
      </div>
      <div className = "card">
        <Registration/>
      </div>
    </div>
  );
}

export default App;
