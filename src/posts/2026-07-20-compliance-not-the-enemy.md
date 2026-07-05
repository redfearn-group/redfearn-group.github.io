---
title: "The Compliance Team Is Not Your Enemy"
description: "Engineering treats legal and compliance like a boss fight at the end of the sprint. That's a design choice, and it's the wrong one."
date: 2026-07-20
tags: ["Leadership", "AI Governance"]
ogSlug: "post-compliance-not-enemy"
---

Every engineering org I've walked into has the same joke about compliance: nothing ships until they sign off, so build first and hope. I understand where the joke comes from. I also think it's the single most expensive habit in enterprise software, and it's completely avoidable.

The habit exists because compliance review happens at the end, after the architecture is set, after the data flows are built, after the team is emotionally committed to a design that compliance is now supposed to bless or kill. Of course that feels adversarial. You've structured it as a final exam instead of a design constraint.

## Move the conversation to week one

The fix isn't more compliance meetings. It's the same number of meetings, moved earlier, with different framing. Instead of "here's what we built, please approve it," the first conversation should be "here's the problem we're solving, what does a design that satisfies you actually look like." That single change turns compliance from a gate into a co-designer, and co-designers don't block things they helped build.

I'm running this play right now, architecting an institutional AI platform where governance requirements, RBAC, data hierarchy, conversation design, get spec'd into the architecture itself before the build phase even starts. That's a deliberate bet: get governance into the foundation while changing it is still cheap, instead of retrofitting it after launch when every change means a migration.

## The tell that you're doing it wrong

If your compliance or legal function only hears about a project when engineering needs a sign-off, you've built an adversarial process by default, regardless of how good the people on either side are. Structure decides the relationship more than personality does.

The org that treats governance as infrastructure ships faster than the org that treats it as a gate. Every time. I've built it both ways, and only one of them scales.
