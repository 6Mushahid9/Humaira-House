import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-[#642b3a] text-[#eae6e8] sticky top-0 z-50 shadow-lg">
      <div className="flex-1 items-center">
        <a className="btn btn-ghost">
          <img src="/logoText.png" alt="" className='h-[100%]'/>
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item bg-[#eae6e8] text-[#642b3a]">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-[#642b3a] z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold text-[#eae6e8]">8 Items</span>
              <span className="text-[#eae6e8]">Subtotal: Rs.3000</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block bg-[#eae6e8] text-[#642b3a] hover:bg-[#d4c8cc]">
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ml-4">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/logo.jpeg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#642b3a] rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#eae6e8]"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge bg-[#eae6e8] text-[#642b3a]">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
