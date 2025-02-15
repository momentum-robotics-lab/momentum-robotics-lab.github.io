---
layout: publication
title: "Clear-Splatting: Learning Residual Gaussian Splats for Transparent Object Manipulation"
authors:

    - Aviral Agrawal

    - Ritaban Roy

    - Bardienus P. Duisterhof

    - Keerthan Bhat Hekkadka

    - Hongyi Chen

    - Jeffrey Ichnowski

authors-short:

    - A. Agrawal

    - R. Roy

    - B. P. Duisterhof

    - K. B. Hekkadka

    - H. Chen

    - J. Ichnowski

year: 2024
journal: "RoboNerF: 1st Workshop On Neural Fields In Robotics at ICRA 2024"
ref: ""
doi: None
---

Grasping and manipulating transparent objects poses a significant challenge for robots. Recent work showed neural radiance fields (NeRFs) work well for depth perception in scenes with transparent objects, and these depth maps can be used to grasp transparent objects with high accuracy. NeRF- based depth reconstruction can still struggle with challenging transparent objects and lighting conditions. In this work, we study the performance of Gaussian Splatting (3DGS) for depth perception of transparent objects. We compare 3DGS to existing NeRF-based methods, and contribute a new method – Clear- Splatting. This method draws inspiration from Residual-NeRF to leverage a scene prior, since robots often operate in the same area, by first learning background Splats of the scene without transparent objects to be manipulated. It then learns residual Splats to complete the scene. We evaluate performance and compare it to multiple NeRF-based approaches. We present experiments on synthetic data that constitutes of view as well as depth ground truths. These experiments show that Clear- Splatting results in competitive depth maps with up to 67.09% lower RMSE and a 87.80% lower MAE for depth estimation compared to NeRF-based baselines. We also discuss challenges faced by Gaussian splatting for transparent objects, such as floaters and slower training.
    