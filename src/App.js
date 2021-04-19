import Header from "./components/Header";
import Work from "./components/Work";
import Contact from "./components/Contact";

// Try using React-Spring for loading animation
const App = () => {
  return (
    <div className="App">
      <Header />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
