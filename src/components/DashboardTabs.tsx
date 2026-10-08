import { OverviewCards } from "../components/OverviewCards";
import { CategoryCards } from "../components/CategoryCards";

import { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants } from "@/components/ui/tabs";



export function DashboardTabs() {
  return (
    // <div className="w-full">
    //   <h1>This is the Dashboard Tabs Component</h1>
<Tabs className="w-full max-w-2xl" defaultValue="featured">
    <TabsList>
      <TabsTrigger value="Overview">Overview</TabsTrigger>
      <TabsTrigger value="By Category">By Category</TabsTrigger>
    </TabsList>

  <TabsContent value="Overview">
      <OverviewCards/>
    </TabsContent>
  <TabsContent value="By Category"> 
      <CategoryCards/>
    </TabsContent>

    </Tabs>

    // </div>
  );
}





