---
layout: publication
title: "Orienting novel 3D objects using self-supervised learning of rotation transforms"
authors:

    - Shivin Devgon

    - Jeffrey Ichnowski

    - Ashwin Balakrishna

    - Harry Zhang

    - Ken Goldberg

authors-short:

    - S. Devgon

    - J. Ichnowski

    - A. Balakrishna

    - H. Zhang

    - K. Goldberg

year: 2020
journal: "2020 IEEE 16th International Conference on Automation Science and Engineering (CASE)"
ref: ""
doi: None
---

Orienting objects is a critical component in the automation of many packing and assembly tasks. We present an algorithm to orient novel objects given a depth image of the object in its current and desired orientation. We formulate a self-supervised objective for this problem and train a deep neural network to estimate the 3D rotation as parameterized by a quaternion, between these current and desired depth images. We then use the trained network in a proportional controller to re-orient objects based on the estimated rotation between the two depth images. Results suggest that in simulation we can rotate unseen objects with unknown geometries by up to 30° with a median angle error of 1.47° over 100 random initial/desired orientations each for 22 novel objects. Experiments on physical objects suggest that the controller can achieve a median angle error of 4.2° over 10 random initial/desired orientations each for 5 …
    