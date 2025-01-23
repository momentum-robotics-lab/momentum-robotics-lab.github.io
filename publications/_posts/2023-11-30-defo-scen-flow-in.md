---
layout: publication
title: "DeformGS: Scene Flow in Highly Deformable Scenes for Deformable Object
  Manipulation"
# image: /images/publications/2025-01-23-deformgs.png
authors:
 - Bardienus P. Duisterhof
 - Zhao Mandi
 - Yunchao Yao
 - Jia-Wei Liu
 - Jenny Seidenschwarz
 - Mike Zheng Shou
 - Deva Ramanan
 - Shuran Song
 - Stan Birchfield
 - Bowen Wen
 - Jeffrey Ichnowski
authors-short:
 - B. P. Duisterhof
 - Z. Mandi
 - Y. Yao
 - J. Liu
 - J. Seidenschwarz
 - M. Z. Shou
 - D. Ramanan
 - S. Song
 - S. Birchfield
 - B. Wen
 - J. Ichnowski
year: 2023
journal: "WAFR"
ref: ""
doi: None
---

Teaching robots to fold, drape, or reposition deformable objects such as
cloth will unlock a variety of automation applications. While remarkable
progress has been made for rigid object manipulation, manipulating deformable
objects poses unique challenges, including frequent occlusions,
infinite-dimensional state spaces and complex dynamics. Just as object pose
estimation and tracking have aided robots for rigid manipulation, dense 3D
tracking (scene flow) of highly deformable objects will enable new applications
in robotics while aiding existing approaches, such as imitation learning or
creating digital twins with real2sim transfer. We propose DeformGS, an approach
to recover scene flow in highly deformable scenes, using simultaneous video
captures of a dynamic scene from multiple cameras. DeformGS builds on recent
advances in Gaussian splatting, a method that learns the properties of a large
number of Gaussians for state-of-the-art and fast novel-view synthesis.
DeformGS learns a deformation function to project a set of Gaussians with
canonical properties into world space. The deformation function uses a
neural-voxel encoding and a multilayer perceptron (MLP) to infer Gaussian
position, rotation, and a shadow scalar. We enforce physics-inspired
regularization terms based on conservation of momentum and isometry, which
leads to trajectories with smaller trajectory errors. We also leverage existing
foundation models SAM and XMEM to produce noisy masks, and learn a per-Gaussian
mask for better physics-inspired regularization. DeformGS achieves high-quality
3D tracking on highly deformable scenes with shadows and occlusions. In
experiments, DeformGS improves 3D tracking by an average of 55.8% compared to
the state-of-the-art. With sufficient texture, DeformGS achieves a median
tracking error of 3.3 mm on a cloth of 1.5 x 1.5 m in area. Website:
https://deformgs.github.io