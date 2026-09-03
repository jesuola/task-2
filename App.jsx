import "./App.css";
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Bookcard from "./components/bookcard/BookCard";

function App() {
  return (
    <main className="App">
      <h1>ReadStack</h1>
      <p>Your Digital Store</p>

      <Button  text="Click Me" />

      <Input 
      type="Search"
      placeholder="Search for a book"
      />
      <section className="book-section">
      <p>Featured Books</p>

      <div className="book-grid">

    <Bookcard
    title="Atomic Habits"
    author="James Clear"
    category="Self development"
    />

   <Bookcard
   title="The Alchemist"
   author="Paulo Coelho"
   category="Fiction"
    />

   <Bookcard
   title="Clean Code"
   author="Robert C. Martin"
   category="Programming"
   />

   <Bookcard
   title="Deep Work"
   author="Cal Newport"
   category="Self-Development"
    />

    <Bookcard
   title="Purpose Driven Life"
   author="Rick Warren"
   category="Purpose"
    />
    <Bookcard
   title="Think Big"
   author="Ben Carson"
   category="Personal Development"
    />

   </div>
   </section>

  </main>
  );
}

export default App;