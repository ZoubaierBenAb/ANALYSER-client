import { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";
import SideBar from "components/SideBar";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "state/api";
import { useLocation } from "react-router-dom";
function Layout() {
  const location = useLocation()
  console.log("🚀 ~ file: index.jsx:11 ~ Layout ~ location:", location)
 

  const isNonMobile = useMediaQuery("(min-width : 600px)");

  const userId = useSelector((state)=>state.global.userId)

  const {data} = useGetUserQuery(userId)
 
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
    <Box width="100%" height="100%" display={isNonMobile ? "flex" : "block"}>
      <SideBar
      user = {data || {}}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        isNonMobile={isNonMobile}
        drawerWidth={location.pathname === '/dashboard' ? '400px' : '300px'}
      />
      <Box flexGrow={1}>
        <Navbar 
        user = {data || {}}
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
