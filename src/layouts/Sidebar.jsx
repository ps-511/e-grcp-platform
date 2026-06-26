import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import WarningIcon from "@mui/icons-material/Warning";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import GavelIcon from "@mui/icons-material/Gavel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
    roles: ["Administrator"],
  },

  {
    label: "Procurement",
    path: "/procurement",
    icon: <ShoppingCartIcon />,
    roles: [
      "Administrator",
      "Procurement Manager",
    ],
  },

  {
    label: "Vendors",
    path: "/vendors",
    icon: <BusinessIcon />,
    roles: [
      "Administrator",
      "Procurement Manager",
    ],
  },

  {
    label: "Approval",
    path: "/approval",
    icon: <TaskAltIcon />,
    roles: [
      "Administrator",
      "Procurement Manager",
    ],
  },

  {
    label: "Risk",
    path: "/risk",
    icon: <WarningIcon />,
    roles: ["Administrator"],
  },

  {
    label: "Compliance",
    path: "/compliance",
    icon: <FactCheckIcon />,
    roles: [
      "Administrator",
      "Compliance Officer",
    ],
  },

  {
    label: "Audit",
    path: "/audit",
    icon: <GavelIcon />,
    roles: [
      "Administrator",
      "Auditor",
    ],
  },

  {
    label: "Reports",
    path: "/reports",
    icon: <AssessmentIcon />,
    roles: [
      "Administrator",
      "Auditor",
      "Compliance Officer",
    ],
  },

  {
    label: "Notifications",
    path: "/notifications",
    icon: <NotificationsIcon />,
    roles: [
      "Administrator",
      "Auditor",
      "Compliance Officer",
      "Procurement Manager",
    ],
  },

  {
    label: "Settings",
    path: "/settings",
    icon: <SettingsIcon />,
    roles: [
      "Administrator",
      "Auditor",
      "Compliance Officer",
      "Procurement Manager",
    ],
  },
];

function Sidebar() {
  const user = useSelector(
    (state) => state.auth.user
  );

  return (
    <Box
      sx={{
        width: 240,
        minHeight: "100vh",
        background: "#07173a",
      }}
    >
      <List>
        {menuItems
          .filter((item) =>
            item.roles.includes(
              user?.role
            )
          )
          .map((item) => (
            <ListItemButton
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                color: "white",
              }}
            >
              <ListItemIcon
                sx={{
                  color: "white",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={
                  item.label
                }
              />
            </ListItemButton>
          ))}
      </List>
    </Box>
  );
}

export default Sidebar;