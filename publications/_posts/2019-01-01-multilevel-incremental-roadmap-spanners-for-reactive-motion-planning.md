---
layout: publication
title: "Multilevel incremental roadmap spanners for reactive motion planning"
authors:

    - Jeffrey Ichnowski

    - Ron Alterovitz

authors-short:

    - J. Ichnowski

    - R. Alterovitz

year: 2019
journal: "2019 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)"
ref: ""
doi: None
---

Generating robot motions from a precomputed graph has proven to be an effective approach to solving many motion planning problems. After their generation, roadmaps reduce complex motion planning problems to that of solving a graph-based shortest path. However, generating the graph can involve tradeoffs, such as how sparse or dense to make the graph. Sparse graphs may not provide enough options to navigate around a new obstacle or may result in grossly suboptimal motions. Dense graphs may take too long to search and result in an unresponsive robot. In this paper we present an algorithm that generates a graph with multiple sparse levels- the sparsest level can be searched quickly, while the densest level allows for asymptotically optimal motions. With the paired multilevel shortest path algorithm, after the robot computes an initial solution, it can then incrementally refine the shortest-path as time …
    