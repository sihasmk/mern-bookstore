"use client";

import { Sidebar } from "flowbite-react";

import { FaBlog, FaUserPlus } from "react-icons/fa6";
import {
  HiUpload,
  HiChartPie,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import { ImBooks } from "react-icons/im";
import { PiSignInBold, PiSignOutBold } from "react-icons/pi";

import profilePic from "../assets/other-images/profile.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../context/AuthProvider";

const MySidebar = () => {
  const { user } = useContext(authContext);
  console.log(user);
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Link
        to="/"
        className="px-4 py-6 flex flex-col sm:flex-row gap-4 items-center"
      >
        <FaBlog className="w-6 h-6" />
        <h1 className="text-3xl text-black font-bold">Books</h1>
      </Link>
      <Sidebar.Logo
        href="#"
        img={user?.photoURL || profilePic}
        imgAlt="Flowbite logo"
      >
        {user?.displayName || "Admin"}
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiUpload}>
            Upload a Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={ImBooks}>
            Manage your Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={PiSignInBold}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={PiSignOutBold}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default MySidebar;
