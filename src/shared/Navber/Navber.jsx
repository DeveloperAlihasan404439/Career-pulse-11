import name from "../../assets/name.png";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../page/Authentication/AuthProvider/AuthProvider";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const nav = (
    <>
      <NavLink to="/" className="mb-1 lg:mb-0">
        Home
      </NavLink>
      <NavLink to="/addjobs" className="mb-1 lg:mb-0">
        Add job
      </NavLink>
      {user ? (
        <>
          <NavLink to="myPostedJobs" className="mb-1 lg:mb-0">
            My posted jobs
          </NavLink>
        </>
      ) : (
        ""
      )}
      <NavLink to="/myBids" className="mb-1 lg:mb-0">
        My Bids
      </NavLink>
      <NavLink to="/bidRequest" className="mb-1 lg:mb-0">
        Bid Requests
      </NavLink>
    </>
  );
  return (
    <div className="bg-[#0B1221] sticky top-0 left-0 w-full py-2 z-40">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="flex justify-between items-center w-10/12 md:w-full lg:w-fit">
          <div className="drawer drawer-start lg:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-4" className="text-white text-3xl">
                <FiMenu />
              </label>
            </div>
            <div className="drawer-side  mt-[15%] md:mt-[8.8%] z-50">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-[80%] md:w-[50%] text-white bg-gradient-to-l from-[#142F5C] to-[#0B1221] min-h-full text-xl ">
                {nav}
                <div className="border border-white my-2"></div>
                {user ? (
                  <>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-[55px] h-[55px] bg-[#142F5C] p-1 bg- border border-white rounded-[50%]">
                          <img
                            src={user.photoURL}
                            alt=""
                            className="w-full h-full rounded-[50%]"
                          />
                        </div>
                        <h1 className="text-white text-xl">
                          {user.displayName}
                        </h1>
                      </div>
                      <p className="text-white text-sm">{user.email}</p>
                    </div>
                    <NavLink onClick={logOut} className="mb-1 lg:mb-0">
                      log Out
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to="/sinup" className="mb-1 lg:mb-0">
                      Register
                    </NavLink>
                    <NavLink to="/login" className="mb-1 lg:mb-0 ">
                      login
                    </NavLink>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="flex items-center md:flex-row-reverse">
            <img src={name} alt="" className="w-[110px] md:w-[150px]" />
            <img src={logo} alt="" className="w-[50px] md:w-[80px]" />
          </div>
        </div>
        <div className="hidden lg:flex gap-5">
          <ul className="flex items-center gap-5 text-xl text-white px-1">
            {nav}
          </ul>
          <div>
            {user ? (
              <Menu>
                <MenuButton>
                  <div className="w-[50px] h-[50px] bg-[#142F5C] p-1 bg- border border-white rounded-[50%]">
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-full h-full rounded-[50%]"
                    />
                  </div>
                </MenuButton>
                <MenuList>
                  <div className="bg-[#142F5C] z-10 text-white p-5 text-xl mt-1 rounded b-lg text-right">
                    <MenuItem>{user.displayName}</MenuItem>
                    <MenuItem>{user.email}</MenuItem>
                    <MenuDivider className="my-2" />
                    <MenuItem
                      onClick={logOut}
                      className="bg-white  p-1 rounded-lg "
                    >
                      <span className="text-black uppercase font-medium text-center">
                        log Out
                      </span>
                    </MenuItem>
                  </div>
                </MenuList>
              </Menu>
            ) : (
              <div className="flex gap-5">
                <NavLink
                  to="/sinup"
                  className="mb-1 lg:mb-0 bg-[#142F5C] px-4 text-2xl py-1 rounded-lg text-white"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="mb-1 lg:mb-0 bg-[#142F5C] px-4 text-2xl py-1 rounded-lg text-white"
                >
                  login
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
