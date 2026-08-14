import { Alert, AlertTitle, AlertDescription } from "../../src/app/components/ui/alert";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export function Default() {
  return (
    <Alert style={{ maxWidth: 420 }}>
      <CheckCircle2 />
      <AlertTitle>Campaign published</AlertTitle>
      <AlertDescription>
        Your Google Ads campaign is now live and collecting data.
      </AlertDescription>
    </Alert>
  );
}

export function Destructive() {
  return (
    <Alert variant="destructive" style={{ maxWidth: 420 }}>
      <AlertTriangle />
      <AlertTitle>Budget limit reached</AlertTitle>
      <AlertDescription>
        This campaign has hit its daily budget cap and has been paused.
      </AlertDescription>
    </Alert>
  );
}

export function TitleOnly() {
  return (
    <Alert style={{ maxWidth: 420 }}>
      <AlertTitle>No description needed for this one.</AlertTitle>
    </Alert>
  );
}
