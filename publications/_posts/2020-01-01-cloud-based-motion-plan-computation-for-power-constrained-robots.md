---
layout: publication
title: "Cloud-based motion plan computation for power-constrained robots"
authors:

    - Jeffrey Ichnowski

    - Jan Prins

    - Ron Alterovitz

authors-short:

    - J. Ichnowski

    - J. Prins

    - R. Alterovitz

year: 2020
journal: "Algorithmic Foundations of Robotics XII: Proceedings of the Twelfth Workshop on the Algorithmic Foundations of Robotics"
ref: ""
doi: None
---

We introduce a method for splitting the computation of a robot’s motion plan between the robot’s low-power embedded computer, and a high-performance cloud-based compute service. To meet the requirements of an interactive and dynamic scenario, robot motion planning may need more computing power than is available on robots designed for reduced weight and power consumption (e.g., battery powered mobile robots). In our method, the robot communicates its configuration, its goals, and the obstacles to the cloud-based service. The cloud-based service takes into account the latency and bandwidth of the connection between it and the robot and computes and returns a motion plan within the time frame necessary for the robot to meet requirements of a dynamic and interactive scenario. The cloud-based service parallelizes construction of a roadmap, and returns a sparse subset of the roadmap giving the …
    