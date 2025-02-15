---
layout: publication
title: "Serverless multi-query motion planning for fog robotics"
authors:

    - Raghav Anand

    - Jeffrey Ichnowski

    - Chenggang Wu

    - Joseph M Hellerstein

    - Joseph E Gonzalez

    - Ken Goldberg

authors-short:

    - R. Anand

    - J. Ichnowski

    - C. Wu

    - J. M. Hellerstein

    - J. E. Gonzalez

    - K. Goldberg

year: 2021
journal: "2021 IEEE International Conference on Robotics and Automation (ICRA)"
ref: ""
doi: None
---

Robots in semi-structured environments such as homes and warehouses sporadically require computation of high-dimensional motion plans. Cloud and fog-based parallelization of motion planning can speed up planning. This can be further made efficient by the use of "serverless" on-demand computing as opposed to always-on high end computers. This paper explores parallelizing the computation of a sampling-based multi-query motion planner based on asymptotically-optimal Probabilistic Road Maps (PRM*) using the simultaneous execution of 100s of cloud-based serverless functions. We propose an algorithm to overcome the communication and bandwidth limitations of serverless computing and use different work-sharing techniques to further optimize the cost and run time. Additionally, we provide proofs of probabilistic completeness and asymptotic optimality. In experiments on synthetic benchmarks and …
    