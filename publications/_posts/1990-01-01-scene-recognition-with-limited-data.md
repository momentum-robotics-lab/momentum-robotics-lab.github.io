---
layout: publication
title: "Scene Recognition with Limited Data"
authors:

    - Neehar Peri

    - Kush Jain

    - Sunyu Wang

    - Uksang Yoo

authors-short:

    - N. Peri

    - K. Jain

    - S. Wang

    - U. Yoo

year: None
journal: "None"
ref: ""
doi: None
---

In recent years, deep learning techniques trained on increasingly large datasets have brought about significant improvements in scene recognition and image classification. However, the performance of these novel techniques have not been extensively studied on small datasets, with many common deep learning models requiring millions of images to converge. Many of these large models have been pre-trained on large datasets for image recognition and classification tasks. These models are likely to have richer features than shallower light weight models due to the volume of training data, despite their different training objectives. In this paper, we present a novel approach that combines existing pre-trained feature extractors with light weight classifiers. These models are evaluated on two novel datasets: Places100, a subset of the Places365 scene classification dataset and Open-Places100, a derivative of Places100 to study a model’s ability to differentiate between in-domain data and open-set examples. We first establish a baseline using ResNet-18 trained and evaluated on both datasets, measuring the accuracy of our end-to-end trained baseline. Motivated by the poor performance baseline, we propose using pretrained feature-classifier pairs to improve upon the baseline. We study VIT, CLIP, and ResNet pretrained features and pair these with neural network, SVM, and XGBoost classifiers. Lastly, since each set of pretrained feature-classifier pairs has unique failure modes, we propose a self-training framework to use the majority vote of our nine feature-classifier pairs to weakly label a larger dataset. The results show that our self-trained …
    