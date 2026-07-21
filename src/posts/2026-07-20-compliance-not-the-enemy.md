---
title: "The Compliance Team Is Not Your Enemy"
description: "Engineering treats legal and compliance like a boss fight at the end of the sprint. That's a design choice, and it's the wrong one."
date: 2026-07-20
tags: ["Leadership", "AI Governance"]
ogSlug: "post-compliance-not-enemy"
---

Every engineering org I've walked into has the same joke about compliance: nothing ships until they sign off, so build first and hope. I get where the joke comes from. It's also the most expensive habit in enterprise software, and it's avoidable.

The habit exists because compliance review happens at the end: after the architecture is set, after the data flows are built, after the team is emotionally committed to a design compliance is now supposed to bless or kill. Of course that feels adversarial. You structured it as a final exam instead of a design constraint.

## Move the conversation to week one

The fix isn't more compliance meetings. Same number of meetings, moved earlier, framed differently. "Here's what we built, please approve it" becomes "here's the problem we're solving, what does a design that satisfies you look like." That single change turns compliance from a gate into a co-designer. Co-designers don't block things they helped build.

I'm running this play right now: architecting an institutional AI platform where governance requirements, RBAC, data hierarchy, conversation design, get spec'd into the architecture before the build phase starts. Get governance into the foundation while changing it is still cheap. Retrofitting it after launch means every change is a migration.

## The tell that you're doing it wrong

If your compliance or legal function only hears about a project when engineering needs a sign-off, you've built an adversarial process by default. Doesn't matter how good the people are on either side. Structure decides the relationship more than personality does.

The org that treats governance as infrastructure ships faster than the org that treats it as a gate. Every time. I've built it both ways. Only one of them scales.
