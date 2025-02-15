---
layout: publication
title: "Cache-aware asymptotically-optimal sampling-based motion planning"
authors:

    - Jeffrey Ichnowski

    - Jan F Prins

    - Ron Alterovitz

authors-short:

    - J. Ichnowski

    - J. F. Prins

    - R. Alterovitz

year: 2014
journal: "2014 IEEE International Conference on Robotics and Automation (ICRA)"
ref: ""
doi: None
---

We present CARRT* (Cache-Aware Rapidly Exploring Random Tree*), an asymptotically optimal sampling-based motion planner that significantly reduces motion planning computation time by effectively utilizing the cache memory hierarchy of modern central processing units (CPUs). CARRT* can account for the CPU's cache size in a manner that keeps its working dataset in the cache. The motion planner progressively subdivides the robot's configuration space into smaller regions as the number of configuration samples rises. By focusing configuration exploration in a region for periods of time, nearest neighbor searching is accelerated since the working dataset is small enough to fit in the cache. CARRT* also rewires the motion planning graph in a manner that complements the cache-aware subdivision strategy to more quickly refine the motion planning graph toward optimality. We demonstrate the performance …
    