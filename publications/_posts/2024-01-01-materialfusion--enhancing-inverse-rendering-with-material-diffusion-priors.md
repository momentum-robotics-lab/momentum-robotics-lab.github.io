---
layout: publication
title: "MaterialFusion: Enhancing Inverse Rendering with Material Diffusion Priors"
authors:

    - Yehonathan Litman

    - Or Patashnik

    - Kangle Deng

    - Aviral Agrawal

    - Rushikesh Zawar

    - Fernando De la Torre

    - Shubham Tulsiani

authors-short:

    - Y. Litman

    - O. Patashnik

    - K. Deng

    - A. Agrawal

    - R. Zawar

    - F. D. l. Torre

    - S. Tulsiani

year: 2024
journal: "arXiv preprint arXiv:2409.15273"
ref: ""
doi: None
---

Recent works in inverse rendering have shown promise in using multi-view images of an object to recover shape, albedo, and materials. However, the recovered components often fail to render accurately under new lighting conditions due to the intrinsic challenge of disentangling albedo and material properties from input images. To address this challenge, we introduce MaterialFusion, an enhanced conventional 3D inverse rendering pipeline that incorporates a 2D prior on texture and material properties. We present StableMaterial, a 2D diffusion model prior that refines multi-lit data to estimate the most likely albedo and material from given input appearances. This model is trained on albedo, material, and relit image data derived from a curated dataset of approximately ~12K artist-designed synthetic Blender objects called BlenderVault. we incorporate this diffusion prior with an inverse rendering framework where we use score distillation sampling (SDS) to guide the optimization of the albedo and materials, improving relighting performance in comparison with previous work. We validate MaterialFusion's relighting performance on 4 datasets of synthetic and real objects under diverse illumination conditions, showing our diffusion-aided approach significantly improves the appearance of reconstructed objects under novel lighting conditions. We intend to publicly release our BlenderVault dataset to support further research in this field.
    