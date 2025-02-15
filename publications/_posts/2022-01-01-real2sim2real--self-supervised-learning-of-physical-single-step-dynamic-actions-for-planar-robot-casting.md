---
layout: publication
title: "Real2sim2real: Self-supervised learning of physical single-step dynamic actions for planar robot casting"
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

year: 2022
journal: "2022 International Conference on Robotics and Automation (ICRA)"
ref: ""
doi: None
---

This paper introduces the task of Planar Robot Casting (PRC): where one planar motion of a robot arm holding one end of a cable causes the other end to slide across the plane toward a desired target. PRC allows the cable to reach points beyond the robot workspace and has applications for cable management in homes, warehouses, and factories. To efficiently learn a PRC policy for a given cable, we propose Real2Sim2Real, a self-supervised framework that automatically collects physical trajectory examples to tune parameters of a dynamics simulator using Differential Evolution, generates many simulated examples, and then learns a policy using a weighted combination of simulated and physical data. We evaluate Real2Sim2Real with three simulators, Isaac Gym-segmented, Isaac Gym-hybrid, and PyBullet, two function approximators, Gaussian Processes and Neural Networks (NNs), and three cables with …
    