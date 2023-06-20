import { accountData } from "@/data/account";
import React from "react";

const Account = ({ account }: { account: typeof accountData }) => {
  const bankLogos: {
    [bankType: string]: string;
  } = {
    sbi: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/240px-SBI-logo.svg.png",
    fdrl: "https://play-lh.googleusercontent.com/RTmfgCmNOoh97mbifT3s14MusUVdLFBb0_0Kge85MPob0cmhyiikN_thf2FnGSOb4X8-",
  };

  return (
    <div className="shadow-md rounded-md max-w-full flex m-4 lg:m-8 pt-6 pb-4 px-4">
      <img
        className="rounded-full h-fit max-w-[60px] aspect-square object-contain mr-4 lg:mr-8"
        src={bankLogos[account?.type] ? bankLogos[account?.type] : ""}
        alt="bank_logo"
      />
      <div className="w-full">
        <h2 className="text-lg lg:text-base font-medium m-0">
          {account?.title}
        </h2>
        <p className="m-0 text-gray-600 text-base lg:text-sm">
          {"*".repeat(7)}
          {account?.accNum}
        </p>
        <p className="text-right w-full text-lg text-themeColor font-semibold">
          <span className="font-normal">$</span> {account?.balance}
        </p>
      </div>
    </div>
  );
};

export default Account;
