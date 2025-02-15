---
layout: publication
title: "GOMP: Grasp-optimized motion planning for bin picking"
authors:

    - Jeffrey Ichnowski

    - Michael Danielczuk

    - Jingyi Xu

    - Vishal Satish

    - Ken Goldberg

authors-short:

    - J. Ichnowski

    - M. Danielczuk

    - J. Xu

    - V. Satish

    - K. Goldberg

year: 2020
journal: "2020 IEEE international conference on robotics and automation (ICRA)"
ref: ""
doi: None
---

Rapid and reliable robot bin picking is a critical challenge in automating warehouses, often measured in picks-per-hour (PPH). We explore increasing PPH using faster motions based on optimizing over a set of candidate grasps. The source of this set of grasps is two-fold: (1) grasp-analysis tools such as Dex-Net generate multiple candidate grasps, and (2) each of these grasps has a degree of freedom about which a robot gripper can rotate. In this paper, we present Grasp-Optimized Motion Planning (GOMP), an algorithm that speeds up the execution of a bin-picking robot's operations by incorporating robot dynamics and a set of candidate grasps produced by a grasp planner into an optimizing motion planner. We compute motions by optimizing with sequential quadratic programming (SQP) and iteratively updating trust regions to account for the non-convex nature of the problem. In our formulation, we constrain …
    