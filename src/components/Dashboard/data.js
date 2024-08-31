import assets from "../../assets";

export const DASHBOARD_CARD_DATA = [
    {
        id: 1,
        title: "Total Calls",
        value: "86,918",
        icon: assets.icons.blue.phone,
        success: true,
        change: "20%",
    },
    {
        id: 2,
        title: "Blank Calls",
        value: "61,738",
        icon: assets.icons.blue.phone,
        success: false,
        change: "28%",
    },
    {
        id: 3,
        title: "Actionable Calls",
        value: "21,897",
        icon: assets.icons.blue.phone,
        success: true,
        change: "18%",
    },
    {
        id: 4,
        title: "Enquiry Calls",
        value: "1,122",
        icon: assets.icons.blue.phone,
        success: true,
        change: "2%",
    },
    {
        id: 5,
        title: "Departmental Calls",
        value: "1",
        icon: assets.icons.blue.phone,
        success: true,
        change: "70%",
    },
    {
        id: 6,
        title: "Complaint Calls",
        value: "10",
        icon: assets.icons.blue.phone,
        success: false,
        change: "18%",
    },
    {
        id: 7,
        title: "Abusive Calls",
        value: "67",
        icon: assets.icons.blue.phone,
        success: false,
        change: "16%",
    },
    {
        id: 8,
        title: "Nuisance Calls",
        value: "445",
        icon: assets.icons.blue.callAnswered2k,
        success: false,
        change: "6%",
    },
    {
        id: 9,
        title: "Outbound Calls",
        value: "558",
        icon: assets.icons.blue.callAnswered,
        success: true,
        change: "0.8%",
    },
    {
        id: 10,
        title: "Followup Calls",
        value: "1077",
        icon: assets.icons.blue.missedCall,
        success: true,
        change: "0.8%",
    },
];

export const DASHBOARD_CHART_DATA = [
    {
        id: 1,
        title: "Top 10 CO - Actionable Calls",
        labels: ["10", "20", "30", "40", "50", "60", "70", "80"],
        linedata: [50, 130, 182, 70, 155, 165, 175, 80, 50],
        barData: [74, 146, 282, 226, 281, 228, 121, 173, 129, 182],
    },
    {
        id: 2,
        title: "Top 10 CO - Total Calls",
        labels: ["10", "20", "30", "40", "50", "60", "70", "80"],
        linedata: [50, 130, 182, 70, 155, 165, 175, 80, 50],
        barData: [74, 146, 282, 226, 281, 228, 121, 173, 129, 182],
    },
    {
        id: 3,
        title: "Top 10 CO - Total Calls",
        labels: ["10", "20", "30", "40", "50", "60", "70", "80"],
        linedata: [50, 130, 182, 70, 155, 165, 175, 80, 50],
        barData: [74, 146, 282, 226, 281, 228, 121, 173, 129, 182],
    },
];

export const TABS_DATA = [
    {
        id: 1,
        icons: assets.icons.white.analytics,
        title: "PRV Dashboard",
    },
    {
        id: 2,
        icons: assets.icons.white.call,
        title: "CO Dashboard",
    },
    {
        id: 3,
        icons: assets.icons.white.article,
        title: "Real-time Analytics",
    },
    {
        id: 4,
        icons: assets.icons.white.auto_awesome,
        title: "Predictive Analytics",
    },
    {
        id: 5,
        icons: assets.icons.white.analytics,
        title: "Reports and Metrics",
    },
];