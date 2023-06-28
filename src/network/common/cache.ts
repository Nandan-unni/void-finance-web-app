export const CACHE = {
  checkItem: (key: string) => (localStorage.getItem(key) ? true : false),
  getItem: (key: string) => JSON.parse(localStorage.getItem(key) ?? "{}"),
  setItem: (data: any) =>
    Object.keys(data).forEach((key: string) =>
      localStorage?.setItem(key, JSON.stringify(data[key]))
    ),
  removeItem: (key: string) => localStorage?.removeItem(key),
  clear: () => localStorage?.clear(),
};
