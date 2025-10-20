// src/app/signin/page.js
import { Suspense } from 'react'
import SigninClient from './SigninClient' // Adjust the import based on your actual file name

export default function SigninPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <div className="card max-w-md mx-auto mt-10 p-6 shadow rounded-lg bg-white">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-10 bg-gray-200 rounded w-full mb-3"></div>
            <div className="h-10 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    }>
      <SigninClient />
    </Suspense>
  )
}