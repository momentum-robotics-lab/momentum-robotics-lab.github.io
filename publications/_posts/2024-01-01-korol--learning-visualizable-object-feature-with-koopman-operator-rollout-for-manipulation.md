---
layout: publication
title: "KOROL: Learning Visualizable Object Feature with Koopman Operator Rollout for Manipulation"
authors:

    - Hongyi Chen

    - Abulikemu Abuduweili

    - Aviral Agrawal

    - Yunhai Han

    - Harish Ravichandar

    - Changliu Liu

    - Jeffrey Ichnowski

authors-short:

    - H. Chen

    - A. Abuduweili

    - A. Agrawal

    - Y. Han

    - H. Ravichandar

    - C. Liu

    - J. Ichnowski

year: 2024
journal: "8th Annual Conference on Robot Learning (CoRL)"
ref: ""
doi: None
---

Learning dexterous manipulation skills presents significant challenges due to complex nonlinear dynamics that underlie the interactions between objects and multi-fingered hands. Koopman operators have emerged as a robust method for modeling such nonlinear dynamics within a linear framework. However, current methods rely on runtime access to ground-truth (GT) object states, making them unsuitable for vision-based practical applications. Unlike image-to-action policies that implicitly learn visual features for control, we use a dynamics model, specifically the Koopman operator, to learn visually interpretable object features critical for robotic manipulation within a scene. We construct a Koopman operator using object features predicted by a feature extractor and utilize it to auto-regressively advance system states. We train the feature extractor to embed scene information into object features, thereby enabling the accurate propagation of robot trajectories. We evaluate our approach on simulated and real-world robot tasks, with results showing that it outperformed the model-based imitation learning NDP by 1.08 and the image-to-action Diffusion Policy by 1.16. The results suggest that our method maintains task success rates with learned features and extends applicability to real-world manipulation without GT object states. Project video and code are available at: \url{https://github.com/hychen-naza/KOROL}.
    