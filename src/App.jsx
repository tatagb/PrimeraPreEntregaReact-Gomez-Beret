import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import fondo from "./assets/fondo.jpg"

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos"/>
      <div className="App">
      <img id="fondo" src={fondo} alt="Carrito" />
      </div>
    </>
  );
};

export default App;
