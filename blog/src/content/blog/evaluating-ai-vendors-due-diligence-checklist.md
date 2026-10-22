---
title: 'Evaluating AI vendors: a due-diligence checklist for professional services'
description: 'A due-diligence checklist for evaluating AI vendors in professional services - the data, model and contract questions a standard SaaS procurement process misses, and how to score the answers before you sign.'
pubDate: 'Oct 22 2026'
---

Most firms evaluating AI vendors are still running the same procurement checklist they used for a practice-management system a decade ago: uptime, support hours, price per seat. Gartner's forecast that more than 40% of agentic AI projects will be scrapped before the end of 2027 is not mainly a story about bad models - it is a story about unclear business value and inadequate risk controls that a standard SaaS checklist was never built to catch. For a COO putting a vendor in front of the board, evaluating AI vendors properly means adding a handful of AI-specific questions to due diligence before the contract, not discovering the gaps after rollout.

## What a standard SaaS checklist misses

A conventional vendor review checks security certifications, data residency and support SLAs, and all of that still matters. What it typically does not check is anything specific to how the AI component behaves: where the underlying model's training data came from, how the vendor handles model updates once you are live, whether your data is used to improve a shared model other customers also use, and who in the vendor's chain (a subprocessor, a foundation-model provider) your data actually passes through. Those gaps do not show up in a demo. They show up six months in, when the model changes behaviour without warning or a subprocessor you never vetted has been handling client data the whole time.

## The checklist: five areas to score before you sign

- **Data handling and privacy.** Is your data used to train or improve the vendor's model, and can you opt out in writing? Where is it stored and processed - onshore, or does it cross borders? From 10 December 2026, Australian Privacy Act reforms require organisations using automated decision-making that affects people's rights or interests to disclose that in their privacy policy; ask now whether the vendor's tool triggers that obligation for you, not after the deadline passes.
- **Model behaviour and change control.** How often does the model change, and does the vendor notify you before it does? A tool that quietly updates its underlying model can shift outputs without any change on your end - ask for a documented change-notification process, not a verbal assurance.
- **Security and subprocessors.** Who else touches your data - cloud hosting, a foundation-model API, an analytics subprocessor? Ask for the full chain, not just the vendor's own certifications.
- **Commercial terms and exit.** Can you get your data out in a usable format if you leave? What happens to historical outputs and configuration? A vendor that cannot answer this clearly is telling you the contract was written to make leaving expensive.
- **Accountability.** If the tool produces a wrong or harmful output, who is liable - the vendor, you, or is it silent on the question? Silence on this point is itself the answer.

Score each area against the specific use case you are buying for, not against an abstract ideal. A tool handling internal scheduling needs far less scrutiny on data handling than one touching client financial or health information.

## Where a compliance badge fits - and where it doesn't

ISO 42001 (an AI management-system standard) and SOC 2 are starting to appear in AI vendor RFPs, and it is reasonable to ask for them. But a certificate on a slide is not evidence by itself. Ask for the Statement of Applicability, the certifying body, and the expiry date, and confirm the certification actually covers the product you are buying rather than the vendor's business generally. A badge with no supporting paperwork is a marketing asset, not a due-diligence answer.

## Questions to ask in the first meeting

- "If our data trains your model, can we opt out, and in writing?"
- "Walk us through your last model update - how were we notified, and what changed?"
- "Who else in your stack processes our data, start to finish?"
- "What does it cost us, in time and format, to leave in twelve months?"
- "If this tool gets something wrong and it costs us a client, what happens next?"

A vendor who answers all five without hedging has done this before. One who needs to "check internally" on more than one of them is telling you due diligence has not been asked of them before.

## Turning the checklist into a go/no-go

Set the pass threshold before you see any vendor's answers, the same discipline that should sit behind any pilot's success criteria. Decide in advance which of the five areas are non-negotiable for the data this tool will touch, and which can carry a documented risk acceptance if the vendor is otherwise strong. That turns a subjective "we liked them" decision into one you can defend to a board or an audit committee afterwards.

## Where to start

This checklist assumes you already know what data the vendor's tool would actually touch and how clean it is - which is usually the harder question. Our complimentary [AI-Readiness Data Check](https://gridconcepts.com.au/#contact) gives you that picture first: twelve questions, about ten minutes, covering data, systems and governance, so you walk into vendor evaluation knowing what you are protecting.

## Related reading

- [AI implementation partner vs. consultancy: what's the difference](/insights/ai-implementation-partner-vs-consultancy/)
- [AI data governance in Australia: what to answer before any AI pilot](/insights/ai-data-governance-australia/)
- [Questions to ask an AI agency before you hire one](/insights/questions-to-ask-an-ai-agency/)
