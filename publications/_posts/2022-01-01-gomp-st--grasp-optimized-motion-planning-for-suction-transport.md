---
layout: publication
title: "Gomp-st: Grasp optimized motion planning for suction transport"
authors:

    - Yahav Avigal

    - Jeffrey Ichnowski

    - Max Yiye Cao

    - Ken Goldberg

authors-short:

    - Y. Avigal

    - J. Ichnowski

    - M. Y. Cao

    - K. Goldberg

year: 2022
journal: "None"
ref: ""
doi: None
---

Suction cup grasping is very common in industry, but moving too quickly can cause suction cups to detach, causing drops or damage. Maintaining a suction grasp throughout a high-speed motion requires balancing suction forces against inertial forces while the suction cups deform under strain. In this paper, we consider Grasp Optimized Motion Planning for Suction Transport (GOMP-ST), an algorithm that combines deep learning with optimization to decrease transport time while avoiding suction cup failure. GOMP-ST first repeatedly moves a physical robot, vacuum gripper, and a sample object, while measuring pressure with a solid-state sensor to learn critical failure conditions. Then, these are integrated as constraints on the accelerations at the end-effector into a time-optimizing motion planner. The resulting plans incorporate real-world effects such as suction cup deformation that are difficult to model analytically …
    