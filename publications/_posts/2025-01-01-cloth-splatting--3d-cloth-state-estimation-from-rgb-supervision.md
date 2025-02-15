---
layout: publication
title: "Cloth-Splatting: 3D Cloth State Estimation from RGB Supervision"
authors:

    - Alberta Longhini

    - Marcel Büsching

    - Bardienus P. Duisterhof

    - Jens Lundell

    - Jeffrey Ichnowski

    - Mårten Björkman

    - Danica Kragic

authors-short:

    - A. Longhini

    - M. Büsching

    - B. P. Duisterhof

    - J. Lundell

    - J. Ichnowski

    - M. Björkman

    - D. Kragic

year: 2025
journal: "arXiv preprint arXiv:2501.01715"
ref: ""
doi: None
---

We introduce Cloth-Splatting, a method for estimating 3D states of cloth from RGB images through a prediction-update framework. Cloth-Splatting leverages an action-conditioned dynamics model for predicting future states and uses 3D Gaussian Splatting to update the predicted states. Our key insight is that coupling a 3D mesh-based representation with Gaussian Splatting allows us to define a differentiable map between the cloth state space and the image space. This enables the use of gradient-based optimization techniques to refine inaccurate state estimates using only RGB supervision. Our experiments demonstrate that Cloth-Splatting not only improves state estimation accuracy over current baselines but also reduces convergence time.
    