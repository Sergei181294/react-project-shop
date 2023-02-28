import { Routes, Route } from "react-router-dom"
import { Header, Main } from "./common"


import css from "./app.module.css"




export const App = () => {
  return (
    <>
      <div className={css.wrapper}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>

    </>
  )
}
