import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../src/app/components/ui/accordion";

export function Default() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="pricing"
      style={{ width: 420 }}
    >
      <AccordionItem value="pricing">
        <AccordionTrigger>How is Data Check priced?</AccordionTrigger>
        <AccordionContent>
          Data Check is a flat monthly fee based on your ad spend tier, with
          no long-term contract required.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="setup">
        <AccordionTrigger>How long does setup take?</AccordionTrigger>
        <AccordionContent>
          Most accounts are fully connected and reporting within two business
          days of kickoff.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="platforms">
        <AccordionTrigger>Which ad platforms are supported?</AccordionTrigger>
        <AccordionContent>
          We currently support Google Ads, Meta Ads, and Microsoft Ads, with
          more platforms on the roadmap.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function Multiple() {
  return (
    <Accordion
      type="multiple"
      defaultValue={["billing"]}
      style={{ width: 420 }}
    >
      <AccordionItem value="billing">
        <AccordionTrigger>Can I change plans later?</AccordionTrigger>
        <AccordionContent>
          Yes, you can upgrade or downgrade at any time from the billing
          settings page.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="cancel">
        <AccordionTrigger>How do I cancel?</AccordionTrigger>
        <AccordionContent>
          Cancel anytime from your account settings — access continues until
          the end of the billing period.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
