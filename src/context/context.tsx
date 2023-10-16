import { createContext, useContext } from "react";
interface AppContextData {
  value: string;
  setValue: (value: string) => void;
}
const AppContext = createContext<AppContextData | null>(null);

const AppProvider = AppContext.Provider;

const useAppContext = () => {
  const data = useContext(AppContext);

  if (!data) {
    throw new Error("Can not `useAppContext` outside of the `AppProvider`");
  }

  return data;
};
export { useAppContext, AppProvider };
