---
layout: publication
title: "Dex-NeRF: Using a neural radiance field to grasp transparent objects"
authors:

    - Jeffrey Ichnowski

    - Yahav Avigal

    - Justin Kerr

    - Ken Goldberg

authors-short:

    - J. Ichnowski

    - Y. Avigal

    - J. Kerr

    - K. Goldberg

year: 2021
journal: "arXiv preprint arXiv:2110.14217"
ref: ""
doi: None
---

The ability to grasp and manipulate transparent objects is a major challenge for robots. Existing depth cameras have difficulty detecting, localizing, and inferring the geometry of such objects. We propose using neural radiance fields (NeRF) to detect, localize, and infer the geometry of transparent objects with sufficient accuracy to find and grasp them securely. We leverage NeRF's view-independent learned density, place lights to increase specular reflections, and perform a transparency-aware depth-rendering that we feed into the Dex-Net grasp planner. We show how additional lights create specular reflections that improve the quality of the depth map, and test a setup for a robot workcell equipped with an array of cameras to perform transparent object manipulation. We also create synthetic and real datasets of transparent objects in real-world settings, including singulated objects, cluttered tables, and the top rack of a dishwasher. In each setting we show that NeRF and Dex-Net are able to reliably compute robust grasps on transparent objects, achieving 90% and 100% grasp success rates in physical experiments on an ABB YuMi, on objects where baseline methods fail.
    