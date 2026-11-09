---
title: "The Moment, and the Stakes"
description: "What NIST, the EU AI Act, adversarial AI research at West Point and AI in 9-1-1 call centers show about deciding where a model belongs."
date: 2026-11-09
tags: ["AI", "AI History"]
ogSlug: "post-the-moment-and-the-stakes"
---
![A timeline from ChatGPT in November 2022 to the EU's delayed high-risk rules in December 2027. Beside it, non-emergency lines go to an AI assistant reviewed by a person, and 9-1-1 calls go to a person.](/assets/insights/the-moment-and-the-stakes-hero.png)
On 07 MAY 2026, the European Union reached a political agreement to simplify its AI Act, and part of that deal pushed the rules for high-risk AI in certain sensitive areas back to 02 DEC 2027, just over five years after ChatGPT came out.

## NIST and the EU AI Act

NIST released its AI Risk Management Framework 1.0 on 26 JAN 2023, less than two months after ChatGPT. It is written for voluntary use, so it describes good practice but cannot require it. The EU's binding law, the AI Act, entered into force on 01 AUG 2024 and became applicable on 02 AUG 2026, with exceptions.

## Adversarial AI at West Point

Adversarial AI research asks what a model does when someone is deliberately trying to make it fail. I led the team of applied LLM researchers at the Army Cyber Institute at West Point, where [Dr. Alexander Berenbeim](https://www.linkedin.com/in/alexander-berenbeim/) is the lead researcher. The team authored numerous published assessments on adversarial AI risk in critical infrastructure.

In "Addressing Uncertainty in LLMs to Enhance Reliability in Generative AI" (04 NOV 2024), Berenbeim and coauthors from the Army Cyber Institute and SRI measure how unsure a model is of an answer: they generate several answers to the same question, group them by meaning, and score how widely they spread. Answers that scatter show a model that is unsure, even when each one reads as confident. In a 2026 paper, Berenbeim and coauthors from the University of Wisconsin-Madison found that when models turn a written problem into an optimization model, accuracy "collapses as instance data grows, even when the formulation itself is simple."

## AI in 9-1-1 call centers

From late 2024 to early 2026, I worked on AI strategy and governance for Next Generation 9-1-1 (NG9-1-1), advising on where AI could be safely deployed in 9-1-1 call centers.

Vendors were already selling AI capabilities into live centers. [Samantha Monk](https://www.linkedin.com/in/samantha-monk/), [Angela Murphy](https://www.linkedin.com/in/angela-murphy-sme/), [Kody Higginbotham](https://www.linkedin.com/in/kody-higginbotham-601b8190/) and I did field research with vendors and at live deployment sites, including drone-as-first-responder providers, to separate the capabilities that held up in operational use from those that did not.

In public reporting, AI on non-emergency lines has held up. The Willamette Valley Communications Center in Oregon set its AI assistant a target of 40% of calls on six non-emergency lines, and OPB reported on 29 APR 2026 that it was handling 60.7%. Governing reported that Spokane's system "will not be used for 911 calls and life-threatening emergencies."

We ran six discovery engagements with operations leadership to turn frontline problems into requirements, and convened 50 practitioners, vendors and policy stakeholders in Washington, DC.

From that work we built the governance criteria for deciding where a model belongs in a 9-1-1 center, and wrote two 50-page assessments that drove pilot and procurement advice and fed national guidance on AI adoption in emergency communication centers. The safeguards reported in May 2026 for the AI call taker in Anoka County, Minnesota are the kind of rules those criteria lead to: it takes only the lowest-priority calls, says it is an AI assistant, hands every transfer to a person with a transcript of the call, and an employee reviews every call it handles.

## Governance today

NIST, part of the Commerce Department, says the AI RMF 1.0 is being revised. In April 2026 it released a concept note for an AI RMF profile on trustworthy AI in critical infrastructure, to guide operators "towards specific risk management practices."

## Next

Next up, the last in the series: retrieval and agents in production today.

*Yes, I wrote this myself, although I did use Claude to make the graphic for me.*
