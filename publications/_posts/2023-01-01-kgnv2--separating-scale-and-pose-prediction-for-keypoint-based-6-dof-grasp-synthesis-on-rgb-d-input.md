---
layout: publication
title: "KGNv2: Separating Scale and Pose Prediction for Keypoint-Based 6-DoF Grasp Synthesis on RGB-D Input"
authors:

    - Yiye Chen

    - Ruinian Xu

    - Yunzhi Lin

    - Hongyi Chen

    - Patricio A Vela

authors-short:

    - Y. Chen

    - R. Xu

    - Y. Lin

    - H. Chen

    - P. A. Vela

year: 2023
journal: "2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)"
ref: ""
doi: None
---

We propose an improved keypoint approach for 6-DoF grasp pose synthesis from RGB-D input. Keypoint-based grasp detection from image input demonstrated promising results in a previous study, where the visual information provided by color imagery compensates for noisy or imprecise depth measurements. However, it relies heavily on accurate keypoint prediction in image space. We devise a new grasp generation network that reduces the dependency on precise keypoint estimation. Given an RGB-D input, the network estimates both the grasp pose and the camera-grasp length scale. Re-design of the keypoint output space mitigates the impact of keypoint prediction noise on Perspective-n-Point (PnP) algorithm solutions. Experiments show that the proposed method outperforms the baseline by a large margin, validating its design. Though trained only on simple synthetic objects, our method demonstrates sim …
    