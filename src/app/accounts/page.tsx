// import React, { useState } from "react";
"use client";
import Account from "@/components/Account";
import { accountsData } from "@/data/account";
import { Button, Divider, Form } from "antd";
import AddAccount from "./_AddAccount";
import { useState } from "react";

const Accounts = () => {
  const [openAddAccount, setOpenAddAccount] = useState(false);
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
        {accountsData?.map((account) => (
          <Account key={account?.id} account={account} />
        ))}
      </div>
    </div>
  );
};

export default Accounts;
