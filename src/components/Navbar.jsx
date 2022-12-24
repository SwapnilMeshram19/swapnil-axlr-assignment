import { Box, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { userLogOut } from "../features/loggedInSlice";

const navLinkStyle = {
  textDecoration: "none",
  color: "rgb(63,71,83)",
  fontWeight: "500",
};

const activeStyle = {
  textDecoration: "none",
  color: "rgb(50,167,156)",
  fontWeight: "500",
};

export const Navbar = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(userLogOut());
    navigate("/login");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        p: "1.5rem 10rem",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "500" }}>
          Company Name
        </Typography>

        <Box sx={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Box>
            <NavLink
              to={"/categories"}
              style={({ isActive }) => (isActive ? activeStyle : navLinkStyle)}
            >
              Categories
            </NavLink>
          </Box>
          <Box>
            <NavLink
              to={"/location"}
              style={({ isActive }) => (isActive ? activeStyle : navLinkStyle)}
            >
              Location
            </NavLink>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ fontWeight: "500", cursor: "pointer" }}
        onClick={() => handleLogout()}
      >
        Logout
      </Box>
    </Box>
  );
};
