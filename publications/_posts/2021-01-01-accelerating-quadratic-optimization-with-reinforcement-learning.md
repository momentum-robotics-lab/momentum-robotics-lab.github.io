---
layout: publication
title: "Accelerating quadratic optimization with reinforcement learning"
authors:

    - Jeffrey Ichnowski

    - Paras Jain

    - Bartolomeo Stellato

    - Goran Banjac

    - Michael Luo

    - Francesco Borrelli

    - Joseph E Gonzalez

    - Ion Stoica

    - Ken Goldberg

authors-short:

    - J. Ichnowski

    - P. Jain

    - B. Stellato

    - G. Banjac

    - M. Luo

    - F. Borrelli

    - J. E. Gonzalez

    - I. Stoica

    - K. Goldberg

year: 2021
journal: "Advances in Neural Information Processing Systems"
ref: ""
doi: None
---

First-order methods for quadratic optimization such as OSQP are widely used for large-scale machine learning and embedded optimal control, where many related problems must be rapidly solved. These methods face two persistent challenges: manual hyperparameter tuning and convergence time to high-accuracy solutions. To address these, we explore how Reinforcement Learning (RL) can learn a policy to tune parameters to accelerate convergence. In experiments with well-known QP benchmarks we find that our RL policy, RLQP, significantly outperforms state-of-the-art QP solvers by up to 3x. RLQP generalizes surprisingly well to previously unseen problems with varying dimension and structure from different applications, including the QPLIB, Netlib LP and Maros-M {\'e} sz {\'a} ros problems. Code, models, and videos are available at https://berkeleyautomation. github. io/rlqp/.
    