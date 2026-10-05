---
title: "AI Has a Family Tree"
description: "ChatGPT looked like it arrived overnight. It is the youngest member of a family nearly two decades old, and the first of seven articles tracing it branch by branch."
date: 2026-10-05
tags: ["AI", "AI History"]
ogSlug: "post-ai-has-a-family-tree"
---
OpenAI released ChatGPT on 30 NOV 2022 as a free research preview. Two months later, UBS analysts estimated it had reached 100 million monthly active users, [Reuters reported](https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-note-2023-02-01/). To most people, AI looked like it had arrived overnight, but it didn't.

ChatGPT is the youngest member of a family that had been growing for nearly two decades. I've worked on several of its branches, starting at IBM in 2012. This is the first of seven articles that walk the family tree one branch at a time, and what each branch taught me.

## The branches

Each branch solved one problem, but created more challenges along the way.

**Plumbing.** In December 2004, Google engineers Jeffrey Dean and Sanjay Ghemawat published MapReduce, a way to process huge data sets across many machines. In early 2006, Doug Cutting moved a distributed file system and MapReduce code out of an open source web crawler into a new project called Hadoop. IBM announced Hadoop-based products in 2010. When Watson beat Ken Jennings and Brad Rutter on Jeopardy in February 2011, its team had used Hadoop to prepare the material Watson searched. Models need data, and data needs lots of pipes to get it to the computers that use it.

**Voice.** Apple announced Siri on 04 OCT 2011. Amazon launched Echo on 06 NOV 2014, by invitation only. Talking to a computer became an ordinary way to use one. I was in the Echo beta program and helped develop the experience on Windows and Android.

**Learning.** In 2012, a University of Toronto team won the ImageNet image-recognition challenge by a wide margin. They trained their network on two NVIDIA graphics cards. Deep learning had started to find its hardware path.

**Meaning.** In 2013, word2vec learned vectors for words from 1.6 billion words of text in under a day. In 2017, the transformer paper dropped the older architectures and ran on attention alone. In 2018, OpenAI built a generative pre-trained language model on a transformer architecture. In 2020, retrieval-augmented generation let a model look things up before it answered.

## Where I was standing

I joined IBM in May 2012 as a User Experience Engineer turned product manager, and led product rollouts on InfoSphere Streams and BigInsights. Both were part of the big data stack folded into IBM's Watson work. That August I started a PhD at Virginia Tech. My dissertation included how intelligent systems should present information to a person in the field.

I've worked directly in all four branches: plumbing at IBM, voice on Echo, and learning and meaning for SOCOM. I've also worked on the trust problem those branches leave behind: the human-AI interaction model for a powered exoskeleton, AI governance for 9-1-1 call centers, and an enterprise AI platform today.

## The problem that didn't change

How do you safely deploy a system that decides things on a person's behalf, and get people to trust it enough to actually use it?

Every generation of AI got more capable. None of them answered that question. At IBM, the hard part of big data wasn't the algorithm. It was getting an enterprise to install the platform and keep using it. With Echo, the hard part wasn't recognizing speech. It was what happened after the device misunderstood you. At SOCOM, you could never make a mistake, and you had to prove it to everyone involved. In a 9-1-1 call center, the hard part isn't whether the model is usually right. It's the call where it's wrong.

ChatGPT made its capabilities visible to everyone everywhere all at once, which is why it felt sudden to anyone who hadn't been working in this field. The trust problem came with it, inherited from every generation before. Plenty of organizations adopting AI right now appear to be treating that problem as new.

## Next

Next up: what IBM's big data years taught me about why AI projects stall at setup, long before anyone can even use them.
