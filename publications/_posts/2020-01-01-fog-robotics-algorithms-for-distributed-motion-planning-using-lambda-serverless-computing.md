---
layout: publication
title: "Fog robotics algorithms for distributed motion planning using lambda serverless computing"
authors:

    - Jeffrey Ichnowski

    - William Lee

    - Victor Murta

    - Samuel Paradis

    - Ron Alterovitz

    - Joseph E Gonzalez

    - Ion Stoica

    - Ken Goldberg

authors-short:

    - J. Ichnowski

    - W. Lee

    - V. Murta

    - S. Paradis

    - R. Alterovitz

    - J. E. Gonzalez

    - I. Stoica

    - K. Goldberg

year: 2020
journal: "2020 IEEE International Conference on Robotics and Automation (ICRA)"
ref: ""
doi: None
---

For robots using motion planning algorithms such as RRT and RRT*, the computational load can vary by orders of magnitude as the complexity of the local environment changes. To adaptively provide such computation, we propose Fog Robotics algorithms in which cloud-based serverless lambda computing provides parallel computation on demand. To use this parallelism, we propose novel motion planning algorithms that scale effectively with an increasing number of serverless computers. However, given that the allocation of computing is typically bounded by both monetary and time constraints, we show how prior learning can be used to efficiently allocate resources at runtime. We demonstrate the algorithms and application of learned parallel allocation in both simulation and with the Fetch commercial mobile manipulator using Amazon Lambda to complete a sequence of sporadically computationally intensive …
    