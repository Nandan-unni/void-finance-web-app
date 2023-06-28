import FloatButton from "../../components/FloatButton";
import Transaction from "../../components/Transaction";
import { transactions } from "../../../common/data/transaction";

const Transactions = () => {
  const ReportCard = ({ label, value }: { label: string; value: any }) => {
    return (
      <div className="flex flex-col items-center justify-center text-center h-10">
        <p className="text-white text-opacity-75">{label}</p>
        <p className="text-red-400 text-xl font-semibold">
          <span className="opacity-50">$</span> {value}
        </p>
      </div>
    );
  };
  return (
    <div>
      <div className="w-full h-40 bg-themeColor flex flex-col items-center justify-around">
        <h2 className="text-white text-3xl text-opacity-80">Transactions</h2>
        <div className="flex items-center justify-around w-full">
          <ReportCard
            label="Expenses"
            value={transactions
              .filter((t) => t.mode === "expense")
              .map((t) => t.amount)
              .reduce((t1, t2) => t1 + t2, 0)}
          />
          <ReportCard
            label="Income"
            value={transactions
              .filter((t) => t.mode === "income")
              .map((t) => t.amount)
              .reduce((t1, t2) => t1 + t2, 0)}
          />
        </div>
      </div>
      <div>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
        <FloatButton
          onClick={() => {
            //
          }}
        />
      </div>
    </div>
  );
};

export default Transactions;
