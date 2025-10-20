'use client';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import Cookies from 'js-cookie';

export default function Header() {
  const { user, setUser } = useAuth();

  const handleSignOut = () => {
    Cookies.remove('token');
    Cookies.remove('name');
    Cookies.remove('role');
    setUser(null);
  };

  return (
    <header className="border-b bg-white">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="font-semibold">Auth System</Link>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-gray-600">
                Hi {user.name} ({user.role})
              </span>
              <button
                onClick={handleSignOut}
                className="btn btn-outline"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline" href="/signin">Sign in</Link>
              <Link className="btn btn-primary" href="/signup">Sign up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
