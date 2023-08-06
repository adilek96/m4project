import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStocks } from "../redux/stocksSlice";
import SearchInput from "./SearchInput";

export default function Stock() {
  //получаю стейт из редакса
  const { data, loading, error, complete } = useSelector(
    (state) => state.stocks
  );
  const dispatch = useDispatch();

  //диспачу функцию получения баланса из api
  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);
  // console.log(data);

  return (
    <section className="min-w-full flex flex-col items-center gap-8 ">
      <SearchInput />
      <div>
        <table className="table-fixed w-[760px]   ">
          <thead>
            {error ? (
              <p>"error"</p>
            ) : (
              <>
                {loading ? (
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
                    {complete ? (
                      <>
                        {data.map((item) => {
                          return (
                            <tr key={item.name} className="h-[65px]">
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
    </section>
  );
}
