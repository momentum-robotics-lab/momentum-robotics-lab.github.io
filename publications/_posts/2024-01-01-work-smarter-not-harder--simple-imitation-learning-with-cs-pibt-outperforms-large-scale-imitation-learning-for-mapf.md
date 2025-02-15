---
layout: publication
title: "Work Smarter Not Harder: Simple Imitation Learning with CS-PIBT Outperforms Large Scale Imitation Learning for MAPF"
authors:

    - Rishi Veerapaneni

    - Arthur Jakobsson

    - Kevin Ren

    - Samuel Kim

    - Jiaoyang Li

    - Maxim Likhachev

authors-short:

    - R. Veerapaneni

    - A. Jakobsson

    - K. Ren

    - S. Kim

    - J. Li

    - M. Likhachev

year: 2024
journal: "arXiv preprint arXiv:2409.14491"
ref: ""
doi: None
---

Multi-Agent Path Finding (MAPF) is the problem of effectively finding efficient collision-free paths for a group of agents in a shared workspace. The MAPF community has largely focused on developing high-performance heuristic search methods. Recently, several works have applied various machine learning (ML) techniques to solve MAPF, usually involving sophisticated architectures, reinforcement learning techniques, and set-ups, but none using large amounts of high-quality supervised data. Our initial objective in this work was to show how simple large scale imitation learning of high-quality heuristic search methods can lead to state-of-the-art ML MAPF performance. However, we find that, at least with our model architecture, simple large scale (700k examples with hundreds of agents per example) imitation learning does \textit{not} produce impressive results. Instead, we find that by using prior work that post-processes MAPF model predictions to resolve 1-step collisions (CS-PIBT), we can train a simple ML MAPF model in minutes that dramatically outperforms existing ML MAPF policies. This has serious implications for all future ML MAPF policies (with local communication) which currently struggle to scale. In particular, this finding implies that future learnt policies should (1) always use smart 1-step collision shields (e.g. CS-PIBT), (2) always include the collision shield with greedy actions as a baseline (e.g. PIBT) and (3) motivates future models to focus on longer horizon / more complex planning as 1-step collisions can be efficiently resolved.
    