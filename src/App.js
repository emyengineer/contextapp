import "./App.css";
import BookList from "./BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
