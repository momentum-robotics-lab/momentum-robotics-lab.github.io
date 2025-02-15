---
layout: publication
title: "Concurrent nearest-neighbor searching for parallel sampling-based motion planning in SO (3), SE (3), and euclidean spaces"
authors:

    - Jeffrey Ichnowski

    - Ron Alterovitz

authors-short:

    - J. Ichnowski

    - R. Alterovitz

year: 2020
journal: "Algorithmic Foundations of Robotics XIII: Proceedings of the 13th Workshop on the Algorithmic Foundations of Robotics 13"
ref: ""
doi: None
---

This paper presents a fast exact nearest neighbor searching data structure and method that is designed to operate under highly-concurrent parallel operation on modern multi-core processors. Based on a kd-tree, the proposed method is fast, supports metric spaces common to robot motion planning, and supports nearest, k-nearest, and radius-based queries. But unlike traditional approaches using kd-trees, our approach supports simultaneous queries and insertions under concurrency, supports wait-free queries, and provides asymptotically diminishing expected wait-times for random concurrent inserts. We provide proofs of correctness under concurrency, and we demonstrate the proposed method’s performance in a parallelized asymptotically-optimal sampling-based motion planner.
    