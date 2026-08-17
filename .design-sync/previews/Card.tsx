import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "../../src/app/components/ui/card";
import { Button } from "../../src/app/components/ui/button";
import { Badge } from "../../src/app/components/ui/badge";

export function Default() {
  return (
    <Card style={{ width: 360 }}>
      <CardHeader>
        <CardTitle>Team plan</CardTitle>
        <CardDescription>For growing marketing teams.</CardDescription>
        <CardAction>
          <Badge>Popular</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Includes unlimited campaigns, 10 seats, and priority support.</p>
      </CardContent>
      <CardFooter style={{ gap: 8 }}>
        <Button variant="outline">Learn more</Button>
        <Button>Upgrade</Button>
      </CardFooter>
    </Card>
  );
}

export function Simple() {
  return (
    <Card style={{ width: 320 }}>
      <CardContent>
        <p>A minimal card with just body content — no header or footer.</p>
      </CardContent>
    </Card>
  );
}
