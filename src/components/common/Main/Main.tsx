import { Menu, GoodCategory } from ".."


const categories = [
       {
              id: "0",
              type: "books",
              label: "Книги",
       },
       {
              id: "1",
              type: "souvenirs",
              label: "Сувениры",
       },
       {
              id: "2",
              type: "products",
              label: "Продукты",
       }
]

export const Main = () => {
       return (
              <>
                     <Menu />
                     {categories.map(category => <GoodCategory category={category}/>)}
              </>
       )
}