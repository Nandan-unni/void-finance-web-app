export enum TransactionModes {
  EXPENSE = "expense",
  INCOME = "income",
}

export type TransactionType = {
  id: string;
  amount: number;
  mode: TransactionModes;
  label: string;
  desc?: string;
  timestamp: number;
  category?: string;
  subCategory?: string;
};
