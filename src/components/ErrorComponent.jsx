"use client";

import { useState } from "react";

import Swal from "react-sweetalert2";
import HookInvoker from "./HookInvoker";

function ErrorComponent({ error, title, onResolve, response, callInvoker }) {
  const [resolved, setResolved] = useState(false);
  title = title || "Oops!";

  const resolveHandler = () => {
    if (onResolve) onResolve();
    if (callInvoker && response) {
      setResolved(true);
    }
  };

  return (
    <>
      {error && <Swal title={title} text={error} show={true} icon="error" onResolve={resolveHandler} />}
      {resolved && <HookInvoker response={response} onInvokeDone={() => setResolved(false)} />}
    </>
  );
}

export default ErrorComponent;
