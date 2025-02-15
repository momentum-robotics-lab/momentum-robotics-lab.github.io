---
layout: publication
title: "Fogros g: Enabling secure, connected and mobile fog robotics with global addressability"
authors:

    - Kaiyuan Chen

    - Jiachen Yuan

    - Nikhil Jha

    - Jeffrey Ichnowski

    - John Kubiatowicz

    - Ken Goldberg

authors-short:

    - K. Chen

    - J. Yuan

    - N. Jha

    - J. Ichnowski

    - J. Kubiatowicz

    - K. Goldberg

year: 2022
journal: "arXiv preprint arXiv:2210.11691"
ref: ""
doi: None
---

Fog Robotics renders networked robots with greater mobility, on-demand compute capabilities and better energy efficiency by offloading heavy robotics workloads to nearby Edge and distant Cloud data centers. However, as the de-facto standard for implementing fog robotics applications, Robot Operating System (ROS) and its successor ROS2 fail to provide fog robots with a mobile-friendly and secure communication infrastructure. In this work, we present FogROS G, a secure routing framework that connects robotics software components from different physical locations, networks, Data Distribution Service (DDS) and ROS distributions. FogROS G indexes networked robots with globally unique 256-bit names that remains constant even if the robot roams between multiple administrative network domains. FogROS G leverages Global Data Plane, a global and secure peer-to-peer routing infrastructure between the names, guaranteeing that only authenticated party can send to or receive from the robot. FogROS G adopts a proxy-based design that connect nodes from ROS1 and ROS2 with mainstream DDS vendors; this can be done without any changes to the application code.
    