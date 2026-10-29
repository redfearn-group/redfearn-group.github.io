---
title: "Seeing Is Not Deciding"
description: "What designing for a powered exoskeleton taught me about why an accurate AI system still has to know when to hand control back."
date: 2026-10-29
tags: ["AI", "AI History"]
ogSlug: "post-seeing-is-not-deciding"
---
![ILSVRC 2012 top-5 error: the next-best entry at 26.2% and AlexNet, trained on two GTX 580 GPUs, at 15.3%. Beside it, a head-worn display showing a single item: seeing is not deciding.](/assets/insights/seeing-is-not-deciding-hero.png)
In 2012, a neural network learned to recognize objects in photos far better than any other entry that year, and it was trained on graphics processors. That same year I started a PhD on how an intelligent system should present information to a person in the field, and two years later I was designing the human-AI interaction model for a powered exoskeleton. One of the things I learned from that work is that a system that sees accurately still has to know when to stop deciding and hand control back to the person using it. The machine will never be smarter than the human.

## The year machines learned to see

In the 2012 ImageNet Large Scale Visual Recognition Challenge, a University of Toronto team of Alex Krizhevsky, Ilya Sutskever and Geoffrey Hinton entered a deep convolutional neural network now known as AlexNet. Its top-5 error rate for identifying images was 15.3%, against 26.2% for the next-best entry, which means the right label was missing from its five best guesses far less often than for anyone else. They trained it for five to six days on two NVIDIA GTX 580 GPUs. I think that pairing of deep networks and graphics processors is the direct ancestor of the large language models we use today.

## Designing for a suit that could see

From 2014 to 2017, through Redfearn Group, I worked on a program called the Tactical Assault Light Operator Suit (TALOS), U.S. Special Operations Command's powered exoskeleton program. I defined, designed, and prototyped the human-AI interaction models: what the system decides on its own, what it surfaces to an operator under load, when it defers to the operator, and how it fails safely. I also led the product design for the head-worn interfaces in Augmented/Mixed/Virtual Reality (AR/MR/VR) prototypes, on site with the operators who would wear them.

At the start of this program, there was no standardized and clear way to present the kinds of data we were trying to convey to these operators. We had to start with inspiration from video games (e.g., Halo) and movies (e.g., Iron Man) and quickly iterate through dozens of experiments with dozens of operators before we had any real data that indicated what to show, when to show it, and how to show it. And we had to do this without putting anyone in danger because of the safety-critical setting these soldiers, airmen, and sailors operate in.

An operator wearing a suit is carrying weight, moving, and watching everything around them, so every item the system puts in front of them costs attention they may not have. A more accurate sensor does not change that cost. My dissertation at Virginia Tech was on rapid design and prototyping methods for head-worn interfaces, and much of it came back to the same question: of everything the system knows, what should the person see right now, and what should it leave out? By 2017 we had landed on the opposite of where I started. Instead of putting more information on a screen, we stripped everything down to the bare minimum, with additional data sources only being presented when the user called for it.

## Accuracy is not the handoff

An accuracy number tells you how often a system is right. It does not tell you what happens when it is wrong, or whether the person relying on it can tell the difference. AlexNet's result was a huge leap, and it still missed on more than one image in seven. For a photo contest that is a score. For a system acting on someone's behalf, each of those misses is a decision someone has to catch.

That is why the TALOS interaction model had to answer, for every function, when the system acts and when it hands control back to the operator. I think those rules mattered more to the person in the suit than any accuracy figure we could derive, because they decided whether they could trust the system on the day it got something wrong. In a safety critical setting, failure is not tolerated.

Today's models are far more accurate than AlexNet, and they now take actions for people instead of just labeling pictures. The question from TALOS still applies to them: how do you safely deploy a system that decides things on a person's behalf, and get people to trust it enough to actually use it? A better model answers part of that. The rest is deciding, before launch, when it should stop and ask.

## Next

Next up: word2vec, transformers and retrieval, and what building a bilingual document-intelligence platform taught me about trust.

*Yes, I wrote this myself, although I did use Claude to make the graphic for me.*
