---
layout: publication
title: "{Lock-Free} Collaboration Support for Cloud Storage Services with Operation Inference and Transformation"
authors:

    - Jian Chen

    - Minghao Zhao

    - Zhenhua Li

    - Ennan Zhai

    - Feng Qian

    - Hongyi Chen

    - Yunhao Liu

    - Tianyin Xu

authors-short:

    - J. Chen

    - M. Zhao

    - Z. Li

    - E. Zhai

    - F. Qian

    - H. Chen

    - Y. Liu

    - T. Xu

year: 2020
journal: "18th USENIX Conference on File and Storage Technologies (FAST 20)"
ref: ""
doi: None
---

This paper studies how today’s cloud storage services support collaborative file editing. As a tradeoff for transparency/user-friendliness, they do not ask collaborators to use version control systems but instead implement their own heuristics for handling conflicts, which however often lead to unexpected and undesired experiences. With measurements and reverse engineering, we unravel a number of their design and implementation issues as the root causes of poor experiences. Driven by the findings, we propose to reconsider the collaboration support of cloud storage services from a novel perspective of operations without using any locks. To enable this idea, we design intelligent approaches to the inference and transformation of users’ editing operations, as well as optimizations to the maintenance of files’ historic versions. We build an open-source system UFC2 (User-Friendly Collaborative Cloud) to embody our design, which can avoid most (98%) conflicts with little (2%) time overhead.
    