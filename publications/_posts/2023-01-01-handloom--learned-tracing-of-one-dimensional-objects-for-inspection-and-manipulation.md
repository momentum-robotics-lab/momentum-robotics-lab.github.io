---
layout: publication
title: "HANDLOOM: Learned Tracing of One-Dimensional Objects for Inspection and Manipulation"
authors:

    - Vainavi Viswanath

    - Kaushik Shivakumar

    - Mallika Parulekar

    - Jainil Ajmera

    - Justin Kerr

    - Jeffrey Ichnowski

    - Richard Cheng

    - Thomas Kollar

    - Ken Goldberg

authors-short:

    - V. Viswanath

    - K. Shivakumar

    - M. Parulekar

    - J. Ajmera

    - J. Kerr

    - J. Ichnowski

    - R. Cheng

    - T. Kollar

    - K. Goldberg

year: 2023
journal: "Conference on Robot Learning"
ref: ""
doi: None
---

Tracing–estimating the spatial state of–long deformable linear objects such as cables, threads, hoses, or ropes, is useful for a broad range of tasks in homes, retail, factories, construction, transportation, and healthcare. For long deformable linear objects (DLOs or simply cables) with many (over 25) crossings, we present HANDLOOM (Heterogeneous Autoregressive Learned Deformable Linear Object Observation and Manipulation) a learning-based algorithm that fits a trace to a greyscale image of cables. We evaluate HANDLOOM on semi-planar DLO configurations where each crossing involves at most 2 segments. HANDLOOM makes use of neural networks trained with 30,000 simulated examples and 568 real examples to autoregressively estimate traces of cables and classify crossings. Experiments find that in settings with multiple identical cables, HANDLOOM can trace each cable with $80% $ accuracy. In single-cable images, HANDLOOM can trace and identify knots with $77% $ accuracy. When HANDLOOM is incorporated into a bimanual robot system, it enables state-based imitation of knot tying with $80% $ accuracy, and it successfully untangles $64% $ of cable configurations across 3 levels of difficulty. Additionally, HANDLOOM demonstrates generalization to knot types and materials (rubber, cloth rope) not present in the training dataset with $85% $ accuracy. Supplementary material, including all code and an annotated dataset of RGB-D images of cables along with ground-truth traces, is at https://sites. google. com/view/cable-tracing.
    