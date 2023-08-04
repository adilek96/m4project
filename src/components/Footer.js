import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBalance } from "../redux/balanceSlice";

const Footer = () => {
  //получаю стейт из редакса
  const { data, loading, error } = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  //получаю целую и дробную части из даты
  const numberAsString = data.currentBalance;
  const integerPart = parseInt(numberAsString);
  const fractionalPart = parseFloat((numberAsString - integerPart).toFixed(2))
    .toString()
    .split(".")[1];

  //диспачу функцию получения баланса из api
  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);

  return (
    <footer className="h-[67px] min-w-full bg-purple-600  grid grid-cols-12 place-content-center absolute bottom-0 left-0">
      {error ? (
        <p className="text-red-500 col-start-2 col-span-11 place-self-center">
          Error: {error}
        </p>
      ) : (
        <>
          <p className="text-yellow-400 text-[22px] col-start-2 col-span-1 place-self-center">
            Balance:
          </p>
          <p className="text-yellow-400 text-4xl col-start-6 col-span-2 place-self-center">
            {loading ? (
              <div className="animate-pulse bg-gray-200 h-8 w-[150px] rounded-lg "></div>
            ) : (
              <>
                {integerPart}
                <span className="text-[22px]">.{fractionalPart}$</span>
              </>
            )}
          </p>
        </>
      )}
    </footer>
  );
};

export default Footer;
