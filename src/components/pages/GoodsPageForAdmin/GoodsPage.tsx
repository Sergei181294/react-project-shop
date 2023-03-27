import { Table, Image, Select, Slider, Input } from "antd"
import { useEffect, useState, useRef } from "react"
import { useAppSelector, useAppDispatch } from "hooks/hooks"
import { actionsGoods } from "store/goods/slice"
import { getGoodsFromStore, getTotal, getLoadStatusGoods } from "store/goods/selectors"
import css from "./goodsPage.module.css"
import debounce from "lodash/debounce"
import { LOAD_STATUSES_TYPES, Good } from "types"
import { Loader } from "components/common/Loader"
import { actionsCategories } from "store/categories/slice"
import { getCategoriesFromStore } from "store/categories/selectors"

export type Params = {
       limit: number,
       page: number,
       offset: number,
       categoryTypeIds: string,
       minPrice: number,
       maxPrice: number,
       text: string,
}

export const GoodsPage = () => {


       const [params, setParams] = useState<Params>({
              limit: 20,
              page: 1,
              offset: 0,
              categoryTypeIds: "1",
              minPrice: 200,
              maxPrice: 500,
              text: "",
       })
       console.log(params);

       const { Search } = Input;


       const dispatch = useAppDispatch()
       const total = useAppSelector(getTotal)
       const isLoading = useAppSelector(getLoadStatusGoods)

       const fetchGoods = (params: Params) => dispatch(actionsGoods.goodsOnBack(params))

       const fetchCategories = () => dispatch(actionsCategories.categoriesOnBack())
       const categories = useAppSelector(getCategoriesFromStore)
       const allCategories = [...categories, { id: "0", type: "0", label: "Все товары" }]

       useEffect(() => {
              fetchCategories();
       }, [])


       useEffect(() => {
              fetchGoods(params);
              window.scrollTo(0, 0)
       }, [params])

       const allGoods = useAppSelector(getGoodsFromStore)
       const dataSourse = allGoods.map((good: Good) => ({ ...good, key: good.id }))

       const handleChangeSlider = (value: [number, number]) => {
              setTimeout(() => setParams((prevParams) => ({ ...prevParams, minPrice: value[0], maxPrice: value[1] })), 1500);
       }

       const columns = [
              {
                     title: "Image",
                     dataIndex: "img",
                     key: "img",
                     render: (text: any, record: any) => <Image src={record.img} alt="anime" width={150} height={150} />
              },
              {
                     title: "Name",
                     dataIndex: "label",
                     key: "label",
              },
              {
                     title: "Description",
                     dataIndex: "description",
                     key: "description",
              },
              {
                     title: "Price",
                     dataIndex: "price",
                     key: "price",
              },
       ]

       const handleChangeSelect = (value: string) => {
              setParams((prevParams) => ({ ...prevParams, categoryTypeIds: value }))
       };

       const onSearchHandler = (value: string) => {
              setTimeout(() => setParams((prevParams) => ({ ...prevParams, text: value })), 1500)
       }

       return (
              <div>
                     <Loader isLoading={isLoading === LOAD_STATUSES_TYPES.SET_LOADING} />
                     {isLoading === LOAD_STATUSES_TYPES.SET_LOADED &&
                            <>
                                   <div className={css.searchAndSelectBlock}>
                                          <div>
                                                 <p>Поиск по товарам</p>
                                                 <Search
                                                        placeholder="Поиск по товарам..."
                                                        onSearch={onSearchHandler}
                                                        className={css.inputSearch}
                                                 />
                                          </div>
                                          <div>
                                                 <p>Поиск товара по категории</p>
                                                 <Select
                                                        className={css.selectCategories}
                                                        // defaultValue="Дом, сад, зоотовары"
                                                        onChange={handleChangeSelect}
                                                        options={(allCategories || []).map((category) => ({
                                                               key: category.id,
                                                               value: category.id,
                                                               label: category.label
                                                        }))}
                                                 />
                                          </div>
                                          <div>
                                                 <p>Выбор товаров по цене</p>
                                                 <Slider
                                                        className={css.slider}
                                                        range={true}
                                                        defaultValue={[params.minPrice, params.maxPrice]}
                                                        min={0}
                                                        max={1000}
                                                        onChange={handleChangeSlider}
                                                 />
                                          </div>
                                   </div>

                                   <Table
                                          onChange={({ current, pageSize }) => {
                                                 setParams((prevParams) => ({
                                                        ...prevParams,
                                                        ...(current !== undefined && { page: current }),
                                                        ...(pageSize !== undefined && { limit: pageSize }),
                                                        offset: (params.page - 1) * params.limit

                                                 }));
                                          }}
                                          dataSource={dataSourse}
                                          columns={columns}
                                          pagination={{
                                                 pageSize: params.limit,
                                                 current: params.page,
                                                 showSizeChanger: true,
                                                 pageSizeOptions: [5, 10, 25],
                                                 total
                                          }}

                                   />
                            </>
                     }
              </div>
       )
}

