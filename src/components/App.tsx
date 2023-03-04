import { Routes, Route } from "react-router-dom"
import { Header, Main, Footer, NotFound, ProductPage, CategoryPage, Cart } from "."


import css from "./app.module.css"




export const App = () => {
  return (
    <>
      <div className={css.wrapper}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/api/cart" element={<Cart />} />
            <Route path="categories/:type" element={<CategoryPage />} />
            <Route path="goods/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </>
  )
}
