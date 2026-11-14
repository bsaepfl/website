---
title: "Who Said Yes?"
date: 2026-09-28
authors: ["Youssef Jeddi"]
sponsor: "Ledger N3XT Research Competition"
sponsorLabel: "Published through"
categories: ["Agentic AI", "Security", "Research"]
---

*Authorization boundaries for agents that hold value.*

## Abstract

When an autonomous agent sends a transaction, an authorization system has decided it may do so. This research asks where that decision should live and how its reasoning can remain legible when agents hold or move value.

The paper studies Orchestra, an agent that translates natural-language instructions into transactions on an Ethereum test network. It compares an authorization process driven by a language model with a deterministic policy engine that reaches the same decision from structured facts. Across 34 adversarial cases, the deterministic rules resisted prompt-based manipulation but exposed a different risk: flawed or misleading inputs can still cause incorrect authorization.

The findings argue that removing a model from the authorization decision does not eliminate the attack surface. It shifts attention to the integrity of transaction data, valuation inputs, and the payload a person is ultimately asked to confirm.

[Read the original article on Ledger](https://www.ledger.com/academy/series/n3xt/research-authorization-boundaries-for-agents)
