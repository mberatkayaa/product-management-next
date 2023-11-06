"use client";

import { signOut } from "next-auth/react";

function HookInvoker({ response, onInvokeDone }) {
  if (response.body.signOut) {
    signOut();
  }
  if(onInvokeDone) onInvokeDone();
  return <></>;
}

export default HookInvoker;
