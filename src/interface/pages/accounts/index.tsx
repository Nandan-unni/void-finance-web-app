import { useEffect } from "react";
import Account from "../../components/Account";
import { Button } from "antd";
import AddAccount from "./_AddAccount";
import { useState } from "react";
import { useAccountStore } from "../../../store";

const Accounts = () => {
  const [openAddAccount, setOpenAddAccount] = useState(false);
  const [{ accounts }, { handleListAccounts }] = useAccountStore();

  useEffect(() => {
    handleListAccounts();
  }, [handleListAccounts]);

  return (
    <div>
      <div className="flex flex-col items-center bg-themeColor justify-center h-48">
        <h1 className="w-fit text-white text-4xl">Accounts</h1>
        <Button
          onClick={() => setOpenAddAccount(true)}
          type="default"
          className="mt-2"
        >
          Add Account
        </Button>
        <AddAccount
          open={openAddAccount}
          onClose={() => setOpenAddAccount(false)}
        />
      </div>
      <div className="h-[1px] w-full bg-gray-200 my-4"></div>
      <div className="w-full">
        {accounts?.map((account) => (
          <Account key={account?.id} account={account} />
        ))}
      </div>
    </div>
  );
};

export default Accounts;
