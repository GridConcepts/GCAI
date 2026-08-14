import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../src/app/components/ui/avatar";

export function BrokenImageFallback() {
  return (
    <Avatar className="size-10">
      <AvatarImage
        src="https://cdn.gridconcepts.com.au/team/val-melamed-404.jpg"
        alt="Val Melamed"
      />
      <AvatarFallback>VM</AvatarFallback>
    </Avatar>
  );
}

export function InitialsOnly() {
  return (
    <Avatar className="size-10">
      <AvatarFallback>DS</AvatarFallback>
    </Avatar>
  );
}

export function TeamStack() {
  return (
    <div style={{ display: "flex" }}>
      <Avatar className="size-10" style={{ border: "2px solid var(--background)" }}>
        <AvatarFallback>VM</AvatarFallback>
      </Avatar>
      <Avatar
        className="size-10"
        style={{ border: "2px solid var(--background)", marginLeft: -12 }}
      >
        <AvatarImage
          src="https://cdn.gridconcepts.com.au/team/david-404.jpg"
          alt="David"
        />
        <AvatarFallback>DS</AvatarFallback>
      </Avatar>
      <Avatar
        className="size-10"
        style={{ border: "2px solid var(--background)", marginLeft: -12 }}
      >
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
    </div>
  );
}
