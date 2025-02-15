---
layout: publication
title: "Evo-nerf: Evolving nerf for sequential robot grasping of transparent objects"
authors:

    - Justin Kerr

    - Letian Fu

    - Huang Huang

    - Yahav Avigal

    - Matthew Tancik

    - Jeffrey Ichnowski

    - Angjoo Kanazawa

    - Ken Goldberg

authors-short:

    - J. Kerr

    - L. Fu

    - H. Huang

    - Y. Avigal

    - M. Tancik

    - J. Ichnowski

    - A. Kanazawa

    - K. Goldberg

year: 2022
journal: "6th annual conference on robot learning"
ref: ""
doi: None
---

Sequential robot grasping of transparent objects, where a robot removes objects one by one from a workspace, is important in many industrial and household scenarios. We propose Evolving NeRF (Evo-NeRF), leveraging recent speedups in NeRF training and further extending it to rapidly train the NeRF representation concurrently to image capturing. Evo-NeRF terminates training early when a sufficient task confidence is achieved, evolves the NeRF weights from grasp to grasp to rapidly adapt to object removal, and applies additional geometry regularizations to make the reconstruction smoother and faster. General purpose grasp planners such as Dex-Net may underperform with NeRF outputs because there can be unreliable geometry from rapidly trained NeRFs. To mitigate this distribution shift, we propose a Radiance-Adjusted Grasp Network (RAG-Net), a grasping network adapted to NeRF's characteristics through training on depth rendered from NeRFs of synthetic scenes. In experiments, a physical YuMi robot using Evo-NeRF and RAG-Net achieves an 89% grasp success rate over 27 trials on single objects, with early capture termination providing a 41% speed improvement with no loss in reliability. In a sequential grasping task on 6 scenes, Evo-NeRF reusing network weights clears 72% of the objects, retaining similar performance as reconstructing the NeRF from scratch (76%) but using 61% less sensing time. See https://sites.google.com/view/evo-nerf for more materials.
    