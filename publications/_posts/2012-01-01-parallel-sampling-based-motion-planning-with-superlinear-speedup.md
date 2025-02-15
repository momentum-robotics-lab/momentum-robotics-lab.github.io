---
layout: publication
title: "Parallel sampling-based motion planning with superlinear speedup"
authors:

    - cJeffrey Ichnowski

    - cRon Alterovitz

authors-short:

    - c. Ichnowski

    - c. Alterovitz

year: 2012
journal: "2012 IEEE/RSJ International Conference on Intelligent Robots and Systems"
ref: ""
doi: None
---

We present PRRT (Parallel RRT) and PRRT* (Parallel RRT*), sampling-based methods for feasible and optimal motion planning that are tailored to execute on modern multi-core CPUs. Our algorithmic improvements enable PRRT and PRRT* to achieve a superlinear speedup: when p processor cores are used instead of 1 processor core, computation time is sped up by a factor greater than p. To achieve this superlinear speedup, our algorithms utilize three key features: (1) lock-free parallelism using atomic operations to eliminate slowdowns caused by lock overhead and contention, (2) partition-based sampling to reduce the size of each processor core's working data set to improve cache efficiency, and (3) parallel backtracking to reduce the number of rewiring steps performed in PRRT*. Our parallel algorithms retain the ability to integrate with existing CPU-based libraries and algorithms. We demonstrate fast …
    