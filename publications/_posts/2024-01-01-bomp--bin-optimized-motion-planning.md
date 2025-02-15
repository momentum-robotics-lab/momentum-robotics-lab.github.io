---
layout: publication
title: "BOMP: Bin-Optimized Motion Planning"
authors:

    - Zachary Tam

    - Karthik Dharmarajan

    - Tianshuang Qiu

    - Yahav Avigal

    - Jeffrey Ichnowski

    - Ken Goldberg

authors-short:

    - Z. Tam

    - K. Dharmarajan

    - T. Qiu

    - Y. Avigal

    - J. Ichnowski

    - K. Goldberg

year: 2024
journal: "2024 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)"
ref: ""
doi: None
---

In logistics, the ability to quickly compute and execute pick-and-place motions from bins is critical to increasing productivity. We present Bin-Optimized Motion Planning (BOMP), a motion planning framework that plans arm motions for a six-axis industrial robot with a long-nosed suction tool to remove boxes from deep bins. BOMP considers robot arm kinematics, actuation limits, the dimensions of a grasped box, and a varying height map of a bin environment to rapidly generate time-optimized, jerk-limited, and collision-free trajectories. The optimization is warm-started using a deep neural network trained offline in simulation with 25,000 scenes and corresponding trajectories. Experiments with 96 simulated and 15 physical environments suggest that BOMP generates collision-free trajectories that are up to 58% faster than baseline sampling-based planners and up to 36% faster than an industry-standard Up-Over …
    