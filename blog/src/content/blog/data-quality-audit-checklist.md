---
title: 'Data quality audit: the checklist to run before any AI initiative'
description: 'A data quality audit checklist for COOs to run before any AI initiative - what Gartner data shows about skipping it, which fields to check first, and how to score a go/no-go decision.'
pubDate: 'Oct 19 2026'
---

A data quality audit is the step most AI initiatives skip, and it is the single biggest reason they stall after the proof of concept. Gartner's February 2025 research found that through 2026, organisations will abandon 60% of AI projects that are not supported by AI-ready data - and the same survey of over 1,200 data management leaders found 63% either lack the right data practices for AI or are not sure if they have them. That is not a capability gap you discover once a pilot is underway. It is a question you can answer in a week, before anyone signs off on a budget, with a structured look at the handful of fields the use case actually depends on.

## What a data quality audit actually checks

A data quality audit for an AI initiative is narrower than a general data-governance review, and that is what makes it fast. You are not auditing every system the business runs - you are auditing the specific fields the pilot will read from and write to. For most service and professional-services businesses, that means checking:

- **Completeness.** What percentage of records have the required fields filled in at all? A client-matching or scheduling use case built on a CRM where 30% of records are missing a key field will fail quietly, not loudly - the model will just make worse decisions on the gaps.
- **Consistency.** Is the same thing recorded the same way across systems? A client named one way in the practice-management system and differently in the CRM, or a status field with five different spellings of "closed," breaks any pipeline that assumes a single source of truth.
- **Duplication.** How many records represent the same person, matter or asset more than once? Duplicates do not just waste storage - they double-count in anything the AI tool reports back to the business.
- **Freshness.** When was each field last updated, and does that match how often the business actually needs it to be current? A pricing or inventory field that is accurate as of six months ago is not a data quality problem you can paper over with a clever prompt.
- **Lineage and access.** Where does each field originate, who can edit it, and is there a governance sign-off on using it for an AI initiative at all? This is where the data quality audit meets the Privacy Act and vendor-contract questions a pilot also needs answered.

Score each of these against the two or three fields the specific use case depends on - not every field in every system. A narrow, accurate audit beats a broad, superficial one every time.

## Why this is a gating question, not a parallel workstream

The instinct in a lot of professional-services firms is to run the data quality audit alongside the pilot build, on the theory that both can be fixed as problems surface. Gartner's data argues against that: the 60% abandonment figure is specifically about projects that discover their data isn't AI-ready after they have already committed budget and a team to building something. Running the audit first turns a mid-pilot stop decision into a two-week pre-pilot finding - the same information, at a fraction of the cost.

It also changes what the pilot's success criteria can honestly claim. If nobody checked completeness and consistency on the inputs before launch, you cannot tell afterwards whether a disappointing result reflects the AI tool or the data it was fed. The audit is what makes the rest of the pilot's measurement plan trustworthy.

## Set a go/no-go threshold before you see the result

A data quality audit is only useful if someone has agreed, in advance, what score clears the bar. That means picking a completeness threshold for the required fields (a reasonable starting point is 90% or higher on anything the use case treats as mandatory), a maximum acceptable duplicate rate, and a hard rule on freshness for time-sensitive fields. Write these down before you run the audit, not after you see where the data actually lands - a threshold set to match the result you already have isn't a threshold, it's a rationalisation.

If the audit comes back under the bar, that is not a reason to cancel the AI initiative. It is a reason to fix the specific fields in scope first, which is usually weeks of cleanup work, not months - and far cheaper than finding out after the pilot is built.

## Who should run it

The data quality audit does not need a data science team. It needs someone who can pull a sample of records from the systems in scope, check them against the criteria above, and report a plain number back - typically someone already close to the CRM, practice-management system or ERP the pilot will touch. What it does need is independence from the pilot's own sponsor: the person checking the data shouldn't be the person whose budget depends on the pilot looking ready to proceed.

## Where to start

Most firms have never actually looked closely at the fields an AI initiative would depend on - not because the data quality audit is hard, but because nobody has run it yet. Our complimentary [AI-Readiness Data Check](https://gridconcepts.com.au/#contact) is built to surface exactly that: twelve questions, about ten minutes, and a plain picture of your data, systems and governance position before you commit a budget to anything. Treat it as the fastest version of the audit above - the one that tells you whether to proceed, fix something first, or ask a sharper question before you fund a pilot.

## Related reading

- [How to structure an AI pilot for professional services (without pilot theatre)](/insights/how-to-structure-an-ai-pilot-for-professional-services/)
- [AI data governance in Australia: what to answer before any AI pilot](/insights/ai-data-governance-australia/)
- [Fix the data first - then AI works](/insights/fix-the-data-first/)
