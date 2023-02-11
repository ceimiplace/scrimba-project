import MainContent from "./component/MainContent/MainContent";
import Navigation from "./component/Navigation";
import FunFacts from "./component/FunFacts/FunFacts";
function App() {
  return (
    <div className="App">
      <Navigation />
      <MainContent>
        <FunFacts />
      </MainContent>
    </div>
  );
}

export default App;
