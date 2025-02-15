---
layout: publication
title: "Efficiently calibrating cable-driven surgical robots with RGBD fiducial sensing and recurrent neural networks"
authors:

    - Minho Hwang

    - Brijen Thananjeyan

    - Samuel Paradis

    - Daniel Seita

    - Jeffrey Ichnowski

    - Danyal Fer

    - Thomas Low

    - Ken Goldberg

authors-short:

    - M. Hwang

    - B. Thananjeyan

    - S. Paradis

    - D. Seita

    - J. Ichnowski

    - D. Fer

    - T. Low

    - K. Goldberg

year: 2020
journal: "IEEE Robotics and Automation Letters"
ref: ""
doi: None
---

Automation of surgical subtasks using cable-driven robotic surgical assistants (RSAs) such as Intuitive Surgical's da Vinci Research Kit (dVRK) is challenging due to imprecision in control from cable-related effects such as cable stretching and hysteresis. We propose a novel approach to efficiently calibrate such robots by placing a 3D printed fiducial coordinate frames on the arm and end-effector that is tracked using RGBD sensing. To measure the coupling and history-dependent effects between joints, we analyze data from sampled trajectories and consider 13 approaches to modeling. These models include linear regression and LSTM recurrent neural networks, each with varying temporal window length to provide compensatory feedback. With the proposed method, data collection of 1800 samples takes 31 minutes and model training takes under 1 minute. Results on a test set of reference trajectories suggest …
    