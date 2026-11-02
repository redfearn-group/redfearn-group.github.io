---
title: "Meaning as Math"
description: "How word2vec, transformers and RAG turned meaning into math, and why a model that can show its source is the one people trust."
date: 2026-11-02
tags: ["AI", "AI History"]
ogSlug: "post-meaning-as-math"
---
![Four papers in order: word2vec in 2013, the Transformer in 2017, BERT in 2018 and RAG in 2020. Beside them, a source page with one passage highlighted: show the source.](/assets/insights/meaning-as-math-hero.png)
From about 2018 to 2024 I built and product-managed a bilingual research platform, housing a large repository of documents in English and Mandarin with automatic scanning, translation and search. Like most projects, it grew in sophistication and capability every year into the final product. The search was the feature that looked impressive in a demo, and it was built on one of the stranger ideas in modern AI: that you can turn the meaning of a word into a set of numbers. But I think the most important feature on a system like that is a much plainer one: retrieval, because it lets a model show its source.

## Words became numbers

On 16 JAN 2013, Mikolov and three coauthors posted a paper called "Efficient Estimation of Word Representations in Vector Space," better known as word2vec. It described how to generate a list of numbers for each word (called a vector or an embedding) from a large body of text, and it reported learning high quality vectors from a 1.6 billion word data set in less than a day. By generating what is called "meaning" in a mathematical space, you can measure how close two words are. A search no longer has to match the exact words a person typed.

That is exactly what embeddings and semantic search did for us on the bilingual research platform. When trying to tie together two languages that don't even use the same kind of characters (English letters vs. Mandarin characters), there is an obvious level of translation required, and you also have to keep checking which vectors land near each other, because that is how the search decides what is related. And if, like my development team and me, you don't read both languages, you have to quickly develop some intuition and tooling for development and testing about what is going on so you don't waste the time of subject matter experts with an endless set of questions about whether what you're building is working or not.

## Reading the whole sentence

The next step came on 12 JUN 2017, when Vaswani and seven coauthors posted "Attention Is All You Need." Their Transformer was a network based solely on attention, dropping the recurrence and convolutions that earlier networks relied on. They tested it on machine translation, the same kind of job my platform had to do on every Mandarin document that came in. Transformers changed translation of Mandarin documents for us. Instead of the tedious half-manual translations we often needed in earlier years, transformer-based models handled even complicated hundred-page documents far more accurately.

Two papers in 2018 showed where this was going. On 11 JUN 2018, OpenAI published a language model built on the Transformer and pre-trained on unlabeled text. That is what we now call GPT-1. On 11 OCT 2018, Devlin and three coauthors posted BERT, which also pre-trained on unlabeled text and set a new state of the art on eleven language tasks. These models could now build a useful sense of language by reading unlabeled text, before anyone trained them on a specific task.

## Two ways to know something

In May 2020, two papers came out six days apart. On 28 MAY, Brown and coauthors posted GPT-3, a language model with 175 billion parameters. Six days earlier, on 22 MAY, Lewis and coauthors had posted "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks," which paired a pre-trained generator with a dense vector index of Wikipedia.

Those are two different ways for a system to know something. GPT-3 holds what it learned inside its parameters, so it has no page to point to for a fact. A RAG model goes and finds documents first, using the same embedding idea from 2013, and then writes its answer from them. The documents sit outside the model, so a person can go and read them.

## Why the source matters

I worked on the retrieval side of this at scale. On the bilingual platform, we implemented semantic search, embeddings, ElasticSearch indexing and many other features. During this same time, I also led the discovery research, interface design, and release validation for a commercially launched AI/ML platform delivering search, technology monitoring and spend analytics across 400M+ documents.

Nobody can read 400 million documents by hand, so nobody can check an answer from that collection from memory. The only way to check it is to be taken to the place it came from. This is a critical point that most people new to AI seem to be realizing right now; you have to check the result yourself, regardless of how confident an LLM seems to be acting in the moment.

Retrieval does not make a model right. It can pull the wrong document, or read the right one badly. But either way, the person using it has something to look at themselves, the same way the operator in my last article needed to know when the machine was handing control back to the human. An answer with no source asks you to trust the model. But an answer with a source asks you to read the page and judge for yourself what it says. In my experience, people are far more willing to do that and exercise their own analytical judgment.

## Next

Next up: ChatGPT, the move of large language models into high-stakes work, and why governance fell behind.

*Yes, I wrote this myself, although I did use Claude to make the graphic for me.*
