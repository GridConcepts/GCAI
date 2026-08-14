import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../src/app/components/ui/tabs";

export function Default() {
  return (
    <Tabs defaultValue="overview" style={{ width: 420 }}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p>
          Your account is tracking 4 active campaigns across Google and Meta,
          spending $1,240 this month against a $2,000 budget.
        </p>
      </TabsContent>
      <TabsContent value="campaigns">
        <p>
          Summer Sale and Brand Awareness are live. Winter Promo is scheduled
          to start on September 1.
        </p>
      </TabsContent>
      <TabsContent value="settings">
        <p>
          Manage billing, team seats, and notification preferences for your
          workspace.
        </p>
      </TabsContent>
    </Tabs>
  );
}

export function TwoTabs() {
  return (
    <Tabs defaultValue="daily" style={{ width: 360 }}>
      <TabsList>
        <TabsTrigger value="daily">Daily</TabsTrigger>
        <TabsTrigger value="weekly">Weekly</TabsTrigger>
      </TabsList>
      <TabsContent value="daily">
        <p>Showing spend and clicks for the last 24 hours.</p>
      </TabsContent>
      <TabsContent value="weekly">
        <p>Showing spend and clicks for the last 7 days.</p>
      </TabsContent>
    </Tabs>
  );
}
