---
layout: layouts/case-study.njk
title: "Scaling to 4 Concurrent AI Programs and Architecting the Platform to Unify Them"
description: "Took an institution from one AI initiative to four running in parallel, then built the platform architecture that let them share one foundation."
order: 1
featured: true
themes: ["AI Strategy", "Product Leadership"]
role: "Senior Technology Solutions Strategist"
scale: "Large public institution"
period: "Current"
ogSlug: "cs-ai-platform-architecture"
stats:
  - value: "1 to 4"
    label: "Concurrent AI programs scaled"
  - value: "20+"
    label: "Vendors evaluated for platform selection"
  - value: "8+"
    label: "Architecture domains spec'd to lock"
---

## Situation

A large public institution had one AI initiative and wanted four: healthcare ePortfolio, interactive math, AI tutoring, financial training. Each had its own stakeholders, timeline, and definition of done. Run them as separate projects and you get separate architectures, separate vendor relationships, and a maintenance bill nobody signed up for. Nobody had committed to a shared foundation yet.

## What I Built

- **Scaled from 1 to 4 concurrent AI programs**, each at a distinct delivery phase, without collapsing them into a single undifferentiated backlog or losing any program's specific stakeholder relationships.
- **Ran a 20+ vendor EdTech market analysis**, benchmarked against institutional systems-of-record data, and delivered a weighted recommendation to senior stakeholders that drove platform selection and a six-capability pedagogy roadmap.
- **Led SaaS vendor engagement from contract through pilot launch**, coordinating LTI 1.3 integration across academic and LMS partners and delivering five artifacts to senior leadership within 30 days of kickoff.
- **Built a GenAI-powered workflow automation system for my own team**, seven purpose-built AI skills orchestrating retrospectives, documentation, research synthesis, and tracking across four active workstreams.
- **Architected the full product spec for an institutional AI platform** across eight-plus domains, RBAC, LTI 1.3/SSO, data hierarchy, conversation design, and UX standards, from prototype through architecture-lock.

