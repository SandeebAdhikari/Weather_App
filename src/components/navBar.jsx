import React from "react";
import GitHubImg from "/assets/github.png";
import CurrentDateTime from "../components/currentDateAndTime";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-col w-11/12 bg-base-100 m-10">
        <div className="flex justify-between w-full p-2">
          <div className="mb-4">
            <h1 className="text-[24px]">WEATHER</h1>
            <p className="text-[20px]">App</p>
          </div>

          <CurrentDateTime />

          <div className="flex flex-end dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-31 rounded-full">
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
        <div className="flex items-center form-control">
          <input
            type="text"
            placeholder="LONDON, GB"
            className="input input-bordered bg-white w-full "
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
