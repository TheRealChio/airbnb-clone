"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return <Toaster toastOptions={{ duration: 2500 }} />;
};

export default ToasterProvider;
