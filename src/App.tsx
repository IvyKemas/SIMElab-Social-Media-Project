import "./App.css";
import Banner from "./components/Banner";
import Music from "./components/Music";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Trending />
      <Music />
    </>
  );
}

export default App;
