export const accountData = {
  id: "1",
  type: "sbi",
  title: "SBI Savings Account",
  balance: 898.98,
  accNum: "4501",
  country: "IN",
};

export const accountData2 = {
  ...accountData,
  type: "fdrl",
  title: "Federal Bank Salary Account",
  balance: 72898.98,
  accNum: "2981",
  country: "IN",
};

export const accountsData = [
  { ...accountData, id: "1" },
  { ...accountData2, id: "2" },
  // { ...accountData, id: "3" },
  // { ...accountData, id: "4" },
  // { ...accountData, id: "5" },
];
