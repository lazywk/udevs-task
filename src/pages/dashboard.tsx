import PageHeader from "@/components/partials/page-header";
import DashboardMain from "@/views/dashboard/dashboard-main";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div>
      <PageHeader />
      <DashboardMain />
    </div>
  );
};

export default Dashboard;
