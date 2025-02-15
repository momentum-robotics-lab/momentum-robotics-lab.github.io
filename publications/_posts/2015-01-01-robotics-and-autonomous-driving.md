---
layout: publication
title: "Robotics and autonomous driving"
authors:

    - Hannah Kerner

    - Alan Kuntz

    - Jeffrey Ichnowski

    - Michael North

authors-short:

    - H. Kerner

    - A. Kuntz

    - J. Ichnowski

    - M. North

year: 2015
journal: "None"
ref: ""
doi: None
---

To help realize the vision of autonomously driving vehicles, we look to the field of robotics to answer the question of how to get to our destination efficiently while avoiding obstacles. The foremost question one must ask before planning a route, and continuously while en route, is where are we now? This is a nontrivial problem, given the inaccuracies and uncertainties induced by sensors such as GPS, odometry, and computer vision. Once we have a method to localize the car, we can then plan a routethat is, compute a motion plan. Computing a motion plan is also complicated by an ever changing world with many rules of the road and an absolute safetycritical requirement of not injuring or killing anyone while travelling. As the localization and planning software is thus a key component of a safetycritical system, we must have some way of validating or proving the correctness of its operationthis includes both logical correctness, and temporal correctness. In simple terms, this means that our computation of a motion plan must correctly find a solution, and do so within a provable time bound. In this paper, we first describe how to localize a car, we then explore a case study of how a research vehicle autonomously drives in an urban environment, and then we look to how to make the motion planning of the car run within a hard realtime system with provable correctness. Finally, we describe a robotic platform on which such a system could be built.
    