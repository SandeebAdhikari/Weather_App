import React from "react";
import GitHubImg from "../assets/github.png";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="w-full form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-96 "
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={GitHubImg} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-24 p-2 shadow"
          >
            <li>
              <a
                href="https://github.com/SandeebAdhikari"
                className="justify-between"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
