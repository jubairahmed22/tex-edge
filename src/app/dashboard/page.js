'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardRedirect() {
  const router = useRouter();
  useEffect(() => {
    const role = Cookies.get('role');
    if (role === 'Admin') router.replace('/admin');
    else if (role === 'SuperAdmin') router.replace('/superadmin');
    else router.replace('/employee');
  }, [router]);
  return <p>Redirecting...</p>;
}
