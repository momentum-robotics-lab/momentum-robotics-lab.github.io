---
layout: publication
title: "Scalable multicore motion planning using lock-free concurrency"
authors:

    - Jeffrey Ichnowski

    - Ron Alterovitz

authors-short:

    - J. Ichnowski

    - R. Alterovitz

year: 2014
journal: "IEEE Transactions on Robotics"
ref: ""
doi: None
---

We present Parallel Rapidly Exploring Random Tree (PRRT) and Parallel RRT* (PRRT*), which are sampling-based methods for feasible and optimal motion planning designed for modern multicore CPUs. We parallelize RRT and RRT* such that all threads concurrently build a single-motion planning tree. Parallelization in this manner requires data structures, such as the nearest neighbor search tree and the motion planning tree, to be safely shared across multiple threads. Rather than relying on the traditional locks which can result in slowdowns due to lock contention, we introduce algorithms that are based on lock-free concurrency using atomic operations. We further improve scalability by using partition-based sampling (which shrinks each core's working dataset to improve cache efficiency) and parallel work-saving (in reducing the number of rewiring steps performed in PRRT*). Because PRRT and PRRT* are …
    