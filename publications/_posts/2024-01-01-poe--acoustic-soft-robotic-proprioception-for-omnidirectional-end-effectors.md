---
layout: publication
title: "POE: Acoustic Soft Robotic Proprioception for Omnidirectional End-effectors"
authors:

    - Uksang Yoo

    - Ziven Lopez

    - Jeffrey Ichnowski

    - Jean Oh

authors-short:

    - U. Yoo

    - Z. Lopez

    - J. Ichnowski

    - J. Oh

year: 2024
journal: "arXiv preprint arXiv:2401.09382"
ref: ""
doi: None
---

Soft robotic shape estimation and proprioception are challenging because of soft robot's complex deformation behaviors and infinite degrees of freedom. A soft robot's continuously deforming body makes it difficult to integrate rigid sensors and to reliably estimate its shape. In this work, we present Proprioceptive Omnidirectional End-effector (POE), which has six embedded microphones across the tendon-driven soft robot's surface. We first introduce novel applications of previously proposed 3D reconstruction methods to acoustic signals from the microphones for soft robot shape proprioception. To improve the proprioception pipeline's training efficiency and model prediction consistency, we present POE-M. POE-M first predicts key point positions from the acoustic signal observations with the embedded microphone array. Then we utilize an energy-minimization method to reconstruct a physically admissible high-resolution mesh of POE given the estimated key points. We evaluate the mesh reconstruction module with simulated data and the full POE-M pipeline with real-world experiments. We demonstrate that POE-M's explicit guidance of the key points during the mesh reconstruction process provides robustness and stability to the pipeline with ablation studies. POE-M reduced the maximum Chamfer distance error by 23.10 % compared to the state-of-the-art end-to-end soft robot proprioception models and achieved 4.91 mm average Chamfer distance error during evaluation.
    