
export default function miniMenu() {
  return <div
    className="hidden bg-indigo-700 fixed right-0 top-0 z-50 h-full w-1/3 pt-5"
    id="menu-mobile"
  >
    <a
      href="#"
      // onclick="toggleMenu(event)"
      className="flex flex-row justify-between pr-3"
    >
      <span className="text-gray-200 px-3 font-bold text-xl">Menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-gray-100 float-right"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </a>

    <div className="pt-5">
      <div className="">
        <a
          href="#"
          className="flex items-center text-white px-3 transition-colors hover:text-indigo-600 hover:bg-gray-100"
        >
          Home
        </a>
        <a
          href="#"
          className="flex items-center text-white px-3 transition-colors hover:text-indigo-600 hover:bg-gray-100"
        >
          Shop
        </a>
        <a
          href="#"
          className="flex items-center text-white px-3 transition-colors hover:text-indigo-600 hover:bg-gray-100"
        >
          Contract
        </a>
      </div>
    </div>
    <div className="">
      <div className="">
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
  </div>;
}
