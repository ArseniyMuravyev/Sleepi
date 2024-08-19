import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body className="h-screen w-full flex flex-col m-0 p-0">
        <div className="w-full h-full bg-black text-white flex items-center justify-center flex-col gap-8 md:gap-16">
          <h1 className="text-2xl md:text-4xl font-bold">
            Something went wrong!
          </h1>
          <Link href="/" className="underline font-bold text-xl md:text-2xl">
            Go back to the home page
          </Link>
        </div>
      </body>
    </html>
  );
}
