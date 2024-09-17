import React from "react";
import Dashboard from "@/pages/dashboard";
import { SidebarLayout } from "@/components/layout/SidebarLayout";

interface RouteItem {
  path: string;
  element: React.ReactNode;
}

const routes: RouteItem[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
].map(({ path, element }) => ({
  path,
  element: <SidebarLayout>{element}</SidebarLayout>,
}));

export const router: RouteItem[] = routes;
