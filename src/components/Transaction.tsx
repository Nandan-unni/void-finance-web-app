import { TransactionType } from "@/types/transaction";
import moment from "moment";
import React from "react";

const Transaction = ({ transaction }: { transaction: TransactionType }) => {
  return (
    <div
      className={`flex px-4 md:px-6 py-4 m-4 rounded-md border-solid border-[1px] border-gray-200 bg-opacity-[0.03] ${
        transaction.mode === "income" ? "bg-indigo-400" : "bg-red-400"
        // "bg-[#808080]"
      }`}
    >
      <div className="flex-[3] md:flex-[2] lg:flex-[1]">
        <div className="w-fit text-center">
          <h3 className="text-xl lg:text-lg font-semibold m-0">
            {moment(transaction.timestamp).format("DD")}{" "}
            <span className="text-xs font-normal text-gray-500">
              {moment(transaction.timestamp).format("ddd")}
            </span>
          </h3>
          <p className="text-sm font-normal text-gray-500">
            {moment(transaction.timestamp).format("MMM YY")}
          </p>
        </div>
      </div>
      <div className="flex-[6]">
        <h3 className="text-base font-medium">{transaction.label}</h3>
        <p className="text-sm font-normal text-gray-500">{transaction?.desc}</p>
      </div>
      <div
        className={`flex-[2] flex justify-end text-lg lg:text-base text-right font-normal text-opacity-80 ${
          transaction.mode === "income" ? "text-indigo-500" : "text-red-500"
        }`}
      >
        <span className="mr-1">$</span> {transaction.amount}
      </div>
    </div>
  );
};

export default Transaction;
