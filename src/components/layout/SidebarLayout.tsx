import React from "react";
import { ThemeProvider } from "@gravity-ui/uikit";

import "./style.scss";
import Sidebar from "../partials/sidebar";
import Header from "../partials/header";
import { useAppSelector } from "@/store/store";
import useResponsive from "@/utils/useResponsive";

export type AppProps = {
  children: React.ReactNode;
};

export const SidebarLayout: React.FC<AppProps> = ({ children }) => {
  const { theme, menuType } = useAppSelector((state) => state.theme);
  const { isMobile } = useResponsive();

  return (
    <ThemeProvider theme={theme}>
      <div className="container-fill">
        <div className="main-layout-inner">
          <Sidebar />

          {!isMobile && (
            <div
              className={`sidebar-overlay ${
                menuType === "collepse" ? "sidebar-overlay-close" : ""
              }`}
            ></div>
          )}
          <div className="site-content">
            <Header />
            <div className="site-inner">{children}</div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
