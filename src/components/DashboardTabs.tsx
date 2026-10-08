import { OverviewCards } from "../components/OverviewCards";
import { CategoryCards } from "../components/CategoryCards";

import { Tabs } from "@base-ui/react";
import { Select } from "@base-ui/react";

export function DashboardTabs() {
  return (
    <div className="w-full">
      <h1>This is the Dashboard Tabs Component</h1>


      <CategoryCards/>
      <OverviewCards />
    </div>
  );
}





