export default function Error()
{
    return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="text-center">
            <h1 className="text-5xl font-medium text-gray-800">404</h1>
            <p className="text-lg text-gray-600">Page not found</p>
            <a
                href="/"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
            >
                Go Home
            </a>
        </div>
    </div>
    );
}