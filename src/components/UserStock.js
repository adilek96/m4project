import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserStock, setTotalProfit } from "../redux/userStockSlice";
import { fetchStocks } from "../redux/stocksSlice";
import Pagination from "./Pagination";
import { setCurrentPage } from "../redux/paginationSlice";

export default function UserStock() {
  const { currentPage, dataPerPage } = useSelector((state) => state.pagination);
  const { loading, error, stock, complete } = useSelector(
    (state) => state.userStock
  );
  const { data } = useSelector((state) => state.stocks);
  const dispatch = useDispatch();

  //диспачу функцию получения баланса из api
  useEffect(() => {
    dispatch(fetchStocks());
    dispatch(fetchUserStock());
  }, [dispatch]);
  const diffArr = [];
  //получаю разницу между закупочной и реальной ценой в числовом и процентном соотношении
  const calculateTotalValue = (item, data) => {
    const foundData = data.find((el) => el.symbol === item.ticker);
    if (foundData) {
      const purchase = item.purchasePrice;
      const current = foundData.price * item.amount;

      const diff = current - purchase;

      const percDiff = ((diff / purchase) * 100).toFixed(2);

      // Добавляю стрелочки и знак +/-
      const diffFormatted =
        (diff > 0 ? "▲ +" : diff < 0 ? "▼ -" : "") + diff.toFixed(2);
      const percDiffFormatted = (percDiff >= 0 ? "+" : "") + percDiff + "%";

      const diffColor =
        diff > 0 ? "text-green-500" : diff < 0 ? "text-red-500" : "";
      return {
        diff: diffFormatted,
        percDiff: percDiffFormatted,
        diffColorCheck: diffColor,
      };
    }
    return {
      diff: " 0.00",
      percDiff: "0.00%",
      diffColorCheck: "text-green-500",
    };
  };

  //разбиваю цену на целую и дробную часть
  const calculateIntFrac = (item) => {
    const numberAsString = item.purchasePrice;
    const integerPart = parseInt(numberAsString);
    const fractionalPart = parseFloat((numberAsString - integerPart).toFixed(2))
      .toString()
      .split(".")[1];
    // если целая часть больше тысячи то разделяем тысячи и сотни пробелом
    const num = () => {
      if (integerPart >= 1000) {
        let thousands = Math.floor(integerPart / 1000);
        let hundreds = integerPart % 1000;
        let formattedInteger = thousands + " " + hundreds;
        return formattedInteger;
      } else {
        return integerPart.toString();
      }
    };
    return {
      integer: num(),
      fractional: fractionalPart,
    };
  };

  // функция пагинации изменяет стейт currentPage при клике на числа
  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <section className="min-w-full flex flex-col items-center gap-4 ">
      <div className="overflow-auto h-[230px] mt-[20px]">
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
                    {complete ? (
                      /* после загрузки выводится элементы таблици  */
                      <>
                        {stock.map((item) => {
                          return (
                            <tr key={item.id} className="h-[65px]">
                              <td className="w-[80px] pl-4 text-gray-500 font-mono text-[12px]">
                                {item.ticker}
                              </td>
                              <td className="w-[260px] text-[16px]">
                                {item.name}
                              </td>
                              <td className=" text-gray-500 font-mono text-[12px]">
                                {item.amount} pcs
                              </td>
                              <td className="text-end pr-[30px] w-[120px] text-[18px]">
                                {calculateIntFrac(item).integer}.
                                <span className="text-[12px] ">
                                  {calculateIntFrac(item).fractional}
                                </span>
                                $
                              </td>

                              <td
                                className={`text-end pr-[20px] w-[200px] text-[12px] ${
                                  calculateTotalValue(item, data).diffColorCheck
                                }`}
                              >
                                {calculateTotalValue(item, data).diff}$ (
                                {calculateTotalValue(item, data).percDiff})
                              </td>
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
        totalData={stock.length}
        paginate={paginate}
      />
    </section>
  );
}
