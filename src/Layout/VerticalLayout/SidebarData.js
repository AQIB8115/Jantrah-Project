const SidebarData = [
    // {
    //     label: "Menu",
    //     isMainMenu: true,
    // },
    {
        label: "Dashboard",
        icon: "mdi mdi-home-variant-outline",
        url: "/dashboard",
        issubMenubadge: true,
        // bgcolor: "bg-primary",
        badgeValue: ""
    },
    {
        label: "Doctors",
        icon: "mdi mdi-doctor",
        isHasArrow: true,
        url: "/adddoctor",
    },    
    // {
    //     label: "My Component",
    //     icon: "mdi mdi-doctor",
    //     isHasArrow: true,
    //     url: "/my-component",
    // },    
    // {
    //     label: "My Data",
    //     icon: "mdi mdi-doctor",
    //     isHasArrow: true,
    //     url: "/my-data-view",
    // },
    {
        label: "Doctor Schedules",
        icon: "mdi mdi-doctor",
        isHasArrow: true,
        url: "/viewschedule",
    },
    {
        label: "patients",
        icon: "mdi mdi-email-outline",
        subItem: [
            { sublabel: "View All Patients", link: "/view-all-patient" },
            { sublabel: "Patients Case Studies", link: "/patient-view" },
            { sublabel: "Medical History",
                //  link: "/compose-email"
                 },
            { sublabel: "Dental History", 
                // link: "/compose-email" 
            },
            { sublabel: "Drug History",
                //  link: "/compose-email" 
                },
            { sublabel: "Social History", 
                // link: "/compose-email"
             },
            { sublabel: "Exam & Diagnosis",
                //  link: "/compose-email" 
                },
            { sublabel: "Treatment Plans", 
                // link: "/compose-email" 
            },
        ],
    },
{
        label: "Patients Appointments",
        icon: "mdi mdi-doctor",
        isHasArrow: true,
        // url: "/calendar",
    },   
    {
        label: "Prescription",
        icon: "mdi mdi-doctor",
        isHasArrow: true,
        url: "/view-list-prescription",
    },     
    {
        label: "Prescription View",
        icon: "mdi mdi-doctor",
        isHasArrow: true,
        url: "/view-prescription",
    },    
    {
        label: "Inventory",
        icon: "mdi mdi-doctor",
        isHasArrow: true,
        // url: "/calendar",
    },
    {
        label: "Insurance Providers",
        icon: "mdi mdi-doctor",
        isHasArrow: true,
        // url: "/calendar",
    },
    {
        label: "Dropdowns Settings",
        icon: "mdi mdi-account-circle-outline",
        subItem: [
            { sublabel: "Settings Intra Oral (Soft Tissues)",
                //  link: "/auth-login" 
                },
            { sublabel: "Setting Extra Orals", 
                // link: "/auth-register" 
            },
            { sublabel: "Settings Appointment Status", 
                // link: "/auth-recoverpw" 
            },
            { sublabel: "Settings Category", 
                // link: "/auth-lock-screen" 
            },
            { sublabel: "Settings Sub Categories", 
                // link: "/auth-lock-screen" 
            },
            { sublabel: "Settings Items",
                //  link: "/auth-lock-screen" 
                },
            { sublabel: "Settings Medical History", 
                // link: "/auth-lock-screen" 
            },
            { sublabel: "Settings Social History",
                //  link: "/auth-lock-screen" 
                },
            { sublabel: "Settings Drug History",
                //  link: "/auth-lock-screen" 
                },
            { sublabel: "Settings Dental History", 
                // link: "/auth-lock-screen" 
            },
            { sublabel: "Settings Procedure Category",
                //  link: "/auth-lock-screen" 
                },
            { sublabel: "Settings Procedures", 
                // link: "/auth-lock-screen" 
            },
            { sublabel: "Settings Medicine Types",
                // link: "/auth-lock-screen" 
            },
            { sublabel: "Settings Medicine", 
                // link: "/auth-lock-screen" 
            },
            { sublabel: "Settings Diagnosis", 
                // link: "/auth-lock-screen"
             },
            { sublabel: "Insurance Providers", 
                // link: "/auth-lock-screen"
             },
        ],
    },
    {
        label: "Lab",
        icon: "ri-table-2",
        subItem: [
            { sublabel: "Lab",
                //  link: "/tables-basic" 
                },
            { sublabel: "Lab Report",
                //  link: "/tables-listjs" 
                },
        ],
    },
    {
        label: "Financial Activities",
        icon: "mdi mdi-format-page-break",
        subItem: [
            { sublabel: "Account Header",
                //  link: "/pages-starter"
                 },
            { sublabel: "Invoice",
                //  link: "/pages-maintenance" 
                },
            { sublabel: "Expense", 
                // link: "/pages-comingsoon" 
            },
            { sublabel: "Report", 
                // link: "/pages-timeline" 
            },
        ],
    },
    {
        label: "Settings",
        icon: "ri-eraser-fill",
        // issubMenubadge: true,
        // bgcolor: "bg-danger",
        // badgeValue: "",
        subItem: [
            { sublabel: "Role Management",
                //  link: "/form-elements" 
                },
            { sublabel: "User Management", 
                // link: "/form-validation"
             },
            { sublabel: "Application Settings", 
                // link: "/form-advanced" 
            },
            { sublabel: "General Settings",
                //  link: "/form-editor" 
                },
        ],
    }, 
]
export default SidebarData;