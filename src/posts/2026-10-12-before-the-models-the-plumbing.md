---
title: "Before the Models, the Plumbing"
description: "Before anyone could train a large model, someone had to store and move the data. IBM's big data years showed that AI projects die at setup, long before anyone judges the algorithm."
date: 2026-10-12
tags: ["AI", "AI History"]
ogSlug: "post-before-the-models-the-plumbing"
---
![Two timelines joining at Watson in 2011. Google and open source: GFS 2003, MapReduce 2004, Hadoop 2006. IBM: System S 2003, Streams 2009, BigInsights 2010. Beside them: setup went from days to minutes once the product shipped as a VM, and downloads rose 75x after launch.](/assets/insights/before-the-models-the-plumbing-hero.png)

Before anyone could train a large model, someone had to work out how to store and move the data it would learn from. That work started nearly two decades before ChatGPT, and it taught me the lesson I still use most: AI projects are hard to set up properly. They die long before anyone gets to judge whether the algorithm works.

## The pipes

In 2003, Google researchers published a paper on the Google File System (GFS), built for large, data-intensive applications spread across many machines. In DEC 2004, Jeffrey Dean and Sanjay Ghemawat followed with MapReduce, "a programming model and an associated implementation for processing and generating large data sets."

Doug Cutting joined Yahoo in JAN 2006. In early 2006 he proposed moving the distributed file system and MapReduce code out of Nutch, an open source web crawler, into a new project called Hadoop. Its first release came out on 01 APR 2006.

IBM was working the same problem from their large mainframe perspective. System S began in IBM Research in 2003, and in spring 2009 IBM announced it as a product, sold as InfoSphere Streams. On 19 MAY 2010, IBM announced InfoSphere BigInsights, a portfolio built on Apache Hadoop.

In FEB 2011, Watson beat Ken Jennings and Brad Rutter on Jeopardy. Most people remember the quiz show, but the paper IBM's team published the year before describes the plumbing underneath it: the team used Hadoop to preprocess the material Watson searched and build its indices, and a framework called UIMA-AS to scale the work over 2,500 compute cores at the same time. This was serious parallel processing. On 09 JAN 2014, IBM said it would invest more than $1 billion in a new Watson Group.

## Where I was standing

I joined IBM in MAY 2012 as a User Experience (UX) Engineer and soon moved into product management. I worked within the InfoSphere product line and quickly began to lead three product rollouts after identifying some significant things to improve within the portfolio. That work was part of the big data stack folded into IBM's Watson work.

The technology worked and was incredibly impressive to demonstrate, but getting an enterprise from "we bought it" to "we use it every day" was a different problem, and most of it happened before anyone ran a single query. When I joined in 2012, the InfoSphere product system was incredibly challenging to install and configure. It took several days with on-site IBM engineers to get InfoSphere running properly. This was slow, expensive, and non-scalable.

## Setup

Most of what moved our numbers had little to do with what the platforms could analyze. The product could handle millions of events per second with microsecond latency and tell you all kinds of things about it in real time. I started asking questions about why the process for selling to a new customer worked this way and quickly found out there wasn't really a reason; it was just institutional tradition. I took it on myself to build a VM with special scripting, instructions, and a default dataset included that could be downloaded and run on a laptop in a few minutes. I ended up creating more than 30 of these virtual appliances across the organization. This eliminated all the friction and cut the setup burden for enterprise customers immediately. Sales secured 24 new contracts in the next 12 months because of this. The BigInsights VM was downloaded more than 35,000 times and the Streams VM more than 9,000 times, and downloads of both products went up 75 times after launch. I also wrote the technical documentation that made it usable by anyone that wanted to download and try it out.

Little of that work added new analytic capability, but it changed how long it took a customer to reach a first useful result from days to minutes. Downloads went up that much because everyone in an organization could try the product on their own before an IBM solutions consultant ever talked to them.

## The same stall today

The models are far more capable now, but the setup problem looks about the same. An organization buys an AI platform, then has to connect it to its data, sort out who is allowed to see what and do what, and get it through a security review before anyone can use it. Plenty of the AI pilots I've seen appear to stall there, with the systems engineering model never really planned or tested. Or an even worse problem: internal security gives up, lets people do whatever they want without controls, and then all the proprietary data the company once had is exfiltrated to a third party before any security controls are put in place.

If I were starting an AI project today, I'd spend the first month on setup: the data connections, the access rules, and a first useful result for the first real user. This can be iterative, but you need a deep understanding of the system and the controls before you can let it out in the wild.

## Next

Next up: voice, and what the Echo beta taught me about what happens when a computer starts to sound like a person.

*Yes, I wrote this all by hand, although I did use Claude to make the graphic for me.*
