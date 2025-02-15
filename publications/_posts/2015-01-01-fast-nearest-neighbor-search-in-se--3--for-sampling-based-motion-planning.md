---
layout: publication
title: "Fast nearest neighbor search in SE (3) for sampling-based motion planning"
authors:

    - Jeffrey Ichnowski

    - Ron Alterovitz

authors-short:

    - J. Ichnowski

    - R. Alterovitz

year: 2015
journal: "Algorithmic Foundations of Robotics XI: Selected Contributions of the Eleventh International Workshop on the Algorithmic Foundations of Robotics"
ref: ""
doi: None
---

Nearest neighbor                              searching                is a                fundamental building block of most sampling-based motion planners. We present a novel method for fast exact nearest neighbor searching in —the 6 dimensional space that represents rotations and translations in 3 dimensions.  is commonly used when planning the motions of rigid body robots. Our approach starts by projecting a 4-dimensional cube onto the 3-sphere that is created by the unit quaternion representation of rotations in the rotational group . We then use 4 kd-trees to efficiently partition the projected faces (and their negatives). We propose efficient methods to handle the recursion pruning checks that arise with this kd-tree splitting approach, discuss splitting strategies that support dynamic data sets, and extend this approach to  by incorporating translations. We integrate our approach into RRT and RRT …
    