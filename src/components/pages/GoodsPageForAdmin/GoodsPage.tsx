import { Table, Image, Select, Slider, Input, Button } from "antd"
import { useEffect, useState, useCallback } from "react"
import { useAppSelector, useAppDispatch } from "hooks/hooks"
import { actionsGoods } from "store/goods/slice"
import { getGoodsFromStore, getTotal, getLoadStatusGoods } from "store/goods/selectors"
import css from "./goodsPage.module.css"
import debounce from "lodash/debounce"
import { LOAD_STATUSES_TYPES, Good } from "types"
import { Loader } from "../.."
import { actionsCategories } from "store/categories/slice"
import { getCategoriesFromStore } from "store/categories/selectors"
import { useNavigate } from "react-router"
import { getIsAuth } from "store/auth/selectors"


export type Params = {
       limit: number,
       offset: number,
       categoryTypeIds?: string,
       minPrice: number,
       maxPrice: number,
       text: string,
       sortBy: keyof Good,
       sortDirection: "asc" | "desc"
}

export const GoodsPage = () => {


       const [params, setParams] = useState<Params>({
              limit: 20,
              offset: 0,
              categoryTypeIds: "1",
              minPrice: 0,
              maxPrice: 1000,
              text: "",
              sortBy: "price",
              sortDirection: "asc",
       })

       const { Search } = Input;

       const dispatch = useAppDispatch()
       const isAuth = useAppSelector(getIsAuth)
       const navigate = useNavigate()
       const total = useAppSelector(getTotal)
       const isLoading = useAppSelector(getLoadStatusGoods)

       const fetchGoods = useCallback(debounce((params: Params) => dispatch(actionsGoods.goodsOnBack(params)), 1500), [dispatch])


       const fetchCategories = () => dispatch(actionsCategories.categoriesOnBack())
       const categories = useAppSelector(getCategoriesFromStore)
       const allCategories = [...categories, { id: "0", type: "Все товары", label: "Все товары" }]

       useEffect(() => {
              fetchCategories();
       }, [])


       useEffect(() => {
              const { categoryTypeIds, ...restParams } = params;
              fetchGoods({ ...restParams, ...(categoryTypeIds !== '0' && { categoryTypeIds }) });
              window.scrollTo(0, 0)
       }, [params])

       const allGoods = useAppSelector(getGoodsFromStore)
       const dataSourse = allGoods.map((good: Good) => ({ ...good, key: good.id }))

       const handleChangeSlider = (value: [number, number]) => {
              setParams((prevParams) => ({ ...prevParams, page: 1, minPrice: value[0], maxPrice: value[1] }));
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

       const sortArr = [
              {
                     title: "По убыванию цены",
              },
              {
                     title: "По возрастанию цены",
              },
              {
                     title: "По алфавиту",
              },
              {
                     title: "В обратном порядке алфавита",
              },
       ]

       const handleChangeSelect = (value: string) => {

              setParams((prevParams) => ({ ...prevParams, page: 1, categoryTypeIds: value }))

       };

       const onSearchHandler = (value: string) => {
              setParams((prevParams) => ({ ...prevParams, page: 1, text: value }))
       }

       const handleChangeSort = (value: string) => {
              if (value === "По возрастанию цены") {
                     setParams((prevParams) => ({ ...prevParams, page: 1, sortBy: "price", sortDirection: "asc" }))
              } else if (value === "По убыванию цены") {
                     setParams((prevParams) => ({ ...prevParams, page: 1, sortBy: "price", sortDirection: "desc" }))
              } else if (value === "По алфавиту") {
                     setParams((prevParams) => ({ ...prevParams, page: 1, sortBy: "label", sortDirection: "asc" }))
              } else {
                     setParams((prevParams) => ({ ...prevParams, page: 1, sortBy: "label", sortDirection: "desc" }))
              }
       }

       const defaultBtnHandler = () => {
              setParams((prevParams) => ({ ...prevParams, categoryTypeIds: "0", minPrice: 0, maxPrice: 1000, text: "", sortBy: "price", sortDirection: "asc", }))
       }

       const handleRowNavigate = (record: { id: string }) => {
              navigate(`/goods/${record.id}`)
       }

       return (
              <div>
                     {!isAuth ? navigate("/login") : <>
                            <Loader isLoading={isLoading === LOAD_STATUSES_TYPES.SET_LOADING} />
                            {isLoading === LOAD_STATUSES_TYPES.SET_LOADED &&
                                   <>
                                          <div className={css.searchAndSelectBlock}>
                                                 <div>
                                                        <p className={css.titleForSort}>Поиск по товарам</p>
                                                        <Search
                                                               placeholder="Введите название товара..."
                                                               onSearch={onSearchHandler}
                                                               className={css.inputSearch}
                                                        />
                                                 </div>
                                                 <div>
                                                        <p className={css.titleForSort}>Поиск товара по категории</p>
                                                        <Select
                                                               className={css.selectCategories}
                                                               defaultValue="Дом, сад, зоотовары"
                                                               onChange={handleChangeSelect}
                                                               options={(allCategories || []).map((category) => ({
                                                                      key: category.id,
                                                                      value: category.id,
                                                                      label: category.label
                                                               }))}
                                                               value={params.categoryTypeIds === "0" ? "Все товары" : params.categoryTypeIds}
                                                        />
                                                 </div>
                                                 <div>
                                                        <p className={css.titleForSort}>Выбор товаров по цене</p>
                                                        <Slider
                                                               className={css.slider}
                                                               range={true}
                                                               defaultValue={[params.minPrice, params.maxPrice]}
                                                               min={0}
                                                               max={1000}
                                                               onChange={handleChangeSlider}
                                                        />
                                                 </div>

                                                 <Select
                                                        className={css.filterOption}
                                                        defaultValue="Сортировать по.."
                                                        onChange={handleChangeSort}
                                                        options={(sortArr || []).map((filter) => ({
                                                               key: filter.title,
                                                               value: filter.title,
                                                               label: filter.title
                                                        }))}
                                                 />

                                                 <Button className={css.defaultBtn} onClick={defaultBtnHandler}>Сбросить все фильтры</Button>

                                          </div>



                                          <Table
                                                 onRow={(record, rowIndex) => {
                                                        return {
                                                               onClick: (event) => {
                                                                      handleRowNavigate(record)
                                                               }
                                                        }
                                                 }
                                                 }
                                                 className={css.tableForGoods}
                                                 onChange={({ current, pageSize }) => {
                                                        setParams((prevParams) => ({
                                                               ...prevParams,
                                                               ...(pageSize !== undefined && { limit: pageSize }),
                                                               ...(pageSize !== undefined && current !== undefined && { offset: (current - 1) * pageSize }),
                                                        }));
                                                 }}
                                                 dataSource={dataSourse}
                                                 columns={columns}
                                                 pagination={{
                                                        pageSize: params.limit,
                                                        current: params.offset / params.limit + 1,
                                                        showSizeChanger: true,
                                                        pageSizeOptions: [5, 10, 20],
                                                        total
                                                 }}
                                          />
                                   </>
                            }
                     </>}

              </div>
       )
}

