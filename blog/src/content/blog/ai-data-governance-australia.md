---
title: 'AI data governance in Australia: what to answer before any AI pilot'
description: 'A plain-English guide to AI data governance in Australia - the questions on data location, overseas AI vendors and automated decisions you need answered before you fund a pilot, not after.'
pubDate: 'Sep 01 2026'
---

For most COOs, AI data governance in Australia is not a compliance box to tick after a pilot succeeds - it is the first question a board or audit committee asks before releasing budget for one. That order matters. A pilot that can't answer where client data goes, which vendor processes it, and what happens if a model's output shapes a decision about a customer is not a pilot with a governance gap. It's a pilot that hasn't been scoped yet. The good news is that the questions are answerable in plain language, and answering them upfront is faster than retrofitting the answer once legal or a client asks.

## The three questions to answer before a pilot starts

Every AI pilot that touches personal information needs these settled before day one, not discovered during it:

- **Which system or model processes the data, and where does it run?** Name the vendor and the product, not the category. "We use an AI tool" is not an answer a regulator or a client will accept.
- **Is the data used to train anything beyond your own output?** Most enterprise AI contracts now let you turn this off, but it is opt-out by default with some vendors and opt-in with others. Check the contract, don't assume.
- **Where is it stored and processed - onshore or overseas?** Under Australian Privacy Principle 8, disclosing personal information to an overseas recipient (including an overseas AI vendor or a cloud region outside Australia) makes you accountable for what that recipient does with it. You cannot hand off that accountability by pointing at the vendor's own privacy policy - the obligation sits with you as the Australian business, per the [OAIC's APP 8 guidelines](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information).

If nobody on the project can answer all three cleanly, that's the actual output of week one - and it's worth knowing before the pilot's success criteria get written, not after.

## What changes on 10 December 2026

From 10 December 2026, a new transparency obligation under the Privacy Act requires businesses to disclose in their privacy policy when personal information feeds into a computer program that makes, or substantially supports, a decision significantly affecting an individual - and to say what kind of information and what kind of decision is involved. That covers more than it sounds like at first read: automated screening of loan or credit applications, algorithmic pricing, job-applicant shortlisting and eligibility checks all qualify if a model is doing the substantive work. If your pilot's output feeds into any decision a customer or applicant would reasonably call significant, this is a gating question, not a launch-day afterthought - your privacy policy needs to say so before the system goes live, not once someone asks.

## Don't assume the small-business exemption covers you indefinitely

Many Victorian SMEs still operate under the Privacy Act's exemption for businesses with turnover under $3 million, and for now that exemption stands. But it is under active review - the Attorney-General's Department has recommended narrowing or removing it, and government has accepted that recommendation in principle. Treat "we're exempt" as a temporary answer, not a permanent one, particularly if you're piloting AI on customer or employee data now. Building the governance answers in from the start costs far less than retrofitting them once the exemption narrows.

## Build governance into the pilot, not around it

The firms that get this right treat AI data governance in Australia as part of the pilot's scope, alongside the success metric and the baseline - not a separate compliance track running in parallel. Practically, that means:

1. **Name the systems and vendors in scope** before the pilot starts, and confirm each one's data location and training-use policy in writing.
2. **Draft the automated-decision disclosure language early** if the pilot's output touches customer-facing decisions, even if 10 December 2026 feels a long way off.
3. **Put one person's name against the answer** to all three questions above - not "IT" or "the vendor," a person who can restate the answer in a meeting with no notice.
4. **Revisit the exemption question annually**, not once. A pilot approved under today's rules should still hold up if the small-business threshold changes.

## Where to start

Most of this stalls not because the questions are hard, but because nobody has looked at the answer yet - what data you hold, where it actually lives, and which systems it passes through before it reaches a model. Our complimentary [AI-Readiness Data Check](https://gridconcepts.com.au/#contact) is built to surface exactly that: twelve questions, about ten minutes, and a plain picture of your data and governance position before you write a single pilot success criterion. Think of it as the governance answer you'd otherwise be assembling under deadline pressure once a client or the board asks first.

## Related reading

- [How to structure an AI pilot for professional services (without pilot theatre)](/insights/how-to-structure-an-ai-pilot-for-professional-services/)
- [Questions to ask an AI agency before you hire one](/insights/questions-to-ask-an-ai-agency/)
- [Fix the data first - then AI works](/insights/fix-the-data-first/)
