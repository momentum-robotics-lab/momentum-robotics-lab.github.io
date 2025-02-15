---
layout: publication
title: "Learning robot policies for untangling dense knots in linear deformable structures"
authors:

    - Jennifer Grannen

    - Priya Sundaresan

    - Brijen Thananjeyan

    - Jeff Ichnowski

    - Ashwin Balakrishna

    - Vainavi Viswanath

    - Michael Laskey

    - Joseph E Gonzalez

    - Ken Goldberg

authors-short:

    - J. Grannen

    - P. Sundaresan

    - B. Thananjeyan

    - J. Ichnowski

    - A. Balakrishna

    - V. Viswanath

    - M. Laskey

    - J. E. Gonzalez

    - K. Goldberg

year: 2020
journal: "Conference on Robot Learning (CoRL)"
ref: ""
doi: None
---

Untangling linear deformable objects (LDOs) such as ropes, wires, and cables is a challenging robot task due to the vast set of possible arrangements, visual homogeneity, self-occlusions, and complex dynamics. Prior geometric methods have focused on loose knot configurations using full rope state estimation before planning, while prior data-driven approaches require substantial environment interaction. We consider dense (tight) knots that lack space between self-intersections and present an iterative algorithm that leverages geometric structure in configurations to untie knots. We then practically instantiate this algorithm with HULK: Hierarchical Untangling from Learned Keypoints, which combines learning-based perception with a bilateral geometric planner to perform untangling without performing full state estimation. To evaluate the learned policy, we develop a novel simulator to simulate rope with figure-eight and overhand knots and with varying appearances. We present experiments comparing two variants of HULK to three baselines and find that HULK is able to untangle LDOs consisting of tight figure-eight and overhand knots. We find that HULK achieves higher success rates and fewer empirical actions than analytical baselines while generalizing to varied textures and appearances. HULK is able to successfully untangle an LDO from a dense initial configuration containing only up to two overhand and figure-eight knots in 97.9% of 378 simulated experiments with an average of 12.1 actions per trial, suggesting that the policy can learn the task of untangling effectively from an algorithmic supervisor.
    