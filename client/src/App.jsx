import './App.css';
import Landing from "./componentes/LandingPage/LandingPage.jsx"

function App() {
  return (
    <div className="App">
      
      <Routes>
    
      <Route path="/" element={<Landing />} />
       
     
      </Routes>
    </div>
  );
}

export default App;
