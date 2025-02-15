---
layout: publication
title: "Policy-based bayesian experimental design for non-differentiable implicit models"
authors:

    - Vincent Lim

    - Ellen Novoseller

    - Jeffrey Ichnowski

    - Huang Huang

    - Ken Goldberg

authors-short:

    - V. Lim

    - E. Novoseller

    - J. Ichnowski

    - H. Huang

    - K. Goldberg

year: 2022
journal: "arXiv preprint arXiv:2203.04272"
ref: ""
doi: None
---

For applications in healthcare, physics, energy, robotics, and many other fields, designing maximally informative experiments is valuable, particularly when experiments are expensive, time-consuming, or pose safety hazards. While existing approaches can sequentially design experiments based on prior observation history, many of these methods do not extend to implicit models, where simulation is possible but computing the likelihood is intractable. Furthermore, they often require either significant online computation during deployment or a differentiable simulation system. We introduce Reinforcement Learning for Deep Adaptive Design (RL-DAD), a method for simulation-based optimal experimental design for non-differentiable implicit models. RL-DAD extends prior work in policy-based Bayesian Optimal Experimental Design (BOED) by reformulating it as a Markov Decision Process with a reward function based on likelihood-free information lower bounds, which is used to learn a policy via deep reinforcement learning. The learned design policy maps prior histories to experiment designs offline and can be quickly deployed during online execution. We evaluate RL-DAD and find that it performs competitively with baselines on three benchmarks.
    