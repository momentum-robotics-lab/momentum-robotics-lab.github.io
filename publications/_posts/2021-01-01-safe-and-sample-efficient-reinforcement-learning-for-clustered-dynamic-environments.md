---
layout: publication
title: "Safe and sample-efficient reinforcement learning for clustered dynamic environments"
authors:

    - Hongyi Chen

    - Changliu Liu

authors-short:

    - H. Chen

    - C. Liu

year: 2021
journal: "IEEE Control Systems Letters"
ref: ""
doi: None
---

This letter proposes a safe and sample-efficient reinforcement learning (RL) framework to address two major challenges in developing applicable RL algorithms: satisfying safety constraints and efficiently learning with limited samples. To guarantee safety in real-world complex environments, we use the safe set algorithm (SSA) to monitor and modify the nominal controls, and evaluate SSA+RL in a clustered dynamic environment which is challenging to be solved by existing RL algorithms. However, the SSA+RL framework is usually not sample-efficient especially in reward-sparse environments, which has not been addressed in previous safe RL works. To improve the learning efficiency, we propose three techniques: (1) avoiding behaving overly conservative by adapting the SSA; (2) encouraging safe exploration using random network distillation with safety constraints; (3) improving policy convergence by treating …
    