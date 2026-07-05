import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Rail Guardian — IoT Safety System",
        description: "Real-time railway track monitoring using ultrasonic and vibration sensors, triggering instant microcontroller alerts on a live dashboard.",
        roles: ["IoT Development", "Embedded Systems"],
        image: "/images/feature-work/feature-rail-guardian.svg"
    },
    {
        title: "PhishGuard — Anti-Phishing Web App",
        description: "Browser-based tool that detects and flags phishing threats using JavaScript pattern-matching logic behind a user-friendly interface.",
        roles: ["Web Development", "JavaScript"],
        image: "/images/feature-work/feature-phishguard.svg"
    },
    {
        title: "Vanavani — Forest Monitoring Platform",
        description: "Smart forest-monitoring system for remote data collection, delivering real-time alerts to support wildlife and ranger safety.",
        roles: ["IoT Development", "Data Collection"],
        image: "/images/feature-work/feature-vanavani.svg"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};
