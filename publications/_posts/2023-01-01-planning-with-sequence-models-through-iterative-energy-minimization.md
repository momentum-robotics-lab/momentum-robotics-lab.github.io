---
layout: publication
title: "Planning with sequence models through iterative energy minimization"
authors:

    - Hongyi Chen

    - Yilun Du

    - Yiye Chen

    - Joshua Tenenbaum

    - Patricio A Vela

authors-short:

    - H. Chen

    - Y. Du

    - Y. Chen

    - J. Tenenbaum

    - P. A. Vela

year: 2023
journal: "The International Conference on Learning Representations"
ref: ""
doi: None
---

Recent works have shown that sequence modeling can be effectively used to train reinforcement learning (RL) policies. However, the success of applying existing sequence models to planning, in which we wish to obtain a trajectory of actions to reach some goal, is less straightforward. The typical autoregressive generation procedures of sequence models preclude sequential refinement of earlier steps, which limits the effectiveness of a predicted plan. In this paper, we suggest an approach towards integrating planning with sequence models based on the idea of iterative energy minimization, and illustrate how such a procedure leads to improved RL performance across different tasks. We train a masked language model to capture an implicit energy function over trajectories of actions, and formulate planning as finding a trajectory of actions with minimum energy. We illustrate how this procedure enables improved performance over recent approaches across BabyAI and Atari environments. We further demonstrate unique benefits of our iterative optimization procedure, involving new task generalization, test-time constraints adaptation, and the ability to compose plans together. Project website: https://hychen-naza.github.io/projects/LEAP
    