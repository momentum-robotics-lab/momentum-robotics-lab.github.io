---
layout: publication
title: "MASt3R-SfM: a Fully-Integrated Solution for Unconstrained Structure-from-Motion"
authors:

    - Bardienus P. Duisterhof

    - Lojze Zust

    - Philippe Weinzaepfel

    - Vincent Leroy

    - Yohann Cabon

    - Jerome Revaud

authors-short:

    - B. Duisterhof

    - L. Zust

    - P. Weinzaepfel

    - V. Leroy

    - Y. Cabon

    - J. Revaud

year: 2024
journal: "arXiv preprint arXiv:2409.19152"
ref: ""
doi: None
---

Structure-from-Motion (SfM), a task aiming at jointly recovering camera poses and 3D geometry of a scene given a set of images, remains a hard problem with still many open challenges despite decades of significant progress. The traditional solution for SfM consists of a complex pipeline of minimal solvers which tends to propagate errors and fails when images do not sufficiently overlap, have too little motion, etc. Recent methods have attempted to revisit this paradigm, but we empirically show that they fall short of fixing these core issues. In this paper, we propose instead to build upon a recently released foundation model for 3D vision that can robustly produce local 3D reconstructions and accurate matches. We introduce a low-memory approach to accurately align these local reconstructions in a global coordinate system. We further show that such foundation models can serve as efficient image retrievers without any overhead, reducing the overall complexity from quadratic to linear. Overall, our novel SfM pipeline is simple, scalable, fast and truly unconstrained, i.e. it can handle any collection of images, ordered or not. Extensive experiments on multiple benchmarks show that our method provides steady performance across diverse settings, especially outperforming existing methods in small- and medium-scale settings.
    