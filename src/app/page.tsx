"use client";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import React, { useState } from "react";
import { signIn } from "../../infrastructure/auth";
import { CACHE } from "../../infrastructure/common";

const Page = () => {
  const [authenticating, setAuthenticating] = useState(false);
  const router = useRouter();
  const handleSignIn = async () => {
    setAuthenticating(true);
    try {
      const res = await signIn();
      const user = {
        name: res.user.displayName,
        uid: res.user.uid,
        email: res.user.email,
      };
      CACHE.setItem(user);
      router.push("/accounts");
    } catch (error) {
      console.log(error);
    } finally {
      setAuthenticating(false);
    }
  };

  return (
    <div className="min-h-screen min-w-full flex items-center justify-center">
      <Button
        loading={authenticating}
        type="primary"
        size="large"
        onClick={handleSignIn}
      >
        Signin with Google
      </Button>
    </div>
  );
};

export default Page;
