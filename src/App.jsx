import Home from "./Pages/Home/Home.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Search from "./Pages/Search/Search.jsx"
import Categories from "./Pages/Categories/Categories.jsx"
import Area from "./Pages/Area/Area.jsx"
import Ingrediants from "./Pages/Ingrediants/Ingrediants.jsx"
import Contact from "./Pages/Contact/Contact.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Mealdetails from "./Pages/Mealdetails/Mealdetails.jsx"
import Notfound from "./Pages/NotFound/Notfound.jsx"
import Footer from "./components/Footer/footer.jsx"
import Category from "./Pages/Category/Category.jsx"
import Ingradiant from "./Pages/Ingradiant/Ingradiant.jsx"
import AreaMeals from "./Pages/AreaMeals/AreaMeals.jsx"


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/category/:name" element={<Category/>} />
        <Route path="/area" element={<Area/>}/>
        <Route path="/area/:name" element={<AreaMeals/>} />
        <Route path="/ingrediants" element={<Ingrediants/>}/>
        <Route path="/ingredient/:name" element={<Ingradiant/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/meal/:id" element={<Mealdetails/>} />
        <Route path="*" element={<Notfound/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
