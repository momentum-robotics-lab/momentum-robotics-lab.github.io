---
layout: publication
title: "TartanCalib: Iterative wide-angle lens calibration using adaptive subpixel refinement of apriltags"
authors:

    - Bardienus P. Duisterhof

    - Yaoyu Hu

    - Si Heng Teng

    - Michael Kaess

    - Sebastian Scherer

authors-short:

    - B. P. Duisterhof

    - Y. Hu

    - S. H. Teng

    - M. Kaess

    - S. Scherer

year: 2022
journal: "arXiv preprint arXiv:2210.02511"
ref: ""
doi: None
---

Wide-angle cameras are uniquely positioned for mobile robots, by virtue of the rich information they provide in a small, light, and cost-effective form factor. An accurate calibration of the intrinsics and extrinsics is a critical pre-requisite for using the edge of a wide-angle lens for depth perception and odometry. Calibrating wide-angle lenses with current state-of-the-art techniques yields poor results due to extreme distortion at the edge, as most algorithms assume a lens with low to medium distortion closer to a pinhole projection. In this work we present our methodology for accurate wide-angle calibration. Our pipeline generates an intermediate model, and leverages it to iteratively improve feature detection and eventually the camera parameters. We test three key methods to utilize intermediate camera models: (1) undistorting the image into virtual pinhole cameras, (2) reprojecting the target into the image frame, and (3) adaptive subpixel refinement. Combining adaptive subpixel refinement and feature reprojection significantly improves reprojection errors by up to 26.59 %, helps us detect up to 42.01 % more features, and improves performance in the downstream task of dense depth mapping. Finally, TartanCalib is open-source and implemented into an easy-to-use calibration toolbox. We also provide a translation layer with other state-of-the-art works, which allows for regressing generic models with thousands of parameters or using a more robust solver. To this end, TartanCalib is the tool of choice for wide-angle calibration. Project website and code: http://tartancalib.com.
    