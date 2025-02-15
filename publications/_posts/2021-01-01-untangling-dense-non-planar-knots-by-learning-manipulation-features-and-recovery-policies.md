---
layout: publication
title: "Untangling dense non-planar knots by learning manipulation features and recovery policies"
authors:

    - Priya Sundaresan

    - Jennifer Grannen

    - Brijen Thananjeyan

    - Ashwin Balakrishna

    - Jeffrey Ichnowski

    - Ellen Novoseller

    - Minho Hwang

    - Michael Laskey

    - Joseph E Gonzalez

    - Ken Goldberg

authors-short:

    - P. Sundaresan

    - J. Grannen

    - B. Thananjeyan

    - A. Balakrishna

    - J. Ichnowski

    - E. Novoseller

    - M. Hwang

    - M. Laskey

    - J. E. Gonzalez

    - K. Goldberg

year: 2021
journal: "arXiv preprint arXiv:2107.08942"
ref: ""
doi: None
---

Robot manipulation for untangling 1D deformable structures such as ropes, cables, and wires is challenging due to their infinite dimensional configuration space, complex dynamics, and tendency to self-occlude. Analytical controllers often fail in the presence of dense configurations, due to the difficulty of grasping between adjacent cable segments. We present two algorithms that enhance robust cable untangling, LOKI and SPiDERMan, which operate alongside HULK, a high-level planner from prior work. LOKI uses a learned model of manipulation features to refine a coarse grasp keypoint prediction to a precise, optimized location and orientation, while SPiDERMan uses a learned model to sense task progress and apply recovery actions. We evaluate these algorithms in physical cable untangling experiments with 336 knots and over 1500 actions on real cables using the da Vinci surgical robot. We find that the combination of HULK, LOKI, and SPiDERMan is able to untangle dense overhand, figure-eight, double-overhand, square, bowline, granny, stevedore, and triple-overhand knots. The composition of these methods successfully untangles a cable from a dense initial configuration in 68.3% of 60 physical experiments and achieves 50% higher success rates than baselines from prior work. Supplementary material, code, and videos can be found at https://tinyurl.com/rssuntangling.
    