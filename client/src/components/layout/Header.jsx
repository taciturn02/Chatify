import {
    AppBar,
    Backdrop,
    Badge,
    Box,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
  } from "@mui/material";
  import React, { Suspense, lazy, useState } from "react";
  import { orange } from "../../constants/color";
  import {
    Add as AddIcon,
    Menu as MenuIcon,
    Search as SearchIcon,
    Group as GroupIcon,
    Logout as LogoutIcon,
    Notifications as NotificationsIcon,
  } from "@mui/icons-material";
  import { useNavigate } from "react-router-dom";
  
  const SearchDialog = lazy(() => import("../specific/Search"));
  const NotifcationDialog = lazy(() => import("../specific/Notifications"));
  const NewGroupDialog = lazy(() => import("../specific/NewGroup"));
  
  const Header = () => {

    const navigate = useNavigate();
  
    const navigateToGroup = () => navigate("/groups");

    const [isMobile,setIsMobile] = useState(false);
    const [isSearch,setIsSearch] = useState(false);
    const [isNewGroup,setIsNewGroup] = useState(false);
    const [isNotification,setIsNotification] = useState(false);

    const handleMobile = ()=>{
        setIsMobile((prev)=>!prev);
    };

    const openSearch = ()=>{
        setIsSearch((prev)=> !prev);
    };
    const openNewGroup = ()=>{
        setIsNewGroup((prev)=> !prev);
    };

    const openNotification= ()=>{
        setIsNotification((prev)=>!prev);
    }
  
    const logoutHandler = ()=>{
        console.log("logoutHandler");
    };
  
    return (
      <>
        <Box sx={{ flexGrow: 1 }} height={"4rem"}>
          <AppBar
            position="static"
            sx={{
              bgcolor: orange,
            }}
          >

            <Toolbar>
              <Typography
                variant="h6"
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                CHATIFY
              </Typography>
  
            {/* WHEN SCREEN SIZE IS LESS THIS BUTTON WILL BE DISPLAYED */}
              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                <IconButton color="inherit" onClick={handleMobile}>
                  <MenuIcon />
                </IconButton>

              </Box>

            {/* THIS BOX WILL TAKE ALL THE SPACE INT THE HEADER AFTER NAME */}
              <Box
                sx={{
                  flexGrow: 1,
                }}
              />

              <Box>

                <IconBtn
                  title={"Search"}
                  icon={<SearchIcon />}
                  onClick={openSearch}
                />
  
                <IconBtn
                  title={"New Group"}
                  icon={<AddIcon />}
                  onClick={openNewGroup}
                />
  
                <IconBtn
                  title={"Manage Groups"}
                  icon={<GroupIcon />}
                  onClick={navigateToGroup}
                />
  
                <IconBtn
                  title={"Notifications"}
                  icon={<NotificationsIcon />}
                  onClick={openNotification}
                //   value={notificationCount}
                />
  
                <IconBtn
                  title={"Logout"}
                  icon={<LogoutIcon />}
                  onClick={logoutHandler}
                />
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
                
        {/* IF IS SEARCH IS NOT ACTIVE IT WILL SHOW LOADING */}
        {isSearch && (
          <Suspense fallback={<Backdrop open/>}>
            <SearchDialog />
          </Suspense>
        )}
  
        {isNotification && (
          <Suspense fallback={<Backdrop open/>}>
            <NotifcationDialog />
          </Suspense>
        )}
  
        {isNewGroup && (
          <Suspense fallback={<Backdrop open/>}>
            <NewGroupDialog />
          </Suspense>
        )}
      </>
    );
  };
  

  // SINCE WE ARE USING ICON BUTTON AGAIN AND AGAIN THEREFORE WE WILL MAKE A COMPONENT OF IT
  const IconBtn = ({ title, icon, onClick, value }) => {
    return (
      <Tooltip title={title}>
        <IconButton color="inherit" size="large" onClick={onClick}>
          {value ? (
            <Badge badgeContent={value} color="error">
              {icon}
            </Badge>
          ) : (
            icon
          )}
        </IconButton>
      </Tooltip>
    );
  };
  
  export default Header;