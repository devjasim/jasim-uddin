import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="container px-4 mx-auto flex flex-col items-center justify-center min-h-[60vh]">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <p className="text-xl mb-8 opacity-70">Page not found</p>
            <Link href="/" className="text-primary underline hover:opacity-80">
                Go back home
            </Link>
        </div>
    );
}
