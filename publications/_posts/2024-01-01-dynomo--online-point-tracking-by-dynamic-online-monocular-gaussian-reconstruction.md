---
layout: publication
title: "DynOMo: Online point tracking by dynamic online monocular gaussian reconstruction"
authors:

    - Jenny Seidenschwarz

    - Qunjie Zhou

    - Bardienus P. Duisterhof

    - Deva Ramanan

    - Laura Leal-Taixé

authors-short:

    - J. Seidenschwarz

    - Q. Zhou

    - B. Duisterhof

    - D. Ramanan

    - L. Leal-Taixé

year: 2024
journal: "arXiv preprint arXiv:2409.02104"
ref: ""
doi: None
---

Reconstructing scenes and tracking motion are two sides of the same coin. Tracking points allow for geometric reconstruction [14], while geometric reconstruction of (dynamic) scenes allows for 3D tracking of points over time [24, 39]. The latter was recently also exploited for 2D point tracking to overcome occlusion ambiguities by lifting tracking directly into 3D [38]. However, above approaches either require offline processing or multi-view camera setups both unrealistic for real-world applications like robot navigation or mixed reality. We target the challenge of online 2D and 3D point tracking from unposed monocular camera input introducing Dynamic Online Monocular Reconstruction (DynOMo). We leverage 3D Gaussian splatting to reconstruct dynamic scenes in an online fashion. Our approach extends 3D Gaussians to capture new content and object motions while estimating camera movements from a single RGB frame. DynOMo stands out by enabling emergence of point trajectories through robust image feature reconstruction and a novel similarity-enhanced regularization term, without requiring any correspondence-level supervision. It sets the first baseline for online point tracking with monocular unposed cameras, achieving performance on par with existing methods. We aim to inspire the community to advance online point tracking and reconstruction, expanding the applicability to diverse real-world scenarios.
    