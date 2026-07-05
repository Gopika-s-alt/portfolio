import { NextResponse } from "next/server";

const certificationsData = [
    {
        icon: "/images/icon/certificate-icon.svg",
        role: "Embedded Systems & IoT",
        status: "Certified",
        category: "Hardware & Firmware",
        bulletPoints: [
            "Trained in sensor integration, microcontroller programming, and embedded systems design principles"
        ]
    },
    {
        icon: "/images/icon/certificate-icon.svg",
        role: "Data Visualization",
        status: "Certified",
        category: "Analytics",
        bulletPoints: [
            "Built dashboards and visual reports using Tableau and Power BI to communicate data-driven insights"
        ]
    },
    {
        icon: "/images/icon/certificate-icon.svg",
        role: "Front-End Development",
        status: "Certified",
        category: "Web Development",
        bulletPoints: [
            "Developed responsive, user-friendly web interfaces using HTML5, CSS3, and JavaScript"
        ]
    },
]

const educationData = [
    {
        date: "2023 – 2027",
        title: "B.E. Computer Science with IoT",
        subtitle: "KLN College of Engineering, Anna University"
    },
    {
        date: "2021 – 2023",
        title: "Higher Secondary Certificate (HSC) — 75%",
        subtitle: "Sivakasi Nadar Matriculation Higher Secondary School"
    },
];


const projectOverview = {
    caseStudies: [
        { name: "Quick Learner", noLink: true },
        { name: "Consistent & Disciplined", noLink: true },
        { name: "Adaptable", noLink: true },
        { name: "Patient Under Pressure", noLink: true },
    ],
    sideProjects: [
        { name: "Singing", noLink: true },
        { name: "Exploring Emerging Tech", noLink: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData: certificationsData,
        educationData,
        projectOverview
    });
};
