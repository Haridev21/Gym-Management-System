// Mock Data for Gym Admin Dashboard

// Members Data
const membersData = [
    {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@email.com",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, New York, NY 10001",
        plan: "premium",
        status: "active",
        joinDate: "2024-01-15",
        emergencyContact: "Jane Smith - +1 (555) 123-4568",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/4a90e2/ffffff?text=JS"
    },
    {
        id: 2,
        firstName: "Sarah",
        lastName: "Johnson",
        email: "sarah.johnson@email.com",
        phone: "+1 (555) 234-5678",
        address: "456 Oak Ave, Los Angeles, CA 90210",
        plan: "basic",
        status: "active",
        joinDate: "2024-02-01",
        emergencyContact: "Mike Johnson - +1 (555) 234-5679",
        healthInfo: "Asthma - uses inhaler",
        photo: "https://via.placeholder.com/50x50/e74c3c/ffffff?text=SJ"
    },
    {
        id: 3,
        firstName: "Michael",
        lastName: "Brown",
        email: "michael.brown@email.com",
        phone: "+1 (555) 345-6789",
        address: "789 Pine St, Chicago, IL 60601",
        plan: "vip",
        status: "active",
        joinDate: "2023-12-10",
        emergencyContact: "Lisa Brown - +1 (555) 345-6790",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/27ae60/ffffff?text=MB"
    },
    {
        id: 4,
        firstName: "Emily",
        lastName: "Davis",
        email: "emily.davis@email.com",
        phone: "+1 (555) 456-7890",
        address: "321 Elm St, Miami, FL 33101",
        plan: "premium",
        status: "inactive",
        joinDate: "2023-11-20",
        emergencyContact: "David Davis - +1 (555) 456-7891",
        healthInfo: "Back injury - limited mobility",
        photo: "https://via.placeholder.com/50x50/f39c12/ffffff?text=ED"
    },
    {
        id: 5,
        firstName: "David",
        lastName: "Wilson",
        email: "david.wilson@email.com",
        phone: "+1 (555) 567-8901",
        address: "654 Maple Dr, Seattle, WA 98101",
        plan: "basic",
        status: "active",
        joinDate: "2024-01-05",
        emergencyContact: "Rachel Wilson - +1 (555) 567-8902",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/9b59b6/ffffff?text=DW"
    },
    {
        id: 6,
        firstName: "Lisa",
        lastName: "Anderson",
        email: "lisa.anderson@email.com",
        phone: "+1 (555) 678-9012",
        address: "987 Cedar Ln, Denver, CO 80201",
        plan: "vip",
        status: "active",
        joinDate: "2023-10-15",
        emergencyContact: "Tom Anderson - +1 (555) 678-9013",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/1abc9c/ffffff?text=LA"
    },
    {
        id: 7,
        firstName: "Robert",
        lastName: "Taylor",
        email: "robert.taylor@email.com",
        phone: "+1 (555) 789-0123",
        address: "147 Birch Rd, Austin, TX 73301",
        plan: "premium",
        status: "suspended",
        joinDate: "2023-09-30",
        emergencyContact: "Mary Taylor - +1 (555) 789-0124",
        healthInfo: "Heart condition - requires monitoring",
        photo: "https://via.placeholder.com/50x50/e67e22/ffffff?text=RT"
    },
    {
        id: 8,
        firstName: "Jennifer",
        lastName: "Martinez",
        email: "jennifer.martinez@email.com",
        phone: "+1 (555) 890-1234",
        address: "258 Spruce St, Portland, OR 97201",
        plan: "basic",
        status: "active",
        joinDate: "2024-02-15",
        emergencyContact: "Carlos Martinez - +1 (555) 890-1235",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/34495e/ffffff?text=JM"
    },
    {
        id: 9,
        firstName: "William",
        lastName: "Garcia",
        email: "william.garcia@email.com",
        phone: "+1 (555) 901-2345",
        address: "369 Willow Ave, Phoenix, AZ 85001",
        plan: "premium",
        status: "active",
        joinDate: "2024-01-20",
        emergencyContact: "Maria Garcia - +1 (555) 901-2346",
        healthInfo: "Diabetes - requires monitoring",
        photo: "https://via.placeholder.com/50x50/16a085/ffffff?text=WG"
    },
    {
        id: 10,
        firstName: "Amanda",
        lastName: "Rodriguez",
        email: "amanda.rodriguez@email.com",
        phone: "+1 (555) 012-3456",
        address: "741 Aspen Ct, Las Vegas, NV 89101",
        plan: "vip",
        status: "active",
        joinDate: "2023-12-25",
        emergencyContact: "Jose Rodriguez - +1 (555) 012-3457",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/d35400/ffffff?text=AR"
    },
    {
        id: 11,
        firstName: "Christopher",
        lastName: "Lee",
        email: "christopher.lee@email.com",
        phone: "+1 (555) 123-7890",
        address: "852 Poplar St, San Diego, CA 92101",
        plan: "basic",
        status: "active",
        joinDate: "2024-02-10",
        emergencyContact: "Grace Lee - +1 (555) 123-7891",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/8e44ad/ffffff?text=CL"
    },
    {
        id: 12,
        firstName: "Jessica",
        lastName: "White",
        email: "jessica.white@email.com",
        phone: "+1 (555) 234-8901",
        address: "963 Hickory Ln, Philadelphia, PA 19101",
        plan: "premium",
        status: "active",
        joinDate: "2024-01-08",
        emergencyContact: "James White - +1 (555) 234-8902",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/27ae60/ffffff?text=JW"
    },
    {
        id: 13,
        firstName: "Daniel",
        lastName: "Harris",
        email: "daniel.harris@email.com",
        phone: "+1 (555) 345-9012",
        address: "159 Sycamore Dr, San Antonio, TX 78201",
        plan: "basic",
        status: "inactive",
        joinDate: "2023-11-10",
        emergencyContact: "Patricia Harris - +1 (555) 345-9013",
        healthInfo: "Knee injury - limited mobility",
        photo: "https://via.placeholder.com/50x50/e74c3c/ffffff?text=DH"
    },
    {
        id: 14,
        firstName: "Ashley",
        lastName: "Clark",
        email: "ashley.clark@email.com",
        phone: "+1 (555) 456-0123",
        address: "357 Magnolia Ave, San Jose, CA 95101",
        plan: "vip",
        status: "active",
        joinDate: "2023-10-20",
        emergencyContact: "Kevin Clark - +1 (555) 456-0124",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/f39c12/ffffff?text=AC"
    },
    {
        id: 15,
        firstName: "Matthew",
        lastName: "Lewis",
        email: "matthew.lewis@email.com",
        phone: "+1 (555) 567-1234",
        address: "486 Redwood Blvd, Dallas, TX 75201",
        plan: "premium",
        status: "active",
        joinDate: "2024-01-12",
        emergencyContact: "Nicole Lewis - +1 (555) 567-1235",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/1abc9c/ffffff?text=ML"
    },
    {
        id: 16,
        firstName: "Nicole",
        lastName: "Robinson",
        email: "nicole.robinson@email.com",
        phone: "+1 (555) 678-2345",
        address: "753 Sequoia St, San Francisco, CA 94101",
        plan: "basic",
        status: "active",
        joinDate: "2024-02-05",
        emergencyContact: "Andrew Robinson - +1 (555) 678-2346",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/9b59b6/ffffff?text=NR"
    },
    {
        id: 17,
        firstName: "Kevin",
        lastName: "Walker",
        email: "kevin.walker@email.com",
        phone: "+1 (555) 789-3456",
        address: "264 Cypress Ln, Indianapolis, IN 46201",
        plan: "premium",
        status: "active",
        joinDate: "2024-01-18",
        emergencyContact: "Stephanie Walker - +1 (555) 789-3457",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/34495e/ffffff?text=KW"
    },
    {
        id: 18,
        firstName: "Stephanie",
        lastName: "Young",
        email: "stephanie.young@email.com",
        phone: "+1 (555) 890-4567",
        address: "951 Dogwood Dr, Columbus, OH 43201",
        plan: "vip",
        status: "active",
        joinDate: "2023-12-05",
        emergencyContact: "Brandon Young - +1 (555) 890-4568",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/16a085/ffffff?text=SY"
    },
    {
        id: 19,
        firstName: "Brandon",
        lastName: "King",
        email: "brandon.king@email.com",
        phone: "+1 (555) 901-5678",
        address: "138 Fir St, Fort Worth, TX 76101",
        plan: "basic",
        status: "active",
        joinDate: "2024-02-12",
        emergencyContact: "Amber King - +1 (555) 901-5679",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/d35400/ffffff?text=BK"
    },
    {
        id: 20,
        firstName: "Amber",
        lastName: "Wright",
        email: "amber.wright@email.com",
        phone: "+1 (555) 012-6789",
        address: "475 Hemlock Ave, Charlotte, NC 28201",
        plan: "premium",
        status: "active",
        joinDate: "2024-01-25",
        emergencyContact: "Tyler Wright - +1 (555) 012-6790",
        healthInfo: "No known health conditions",
        photo: "https://via.placeholder.com/50x50/8e44ad/ffffff?text=AW"
    }
];

