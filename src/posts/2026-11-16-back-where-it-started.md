---
title: "Back Where It Started"
description: "Agents and retrieval in production from 2024 to 2026, building with Claude Code every day, and the AI coach WGU students practice with."
date: 2026-11-16
tags: ["AI", "AI History"]
ogSlug: "post-back-where-it-started"
---
![A timeline from Anthropic's computer use in October 2024 to SkillProof at WGU in 2026. Beside it, the coaching loop: the model asks a question, the student answers, the model scores against the objectives and gives feedback on the gap, repeated until mastery.](/assets/insights/back-where-it-started-hero.png)
Since SEP 2026, students at Western Governors University (WGU) have been practicing with an AI-based coach I have worked on for most of this year, called SkillProof. A model writes a question, the student answers in their own words, and the model scores the answer against the learning objectives, explains the gap in the response, and continues to allow the student to practice as much as they need to until the student shows mastery. The same engine runs time management, professionalism, programming, and discrete math, and it is course-agnostic: a new subject needs a new set of learning objectives, not new code. An introduction to SkillProof can be seen here: [brady-wgu.github.io/SkillProof](https://brady-wgu.github.io/SkillProof/).

## Agents, 2024 to 2026

On 22 OCT 2024, Anthropic put "computer use" into public beta, a model that operates a computer by looking at the screen, and called it experimental and error-prone. On 25 NOV 2024 it open-sourced the Model Context Protocol (MCP), a standard for connecting AI assistants to the systems where data lives, and on 09 DEC 2025 it handed the protocol to the Agentic AI Foundation under the Linux Foundation. Claude Code, the coding agent I use now, became generally available on 22 MAY 2025.

The tau-bench paper (17 JUN 2024) found that even state-of-the-art agents such as gpt-4o completed fewer than half of its customer-service tasks, and in retail, fewer than 25% when they had to get the same task right eight times in a row. A Stanford study (30 MAY 2024) found that legal research tools built on retrieval still made things up between 17% and 33% of the time, while vendors had promoted them as avoiding hallucinations, one as "hallucination-free." Those numbers are from 2024 products. My own work since then shows the same pattern: an agent can be fast, and some of what it produces is wrong but looks confident, which is what the uncertainty research from the Army Cyber Institute I described last week measures.

## Building with Claude Code

I primarily build with Claude Code for about six hours a day currently, and I build anything I can to automate my own work. I am limited by token budgets, not ideas. The storyboard and the live demo for the coaching platform were built that way, and so were the myriad AI skills that run my team's retrospectives, documentation, research synthesis and status tracking across each of my current six workstreams. I rely on Claude Code to magnify what I do and accelerate my outputs, whether I'm writing a research report about AI video generation tools or using the "QA Engineer" I've built to help run tests on websites before they are deployed into production.

I build the checks for my work with the same tool. The capture tool behind the SkillProof demo page is also used to generate user-facing documentation and demo videos, file bug reports, and verify contract progress. A second script tests everything on the site, end to end, every night.

## Checking the coach

Before a skill reaches students, an instructor can run a preview in which the model writes a real question and grades a submitted answer, but nothing is saved. School admins set a passing threshold for each learning objective and choose the model, with a fallback if the first one fails.

## Back where it started

In 2012 at IBM, the slow part was getting the software installed at all. In 2026, I can get a prototype tool running the same afternoon I can think of an idea. My time goes into proving that what is running is right instead of having to code it myself from scratch.

*Yes, I wrote this myself, although I did use Claude to make the graphic for me.*
