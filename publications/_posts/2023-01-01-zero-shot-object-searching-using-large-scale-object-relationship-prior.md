---
layout: publication
title: "Zero-Shot Object Searching Using Large-scale Object Relationship Prior"
authors:

    - Hongyi Chen

    - Ruinian Xu

    - Shuo Cheng

    - Patricio A Vela

    - Danfei Xu

authors-short:

    - H. Chen

    - R. Xu

    - S. Cheng

    - P. A. Vela

    - D. Xu

year: 2023
journal: "arXiv preprint arXiv:2303.06228"
ref: ""
doi: None
---

Home-assistant robots have been a long-standing research topic, and one of the biggest challenges is searching for required objects in housing environments. Previous object-goal navigation requires the robot to search for a target object category in an unexplored environment, which may not be suitable for home-assistant robots that typically have some level of semantic knowledge of the environment, such as the location of static furniture. In our approach, we leverage this knowledge and the fact that a target object may be located close to its related objects for efficient navigation. To achieve this, we train a graph neural network using the Visual Genome dataset to learn the object co-occurrence relationships and formulate the searching process as iteratively predicting the possible areas where the target object may be located. This approach is entirely zero-shot, meaning it doesn't require new accurate object correlation in the test environment. We empirically show that our method outperforms prior correlational object search algorithms. As our ultimate goal is to build fully autonomous assistant robots for everyday use, we further integrate the task planner for parsing natural language and generating task-completing plans with object navigation to execute human instructions. We demonstrate the effectiveness of our proposed pipeline in both the AI2-THOR simulator and a Stretch robot in a real-world environment.
    