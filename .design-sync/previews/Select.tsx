import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "../../src/app/components/ui/select";
import { Label } from "../../src/app/components/ui/label";

export function Default() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: 280 }}>
      <Label htmlFor="campaign-objective">Campaign objective</Label>
      <Select defaultOpen defaultValue="leads">
        <SelectTrigger id="campaign-objective" style={{ width: 280 }}>
          <SelectValue placeholder="Choose an objective" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Google Ads</SelectLabel>
            <SelectItem value="leads">Lead generation</SelectItem>
            <SelectItem value="sales">Sales / conversions</SelectItem>
            <SelectItem value="traffic">Website traffic</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Meta Ads</SelectLabel>
            <SelectItem value="awareness">Brand awareness</SelectItem>
            <SelectItem value="engagement">Engagement</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
