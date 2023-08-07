import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTerm } from "../redux/searchSlice";
import { setFilteringData } from "../redux/stocksSlice";

export default function SearchInput() {
  // принимаю стейты
  const { term } = useSelector((state) => state.search);
  const { data, complete } = useSelector((state) => state.stocks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (term.length === 0) {
      // если строка поиска пустая то  данные из массива data прописывается filteringData
      dispatch(setFilteringData(data));
    } else {
      // если в строке поиска введен символ то filteringData записываются отфильтрованые данные из масива data
      dispatch(
        setFilteringData(
          data.filter((item) => {
            return item.symbol.indexOf(term) > -1;
          })
        )
      );
    }
  }, [complete, term, dispatch, data]); // стейт complete используется как флаг для начала отработки useEffect

  const onUpdateSearch = (e) => {
    dispatch(setTerm(e.target.value)); // при изменения в строке поиска меняется стейт term
  };
  return (
    <div className="relative mt-8">
      <input
        type="text"
        className="w-[360px] h-[45px] px-14 py-2 bg-gray-100 border border-gray-300 rounded-[94px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="enter company ticker"
        value={term}
        onChange={onUpdateSearch}
      />
      <div className="absolute inset-y-0 left-4 flex items-center pr-3 pointer-events-none">
        <img src="../img/find.svg" alt="find" />
      </div>
    </div>
  );
}
