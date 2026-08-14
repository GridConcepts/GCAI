import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "../../src/app/components/ui/table";
import { Badge } from "../../src/app/components/ui/badge";

export function CampaignsTable() {
  return (
    <Table>
      <TableCaption>Active Google Ads campaigns for the AI Leads account.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Campaign</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Daily budget</TableHead>
          <TableHead>Spend (today)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>AI Leads — Search</TableCell>
          <TableCell>
            <Badge variant="default">Active</Badge>
          </TableCell>
          <TableCell>$85.00</TableCell>
          <TableCell>$62.40</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>AI Leads — Performance Max</TableCell>
          <TableCell>
            <Badge variant="secondary">Paused</Badge>
          </TableCell>
          <TableCell>$50.00</TableCell>
          <TableCell>$12.10</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Brand Awareness — Display</TableCell>
          <TableCell>
            <Badge variant="outline">Draft</Badge>
          </TableCell>
          <TableCell>$30.00</TableCell>
          <TableCell>$0.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
