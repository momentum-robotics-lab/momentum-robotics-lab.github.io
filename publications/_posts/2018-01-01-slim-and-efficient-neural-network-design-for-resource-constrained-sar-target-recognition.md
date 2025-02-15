---
layout: publication
title: "Slim and efficient neural network design for resource-constrained SAR target recognition"
authors:

    - Hongyi Chen

    - Fan Zhang

    - Bo Tang

    - Qiang Yin

    - Xian Sun

authors-short:

    - H. Chen

    - F. Zhang

    - B. Tang

    - Q. Yin

    - X. Sun

year: 2018
journal: "Remote Sensing"
ref: ""
doi: None
---

Deep convolutional neural networks (CNN) have been recently applied to synthetic aperture radar (SAR) for automatic target recognition (ATR) and have achieved state-of-the-art results with significantly improved recognition performance. However, the training period of deep CNN is long, and the size of the network is huge, sometimes reaching hundreds of megabytes. These two factors of deep CNN hinders its practical implementation and deployment in real-time SAR platforms that are typically resource-constrained. To address this challenge, this paper presents three strategies of network compression and acceleration to decrease computing and memory resource dependencies while maintaining a competitive accuracy. First, we introduce a new weight-based network pruning and adaptive architecture squeezing method to reduce the network storage and the time of inference and training process, meanwhile maintain a balance between compression ratio and classification accuracy. Then we employ weight quantization and coding to compress the network storage space. Due to the fact that the amount of calculation is mainly reflected in the convolution layer, a fast approach for pruned convolutional layers is proposed to reduce the number of multiplication by exploiting the sparsity in the activation inputs and weights. Experimental results show that the convolutional neural networks for SAR-ATR can be compressed by 40× without loss of accuracy, and the number of multiplication can be reduced by 15×. Combining these strategies, we can easily load the network in resource-constrained platforms, speed up the inference process to get the …
    