import "./App.css";
import BookList from "./BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import NavBar from "./NavBar";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <NavBar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
