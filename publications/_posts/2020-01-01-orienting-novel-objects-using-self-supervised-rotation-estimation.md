---
layout: publication
title: "Orienting novel objects using self-supervised rotation estimation"
authors:

    - S Devgon

    - J Ichnowski

    - A Balakrishna

    - H Zhang

    - K Goldberg

authors-short:

    - S. Devgon

    - J. Ichnowski

    - A. Balakrishna

    - H. Zhang

    - K. Goldberg

year: 2020
journal: "2020 IEEE Conference on Automation Science and Engineering (CASE)"
ref: ""
doi: None
---

Let Rs∈ SO (3) be the start rotational orientation of a rigid object of unknown geometry and let Rg∈ SO (3) be the goal rotational orientation of the same rigid object where SO (3) is the special orthogonal group of all rotations in 3D Euclidean space. Let Is∈ RH× W be a depth image observation of the object in Rs, and Ig∈ RH× W be the observation of Rg. We do not have or define a reference rotational orientation, but instead estimate sRg∈ SO (3), such that a rotation of the object by sRg reorients the object from Rs to Rg. Thus, Rg= sRgRs and sRg= Rg (Rs)− 1. The objective is two-fold:(1) compute an estimate of sRg, denoted s ˆRg, given only image observations Is and Ig and (2) use this estimate to reorient the object to orientation ˆRg such that L (s ˆRg, sRg) is minimized, where L: SO (3)× SO (3)→ R is a distance measure between orientations. In this work, we assume that the rotation angle between Rs and Rg has magnitude at most 30. For objects with symmetries, the objective is to estimate and orient objects relative to a (symmetric) orientation that results in Ig.
    