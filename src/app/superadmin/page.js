'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Header from '@/components/Header';

export default function SuperAdmin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:50001/api/superadmin/dashboard`, {
      headers: { Authorization: `Bearer ${Cookies.get('token')}` }
    })
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ error: 'Failed to load superadmin data' }));
  }, []);

  return (
    <div className="">
       <Header />

      <h1 className="text-xl font-bold mb-4">SuperAdmin Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
