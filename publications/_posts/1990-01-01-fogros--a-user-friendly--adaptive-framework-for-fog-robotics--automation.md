---
layout: publication
title: "FogROS: A User-Friendly+ Adaptive Framework for Fog Robotics+ Automation"
authors:

    - Kaiyuan Eric Chen

    - Yafei Liang

    - Nikhil Jha

    - Jeffrey Ichnowski

    - Michael Danielczuk

    - Joseph Gonzalez

    - John Kubiatowicz

    - Ken Goldberg

authors-short:

    - K. E. Chen

    - Y. Liang

    - N. Jha

    - J. Ichnowski

    - M. Danielczuk

    - J. Gonzalez

    - J. Kubiatowicz

    - K. Goldberg

year: None
journal: "None"
ref: ""
doi: None
---

As many robot automation applications increasingly rely on multi-core processing or deep learning models, cloud computing is becoming an attractive and economically viable resource for systems that do not contain high computing power onboard. Despite its immense computing capacity, it is often underused by the robotics and automation community due to lack of expertise in cloud computing and cloud-based infrastructure. Fog Robotics balances computing and data between cloud edge devices. We propose a software framework, FogROS, that allows existing applications to gain access to additional computing cores, graphics-processing units (GPUs), fieldprogrammable gate arrays (FPGAs), and tensor-processing units (TPUs) available on commercial cloud-based services. This framework is built on Robot Operating System (ROS), the de-facto standard for creating robot automation applications and components. FogROS allows a researcher to specify which components of their software will be deployed to the cloud and to what type of computing hardware. We evaluate FogROS on 3 examples:(1) simultaneous localization and mapping (SLAM),(2) Dexterity Network (Dex-Net) GPU-based grasp planning, and (3) multi-core motion planning using a 96-core cloudbased server. In all three examples, a component is deployed to the cloud and accelerated with a small change in system launch configuration, while incurring additional latency of 1.2 s, 0.6 s, and 0.5 s due to network communication, the computation speed is improved by 4.5×, 5.2× and 31.5×, respectively. Code, videos, and supplementary material can be found at https://github …
    