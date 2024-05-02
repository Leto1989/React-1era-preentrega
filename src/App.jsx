import ComponenteNavbar from './componentes/ComponenteNavbar'
import './App.css'
import ItemListContainer from './componentes/ItemListContainer'

function App() {
  

  return (
    <>
      <ComponenteNavbar />
      <ItemListContainer greeting='Bienvenido a tu tienda de discos Online'/>
    </>
  )
}

export default App
