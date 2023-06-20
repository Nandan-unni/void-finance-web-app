import { TransactionModes, TransactionType } from "@/types/transaction";

export const transactionData = {
  id: "1",
  amount: 4656,
  mode: TransactionModes.EXPENSE,
  label: "Flight to Bali",
  desc: "Ticket + Flight food",
  timestamp: 1699209000000,
  catName: "Transport",
  catIcon: "🚗",
  subCatName: "Flight",
  subCatIcon: "✈️",
};
const transactionData2 = {
  id: "2",
  amount: 60,
  mode: TransactionModes.EXPENSE,
  label: "Metro",
  timestamp: 1699208999999,
};

export const transactionData3 = {
  id: "3",
  amount: 50000,
  mode: TransactionModes.INCOME,
  label: "June Salary",
  desc: "",
  timestamp: 1672943400000,
  catName: "Salary",
  catIcon: "🚗",
  subCatName: "Company 1",
  subCatIcon: "✈️",
};

export const transactions: TransactionType[] = [
  transactionData3,
  transactionData,
  transactionData2,
  { ...transactionData3, id: "4" },
  { ...transactionData, id: "5" },
  { ...transactionData2, id: "6" },
];
