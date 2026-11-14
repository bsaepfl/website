---
title: "From Proof Trees to Proof State"
date: 2026-09-28
authors: ["Loris Tran"]
sponsor: "Ledger N3XT Research Competition"
sponsorLabel: "Published through"
categories: ["ZK", "zkVM", "Research"]
---

*Accumulation vs recursion in zkVM proof aggregation.*

## Abstract

Zero-knowledge virtual machines let a verifier confirm that a program ran correctly without repeating the full computation. For long executions, systems divide the trace into segments whose proofs must be composed into one verifiable result. Most current approaches do this recursively by proving the verification of earlier proofs.

This research examines accumulation as an alternative. Rather than repeatedly verifying earlier proofs inside new circuits, an authenticated proof state is updated as each execution segment is processed. Using OpenVM as a case study, it evaluates how WARP could replace part of a recursive aggregation pipeline while preserving execution continuity and reusing established proving infrastructure.

The article compares the two primitives, identifies the security conditions required to bind segments into one execution, and considers practical constraints such as GPU proving, arithmetization overhead, and terminal proof wrappers.

[Read the original article on Ledger](https://www.ledger.com/academy/series/n3xt/academy-research-accumulation-vs-recursion-zkvm-proving)
