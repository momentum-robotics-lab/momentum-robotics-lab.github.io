---
layout: publication
title: "Fogros: An adaptive framework for automating fog robotics deployment"
authors:

    - Yafei Liang

    - Nikhil Jha

    - Jeffrey Ichnowski

    - Michael Danielczuk

    - Joseph Gonzalez

    - John Kubiatowicz

    - Ken Goldberg

authors-short:

    - Y. Liang

    - N. Jha

    - J. Ichnowski

    - M. Danielczuk

    - J. Gonzalez

    - J. Kubiatowicz

    - K. Goldberg

year: 2021
journal: "arXiv preprint arXiv:2108.11355"
ref: ""
doi: None
---

As many robot automation applications increasingly rely on multi-core processing or deep-learning models, cloud computing is becoming an attractive and economically viable resource for systems that do not contain high computing power onboard. Despite its immense computing capacity, it is often underused by the robotics and automation community due to lack of expertise in cloud computing and cloud-based infrastructure. Fog Robotics balances computing and data between cloud edge devices. We propose a software framework, FogROS, as an extension of the Robot Operating System (ROS), the de-facto standard for creating robot automation applications and components. It allows researchers to deploy components of their software to the cloud with minimal effort, and correspondingly gain access to additional computing cores, GPUs, FPGAs, and TPUs, as well as predeployed software made available by other researchers. FogROS allows a researcher to specify which components of their software will be deployed to the cloud and to what type of computing hardware. We evaluate FogROS on 3 examples: (1) simultaneous localization and mapping (ORB-SLAM2), (2) Dexterity Network (Dex-Net) GPU-based grasp planning, and (3) multi-core motion planning using a 96-core cloud-based server. In all three examples, a component is deployed to the cloud and accelerated with a small change in system launch configuration, while incurring additional latency of 1.2 s, 0.6 s, and 0.5 s due to network communication, the computation speed is improved by 2.6x, 6.0x and 34.2x, respectively. Code, videos, and supplementary material can be …
    