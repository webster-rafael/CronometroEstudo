export function Footer() {
  return (
    <footer className="h-full">
      <div className="mx-auto w-full max-w-screen-xl py-2">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              href="https://websterdeveloper.pro"
              target="blank"
              className="hover:underline"
            >
              Webster Developer™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
