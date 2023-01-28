import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Regsteration from './Pages/Auth/Regsteration';
import Footer from "./Components/Utility/Footer";
import NavBar from "./Components/Utility/NavBar";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import HomePage from "./Pages/Home/HomePage";
import BrandsPage from "./Pages/Brands/BrandsPage";
import ShopProductPage from "./Pages/Products/ShopProductPage";
import CategoryHeader from "./Components/Category/CategoryHeader";
import ProductDetails from "./Pages/Products/ProductDetails";
import Cart from "./Pages/cart/Cart";
import PaymentMethod from "./Pages/Payment/PaymentMethod";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Pages/Admin/AdminAllOrdersPage";
import AdminOrderDetailsPage from "./Pages/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Pages/Admin/AdminAddSubCategoryPage";
import AdminAddProdutPage from "./Pages/Admin/AdminAddProdutPage";


function App() {
  return (
    <div >
    
    <NavBar/>

 
    <div style={{backgroundColor:'#F9F7F7',minHeight:'670px',
    paddingBottom:'50px',margin:'0px',minWidth:'100%'}}>
    <BrowserRouter>
     
     <Routes>
     <Route index element={<HomePage/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Regsteration/>}/>
     <Route path="/allCategories" element={<AllCategoryPage/>}/>
     <Route path="/allBrands" element={<BrandsPage/>}/>
     <Route path="/Products" element={<ShopProductPage/>}/>
     <Route path="/ProductsDetalis/:id" element={<ProductDetails/>}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/payment" element={<PaymentMethod/>}/>

     <Route path="/Admin/AllProducts" element={<AdminAllProductsPage/>}/>
     <Route path="/Admin/AllOrders" element={<AdminAllOrdersPage/>}/>

     <Route path="/Admin/orders/20" element={<AdminOrderDetailsPage/>}/>
     <Route path="/Admin/AddBrand" element={<AdminAddBrandPage/>}/>
     <Route path="/Admin/AddCategory" element={<AdminAddCategoryPage/>}/>
     <Route path="/Admin/AddSubCategory" element={<AdminAddSubCategoryPage/>}/>

     <Route path="/Admin/AddProduct" element={<AdminAddProdutPage/>}/>



     </Routes>
     </BrowserRouter>
    
    </div>
     <Footer/>
    </div>
  );
}

export default App;
