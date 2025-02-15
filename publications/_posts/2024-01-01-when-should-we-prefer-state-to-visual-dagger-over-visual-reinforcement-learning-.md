---
layout: publication
title: "When should we prefer state-to-visual dagger over visual reinforcement learning?"
authors:

    - Tongzhou Mu

    - Zhaoyang Li

    - Stanisław Wiktor Strzelecki

    - Xiu Yuan

    - Yunchao Yao

    - Litian Liang

    - Hao Su

authors-short:

    - T. Mu

    - Z. Li

    - S. W. Strzelecki

    - X. Yuan

    - Y. Yao

    - L. Liang

    - H. Su

year: 2024
journal: "The 39th Annual AAAI Conference on Artificial Intelligence (AAAI 2025)"
ref: ""
doi: None
---

Learning policies from high-dimensional visual inputs, such as pixels and point clouds, is crucial in various applications. Visual reinforcement learning is a promising approach that directly trains policies from visual observations, although it faces challenges in sample efficiency and computational costs. This study conducts an empirical comparison of State-to-Visual DAgger, a two-stage framework that initially trains a state policy before adopting online imitation to learn a visual policy, and Visual RL across a diverse set of tasks. We evaluate both methods across 16 tasks from three benchmarks, focusing on their asymptotic performance, sample efficiency, and computational costs. Surprisingly, our findings reveal that State-to-Visual DAgger does not universally outperform Visual RL but shows significant advantages in challenging tasks, offering more consistent performance. In contrast, its benefits in sample efficiency are less pronounced, although it often reduces the overall wall-clock time required for training. Based on our findings, we provide recommendations for practitioners and hope that our results contribute valuable perspectives for future research in visual policy learning.
    