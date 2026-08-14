export const siteConfig = {
  name: "Momentum Lab",
  title: "at Carnegie Mellon University's Robotics Institute",
  description:
    "The Momentum Lab at CMU's Robotics Institute researches dexterous manipulation, soft robotics, 3D vision, and robot learning for contact-rich automation.",
  url: "https://momentum-robotics-lab.github.io",
  ogImage: "/og-image.jpg",
  accentColor: "#1d4ed8",
  social: {
    // email: "your-email@example.com",
    // linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/jeff_ichnowski",
    github: "https://github.com/momentum-robotics-lab",
  },
  aboutMe:
    "The Momentum Lab at Carnegie Mellon University's Robotics Institute researches dexterous manipulation, soft robotics, 3D computer vision, and robot learning. We develop methods for in-hand and bimanual manipulation, deformable objects, contact-rich control, and vision foundation models, with applications in healthcare, manufacturing, and everyday assistance.",
  skills: ["Computer Vision", "Dexterity", "Bimanual Manipulation", "Deformable Objects", "Soft Robotics", "Dynamic Movement"],
  projects: [
    {
      name: "RaySt3R: Predicting Novel Depth Maps for Zero-Shot Object Completion",
      description:
        "Single masked RGB-D to complete 3D shapes by predicting novel-view depth, masks, and confidences, fusing them for SOTA 3D completion.",
      link: "https://rayst3r.github.io/",
      venue: "NeurIPS 2025",
      subtitle: "Bardienus P. Duisterhof, Jan Oberst, Bowen Wen, Stan Birchfield, Deva Ramanan, Jeffrey Ichnowski",
      skills: ["3D Vision", "Novel View Synthesis", "Depth Prediction", "Transformers"],
    },
    {
      name: "Web2Grasp: Learning Functional Grasps from Web Images of Hand-Object Interactions",
      description:
        "Reconstruct functional grasps from web images of hand-object interaction and train dexterous policies that transfer to real robot hands.",
      link: "https://web2grasp.github.io/",
      venue: "IROS 2026",
      subtitle: "Hongyi Chen, Yunchao Yao, Yufei Ye, Zhixuan Xu, Homanga Bharadhwaj, Jiashun Wang, Arthur Jakobsson, Ruihan Zhao, Shubham Tulsiani, Zackory Erickson, Jeffrey Ichnowski",
      skills: ["Dexterous Manipulation", "HOI", "Sim2Real", "Learning from Web Data"],
    },
    {
      name: "Soft Robotic Dynamic In-Hand Pen Spinning",
      description:
        "Dynamic in-hand manipulation with a soft hand via trial-and-error from real-world data, discovering grasping/spinning primitives for robust pen spinning and generalizing to other objects.",
      link: "https://arxiv.org/abs/2411.12734",
      subtitle: "Yunchao Yao, Uksang Yoo, Jean Oh, Christopher G. Atkeson, Jeffrey Ichnowski",
      skills: ["Soft Robotics", "Dynamic Manipulation", "In-Hand Manipulation", "RL/Auto-Labeling"],
    },
    {
      name: "Soft and Compliant Contact-Rich Hair Manipulation and Care",
      description:
        "MOE-Hair soft robot with visual force sensing performs hair-care tasks with lower forces and improved comfort and effectiveness.",
      link: "https://arxiv.org/abs/2501.02630",
      subtitle: "Uksang Yoo, Nathaniel Dennler, Eliot Xing, Maja Matarić, Stefanos Nikolaidis, Jeffrey Ichnowski, Jean Oh",
      skills: ["Soft Robotics", "Force Estimation", "Contact-Rich Manipulation", "HRI"],
    },
  ],
  members: {
    principalInvestigator: {
      name: "Jeffrey Ichnowski",
      title: "Assistant Professor at CMU Robotics Institute",
      email: "jichnow@cmu.edu",
      website: "https://ichnow.ski/",
      linkedin: "https://www.linkedin.com/in/jeffichnowski/",
      photo: "/photos/jeffrey_ichnowski.jpg", // Placeholder - add actual photo
      education: [
        "B.A. Computer Science and Asian Studies, University of California at Berkeley",
        "Ph.D. Computational Robotics, University of North Carolina at Chapel Hill, 2019"
      ],
      postdoc: "Researcher in RISE lab, University of California at Berkeley, 2019-2022",
      googleScholar: "https://scholar.google.com/citations?user=7CKFg9EAAAAJ"
    },
    phdStudents: [
      {
        name: "Hongyi Chen",
        research: "Dexterous Manipulation",
        email: "hongyic@andrew.cmu.edu",
        photo: "/photos/hongyi_chen.jpg",
        googleScholar: "https://scholar.google.com/citations?user=Kg4GgV4AAAAJ",
        website: "https://hychen-naza.github.io/"
      },
      {
        name: "Bardienus P. Duisterhof",
        research: "Vision foundation models for scalable automation",
        email: "bduister@andrew.cmu.edu",
        photo: "/photos/bardenius_duisterhof.jpg",
        googleScholar: "https://scholar.google.com/citations?user=LLsYMFYAAAAJ",
        website: "https://bart-ai.com",
        twitter: "https://x.com/BDuisterhof",
        linkedin: "https://www.linkedin.com/in/duisterhof/"
      },
      {
        name: "Adam Hung",
        research: "Robotics Research",
        email: "adamhung@andrew.cmu.edu",
        photo: "/photos/adam_hung.jpg",
        googleScholar: "https://scholar.google.com/citations?user=FCFyEYkAAAAJ",
        website: "https://adamhung60.github.io/",
        linkedin: "https://www.linkedin.com/in/adam-hung-389a38220/"
      },
      {
        name: "Yuemin Mao",
        research: "Dynamic Manipulation",
        email: "yueminm@andrew.cmu.edu",
        photo: "/photos/yuemin_mao.jpg",
        googleScholar: "https://scholar.google.com/citations?user=eNF9ijoAAAAJ",
        website: "https://yueminm.github.io/",
        twitter: "https://twitter.com/YueminMao",
        linkedin: "https://www.linkedin.com/in/yuemin-mao-02279a1a1/"
      }
    ],
    mastersStudents: [
      {
        name: "Arthur Jakobsson",
        research: "Dexterous and deformable object manipulation",
        email: "ajakobss@cmu.edu",
        photo: "/photos/arthur_jakobsson.jpg",
        googleScholar: "https://scholar.google.com/citations?user=Uo2ibwcAAAAJ",
        website: "https://arthurjakobsson.com/",
        linkedin: "https://www.linkedin.com/in/arthurjakobsson/"
      },
      {
        name: "Haoran Hao",
        research: "Machine learning, multimodal perception, and robotic manipulation",
        email: "hrhao@cmu.edu",
        photo: "/photos/haoran_hao.jpg",
        googleScholar: "https://scholar.google.com/citations?user=sBHFXCYAAAAJ",
        website: "https://hoar012.github.io/",
        twitter: "https://x.com/hr_hao11",
        linkedin: "https://www.linkedin.com/in/haoran-hao-b1132537b/"
      }
    ],
    undergraduateStudents: [
      // Currently no undergraduate students listed
    ],
    alumni: [
      {
        name: "Uksang Yoo",
        degree: "PhD Student",
        research: "Dexterous in-hand manipulation",
        email: "uyoo@andrew.cmu.edu",
        photo: "/photos/uksang_yoo.png",
        googleScholar: "https://scholar.google.com/citations?user=0bnaVQ8AAAAJ",
        website: "https://uksangyoo.github.io",
        twitter: "https://x.com/UksangYoo"
      },
      {
        name: "Jeffrey Ke",
        degree: "Master Student",
        research: "Demonstration learning for deformable object manipulation",
        email: "jke3@cs.cmu.edu",
        photo: "/photos/jeffery_ke.jpg",
        googleScholar: "https://scholar.google.com/citations?user=HRKvLJEAAAAJ",
        twitter: "https://x.com/jeff_yy_ke",
        linkedin: "https://www.linkedin.com/in/jeffke/"
      },
      {
        name: "Rajath Aralikatti",
        degree: "Master Student",
        research: "Manipulation using 3D Vision models",
        email: "rajathc@cs.cmu.edu",
        photo: "/photos/rajath_aralikatti.jpg",
        googleScholar: "https://scholar.google.com/citations?user=bw0n3Q0AAAAJ",
        linkedin: "https://www.linkedin.com/in/rajath-aralikatti/"
      },
      {
        name: "Xilin Zhang",
        degree: "Master Student",
        research: "Robot learning and computer vision",
        photo: "/photos/xilin_zhang.jpg",
        linkedin: "https://www.linkedin.com/in/xilin-zhang-25949b323/"
      },
      {
        name: "Shahram Najam Syed",
        degree: "Master Student",
        research: "Vision-language-action models and visuo-acoustic manipulation",
        email: "snsyed@andrew.cmu.edu",
        photo: "/photos/shahram_najam_syed.jpg",
        website: "https://shahramnajamsyed.com/",
        googleScholar: "https://scholar.google.com/citations?user=3hxAYE8AAAAJ",
        linkedin: "https://www.linkedin.com/in/shahram-najam-syed-2404b4114/",
        twitter: "https://twitter.com/shahram_n95"
      },
      {
        name: "Aviral Agrawal",
        degree: "Master Student",
        research: "3D multimodal future with the fusion of 3D representation and Vision Language Models",
        email: "aviral@example.com", // Placeholder
        photo: "/photos/aviral_agrawal.jpg",
        googleScholar: "https://scholar.google.com/citations?user=NiW49k4AAAAJ",
        website: "https://aviral-agrawal.github.io/",
        linkedin: "https://www.linkedin.com/in/aviral-agrawal-783a01162",
        twitter: "https://x.com/aviral__agrawal"
      },
      {
        name: "Yatharth Ahuja",
        degree: "Master Student",
        research: "Failure Recovery in Manipulation Tasks",
        email: "yahuja@cs.cmu.edu",
        photo: "/photos/yatharth_ahuja.jpg",
        googleScholar: "https://scholar.google.com/citations?user=1T9f5GwAAAAJ",
        website: "https://yatharthahuja.github.io/",
        linkedin: "https://www.linkedin.com/in/yatharth-ahuja/"
      },
      {
        name: "Yunchao Yao",
        degree: "Master Student",
        research: "Learning from demonstrations, Reinforcement learning",
        email: "yunchaoy@andrew.cmu.edu",
        photo: "/photos/yunchao_yao.jpg",
        googleScholar: "https://scholar.google.com/citations?user=KSKW_J4AAAAJ"
      },
      {
        name: "Jan Oberst",
        degree: "Master Student",
        research: "Dense Scene Flow of Deformable Scenes",
        email: "joberst@andrew.cmu.edu",
        photo: "/photos/jan_oberst.jpg",
        googleScholar: "https://scholar.google.com/citations?user=-jYQuzMAAAAJ",
        linkedin: "https://www.linkedin.com/in/jan-oberst-766103197/"
      }
    ]
  },
  research: [
    {
      school: "Stanford University",
      degree: "PhD in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Specialized in Robotics and Artificial Intelligence",
        "Dissertation on Advanced Robotic Manipulation",
        "Published multiple papers in top-tier conferences",
        "Received NSF Graduate Research Fellowship",
      ],
    },
    {
      school: "Carnegie Mellon University",
      degree: "Master of Science in Robotics",
      dateRange: "2012 - 2014",
      achievements: [
        "Focused on robotic manipulation and control",
        "Graduated with distinction",
        "Research assistant in Robotics Institute",
        "Developed novel control algorithms for robotic systems",
      ],
    },
    {
      school: "Massachusetts Institute of Technology",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2008 - 2012",
      achievements: [
        "Graduated Magna Cum Laude with 3.9 GPA",
        "Dean's List all semesters",
        "President of Robotics Club",
        "Undergraduate research in computer vision",
      ],
    },
  ],
};
