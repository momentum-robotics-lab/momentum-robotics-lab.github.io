---
layout: publication
title: "Improving Learnt Local MAPF Policies with Heuristic Search"
authors:

    - Rishi Veerapaneni

    - Qian Wang

    - Kevin Ren

    - Arthur Jakobsson

    - Jiaoyang Li

    - Maxim Likhachev

authors-short:

    - R. Veerapaneni

    - Q. Wang

    - K. Ren

    - A. Jakobsson

    - J. Li

    - M. Likhachev

year: 2024
journal: "Proceedings of the International Conference on Automated Planning and Scheduling"
ref: ""
doi: None
---

Multi-agent path finding (MAPF) is the problem of finding collision-free paths for a team of agents to reach their goal locations. State-of-the-art classical MAPF solvers typically employ heuristic search to find solutions for hundreds of agents but are typically centralized and can struggle to scale when run with short timeouts. Machine learning (ML) approaches that learn policies for each agent are appealing as these could enable decentralized systems and scale well while maintaining good solution quality. Current ML approaches to MAPF have proposed methods that have started to scratch the surface of this potential. However, state-of-the-art ML approaches produce``local" policies that only plan for a single timestep and have poor success rates and scalability. Our main idea is that we can improve a ML local policy by using heuristic search methods on the output probability distribution to resolve deadlocks and enable full horizon planning. We show several model-agnostic ways to use heuristic search with learnt policies that significantly improve the policies' success rates and scalability. To our best knowledge, we demonstrate the first time ML-based MAPF approaches have scaled to high congestion scenarios (eg 20% agent density).
    