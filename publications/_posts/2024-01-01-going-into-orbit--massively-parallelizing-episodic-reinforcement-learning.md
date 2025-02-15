---
layout: publication
title: "Going into Orbit: Massively Parallelizing Episodic Reinforcement Learning"
authors:

    - Jan Oberst

    - Johann Bonneau

authors-short:

    - J. Oberst

    - J. Bonneau

year: 2024
journal: "arXiv preprint arXiv:2405.11512"
ref: ""
doi: None
---

The possibilities of robot control have multiplied across various domains through the application of deep reinforcement learning. To overcome safety and sampling efficiency issues, deep reinforcement learning models can be trained in a simulation environment, allowing for faster iteration cycles. This can be enhanced further by parallelizing the training process using GPUs. NVIDIA's open-source robot learning framework Orbit leverages this potential by wrapping tensor-based reinforcement learning libraries for high parallelism and building upon Isaac Sim for its simulations. We contribute a detailed description of the implementation of a benchmark reinforcement learning task, namely box pushing, using Orbit. Additionally, we benchmark the performance of our implementation in comparison to a CPU-based implementation and report the performance metrics. Finally, we tune the hyper parameters of our implementation and show that we can generate significantly more samples in the same amount of time by using Orbit.
    