<figure class="diagram">
<svg viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing four AI programs, healthcare ePortfolio, interactive math, AI tutoring, and financial training, unified by one platform architecture spanning RBAC, LTI 1.3 and SSO, data hierarchy, conversation design, UX standards, and additional domains.">
  <g font-family="IBM Plex Sans, sans-serif">
    <rect x="30" y="15" width="190" height="72" rx="6" fill="#FFFFFF" stroke="#0A1128" stroke-opacity="0.15"/>
    <rect x="240" y="15" width="190" height="72" rx="6" fill="#FFFFFF" stroke="#0A1128" stroke-opacity="0.15"/>
    <rect x="450" y="15" width="190" height="72" rx="6" fill="#FFFFFF" stroke="#0A1128" stroke-opacity="0.15"/>
    <rect x="660" y="15" width="190" height="72" rx="6" fill="#FFFFFF" stroke="#0A1128" stroke-opacity="0.15"/>
    <text x="125" y="47" text-anchor="middle" font-size="14" font-weight="600" fill="#0A1128">Healthcare</text>
    <text x="125" y="65" text-anchor="middle" font-size="14" font-weight="600" fill="#0A1128">ePortfolio</text>
    <text x="335" y="47" text-anchor="middle" font-size="14" font-weight="600" fill="#0A1128">Interactive</text>
    <text x="335" y="65" text-anchor="middle" font-size="14" font-weight="600" fill="#0A1128">Math</text>
    <text x="545" y="56" text-anchor="middle" font-size="14" font-weight="600" fill="#0A1128">AI Tutoring</text>
    <text x="755" y="47" text-anchor="middle" font-size="14" font-weight="600" fill="#0A1128">Financial</text>
    <text x="755" y="65" text-anchor="middle" font-size="14" font-weight="600" fill="#0A1128">Training</text>
    <line x1="125" y1="87" x2="440" y2="150" stroke="#C2592A" stroke-width="1.5"/>
    <line x1="335" y1="87" x2="440" y2="150" stroke="#C2592A" stroke-width="1.5"/>
    <line x1="545" y1="87" x2="440" y2="150" stroke="#C2592A" stroke-width="1.5"/>
    <line x1="755" y1="87" x2="440" y2="150" stroke="#C2592A" stroke-width="1.5"/>
    <rect x="30" y="150" width="840" height="66" rx="6" fill="#0A1128"/>
    <text x="450" y="177" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" letter-spacing="2" fill="#FFCC00">ARCHITECTURE-LOCK</text>
    <text x="450" y="200" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="18" font-weight="700" fill="#F7F4EF">Unified Platform Architecture</text>
    <line x1="85" y1="216" x2="85" y2="280" stroke="#C2592A" stroke-width="1.5"/>
    <line x1="231" y1="216" x2="231" y2="280" stroke="#C2592A" stroke-width="1.5"/>
    <line x1="377" y1="216" x2="377" y2="280" stroke="#C2592A" stroke-width="1.5"/>
    <line x1="523" y1="216" x2="523" y2="280" stroke="#C2592A" stroke-width="1.5"/>
    <line x1="669" y1="216" x2="669" y2="280" stroke="#C2592A" stroke-width="1.5"/>
    <line x1="815" y1="216" x2="815" y2="280" stroke="#C2592A" stroke-width="1.5"/>
    <rect x="20" y="280" width="130" height="80" rx="6" fill="#FFFFFF" stroke="#0A1128" stroke-opacity="0.15"/>
    <rect x="166" y="280" width="130" height="80" rx="6" fill="#FFFFFF" stroke="#0A1128" stroke-opacity="0.15"/>
    <rect x="312" y="280" width="130" height="80" rx="6" fill="#FFFFFF" stroke="#0A1128" stroke-opacity="0.15"/>
    <rect x="458" y="280" width="130" height="80" rx="6" fill="#FFFFFF" stroke="#0A1128" stroke-opacity="0.15"/>
    <rect x="604" y="280" width="130" height="80" rx="6" fill="#FFFFFF" stroke="#0A1128" stroke-opacity="0.15"/>
    <rect x="750" y="280" width="130" height="80" rx="6" fill="#FCF4F0" stroke="#D97443" stroke-opacity="0.4"/>
    <text x="85" y="325" text-anchor="middle" font-size="13" font-weight="600" fill="#0A1128">RBAC</text>
    <text x="231" y="317" text-anchor="middle" font-size="13" font-weight="600" fill="#0A1128">LTI 1.3</text>
    <text x="231" y="333" text-anchor="middle" font-size="13" font-weight="600" fill="#0A1128">/ SSO</text>
    <text x="377" y="317" text-anchor="middle" font-size="13" font-weight="600" fill="#0A1128">Data</text>
    <text x="377" y="333" text-anchor="middle" font-size="13" font-weight="600" fill="#0A1128">Hierarchy</text>
    <text x="523" y="317" text-anchor="middle" font-size="13" font-weight="600" fill="#0A1128">Conversation</text>
    <text x="523" y="333" text-anchor="middle" font-size="13" font-weight="600" fill="#0A1128">Design</text>
    <text x="669" y="317" text-anchor="middle" font-size="13" font-weight="600" fill="#0A1128">UX</text>
    <text x="669" y="333" text-anchor="middle" font-size="13" font-weight="600" fill="#0A1128">Standards</text>
    <text x="815" y="317" text-anchor="middle" font-size="13" font-weight="600" fill="#C2592A">+ More</text>
    <text x="815" y="333" text-anchor="middle" font-size="13" font-weight="600" fill="#C2592A">Domains</text>
  </g>
</svg>
<figcaption class="small" style="text-align: center; color: var(--rg-ash); margin-top: 0.75rem;">Four concurrent programs, one platform architecture spec'd to architecture-lock across eight-plus domains.</figcaption>
</figure>

## The Hardest Problem

Getting four programs, four separate stakeholder groups, to agree to build on one shared architecture before any single one of them needed it badly enough to fund it alone. The case had to run on future maintenance cost and integration risk. That's a much harder sell than "this feature ships faster." The vendor evaluation data made it concrete, not theoretical.

## Outcome

The platform spec reached architecture-lock across all eight-plus domains. One vendor selection and pedagogy roadmap, and all four programs build against it. The team's own workflow automation system runs in parallel, applying the same AI-native practices internally that the platform is meant to enable institution-wide.

## Skills Demonstrated

AI platform strategy, vendor evaluation and selection, enterprise architecture across concurrent programs, GenAI workflow tooling, cross-stakeholder alignment at scale.
