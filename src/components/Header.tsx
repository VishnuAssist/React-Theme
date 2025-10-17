"use client";

import {
  Box,
  IconButton,
  InputBase,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import {
  Search,
  LightMode,
  DarkMode,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { useTheme } from "../contexts/ThemeContext";
import { useEffect, useRef, useState } from "react";

interface HeaderProps {
  onSearch: (query: string) => void;
  onExpandSidebar: () => void;
  sidebarExpanded: boolean;
}

export default function Header({
  onSearch,
  onExpandSidebar,
  sidebarExpanded,
}: HeaderProps) {
  const { darkMode, toggleDarkMode } = useTheme();
  const [open, setOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Close search bar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        px: 4,
        py: 2,
        borderRadius: "20px",
        m: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ✅ EXPAND BUTTON AND APP NAME */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            disableRipple
            onClick={onExpandSidebar}
            sx={{
              minWidth: "auto",
              padding: 0.5,
              bgcolor: "primary.main",
              borderRadius: "50%",
              minHeight: 32,
              width: 32,
              "&:hover": {
                bgcolor: "primary.dark",
              },
              mr: 2,
            }}
          >
            {sidebarExpanded ? (
              <ChevronLeft sx={{ color: "white", fontSize: 20 }} />
            ) : (
              <ChevronRight sx={{ color: "white", fontSize: 20 }} />
            )}
          </Button>
        </Box>

        {/* Right side - Search and actions */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            ref={searchRef}
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "background.default",
              borderRadius: 2,
              px: open ? 2 : 1,
              py: 1,
              minWidth: open ? 200 : 40,
              transition: "all 0.3s ease",
              boxShadow: open ? 1 : "none",
            }}
          >
            <IconButton size="small" onClick={() => setOpen((prev) => !prev)}>
              <Search sx={{ color: "text.secondary" }} fontSize="small" />
            </IconButton>
            <InputBase
              autoFocus
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              sx={{ flex: 1, fontSize: "0.875rem", ml: 1 }}
            />
          </Box>
          <IconButton onClick={toggleDarkMode} color="primary" size="small">
            {darkMode ? (
              <DarkMode fontSize="small" />
            ) : (
              <LightMode fontSize="small" />
            )}
          </IconButton>
          <Avatar
            sx={{ width: 42, height: 42 }}
            src="/professional-headshot.png"
          />
          <Box>
            <Typography sx={{ fontSize: "19px", fontWeight: "700" }}>
              Vishnu
            </Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
              thevishven@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
