import React, { useState } from "react";
import GitHubImg from "/assets/github.png";
import CurrentDateTime from "../components/currentDateAndTime";
import { getCoordinates } from "../utils/fetchCoordinate";

const NavBar = ({ onCityNameChange }) => {
  const [cityName, setCityName] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleInputChange = (event) => {
    setCityName(event.target.value);
    setIsInvalid(false);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      try {
        await getCoordinates(cityName);
        setIsInvalid(false);
        onCityNameChange(cityName);
      } catch (error) {
        setIsInvalid(false);
        setTimeout(() => {
          setIsInvalid(true);
        }, 0);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col w-full p-10 ">
        <div className="flex justify-between p-2">
          <div className="mb-4 ">
            <h1 className="text-[24px]">WEATHER</h1>
            <p className="text-[20px]">App</p>
          </div>

          <CurrentDateTime />

          <div className="flex flex-end dropdown  ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar "
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
            value={cityName}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="MORRISTOWN"
            className={`input input-bordered bg-white text-black w-full transition-all ${
              isInvalid ? "border-red-500 animate-shake" : ""
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