// Trainers Data
const trainersData = [
    {
        id: 1,
        firstName: "Alex",
        lastName: "Thompson",
        email: "alex.thompson@gym.com",
        phone: "+1 (555) 111-2222",
        specializations: ["strength", "cardio"],
        experience: "advanced",
        certifications: "NASM Certified Personal Trainer, CrossFit Level 2",
        availability: "Mon-Fri: 6AM-2PM, Sat: 8AM-12PM",
        assignedMembers: 12,
        status: "active",
        photo: "https://via.placeholder.com/50x50/4a90e2/ffffff?text=AT"
    },
    {
        id: 2,
        firstName: "Maria",
        lastName: "Gonzalez",
        email: "maria.gonzalez@gym.com",
        phone: "+1 (555) 222-3333",
        specializations: ["yoga", "pilates"],
        experience: "advanced",
        certifications: "RYT-500, Pilates Mat & Reformer Certified",
        availability: "Mon-Thu: 4PM-8PM, Fri: 4PM-6PM, Sun: 9AM-11AM",
        assignedMembers: 8,
        status: "active",
        photo: "https://via.placeholder.com/50x50/e74c3c/ffffff?text=MG"
    },
    {
        id: 3,
        firstName: "James",
        lastName: "Wilson",
        email: "james.wilson@gym.com",
        phone: "+1 (555) 333-4444",
        specializations: ["strength"],
        experience: "intermediate",
        certifications: "ACE Personal Trainer, USA Weightlifting Coach",
        availability: "Mon-Fri: 3PM-9PM, Sat: 10AM-4PM",
        assignedMembers: 15,
        status: "active",
        photo: "https://via.placeholder.com/50x50/27ae60/ffffff?text=JW"
    },
    {
        id: 4,
        firstName: "Sophia",
        lastName: "Chen",
        email: "sophia.chen@gym.com",
        phone: "+1 (555) 444-5555",
        specializations: ["cardio", "pilates"],
        experience: "intermediate",
        certifications: "AFAA Group Fitness, Pilates Mat Certified",
        availability: "Mon-Fri: 7AM-1PM, Sat: 7AM-10AM",
        assignedMembers: 10,
        status: "active",
        photo: "https://via.placeholder.com/50x50/f39c12/ffffff?text=SC"
    },
    {
        id: 5,
        firstName: "David",
        lastName: "Brown",
        email: "david.brown@gym.com",
        phone: "+1 (555) 555-6666",
        specializations: ["strength", "cardio"],
        experience: "beginner",
        certifications: "ISSA Personal Trainer",
        availability: "Mon-Fri: 5PM-10PM, Sun: 2PM-6PM",
        assignedMembers: 6,
        status: "active",
        photo: "https://via.placeholder.com/50x50/9b59b6/ffffff?text=DB"
    }
];

