---
title: "When the Machine Started Talking Back"
description: "A computer that talks like a person gets judged like one. What Amazon's Echo early-access program showed about voice, trust and failure, and why it applies to chatbots today."
date: 2026-10-20
tags: ["AI", "AI History"]
ogSlug: "post-when-the-machine-started-talking-back"
---
![A voice timeline. Siri, introduced with iPhone 4S on 04 OCT 2011. Echo, launched by invitation only on 06 NOV 2014, then opened to all on 23 JUN 2015. Beside it: the more human it sounds, the higher the bar.](/assets/insights/when-the-machine-started-talking-back-hero.png)

When a computer answers you in a human voice, I think you perceive it to be more than just a computer. You talk to it the way you would talk to a person, and you expect it to understand you the way a person would, good or bad. That was my takeaway from Amazon's early-access program for Echo, and I think today's AI assistants and chatbots face the same expectation.

## Siri, then Echo

Apple announced the iPhone 4S on 04 OCT 2011 and introduced Siri with it, described as "an intelligent assistant that helps you get things done just by asking." It went on sale on 14 OCT 2011.

On 06 NOV 2014, a small team at Amazon launched Echo. At first it was available by invitation only, to customers who wanted to help shape the device, and Amazon opened it to everyone on 23 JUN 2015.

## Inside the early-access program

From NOV 2014 to DEC 2015, while I was working on my PhD, I was a UX researcher and design partner in Echo's invited early-access program during its first year on the market. I worked on the voice interaction and the companion app, and I helped develop the Echo experience on Windows and Android. Part of that job was finding where voice interactions broke and how to fix them.

Recognizing the words was not the hard part of this system. The hard part was what happened after Echo misunderstood someone. And did it hear me or my wife or my kids playing in the background? I think a voice that sounds like a person and then gets it wrong feels like being misunderstood by someone who should have known better, so people judged it by the standard of the voice instead of the standard of the software. The more human the system sounded, the higher the bar it had to clear. If it sounded like a robot from an old black and white Twilight Zone episode, people didn't expect it to do much. But if it sounded like an adult human, then you expected it to be more intelligent than you are.

## The same bar, now in text

ChatGPT took that human voice and put it into text. It writes in full sentences and sounds sure of itself whether right or wrong. I think people extend it the same trust they extended Echo, for the same reason, and react the same way when it fails them.

I see this in the work I do now. On the enterprise AI platform I'm building, conversation design sits in the product spec next to access control and single sign-on. I treat how the LLM talks and acts on its own as a design decision, because it shapes how far people will trust what it says. In my 9-1-1 governance work, where a wrong model output can cost a life, I would rather have an awkward answer that is right than a confident, natural-sounding one that is wrong. How sure an LLM should be of its own answers is an active area of research. Just ask my friend [Dr. Alexander Berenbeim](https://www.linkedin.com/in/alexander-berenbeim/) about that.

If I were designing an AI assistant today, I would decide what it says when it doesn't understand, or doesn't know, before deciding how human it should sound. The voice sets the expectation, and the failure behavior is what decides whether people keep using it after the first time it gets something wrong. I also think this is one of the reasons why many voice assistants have been so disappointing to us as users of them; they sound so human, but they constantly fail to do what we ask.

## Next

Next up: deep learning, and what designing for a powered exoskeleton taught me about the difference between a system that can see and one that can decide.

*Yes, I wrote this myself, although I did use Claude to make the graphic for me.*
