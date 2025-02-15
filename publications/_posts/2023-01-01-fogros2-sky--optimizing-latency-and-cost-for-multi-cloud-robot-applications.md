---
layout: publication
title: "FogROS2-Sky: Optimizing Latency and Cost for Multi-Cloud Robot Applications"
authors:

    - Kaiyuan Chen

    - Kush Hari

    - Rohil Khare

    - Charlotte Le

    - Trinity Chung

    - Jaimyn Drake

    - Karthik Dharmarajan

    - Simeon Adebola

    - Jeffrey Ichnowski

    - John Kubiatowicz

    - Ken Goldberg

authors-short:

    - K. Chen

    - K. Hari

    - R. Khare

    - C. Le

    - T. Chung

    - J. Drake

    - K. Dharmarajan

    - S. Adebola

    - J. Ichnowski

    - J. Kubiatowicz

    - K. Goldberg

year: 2023
journal: "arXiv preprint arXiv:2311.05600"
ref: ""
doi: None
---

This paper studies the cost-performance tradeoffs in cloud robotics with heterogeneous cloud service providers, which have complex pricing models and varying application requirements. We present FogROS2-Sky, a cost-efficient open source robotics platform that offloads unmodified ROS2 applications to multiple cloud providers and enables fine-grained cost analysis for ROS2 applications' communication with multiple cloud providers. As each provider offers different options for CPU, GPU, memory, and latency, it can be very difficult for users to decide which to choose. FogROS2-Sky includes an optimization algorithm, which either finds the best available hardware specification that fulfills the user's latency and cost constraints or reports that such a specification does not exist. We use FogROS2-Sky to perform time-cost analysis on three robotics applications: visual SLAM, grasp planning, and motion planning. We are able to sample different hardware setups at nearly half the cost while still create cost and latency functions suitable for the optimizer. We also evaluate the optimizer's efficacy for these applications with the Pareto frontier and show that the optimizer selects efficient hardware configurations to balance cost and latency. Videos and code are available on the website https://sites.google.com/view/fogros2-sky
    