// Membership Plans Data
const plansData = [
    {
        id: 1,
        name: "Basic Plan",
        description: "Essential gym access with basic amenities",
        duration: "monthly",
        price: 29.99,
        accessLevel: "basic",
        features: [
            "Access to gym floor",
            "Basic equipment usage",
            "Locker room access",
            "Free parking"
        ],
        status: "active",
        memberCount: 8
    },
    {
        id: 2,
        name: "Premium Plan",
        description: "Enhanced gym experience with additional benefits",
        duration: "monthly",
        price: 49.99,
        accessLevel: "premium",
        features: [
            "All Basic features",
            "Group fitness classes",
            "Personal training session (1/month)",
            "Towel service",
            "Guest passes (2/month)"
        ],
        status: "active",
        memberCount: 12
    },
    {
        id: 3,
        name: "VIP Plan",
        description: "Ultimate gym experience with premium services",
        duration: "monthly",
        price: 79.99,
        accessLevel: "vip",
        features: [
            "All Premium features",
            "Unlimited personal training",
            "Spa and sauna access",
            "Priority booking",
            "Guest passes (5/month)",
            "Nutrition consultation"
        ],
        status: "active",
        memberCount: 5
    },
    {
        id: 4,
        name: "Annual Basic",
        description: "Basic plan with annual commitment discount",
        duration: "yearly",
        price: 299.99,
        accessLevel: "basic",
        features: [
            "Access to gym floor",
            "Basic equipment usage",
            "Locker room access",
            "Free parking",
            "2 months free"
        ],
        status: "active",
        memberCount: 3
    }
];

