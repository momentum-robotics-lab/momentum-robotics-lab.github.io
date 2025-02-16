---
layout: publication
title: "Planar robot casting with real2sim2real self-supervised learning"
authors:

    - Vincent Lim

    - Huang Huang

    - Lawrence Yunliang Chen

    - Jonathan Wang

    - Jeffrey Ichnowski

    - Daniel Seita

    - Michael Laskey

    - Ken Goldberg

authors-short:

    - V. Lim

    - H. Huang

    - L. Y. Chen

    - J. Wang

    - J. Ichnowski

    - D. Seita

    - M. Laskey

    - K. Goldberg

year: 2021
journal: "arXiv preprint arXiv:2111.04814"
ref: ""
doi: None
---

This paper introduces the task of {\em Planar Robot Casting (PRC)}: where one planar motion of a robot arm holding one end of a cable causes the other end to slide across the plane toward a desired target. PRC allows the cable to reach points beyond the robot workspace and has applications for cable management in homes, warehouses, and factories. To efficiently learn a PRC policy for a given cable, we propose Real2Sim2Real, a self-supervised framework that automatically collects physical trajectory examples to tune parameters of a dynamics simulator using Differential Evolution, generates many simulated examples, and then learns a policy using a weighted combination of simulated and physical data. We evaluate Real2Sim2Real with three simulators, Isaac Gym-segmented, Isaac Gym-hybrid, and PyBullet, two function approximators, Gaussian Processes and Neural Networks (NNs), and three cables with differing stiffness, torsion, and friction. Results with 240 physical trials suggest that the PRC policies can attain median error distance (as % of cable length) ranging from 8% to 14%, outperforming baselines and policies trained on only real or only simulated examples. Code, data, and videos are available at https://tinyurl.com/robotcast.
    