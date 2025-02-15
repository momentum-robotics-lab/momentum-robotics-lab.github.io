---
layout: publication
title: "Robots of the lost arc: Self-supervised learning to dynamically manipulate fixed-endpoint cables"
authors:

    - Harry Zhang

    - Jeffrey Ichnowski

    - Daniel Seita

    - Jonathan Wang

    - Huang Huang

    - Ken Goldberg

authors-short:

    - H. Zhang

    - J. Ichnowski

    - D. Seita

    - J. Wang

    - H. Huang

    - K. Goldberg

year: 2021
journal: "2021 IEEE International Conference on Robotics and Automation (ICRA)"
ref: ""
doi: None
---

We explore how high-speed robot arm motions can dynamically manipulate ropes and cables to vault over obstacles, knock objects from pedestals, and weave between obstacles. In this paper, we propose a self-supervised learning framework that enables a UR5 robot to perform these three tasks. The framework finds a 3D apex point for the robot arm, which, together with a task-specific trajectory function, defines an arcing motion that dynamically manipulates the cable to perform a task with varying obstacle and target locations. The trajectory function computes minimum-jerk motions that are constrained to remain within joint limits and to travel through the 3D apex point by repeatedly solving quadratic programs to find the shortest and fastest feasible motion. We experiment with 5 physical cables with different thickness and mass and compare performance against two baselines in which a human chooses the apex …
    