// Payments Data
const paymentsData = [
    {
        id: "TXN001",
        memberName: "John Smith",
        plan: "Premium",
        amount: 49.99,
        date: "2024-03-01",
        status: "paid",
        paymentMethod: "credit_card"
    },
    {
        id: "TXN002",
        memberName: "Sarah Johnson",
        plan: "Basic",
        amount: 29.99,
        date: "2024-03-01",
        status: "paid",
        paymentMethod: "debit_card"
    },
    {
        id: "TXN003",
        memberName: "Michael Brown",
        plan: "VIP",
        amount: 79.99,
        date: "2024-03-01",
        status: "paid",
        paymentMethod: "bank_transfer"
    },
    {
        id: "TXN004",
        memberName: "Emily Davis",
        plan: "Premium",
        amount: 49.99,
        date: "2024-03-01",
        status: "pending",
        paymentMethod: "credit_card"
    },
    {
        id: "TXN005",
        memberName: "David Wilson",
        plan: "Basic",
        amount: 29.99,
        date: "2024-03-01",
        status: "paid",
        paymentMethod: "cash"
    },
    {
        id: "TXN006",
        memberName: "Lisa Anderson",
        plan: "VIP",
        amount: 79.99,
        date: "2024-02-29",
        status: "paid",
        paymentMethod: "credit_card"
    },
    {
        id: "TXN007",
        memberName: "Robert Taylor",
        plan: "Premium",
        amount: 49.99,
        date: "2024-02-29",
        status: "failed",
        paymentMethod: "debit_card"
    },
    {
        id: "TXN008",
        memberName: "Jennifer Martinez",
        plan: "Basic",
        amount: 29.99,
        date: "2024-02-29",
        status: "paid",
        paymentMethod: "credit_card"
    },
    {
        id: "TXN009",
        memberName: "William Garcia",
        plan: "Premium",
        amount: 49.99,
        date: "2024-02-29",
        status: "paid",
        paymentMethod: "bank_transfer"
    },
    {
        id: "TXN010",
        memberName: "Amanda Rodriguez",
        plan: "VIP",
        amount: 79.99,
        date: "2024-02-29",
        status: "paid",
        paymentMethod: "credit_card"
    },
    {
        id: "TXN011",
        memberName: "Christopher Lee",
        plan: "Basic",
        amount: 29.99,
        date: "2024-02-28",
        status: "paid",
        paymentMethod: "debit_card"
    },
    {
        id: "TXN012",
        memberName: "Jessica White",
        plan: "Premium",
        amount: 49.99,
        date: "2024-02-28",
        status: "paid",
        paymentMethod: "credit_card"
    },
    {
        id: "TXN013",
        memberName: "Daniel Harris",
        plan: "Basic",
        amount: 29.99,
        date: "2024-02-28",
        status: "refunded",
        paymentMethod: "credit_card"
    },
    {
        id: "TXN014",
        memberName: "Ashley Clark",
        plan: "VIP",
        amount: 79.99,
        date: "2024-02-28",
        status: "paid",
        paymentMethod: "bank_transfer"
    },
    {
        id: "TXN015",
        memberName: "Matthew Lewis",
        plan: "Premium",
        amount: 49.99,
        date: "2024-02-28",
        status: "paid",
        paymentMethod: "credit_card"
    },
    {
        id: "TXN016",
        memberName: "Nicole Robinson",
        plan: "Basic",
        amount: 29.99,
        date: "2024-02-27",
        status: "paid",
        paymentMethod: "debit_card"
    },
    {
        id: "TXN017",
        memberName: "Kevin Walker",
        plan: "Premium",
        amount: 49.99,
        date: "2024-02-27",
        status: "paid",
        paymentMethod: "credit_card"
    },
    {
        id: "TXN018",
        memberName: "Stephanie Young",
        plan: "VIP",
        amount: 79.99,
        date: "2024-02-27",
        status: "paid",
        paymentMethod: "bank_transfer"
    },
    {
        id: "TXN019",
        memberName: "Brandon King",
        plan: "Basic",
        amount: 29.99,
        date: "2024-02-27",
        status: "pending",
        paymentMethod: "credit_card"
    },
    {
        id: "TXN020",
        memberName: "Amber Wright",
        plan: "Premium",
        amount: 49.99,
        date: "2024-02-27",
        status: "paid",
        paymentMethod: "debit_card"
    }
];

