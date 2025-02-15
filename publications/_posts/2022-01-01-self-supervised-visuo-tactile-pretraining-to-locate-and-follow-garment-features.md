---
layout: publication
title: "Self-supervised visuo-tactile pretraining to locate and follow garment features"
authors:

    - Justin Kerr

    - Huang Huang

    - Albert Wilcox

    - Ryan Hoque

    - Jeffrey Ichnowski

    - Roberto Calandra

    - Ken Goldberg

authors-short:

    - J. Kerr

    - H. Huang

    - A. Wilcox

    - R. Hoque

    - J. Ichnowski

    - R. Calandra

    - K. Goldberg

year: 2022
journal: "arXiv preprint arXiv:2209.13042"
ref: ""
doi: None
---

Humans make extensive use of vision and touch as complementary senses, with vision providing global information about the scene and touch measuring local information during manipulation without suffering from occlusions. While prior work demonstrates the efficacy of tactile sensing for precise manipulation of deformables, they typically rely on supervised, human-labeled datasets. We propose Self-Supervised Visuo-Tactile Pretraining (SSVTP), a framework for learning multi-task visuo-tactile representations in a self-supervised manner through cross-modal supervision. We design a mechanism that enables a robot to autonomously collect precisely spatially-aligned visual and tactile image pairs, then train visual and tactile encoders to embed these pairs into a shared latent space using cross-modal contrastive loss. We apply this latent space to downstream perception and control of deformable garments on flat surfaces, and evaluate the flexibility of the learned representations without fine-tuning on 5 tasks: feature classification, contact localization, anomaly detection, feature search from a visual query (e.g., garment feature localization under occlusion), and edge following along cloth edges. The pretrained representations achieve a 73-100% success rate on these 5 tasks.
    