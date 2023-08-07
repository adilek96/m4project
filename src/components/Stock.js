import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStocks } from "../redux/stocksSlice";
import { setCurrentPage } from "../redux/paginationSlice";

import SearchInput from "./SearchInput";
import Pagination from "./Pagination";

export default function Stock() {
  // принимаю стейты
  const { currentPage, dataPerPage } = useSelector((state) => state.pagination);
  const { loading, error, filteringData, completed } = useSelector(
    (state) => state.stocks
  );
  const dispatch = useDispatch();

  //диспачу функцию получения баланса из api
  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  const lastDataIndex = currentPage * dataPerPage;
  const firstDataIndex = lastDataIndex - dataPerPage;
  const currentData = filteringData.slice(firstDataIndex, lastDataIndex);

  // функция пагинации изменяет стейт currentPage при клике на числа
  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <section className="min-w-full flex flex-col items-center gap-4  ">
      <SearchInput />
      <div className="overflow-auto h-[270px]">
        <table className="table-fixed w-[760px] ">
          <thead>
            {error ? (
              /* при ошибке будет отображатся  */
              <p>"error"</p>
            ) : (
              <>
                {loading ? (
                  /* при загрузке будет отображатся  */
                  <>
                    <tr className="h-[65px]">
                      <td className="animate-pulse bg-gray-200 h-4 rounded-lg "></td>
                    </tr>
                    <tr className="h-[65px]">
                      <td className="animate-pulse bg-gray-200 h-4 rounded-lg "></td>
                    </tr>
                    <tr className="h-[65px]">
                      <td className="animate-pulse bg-gray-200 h-4 rounded-lg "></td>
                    </tr>
                    <tr className="h-[65px]">
                      <td className="animate-pulse bg-gray-200 h-4 rounded-lg "></td>
                    </tr>
                  </>
                ) : (
                  <>
                    {completed ? (
                      /* после загрузки выводится элементы таблици  */
                      <>
                        {currentData.map((item) => {
                          return (
                            <tr key={item.symbol} className="h-[65px]">
                              <td className="w-[80px] pl-4 text-gray-500 font-mono text-[12px]">
                                {item.symbol}
                              </td>
                              <td className="w-[600px]">{item.name}</td>
                              <td>{item.price}</td>
                            </tr>
                          );
                        })}
                      </>
                    ) : (
                      <tr>
                        <td>false</td>
                      </tr>
                    )}
                  </>
                )}
              </>
            )}
          </thead>
        </table>
      </div>
      <Pagination
        dataPerPage={dataPerPage}
        totalData={filteringData.length}
        paginate={paginate}
      />
    </section>
  );
}
