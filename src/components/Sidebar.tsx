"use client";

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  Divider,
} from "@mui/material";
import { Home, LiveTv,  } from "@mui/icons-material";
import PetsIcon from '@mui/icons-material/Pets';
import { useAppSelector } from "../hooks/redux";
import { useNavigate, useLocation } from "react-router-dom";

const SIDEBAR_WIDTH = 80;
const EXPANDED_SIDEBAR_WIDTH = 200;

// ✅ Define grouped menu structure
const navigationSections = [
  {
    header: "System",
    items: [{ icon: Home, path: "/", label: "Dashboard" }],
  },
  {
    header: "Settings",
    items: [
      { icon: Home, path: "/Page1", label: "Page1" },
      { icon: Home, path: "/Page2", label: "Page2" },
    ],
  },
];

interface SidebarProps {
  expanded: boolean;
}

export default function Sidebar({ expanded }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { sidebarOpen } = useAppSelector((state) => state.ui);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const sidebarContent = (
    <Box
      sx={{
        width: expanded ? EXPANDED_SIDEBAR_WIDTH : SIDEBAR_WIDTH,
        height: "100vh",
        bgcolor: "background.paper",
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        transition: "width 0.3s ease",
      }}
    >
      {/* ✅ TOP FIXED SECTION WITH SYSTEM TITLE */}
 <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: expanded ? "flex-start" : "center",
    width: "100%",
    px: expanded ? 1 : 0,
    mb: 2,
  }}
>
  <Box
    sx={{
      
      
      display: "flex",
      alignItems: "center",
      justifyContent: expanded ? "flex-start" : "center",
      alignSelf: expanded ? "flex-start" : "center",
      width: expanded ? "fit-content" : "auto",
      p: expanded ? 1 : 0,
      gap: expanded ? 1 : 0,
    }}
  >
    <IconButton sx={{ color: "primary.main", p: 1 }}>
      <PetsIcon fontSize="large"  />
    </IconButton>

    {expanded && (
      <Box sx={{ color: "primary.main", lineHeight: 1.1 }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 700, fontSize: 19 }}
        >
          Rukku
        </Typography>
 
      </Box>
    )}
  </Box>
</Box>


      <Divider sx={{ width: "80%", mb: 2 }} />

      {/* ✅ GROUPED MENU SECTIONS */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        {navigationSections.map((section, sectionIndex) => (
          <Box key={sectionIndex} sx={{ width: "100%", mb: 2 }}>
            {expanded && (
              <Typography
                variant="caption"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "text.secondary",
                  pl: 2,
                  mb: 1,
                }}
              >
                {section.header}
              </Typography>
            )}

            <List
              sx={{ display: "flex", flexDirection: "column", gap: 1, p: 0 }}
            >
              {section.items.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <ListItem
                    key={index}
                    disablePadding
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: expanded ? "flex-start" : "center",
                      px: expanded ? 2 : 0,
                      position: "relative",
                    }}
                  >
                    {/* ✅ Left-side active indicator (separate strip) */}
                    {expanded && (
                    <Box
                      sx={{
                        width: "8px",
                        height: "100%",
                        bgcolor: isActive ? "primary.main" : "transparent",
                        borderRadius: "0 10px 10px 0",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transition: "background-color 0.3s ease",
                      }}
                    />)}

                    {expanded ? (
                      // ✅ EXPANDED VIEW - icon + label
                      <ListItemButton
                        onClick={() => handleNavigation(item.path)}
                        sx={{
                          width: "100%",
                          borderRadius: 2,
                          py: 1.5,
                          pl: 3,
                          // bgcolor: isActive ? "primary.main" : "transparent",
                          // color: isActive
                          //   ? "primary.contrastText"
                          //   : "text.secondary",
                          // "&:hover": {
                          //   bgcolor: isActive ? "primary.dark" : "action.hover",
                          // },
                          transition: "all 0.2s ease",
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 2,
                            color: isActive
                              ? "primary.main"
                              : "text.secondary",
                          }}
                        >
                          <item.icon fontSize="medium" />
                        </ListItemIcon>
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: "0.875rem",
                            fontWeight: isActive ? 600 : 400,
                          }}
                        />
                      </ListItemButton>
                    ) : (
                      // ✅ COLLAPSED VIEW - icon only with tooltip
                      <Tooltip title={item.label} placement="right" arrow>
                        <ListItemButton
                          onClick={() => handleNavigation(item.path)}
                          sx={{
                            width: "100%",
                            borderRadius: 2,
                            p: 1.5,
                            bgcolor: isActive ? "primary.main" : "transparent",
                            color: isActive
                              ? "primary.contrastText"
                              : "text.secondary",
                            justifyContent: "center",
                            "&:hover": {
                              bgcolor: isActive
                                ? "primary.dark"
                                : "action.hover",
                            },
                            transition: "all 0.2s ease",
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              color: isActive
                                ? "primary.contrastText"
                                : "text.secondary",
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            <item.icon fontSize="medium" />
                          </ListItemIcon>
                        </ListItemButton>
                      </Tooltip>
                    )}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      open={sidebarOpen}
      sx={{
        width: sidebarOpen
          ? expanded
            ? EXPANDED_SIDEBAR_WIDTH
            : SIDEBAR_WIDTH
          : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sidebarOpen
            ? expanded
              ? EXPANDED_SIDEBAR_WIDTH
              : SIDEBAR_WIDTH
            : 0,
          boxSizing: "border-box",
          border: "none",
          display: "flex",
          justifyContent: "center",
          transition: "width 0.3s ease",
          overflowX: "hidden",
        },
      }}
    >
      {sidebarContent}
    </Drawer>
  );
}
