
export default function PageHeader() {
  return <header className="bg-indigo-600 w-full h-full flex flex-col" id='headerSection'>
    <div className="shadow">
      <nav className="container mx-auto h-16 flex justify-between items-stretch">
        <a href="" className="text-white font-bold flex items-center text-3xl">
          Be.pro
        </a>

        <div className="flex">
          <div className="hidden sm:flex items-stretch">
            <a
              href="#headerSection"
              className="flex items-center text-white px-3 transition-colors hover:text-indigo-600 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#shopSection"
              className="flex items-center text-white px-3 transition-colors hover:text-indigo-600 hover:bg-gray-100"
            >
              Shop
            </a>
            <a
              href="#footerSection"
              className="flex items-center text-white px-3 transition-colors hover:text-indigo-600 hover:bg-gray-100"
            >
              About
            </a>
          </div>
        </div>
        {/* <div className="flex">
          <div className="hidden sm:flex items-stretch">
            <a
              href="#"
              className="flex items-center text-white px-3 transition-colors hover:text-indigo-600 hover:bg-gray-100"
            >
              Login in
            </a>
            <a
              href="#"
              className="flex items-center text-white px-3 transition-colors hover:text-indigo-600 hover:bg-gray-100"
            >
              Sign up
            </a>
            <a
              href="#"
              className="flex items-center text-white px-3 transition-colors hover:text-indigo-600 hover:bg-gray-100"
            >
              Cart
            </a>
            <a
              href="#"
              className="flex items-center text-white px-3 transition-colors hover:text-indigo-600 hover:bg-gray-100"
            >
              Search
            </a>
          </div>
        </div>
        <a
          // onclick="toggleMenu(event)"
          className="flex flex-col justify-center pr-3 sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </a> */}
      </nav>
    </div>
  </header>;
}
