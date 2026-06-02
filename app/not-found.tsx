import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">404</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Page Not Found</h3>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