// Notifications Data
const notificationsData = [
    {
        id: 1,
        title: "New Group Class Schedule",
        message: "Check out our updated group fitness class schedule for March! New classes include HIIT, Pilates, and Advanced Yoga.",
        targetAudience: "all",
        type: "info",
        sentAt: "2024-03-01T10:00:00",
        status: "sent"
    },
    {
        id: 2,
        title: "Maintenance Notice",
        message: "The pool area will be closed for maintenance from March 5-7. We apologize for any inconvenience.",
        targetAudience: "all",
        type: "warning",
        sentAt: "2024-02-28T14:30:00",
        status: "sent"
    },
    {
        id: 3,
        title: "Premium Plan Upgrade",
        message: "Upgrade to Premium and get 2 free personal training sessions this month! Limited time offer.",
        targetAudience: "basic",
        type: "promotion",
        sentAt: "2024-02-27T09:15:00",
        status: "sent"
    },
    {
        id: 4,
        title: "Trainer Certification",
        message: "Congratulations to our trainer Alex Thompson for achieving CrossFit Level 2 certification!",
        targetAudience: "trainers",
        type: "success",
        sentAt: "2024-02-26T16:45:00",
        status: "sent"
    },
    {
        id: 5,
        title: "Holiday Hours",
        message: "The gym will have modified hours on Easter Sunday (March 31). Open 8AM-4PM.",
        targetAudience: "all",
        type: "info",
        sentAt: "2024-02-25T11:20:00",
        status: "sent"
    }
];

// Recent Activities Data
const recentActivitiesData = [
    {
        id: 1,
        type: "member",
        title: "New Member Joined",
        description: "Amber Wright joined with Premium plan",
        time: "2 hours ago"
    },
    {
        id: 2,
        type: "payment",
        title: "Payment Received",
        description: "John Smith - Premium plan - $49.99",
        time: "4 hours ago"
    },
    {
        id: 3,
        type: "trainer",
        title: "Trainer Assigned",
        description: "Alex Thompson assigned to 3 new members",
        time: "6 hours ago"
    },
    {
        id: 4,
        type: "notification",
        title: "Notification Sent",
        description: "Maintenance notice sent to all members",
        time: "1 day ago"
    },
    {
        id: 5,
        type: "member",
        title: "Plan Upgrade",
        description: "David Wilson upgraded to Premium plan",
        time: "1 day ago"
    },
    {
        id: 6,
        type: "payment",
        title: "Payment Failed",
        description: "Robert Taylor - Premium plan - $49.99",
        time: "2 days ago"
    }
];

// Chart Data
const chartData = {
    memberGrowth: {
        labels: ['Jan 1', 'Jan 8', 'Jan 15', 'Jan 22', 'Jan 29', 'Feb 5', 'Feb 12', 'Feb 19', 'Feb 26', 'Mar 1'],
        datasets: [{
            label: 'Total Members',
            data: [15, 16, 17, 18, 19, 20, 21, 22, 23, 25],
            borderColor: '#4a90e2',
            backgroundColor: 'rgba(74, 144, 226, 0.1)',
            tension: 0.4
        }]
    },
    planDistribution: {
        labels: ['Basic', 'Premium', 'VIP'],
        datasets: [{
            data: [8, 12, 5],
            backgroundColor: ['#4a90e2', '#f39c12', '#27ae60'],
            borderWidth: 0
        }]
    },
    trainerWorkload: {
        labels: ['Alex T.', 'Maria G.', 'James W.', 'Sophia C.', 'David B.'],
        datasets: [{
            label: 'Assigned Members',
            data: [12, 8, 15, 10, 6],
            backgroundColor: '#4a90e2',
            borderColor: '#357abd',
            borderWidth: 1
        }]
    },
    revenue: {
        labels: ['Jan 1', 'Jan 8', 'Jan 15', 'Jan 22', 'Jan 29', 'Feb 5', 'Feb 12', 'Feb 19', 'Feb 26', 'Mar 1'],
        datasets: [{
            label: 'Daily Revenue',
            data: [1200, 1350, 1100, 1400, 1300, 1500, 1450, 1600, 1550, 1700],
            borderColor: '#27ae60',
            backgroundColor: 'rgba(39, 174, 96, 0.1)',
            fill: true,
            tension: 0.4
        }]
    }
};

// Dashboard Stats
const dashboardStats = {
    totalMembers: 25,
    activePlans: 20,
    totalTrainers: 5,
    monthlyRevenue: 4250.50,
    pendingPayments: 159.98,
    totalRevenue: 4250.50
};

// Export data for use in other files
window.gymData = {
    members: membersData,
    trainers: trainersData,
    plans: plansData,
    payments: paymentsData,
    notifications: notificationsData,
    recentActivities: recentActivitiesData,
    chartData: chartData,
    dashboardStats: dashboardStats
};
