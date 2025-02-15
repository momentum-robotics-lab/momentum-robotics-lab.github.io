---
layout: publication
title: "Motion planning templates: A motion planning framework for robots with low-power CPUs"
authors:

    - Jeffrey Ichnowski

    - Ron Alterovitz

authors-short:

    - J. Ichnowski

    - R. Alterovitz

year: 2019
journal: "2019 International Conference on Robotics and Automation (ICRA)"
ref: ""
doi: None
---

Motion Planning Templates (MPT) is a C++ template-based library that uses compile-time polymorphism to generate robot-specific motion planning code and is geared towards eking out as much performance as possible when running on the low-power CPU of a battery-powered small robot. To use MPT, developers of robot software write or leverage code specific to their robot platform and motion planning problem, and then have MPT generate a robot-specific motion planner and its associated data-structures. The resulting motion planner implementation is faster and uses less memory than general motion planning implementations based upon runtime polymorphism. While MPT loses runtime flexibility, it gains advantages associated with compile-time polymorphism- including the ability to change scalar precision, generate tightly-packed data structures, and store robot-specific data in the motion planning graph …
    