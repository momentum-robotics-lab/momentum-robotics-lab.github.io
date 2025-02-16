---
layout: publication
title: "Residual-NeRF: Learning Residual NeRFs for Transparent Object Manipulation"
authors:

    - Bardienus P. Duisterhof

    - Yuemin Mao

    - Si Heng Teng

    - Jeffrey Ichnowski

authors-short:

    - B. P. Duisterhof

    - Y. Mao

    - S. H. Teng

    - J. Ichnowski

year: 2024
journal: "arXiv preprint arXiv:2405.06181"
ref: ""
doi: None
---

Transparent objects are ubiquitous in industry, pharmaceuticals, and households. Grasping and manipulating these objects is a significant challenge for robots. Existing methods have difficulty reconstructing complete depth maps for challenging transparent objects, leaving holes in the depth reconstruction. Recent work has shown neural radiance fields (NeRFs) work well for depth perception in scenes with transparent objects, and these depth maps can be used to grasp transparent objects with high accuracy. NeRF-based depth reconstruction can still struggle with especially challenging transparent objects and lighting conditions. In this work, we propose Residual-NeRF, a method to improve depth perception and training speed for transparent objects. Robots often operate in the same area, such as a kitchen. By first learning a background NeRF of the scene without transparent objects to be manipulated, we reduce the ambiguity faced by learning the changes with the new object. We propose training two additional networks: a residual NeRF learns to infer residual RGB values and densities, and a Mixnet learns how to combine background and residual NeRFs. We contribute synthetic and real experiments that suggest Residual-NeRF improves depth perception of transparent objects. The results on synthetic data suggest Residual-NeRF outperforms the baselines with a 46.1% lower RMSE and a 29.5% lower MAE. Real-world qualitative experiments suggest Residual-NeRF leads to more robust depth maps with less noise and fewer holes. Website: https://residual-nerf.github.io
    