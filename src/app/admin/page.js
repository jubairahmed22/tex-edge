"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "@/components/Header";

export default function Admin() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/admin/dashboard`, {
      headers: { Authorization: `Bearer ${Cookies.get("token")}` },
    })
      .then((r) => r.json())
      .then(setData);
  }, []);
  return (
    <div className="">
      {/* <Header /> */}
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
