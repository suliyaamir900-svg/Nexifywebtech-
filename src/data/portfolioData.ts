import { ProductItem, ToolItem, FAQItem, ServiceItem, PricingTier, TechStackCategory } from '../types';

export const LOGO_PATH = '/assets/aistudio/file_00000000be6c8210ae25bb6017a99e70_62ffd5a1.png';
export const VIDEO_PATH = '/assets/aistudio/14522345_3840_2160_25fps_87e8c363.mp4';
export const WHATSAPP_NUMBER = '919000000000';
export const INSTAGRAM_HANDLE = 'Nexifywebtech';

export const PRODUCTS_DATA: ProductItem[] = [
  // ==========================================
  // 1. WINDOWS DESKTOP APPLICATIONS
  // ==========================================
  {
    id: 'store-pos',
    title: 'Store POS – Retail Management Software',
    category: 'windows',
    platform: 'Windows Desktop',
    status: 'Available',
    shortDesc: 'A desktop-based point-of-sale and retail management application designed to simplify everyday shop operations.',
    aboutSoftware: 'Store POS is developed by NEXIFYWEBTECH to empower retail shops, grocery stores, and department outlets with high-speed barcode checkout, stock control, and reliable cashbook accounting.',
    fullDesc: 'A desktop-based point-of-sale and retail management application designed to simplify everyday shop operations. It handles product cataloging, fast thermal invoice printing, real-time inventory adjustments, supplier purchases, and comprehensive profit/loss statements.',
    targetAudience: 'Retail store owners, supermarket managers, grocery stores, independent shopkeepers.',
    problemSolved: 'Eliminates billing queues, reduces manual counting errors, and automates stock reorder alerts.',
    features: [
      'Product and inventory management with low-stock alerts',
      'Fast billing and invoice generation (Thermal & A4 printing)',
      'Customer management and balance records',
      'Purchase and sales records with itemized history',
      'Stock management with batch and barcode scanning',
      'Payment tracking across Cash, UPI, and Card',
      'Daily business reports and profit/loss summaries'
    ],
    techStack: ['C# .NET', 'WPF', 'SQLite / Local DB', 'Thermal ESC/POS SDK'],
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0a67d553b245?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    id: 'medical-pos',
    title: 'Medical POS – Pharmacy Management Software',
    category: 'windows',
    platform: 'Windows Desktop',
    status: 'Available',
    shortDesc: 'A specialized desktop application designed for medical stores and pharmacies to manage medicines and daily pharmacy operations.',
    aboutSoftware: 'Engineered specifically for pharmacies and chemists to ensure accurate pharmaceutical batch handling, expiry tracking, prescription billing, and regulatory compliance.',
    fullDesc: 'A specialized desktop application designed for medical stores and pharmacies to manage medicines and daily pharmacy operations. It eliminates the risk of dispensing expired drugs and speeds up customer counter checkout with instant salt and generic substitute lookups.',
    targetAudience: 'Pharmacies, medical stores, hospital dispensaries, and pharmaceutical distributors.',
    problemSolved: 'Prevents dispensing expired medicines and tracks hundreds of pharmaceutical batches effortlessly.',
    features: [
      'Medicine inventory management with salt and brand search',
      'Batch number and expiry tracking with proactive alerts',
      'Medicine billing with prescription reference tracking',
      'Purchase management and distributor invoice entry',
      'Supplier records, payment tracking, and purchase returns',
      'Stock monitoring with automatic minimum-level warnings',
      'Sales reports, GST summary, and daily medicine summaries'
    ],
    techStack: ['C# .NET', 'WPF', 'SQL Server / SQLite', 'Barcode Scanner API'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'hotel-pos',
    title: 'Hotel POS – Restaurant Management Software',
    category: 'windows',
    platform: 'Windows Desktop',
    status: 'Available',
    shortDesc: 'A desktop solution for hotels, restaurants and food businesses to manage daily operations.',
    aboutSoftware: 'Created by NEXIFYWEBTECH to streamline dining operations, order coordination between waiters and kitchen staff, and high-turnover billing for hospitality establishments.',
    fullDesc: 'A desktop solution for hotels, restaurants and food businesses to manage daily operations. Features interactive visual table layouts, kitchen order tickets (KOT), item modifiers, split checks, and daily food cost analytics.',
    targetAudience: 'Restaurants, hotels, cafes, cloud kitchens, and food courts.',
    problemSolved: 'Reduces table turnaround delays and ensures seamless order communication with the kitchen.',
    features: [
      'Visual table management and real-time floor plan',
      'Food menu management with category modifiers',
      'Customer orders, dine-in, takeaway, and room service',
      'Billing and invoices with split check support',
      'Kitchen order management (KOT printing / display)',
      'Sales tracking by category, waiter, and payment mode',
      'Daily business reports and revenue breakdowns'
    ],
    techStack: ['C# .NET', 'WPF', 'SQLite', 'Network Thermal Printer API'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'library-mgmt',
    title: 'Library Management System',
    category: 'windows',
    platform: 'Windows Desktop',
    status: 'Available',
    shortDesc: 'A desktop application for schools, colleges and libraries to manage their complete book collection and member records.',
    aboutSoftware: 'A reliable desktop library automation system designed to digitize book circulation, member cataloging, and fine calculations with zero paper logbooks.',
    fullDesc: 'A desktop application for schools, colleges and libraries to manage their complete book collection and member records. Enables librarians to issue and return books via barcode scan in seconds while keeping student and faculty borrowing limits enforced.',
    targetAudience: 'Schools, colleges, universities, institutional libraries, and community reading rooms.',
    problemSolved: 'Eliminates lost books, manages overdue return dates, and automates fine calculations.',
    features: [
      'Book management with ISBN and barcode cataloging',
      'Library member registration and digital ID issuance',
      'Book issuing and returning workflow with 1-click scan',
      'Due date tracking with overdue alerts',
      'Fine management with automated receipt generation',
      'Instant searchable book catalog by author, title, and subject',
      'Comprehensive library circulation and inventory reports'
    ],
    techStack: ['C# .NET', 'Windows Forms / WPF', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'classes-mgmt',
    title: 'Classes Management System',
    category: 'windows',
    platform: 'Windows Desktop',
    status: 'Available',
    shortDesc: 'A desktop management application for coaching classes and educational institutes.',
    aboutSoftware: 'An administrative desktop software suite developed to simplify coaching class operations, batch allocations, student fee collections, and attendance monitoring.',
    fullDesc: 'A desktop management application for coaching classes and educational institutes. Allows administrators to track student admissions, manage multiple subject batches, track installment fees, and print branded receipts.',
    targetAudience: 'Coaching classes, private tuition centers, training academies, and educational institutes.',
    problemSolved: 'Tracks pending fee dues, organizes student batches, and automates attendance records without paperwork.',
    features: [
      'Student management and admission profile records',
      'Batch management with schedule and subject assignment',
      'Attendance records with daily present/absent logs',
      'Fees management with installment schedules and reminders',
      'Payment tracking with instant printed receipts',
      'Student information database and guardian contacts',
      'Academic reports and fee collection summaries'
    ],
    techStack: ['C# .NET', 'WPF', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'hisab-software',
    title: 'Hisab Software – Accounting & Transaction Management',
    category: 'windows',
    platform: 'Windows Desktop',
    status: 'Available',
    shortDesc: 'A simple desktop solution for managing business accounts and financial transactions.',
    aboutSoftware: 'Designed by NEXIFYWEBTECH to replace cumbersome paper khata ledgers with a clean, secure, and searchable financial transaction tracker for small and medium businesses.',
    fullDesc: 'A simple desktop solution for managing business accounts and financial transactions. Keep accurate debit and credit records for every customer and supplier, balance your daily cashbook, and track outstanding payments.',
    targetAudience: 'Traders, wholesalers, distributors, retail shopkeepers, and independent business owners.',
    problemSolved: 'Prevents calculation mistakes in customer khata ledgers and keeps credit/debit records clear.',
    features: [
      'Income and expense records with customizable categories',
      'Daily cashbook with automatic closing balance',
      'Customer accounts with individual ledger balance sheets',
      'Supplier accounts and purchase invoice ledger',
      'Debit and credit entries with quick reference notes',
      'Outstanding balances with pending dues filter',
      'Financial summaries and exportable balance reports'
    ],
    techStack: ['C# .NET', 'WPF', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'expense-mgmt',
    title: 'Expense Management Software',
    category: 'windows',
    platform: 'Windows Desktop',
    status: 'Available',
    shortDesc: 'A desktop application designed to manage personal and business expenses.',
    aboutSoftware: 'A streamlined financial organizer for professionals and businesses to monitor cash outflows, allocate budgets, and eliminate untracked spending.',
    fullDesc: 'A desktop application designed to manage personal and business expenses. Record daily expenses across customizable categories, track payment modes, and analyze monthly financial trends through clear visual charts.',
    targetAudience: 'Individuals, freelancers, small business finance managers, and startup teams.',
    problemSolved: 'Provides complete clarity on operational spending and prevents budget overruns.',
    features: [
      'Daily expense tracking with fast entry shortcuts',
      'Income records and cash flow balance tracking',
      'Expense categories with customizable labels',
      'Payment method tracking (Cash, Bank Transfer, Card, UPI)',
      'Monthly summaries with expense breakdown graphs',
      'Transaction history with keyword and date range search',
      'Expense reports exportable to PDF and Excel'
    ],
    techStack: ['C# .NET', 'Windows Forms / WPF', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'business-mgmt-software',
    title: 'Business Management Software',
    category: 'windows',
    platform: 'Windows Desktop',
    status: 'Available',
    shortDesc: 'A digital solution for organizing business activities and managing important business records.',
    aboutSoftware: 'An all-in-one operational cockpit that integrates customer profiles, inventory valuation, transactional billing, and activity logs into a single desktop tool.',
    fullDesc: 'A digital solution for organizing business activities and managing important business records. Unites fragmented operations into a unified desktop dashboard, helping businesses run more efficiently with fewer manual errors.',
    targetAudience: 'Small and medium enterprises (SMEs), service agencies, distributors, and manufacturing units.',
    problemSolved: 'Replaces scattered files and spreadsheets with a single structured operational database.',
    features: [
      'Centralized business records and master client database',
      'Customer information, purchase history, and contact directory',
      'Transaction management and automated billing workflows',
      'Daily operations tracking and team task coordination',
      'Financial summaries and cash flow health indicators',
      'Business reporting with printable management audits'
    ],
    techStack: ['C# .NET', 'WPF', 'SQL Server / SQLite'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'custom-windows-software',
    title: 'Custom Windows Software',
    category: 'windows',
    platform: 'Windows Desktop',
    status: 'Custom Development',
    shortDesc: 'Custom desktop applications developed according to specific business requirements.',
    aboutSoftware: 'We develop customized Windows software to simplify workflows, automate repetitive tasks and provide practical digital solutions for different industries.',
    fullDesc: 'We develop customized Windows software to simplify workflows, automate repetitive tasks and provide practical digital solutions for different industries. From unique industrial hardware integrations to custom internal enterprise tools, we engineer desktop software tailored to your specific operations.',
    targetAudience: 'Enterprises, industrial units, specialized clinics, and businesses with custom operational models.',
    problemSolved: 'Solves complex business problems that rigid off-the-shelf software cannot accommodate.',
    features: [
      'Tailor-made software architecture built around your exact workflow',
      'Offline-first data security and local high-speed database performance',
      'Hardware peripheral integration (thermal printers, barcode scanners, weighing scales)',
      'Custom user roles, permission access, and audit trail logging',
      'Installer packaging, documentation, and dedicated maintenance support'
    ],
    techStack: ['C# .NET', 'WPF', 'WinUI', 'SQL Server', 'Custom Device APIs'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
    ]
  },

  // ==========================================
  // 2. ANDROID APPLICATIONS
  // ==========================================
  {
    id: 'workkhata-app',
    title: 'WorkKhata – Business Record Management App',
    category: 'android',
    platform: 'Android App',
    status: 'Available',
    shortDesc: 'A business-focused application designed to manage important records, transactions and everyday business activities.',
    aboutSoftware: 'WorkKhata is our dedicated mobile business management application that puts customer accounts, transactions, and sales receipts directly in the entrepreneur’s pocket.',
    fullDesc: 'A business-focused application designed to manage important records, transactions and everyday business activities. Built for mobile-first entrepreneurs to record daily transactions, monitor cash in/out, and share professional digital receipts via WhatsApp in one tap.',
    targetAudience: 'Small business owners, field salespeople, mobile vendors, and independent merchants.',
    problemSolved: 'Enables real-time business bookkeeping anywhere without requiring a computer.',
    features: [
      'Business record management with customer ledger directories',
      'Financial transaction tracking (Cash In / Cash Out)',
      'Income and expense management with instant categorization',
      'Organized business information and customer payment history',
      'Easy-to-use modern interface with 1-tap WhatsApp receipt sharing',
      'Offline-first local database with secure cloud backup capabilities'
    ],
    techStack: ['Kotlin', 'Android Jetpack', 'Room Database', 'Jetpack Compose'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'haazripro-app',
    title: 'HaazriPro – Attendance & Wage Management App',
    category: 'android',
    platform: 'Android App',
    status: 'Available',
    shortDesc: 'An attendance and wage management application designed for contractors and small businesses.',
    aboutSoftware: 'Developed by NEXIFYWEBTECH to solve the daily headache of tracking field worker attendance, overtime hours, salary advances, and monthly wage payouts.',
    fullDesc: 'An attendance and wage management application designed for contractors and small businesses. Mark worker presence with half-day and overtime tracking, record salary advances directly in a digital cashbook, and generate clean PDF wage slips with automated calculations.',
    targetAudience: 'Civil contractors, site supervisors, factory owners, workshop managers, and retail employers.',
    problemSolved: 'Eliminates wage disputes and automates complex daily, weekly, and monthly salary calculations.',
    features: [
      'Worker management and personal profile records',
      'Daily attendance tracking (Present, Absent, and Half-day)',
      'Daily and monthly wage calculations with customizable day rates',
      'Overtime tracking with automatic hourly rate computation',
      'Worker advances and loan repayment deduction logs',
      'Cashbook management for site expenses and salary payouts',
      'Monthly reports and PDF salary slip generation',
      'Backup and restore options for total data security'
    ],
    techStack: ['Kotlin', 'Android SDK', 'SQLite / Room DB', 'PDF Generation Library'],
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'hisab-expense-apps',
    title: 'Hisab & Expense Applications',
    category: 'android',
    platform: 'Android App',
    status: 'Available',
    shortDesc: 'Applications designed to simplify personal and business financial record keeping.',
    aboutSoftware: 'A suite of mobile financial tracking utilities created to help users understand their cash flow, control spending habits, and keep digital debit/credit books updated.',
    fullDesc: 'Applications designed to simplify personal and business financial record keeping. Provides clean category spending pie charts, daily khata balances, and quick transaction logging with zero unnecessary complexity.',
    targetAudience: 'Individuals, freelancers, traders, and small business owners.',
    problemSolved: 'Prevents forgotten expenses and keeps personal and business finances organized on mobile.',
    features: [
      'Income tracking and multiple wallet / account balances',
      'Expense tracking with fast categorized entry shortcuts',
      'Transaction records with searchable notes and dates',
      'Daily and monthly cashbook balance summaries',
      'Financial calculations, tax breakdowns, and budget limits'
    ],
    techStack: ['Kotlin', 'Room DB', 'Jetpack Compose'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'productivity-utility-apps',
    title: 'Productivity & Utility Applications',
    category: 'android',
    platform: 'Android App',
    status: 'Available',
    shortDesc: 'Mobile applications designed to make daily digital tasks easier.',
    aboutSoftware: 'Lightweight, fast, and privacy-focused Android micro-tools designed to boost everyday productivity on smartphones.',
    fullDesc: 'Mobile applications designed to make daily digital tasks easier. Includes smart task management lists, daily checklists, calculators, file viewing utilities, and offline document helpers that work smoothly without intrusive ads.',
    targetAudience: 'Students, professionals, organizers, and everyday Android smartphone users.',
    problemSolved: 'Replaces bloated utility apps with clean, lightweight, ad-free mobile tools.',
    features: [
      'Daily task organization and priority to-do checklists',
      'Fast business and percentage calculators',
      'Document and file management utilities',
      'Offline functionality with zero required account logins'
    ],
    techStack: ['Kotlin', 'Coroutines', 'Android Architecture Components'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'custom-android-apps',
    title: 'Custom Android Applications',
    category: 'android',
    platform: 'Android App',
    status: 'Custom Development',
    shortDesc: 'Custom Android applications developed according to individual and business requirements.',
    aboutSoftware: 'We design and develop tailor-made native Android applications engineered around your exact business logic, branding, and integration requirements.',
    fullDesc: 'Custom Android applications developed according to individual and business requirements. Whether you need a customer-facing e-commerce app, an enterprise workforce tracker, an educational learning app, or a smart IoT controller, our Android engineering team delivers reliable native performance.',
    targetAudience: 'Startups, enterprises, educational institutes, and innovative business creators.',
    problemSolved: 'Transforms custom mobile product ideas into published, high-performance Android applications.',
    features: [
      'Bespoke mobile UI/UX crafted with Jetpack Compose',
      'Robust offline caching and cloud API synchronization',
      'Push notification alerts and background worker tasks',
      'Secure payment gateway and biometric login integration',
      'Google Play Store release support and ongoing app updates'
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'REST API', 'Firebase / Node.js'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop'
    ]
  },

  // ==========================================
  // 3. WEB APPLICATIONS
  // ==========================================
  {
    id: 'homeopathy-clinic-mgmt',
    title: 'Homeopathy Clinic Management System',
    category: 'web',
    platform: 'Web Application',
    status: 'Available',
    shortDesc: 'A clinic management solution designed to organize clinic administration and patient-related workflows.',
    aboutSoftware: 'A specialized web-based clinical management system developed by NEXIFYWEBTECH to streamline patient consultations, case history records, and medicine prescriptions for doctors and clinics.',
    fullDesc: 'A clinic management solution designed to organize clinic administration and patient-related workflows. Provides practitioners with intuitive electronic health records (EHR), customizable prescription templates, appointment follow-ups, and clinic expense accounting accessible securely from any browser.',
    targetAudience: 'Homeopathy doctors, general clinics, multi-specialty wellness centers, and medical practitioners.',
    problemSolved: 'Replaces lost paper case sheets with searchable digital medical records and printed prescriptions.',
    features: [
      'Doctor and clinic profile management with multi-branch options',
      'Patient registration with detailed case history records',
      'Consultation records with previous diagnosis lookup',
      'Prescription management with instant dosage templates',
      'Follow-up visit management and appointment tracking',
      'Clinic expense tracking and daily consultation revenue',
      'PDF report generation for prescriptions and billing receipts'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'hotel-mgmt-web',
    title: 'Hotel Management Web Application',
    category: 'web',
    platform: 'Web Application',
    status: 'Available',
    shortDesc: 'A web-based management solution for hotel operations, customer records, reservations and business administration.',
    aboutSoftware: 'A cloud-native hotel operating suite that allows resort and hotel management teams to manage bookings, guest folios, and housekeeping from desktop or mobile devices.',
    fullDesc: 'A web-based management solution for hotel operations, customer records, reservations and business administration. Featuring an interactive room reservation calendar, automated check-in/out workflows, invoice generation, and real-time room occupancy analytics.',
    targetAudience: 'Hotels, resorts, guest houses, boutique stays, and hospitality operators.',
    problemSolved: 'Enables hotel teams to manage property reservations securely from anywhere in the world.',
    features: [
      'Interactive room reservation grid with drag-and-drop booking',
      'Guest profile registration and digital ID verification',
      'Check-in and check-out workflows with automated billing folios',
      'Housekeeping status board (Clean, Dirty, Under Maintenance)',
      'Payment processing with multi-currency invoice printing',
      'Occupancy rates and revenue analytics dashboard'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'business-mgmt-web',
    title: 'Business Management Web Applications',
    category: 'web',
    platform: 'Web Application',
    status: 'Available',
    shortDesc: 'Custom browser-based platforms for managing business records, daily operations, transactions and administrative activities.',
    aboutSoftware: 'Scalable cloud software suites that unify team collaboration, client contracts, product tracking, and administrative duties into a secure online portal.',
    fullDesc: 'Custom browser-based platforms for managing business records, daily operations, transactions and administrative activities. Enables distributed teams to collaborate efficiently with real-time data sync, multi-user role permissions, and comprehensive operational reporting.',
    targetAudience: 'Growing enterprises, supply chain businesses, and digital agencies.',
    problemSolved: 'Connects remote team members and centralizes company operations in the cloud.',
    features: [
      'Cloud operations management with real-time data synchronization',
      'Multi-user access control with customizable role permissions',
      'Financial transaction auditing and vendor management',
      'Exportable executive analytics and business summaries'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'admin-dashboard-systems',
    title: 'Admin Dashboard Systems',
    category: 'web',
    platform: 'Web Application',
    status: 'Available',
    shortDesc: 'Professional dashboard applications for managing products, content, users and business operations.',
    aboutSoftware: 'High-performance admin consoles designed by NEXIFYWEBTECH to give platform operators complete visibility and control over web platforms, SaaS apps, and user accounts.',
    fullDesc: 'Professional dashboard applications for managing products, content, users and business operations. Featuring real-time KPI visualization, data table filtering, user role moderation, and audit activity feeds.',
    targetAudience: 'SaaS founders, platform administrators, and digital enterprise managers.',
    problemSolved: 'Provides clean, intuitive administrative oversight over complex software ecosystems.',
    features: [
      'Interactive metrics, charts, and financial overview widgets',
      'User management with role assignment and account suspension',
      'Product and catalog management with bulk editing tools',
      'Content moderation and system activity audit logs'
    ],
    techStack: ['React', 'Chart.js', 'Tailwind CSS', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'custom-web-apps',
    title: 'Custom Web Applications',
    category: 'web',
    platform: 'Web Application',
    status: 'Custom Development',
    shortDesc: 'Custom web platforms developed according to client requirements.',
    aboutSoftware: 'We design and construct tailored web applications, SaaS products, and portal solutions crafted around your unique business rules and user expectations.',
    fullDesc: 'Custom web platforms developed according to client requirements. From complex workflow automation tools to multi-tenant SaaS platforms, our engineering team builds responsive, secure, and easily maintainable web applications.',
    targetAudience: 'Businesses, startups, and institutions needing bespoke cloud software.',
    problemSolved: 'Brings proprietary web software concepts to life with scalable modern architectures.',
    features: [
      'Custom technical architecture tailored to expected user scale',
      'Responsive design optimized for desktop, tablet, and mobile browsers',
      'Secure authentication, role-based authorization, and encrypted data storage',
      'Third-party API, payment gateway, and webhook integrations'
    ],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL / MongoDB', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop'
    ]
  },

  // ==========================================
  // 4. WEBSITES & DIGITAL PLATFORMS
  // ==========================================
  {
    id: 'pdflove-platform',
    title: 'PDFLove – Online PDF Tools Platform',
    category: 'website',
    platform: 'Website',
    status: 'Available',
    shortDesc: 'PDFLove is an online document utility platform designed to make everyday PDF tasks easier through convenient browser-based tools.',
    aboutSoftware: 'Developed by NEXIFYWEBTECH as a premier document utility platform, PDFLove enables millions of users to manipulate, convert, and protect PDF files directly inside their web browsers with speed and security.',
    fullDesc: 'PDFLove is an online document utility platform designed to make everyday PDF tasks easier through convenient browser-based tools. It provides a complete suite of PDF tools including Merge, Split, Compress, Convert to and from JPG and Word, and document encryption without requiring software installation.',
    targetAudience: 'Students, administrative professionals, legal officers, educators, and global web users.',
    problemSolved: 'Makes handling daily PDF tasks fast, free, and accessible from any device without bulky desktop software.',
    features: [
      'PDF Merge – Combine multiple PDF files into one clean document',
      'PDF Split – Extract selected pages from multi-page PDFs',
      'PDF Compression – Reduce file size while retaining crystal-clear quality',
      'PDF to JPG & JPG to PDF conversions with batch processing',
      'PDF to Word & Word to PDF document format switching',
      'PDF Rotation and page arrangement tools',
      'PDF Protection and Password Unlocking utilities'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'WebAssembly', 'PDF-Lib'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
    ],
    liveWebsiteUrl: 'https://www.pdflove.store/'
  },
  {
    id: 'nexifywebtech-official',
    title: 'NEXIFYWEBTECH Official Website',
    category: 'website',
    platform: 'Website',
    status: 'Available',
    shortDesc: 'The official digital presence of NEXIFYWEBTECH, showcasing our software development services, applications, digital products and technology solutions.',
    aboutSoftware: 'Our official corporate identity website engineered with a premium Glassmorphism design system, dark navy aesthetic, live video backdrop, and comprehensive SEO optimization.',
    fullDesc: 'The official digital presence of NEXIFYWEBTECH, showcasing our software development services, applications, digital products and technology solutions. Built with cutting-edge responsive web practices, rich JSON-LD schema, and accessible interactive portfolio showcases.',
    targetAudience: 'Prospective clients, enterprises, startups, and business owners looking for trusted software engineering.',
    problemSolved: 'Provides a transparent, authentic digital showcase of NEXIFYWEBTECH’s real-world engineering portfolio.',
    features: [
      'Premium Glassmorphism user interface with light and dark mode support',
      'Comprehensive product catalog with category search and specification modals',
      '7-step transparent software development process timeline',
      'Complete SEO, AEO, and GEO optimization with JSON-LD structured schemas',
      'Integrated project inquiry form with mailto fallback'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    ]
  },

  // ==========================================
  // 5. GAMES & DIGITAL TOOLS
  // ==========================================
  {
    id: 'logic-puzzle-games',
    title: 'Logic & Brain Training Puzzle Games',
    category: 'games',
    platform: 'Cross-Platform',
    status: 'Available',
    shortDesc: 'Interactive casual and brain training puzzle games designed for mental agility and entertainment.',
    aboutSoftware: 'Interactive casual games built by NEXIFYWEBTECH using HTML5 Canvas and responsive touch physics for web and mobile devices.',
    fullDesc: 'Interactive casual and brain training puzzle games designed for mental agility and entertainment. Features engaging logic challenges, memory testing stages, responsive controls, and offline playable mechanics.',
    targetAudience: 'Casual gamers, educational users, puzzle fans of all ages.',
    problemSolved: 'Delivers healthy mental stimulation and casual relaxation in web and mobile formats.',
    features: [
      'Multiple challenging difficulty levels and puzzle variations',
      'Smooth animations and responsive touch/mouse controls',
      'Score tracking and progress milestone saving',
      'Lightweight bundle footprint with zero lag'
    ],
    techStack: ['HTML5 Canvas', 'JavaScript', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'web-utilities-suite',
    title: 'Digital Utilities & Online Calculation Suite',
    category: 'tools',
    platform: 'Online Tool',
    status: 'Available',
    shortDesc: 'A collection of browser-based utilities for calculations, text processing, and document management.',
    aboutSoftware: 'Fast, secure, client-side digital micro-tools developed by NEXIFYWEBTECH to simplify calculations, coding, and document formatting.',
    fullDesc: 'A collection of browser-based utilities for calculations, text processing, and document management. Process data directly in your browser with zero server uploads for maximum privacy.',
    targetAudience: 'Developers, finance officers, students, and everyday internet users.',
    problemSolved: 'Solves calculation and conversion tasks instantly without installing third-party apps.',
    features: [
      'GST, VAT, Margin, and Percentage Calculators',
      'JSON Formatter, Validator, and Minifier for developers',
      'Base64 and URL encoding/decoding utilities',
      'Word Counter, Character Counter, and Text Case Converters'
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
    ]
  }
];

export const TOOLS_DATA: ToolItem[] = [
  // PDF Tools
  { id: 't1', name: 'PDF Merger', category: 'PDF', description: 'Combine multiple PDF files into one document.', status: 'Available' },
  { id: 't2', name: 'PDF Splitter', category: 'PDF', description: 'Extract selected pages from PDF files.', status: 'Available' },
  { id: 't3', name: 'PDF Compressor', category: 'PDF', description: 'Reduce PDF file size while retaining quality.', status: 'Available' },
  { id: 't4', name: 'PDF to Image', category: 'PDF', description: 'Convert PDF pages into high-resolution JPG images.', status: 'Available' },
  { id: 't5', name: 'Image to PDF', category: 'PDF', description: 'Create clean PDF documents from multiple images.', status: 'Available' },
  { id: 't6', name: 'PDF Utilities', category: 'PDF', description: 'Additional rotation, unlocking, and management tools.', status: 'Available' },

  // Image Tools
  { id: 't7', name: 'Image Compressor', category: 'Image', description: 'Reduce image file sizes for web and email.', status: 'Available' },
  { id: 't8', name: 'Image Resizer', category: 'Image', description: 'Change image dimensions with aspect ratio lock.', status: 'Available' },
  { id: 't9', name: 'Image Converter', category: 'Image', description: 'Convert between PNG, JPG, and WebP formats.', status: 'Available' },
  { id: 't10', name: 'Image Cropper', category: 'Image', description: 'Crop images easily to exact dimensions.', status: 'Available' },

  // Text Tools
  { id: 't11', name: 'Word Counter', category: 'Text', description: 'Count words, characters, sentences, and read time.', status: 'Available' },
  { id: 't12', name: 'Case Converter', category: 'Text', description: 'Switch between UPPERCASE, lowercase, and Title Case.', status: 'Available' },
  { id: 't13', name: 'Text Formatter', category: 'Text', description: 'Format and organize unformatted text blocks.', status: 'Available' },

  // Calculator Tools
  { id: 't14', name: 'GST Calculator', category: 'Calculator', description: 'Calculate GST amounts, CGST, SGST, and net prices.', status: 'Available' },
  { id: 't15', name: 'Percentage Calculator', category: 'Calculator', description: 'Calculate percentage changes and discounts quickly.', status: 'Available' },
  { id: 't16', name: 'Profit Calculator', category: 'Calculator', description: 'Calculate gross profit, net profit, and markup margins.', status: 'Available' },
  { id: 't17', name: 'Discount Calculator', category: 'Calculator', description: 'Calculate discounted sale prices and savings.', status: 'Available' },
  { id: 't18', name: 'EMI Calculator', category: 'Calculator', description: 'Estimate monthly loan installments and interest.', status: 'Available' },

  // Business Tools
  { id: 't19', name: 'Invoice Generator', category: 'Business', description: 'Generate professional invoices and estimates instantly.', status: 'Available' },
  { id: 't20', name: 'Quotation Generator', category: 'Business', description: 'Create formal business quotations for clients.', status: 'Available' },
  { id: 't21', name: 'Expense Calculator', category: 'Business', description: 'Calculate business operational expenditures.', status: 'Available' },
  { id: 't22', name: 'Profit & Loss Calculator', category: 'Business', description: 'Calculate basic business financial performance.', status: 'Available' },

  // Developer Tools
  { id: 't23', name: 'JSON Formatter', category: 'Developer', description: 'Format and prettify JSON data payloads.', status: 'Available' },
  { id: 't24', name: 'JSON Validator', category: 'Developer', description: 'Validate JSON structure and pinpoint syntax errors.', status: 'Available' },
  { id: 't25', name: 'Base64 Encoder & Decoder', category: 'Developer', description: 'Encode and decode Base64 text and binary data.', status: 'Available' },
  { id: 't26', name: 'URL Encoder & Decoder', category: 'Developer', description: 'Encode and decode URL query parameters safely.', status: 'Available' },
  { id: 't27', name: 'HTML Formatter', category: 'Developer', description: 'Clean and format messy HTML markup.', status: 'Available' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'android-app-development',
    title: 'Android App Development',
    iconName: 'Smartphone',
    description: 'We develop custom Android applications with modern interfaces, useful features, and smooth user experiences for businesses, startups, and individuals.',
    overview: 'From offline-first field utilities like WorkKhata and HaazriPro to customer-facing commercial mobile platforms, our Android engineering pipeline delivers fast, battery-efficient native applications tailored to real-world usage.',
    deliverables: ['Native & Cross-Platform Android Apps', 'Jetpack Compose UI', 'Local & Cloud Database Sync', 'Play Store Publishing Support'],
    useCases: ['Field Workforce & Attendance Tracking', 'Mobile Accounting & Invoicing', 'Retail Customer Loyalty & Ordering', 'On-Demand Service Booking Apps'],
    techUsed: ['Kotlin', 'Jetpack Compose', 'Room SQLite', 'REST / Firebase'],
    timeline: '4 – 8 Weeks'
  },
  {
    id: 'windows-software-development',
    title: 'Windows Software Development',
    iconName: 'Monitor',
    description: 'We build powerful desktop applications that simplify business operations, automate daily tasks, and help organizations manage their work efficiently.',
    overview: 'Designed for uninterrupted daily business counters, our Windows desktop solutions operate reliably even without internet access—integrating seamlessly with thermal printers, barcode scanners, and local SQL databases.',
    deliverables: ['C# .NET / WPF Desktop Applications', 'POS & Inventory Systems', 'Offline Data Storage (SQLite/SQL Server)', 'Installer Packaging & Support'],
    useCases: ['Supermarket & Retail Checkout Counters', 'Pharmacy Batch & Expiry Control', 'Educational & Library Circulation', 'Custom Accounting & Ledgers'],
    techUsed: ['C# .NET', 'WPF / WinUI', 'SQL Server / SQLite', 'ESC/POS Hardware SDK'],
    timeline: '3 – 8 Weeks'
  },
  {
    id: 'website-development',
    title: 'Website Development',
    iconName: 'Globe',
    description: 'We create responsive, modern, and professional websites that strengthen your online presence and help your business reach more customers.',
    overview: 'We engineer high-speed, search-optimized business websites, company portals, and responsive landing pages built with semantic structure, JSON-LD metadata, and sharp UI/UX that convert visitors into inquiries.',
    deliverables: ['Corporate & Business Websites', 'E-Commerce Online Stores', 'SEO Optimization & Schema Markup', 'Lightning-Fast Performance'],
    useCases: ['Company Brand Websites', 'Product Showcase Portals', 'Lead-Generation Landing Pages', 'Online Document & Tool Platforms'],
    techUsed: ['React', 'TypeScript', 'Tailwind CSS', 'JSON-LD SEO'],
    timeline: '2 – 4 Weeks'
  },
  {
    id: 'web-application-development',
    title: 'Web Application Development',
    iconName: 'Layout',
    description: 'We develop custom browser-based applications, dashboards, management platforms, and scalable digital solutions.',
    overview: 'Accessible from anywhere on desktop or mobile, our custom web applications power clinic management systems, hotel reservation engines, multi-user admin consoles, and cloud SaaS platforms.',
    deliverables: ['SaaS Platforms & Dashboards', 'Admin Panels & ERP Systems', 'Cloud Hosting & API Integration', 'Secure User Authentication'],
    useCases: ['Healthcare & Clinic EHR Portals', 'Hospitality Booking & Folios', 'Multi-Role Team Dashboards', 'Subscription SaaS Products'],
    techUsed: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    timeline: '4 – 12 Weeks'
  },
  {
    id: 'pos-business-systems',
    title: 'POS & Business Management Systems',
    iconName: 'ShoppingBag',
    description: 'We build practical point-of-sale and business management software for retail stores, medical shops, hotels, libraries, and educational institutes.',
    overview: 'Proven across retail shops, medical stores, restaurants, coaching classes, and libraries—our POS and business suites digitize billing, stock levels, batch expiry, fee collection, and daily cashbook summaries.',
    deliverables: ['Retail & Medical POS', 'Hotel & Restaurant Ordering', 'Hisab & Khata Accounting', 'Inventory & Barcode Integration'],
    useCases: ['Retail & Grocery Chains', 'Chemists & Medical Stores', 'Restaurants & Cloud Kitchens', 'Coaching Academies & Institutes'],
    techUsed: ['C# .NET', 'WPF', 'SQLite', 'Thermal Print & Barcode API'],
    timeline: '2 – 6 Weeks'
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    iconName: 'Cpu',
    description: 'We transform unique ideas and specific business requirements into customized software solutions built around your exact workflow.',
    overview: 'When rigid off-the-shelf software holds your operations back, we architect bespoke software around your exact business rules, approvals, reporting formats, and legacy system integrations.',
    deliverables: ['Requirement Analysis', 'Custom Architecture', 'Iterative Development', 'Rigorous Testing & Handover'],
    useCases: ['Custom Enterprise Workflows', 'Spreadsheet-to-Software Migration', 'Multi-Device Sync Systems', 'Hardware & API Automations'],
    techUsed: ['TypeScript', 'C# .NET', 'Kotlin', 'PostgreSQL'],
    timeline: 'Custom Milestone Schedule'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    iconName: 'Palette',
    description: 'We design intuitive, attractive, and user-friendly digital interfaces for websites, applications, and desktop software.',
    overview: 'Great engineering deserves frictionless design. We craft clean design systems, responsive wireframes, high-contrast dark/light interfaces, and consistent component libraries across desktop, mobile, and web.',
    deliverables: ['Wireframes & Prototypes', 'Modern Glassmorphism UI', 'Design Systems', 'User Journey Optimization'],
    useCases: ['SaaS Dashboard Redesigns', 'Mobile App Interface Systems', 'Corporate Web Rebranding', 'Usability & Flow Audits'],
    techUsed: ['Figma', 'Tailwind CSS', 'Design Tokens', 'WCAG Accessibility'],
    timeline: '1 – 3 Weeks'
  },
  {
    id: 'digital-tools-utilities',
    title: 'Digital Tools & Utilities',
    iconName: 'Wrench',
    description: 'We develop useful digital utilities that simplify document processing, calculations, business tasks, and everyday workflows.',
    overview: 'Inspired by flagship utilities like PDFLove, we engineer fast browser-based document converters, financial calculators, invoice generators, and developer tools that execute cleanly with strong privacy.',
    deliverables: ['PDF & Image Utilities', 'Calculators & Converters', 'Developer Helpers', 'Fast Web Micro-Apps'],
    useCases: ['Client-Side PDF Processing', 'Financial & Tax Calculators', 'Internal Team Micro-Tools', 'Public Traffic Utility Portals'],
    techUsed: ['JavaScript', 'WebAssembly', 'PDF-Lib', 'HTML5 Canvas'],
    timeline: '2 – 5 Weeks'
  },
  {
    id: 'game-development',
    title: 'Game Development',
    iconName: 'Gamepad2',
    description: 'We create interactive and engaging digital game experiences for entertainment, education, and creative projects.',
    overview: 'We design lightweight, lag-free puzzle games, brain-training apps, and interactive HTML5/mobile experiences featuring responsive touch physics, milestone progression, and smooth frame rates.',
    deliverables: ['Casual & Puzzle Games', 'Brain Training Apps', 'HTML5 Canvas Games', 'Interactive Mechanics'],
    useCases: ['Educational Learning Games', 'Brand Engagement Mini-Games', 'Offline Brain Training Apps', 'Web & Mobile Arcade Titles'],
    techUsed: ['HTML5 Canvas', 'JavaScript', 'Kotlin', 'CSS3 Animations'],
    timeline: '3 – 7 Weeks'
  },
  {
    id: 'it-consultation-support',
    title: 'IT Consultation & Support',
    iconName: 'Headphones',
    description: 'We help clients understand their technical requirements and identify suitable digital solutions for their projects.',
    overview: 'Whether you are planning a new product from scratch or modernizing legacy code, our engineering leads guide stack selection, architecture audits, deployment security, and ongoing post-launch maintenance.',
    deliverables: ['Technical Roadmapping', 'Stack Recommendation', 'Code Review & Optimization', 'Post-Launch Maintenance'],
    useCases: ['Architecture & Stack Advisory', 'Existing App Optimization', 'Deployment & Store Release', 'Long-Term Maintenance Retainers'],
    techUsed: ['Architecture Audits', 'CI/CD', 'Security Hardening', 'Performance Tuning'],
    timeline: 'Flexible / Ongoing'
  }
];

export const PRICING_DATA: PricingTier[] = [
  {
    id: 'starter-web',
    name: 'Starter Website & Digital Presence',
    tagline: 'Ideal for startups, professionals, and growing local businesses.',
    priceLabel: '₹14,999 / $249',
    billingNote: 'Starting milestone estimate · 100% source ownership',
    description: 'Launch a fast, responsive, SEO-ready corporate website or landing portal engineered to convert visitors into qualified inquiries.',
    features: [
      'Custom responsive UI/UX across mobile, tablet & desktop',
      'Up to 6 structured pages with clean URL routing',
      'Technical SEO, OpenGraph & JSON-LD structured data',
      'Inquiry & WhatsApp/email lead capture integration',
      'Dark/Light mode support & Core Web Vitals tuning',
      '30 days of post-launch technical warranty support'
    ],
    deliveryTimeline: '2 – 3 Weeks',
    ctaLabel: 'Get Quote for Website',
    projectQueryValue: 'Website Development (Starter Package)'
  },
  {
    id: 'business-software-suite',
    name: 'Business Software & POS Suite',
    tagline: 'Most popular for retail stores, pharmacies, clinics & institutes.',
    priceLabel: '₹29,999 / $499',
    billingNote: 'Tailored deployment · Offline-first & hardware ready',
    highlighted: true,
    badgeText: 'Recommended',
    description: 'Deploy a customized Windows Desktop POS, Android business app, or management portal built around your exact daily operations.',
    features: [
      'Custom Windows Desktop (WPF) or Android (Kotlin) app',
      'Thermal invoice printing & barcode scanner integration',
      'Batch, inventory, attendance or fee ledger modules',
      'Automated daily cashbook & exportable PDF/Excel reports',
      'Offline-first local database with reliable backup/restore',
      '60 days priority onboarding & post-delivery support'
    ],
    deliveryTimeline: '3 – 6 Weeks',
    ctaLabel: 'Configure Business Suite',
    projectQueryValue: 'Windows Software / POS Suite'
  },
  {
    id: 'custom-enterprise-build',
    name: 'Custom Web, Mobile & SaaS Engineering',
    tagline: 'End-to-end architecture for scalable platforms & custom startups.',
    priceLabel: 'Custom Scope',
    billingNote: 'Milestone-based billing · Set your own budget',
    description: 'Full-cycle software engineering for multi-tenant SaaS platforms, clinic/hotel cloud suites, and integrated mobile + web ecosystems.',
    features: [
      'Full-stack React, Node.js, PostgreSQL or native Android',
      'Role-based access control, secure auth & REST APIs',
      'Custom admin dashboards & real-time business analytics',
      'Payment gateway, webhook & third-party API integrations',
      'Clean modular repository handover & documentation',
      'Dedicated engineering lead & flexible post-launch SLA'
    ],
    deliveryTimeline: '6 – 12 Weeks',
    ctaLabel: 'Request Custom Quote',
    projectQueryValue: 'Custom Web Application & SaaS'
  }
];

export const TECHNOLOGIES_DATA: TechStackCategory[] = [
  {
    id: 'web-platforms',
    title: 'Web & Cloud Platforms',
    subtitle: 'High-speed, SEO-ready websites, SaaS portals, and browser utilities.',
    iconName: 'Globe',
    technologies: [
      { name: 'React & TypeScript', role: 'Modular UI & strict type safety' },
      { name: 'Tailwind CSS', role: 'Precision responsive design systems' },
      { name: 'Node.js & Express', role: 'Scalable API & backend services' },
      { name: 'WebAssembly & PDF-Lib', role: 'Client-side document tools (PDFLove)' }
    ]
  },
  {
    id: 'windows-desktop',
    title: 'Windows Desktop & POS',
    subtitle: 'Reliable offline-first desktop suites for high-volume counters.',
    iconName: 'Monitor',
    technologies: [
      { name: 'C# .NET & WPF / WinUI', role: 'Native high-speed desktop UI' },
      { name: 'ESC/POS Thermal SDK', role: 'Instant receipt & KOT kitchen printing' },
      { name: 'Barcode & Scale APIs', role: 'Seamless retail & pharmacy hardware sync' },
      { name: 'Signed MSI / EXE Installers', role: 'Clean single-click Windows deployment' }
    ]
  },
  {
    id: 'android-mobile',
    title: 'Android Mobile Engineering',
    subtitle: 'Lightweight, offline-capable apps for business and field teams.',
    iconName: 'Smartphone',
    technologies: [
      { name: 'Kotlin & Jetpack Compose', role: 'Modern native Android experiences' },
      { name: 'Room & SQLite Persistence', role: 'Reliable offline-first field records' },
      { name: 'WorkManager & Coroutines', role: 'Smooth background sync & receipts' },
      { name: 'Play Store Compliance', role: 'Signed AAB builds & release packaging' }
    ]
  },
  {
    id: 'databases-security',
    title: 'Databases, Security & Delivery',
    subtitle: 'Clean data integrity, backup safety, and transparent shipping.',
    iconName: 'Database',
    technologies: [
      { name: 'PostgreSQL & SQL Server', role: 'ACID-compliant relational storage' },
      { name: 'SQLite Local Indexing', role: 'Sub-millisecond desktop/mobile lookups' },
      { name: 'JSON-LD & Technical SEO', role: 'Search, AEO & GEO discoverability' },
      { name: 'Automated Backups & Auth', role: 'Role-based security & recovery' }
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What services does NEXIFYWEBTECH provide?',
    answer: 'NEXIFYWEBTECH provides comprehensive software development and IT solutions, including Android applications, Windows desktop software, websites, web applications, POS systems, management software, digital tools, and custom software development.',
    category: 'General'
  },
  {
    question: 'Do you develop Windows desktop applications?',
    answer: 'Yes! We specialize in robust Windows desktop software using C# .NET and WPF, including POS systems for retail, medical stores, and hotels, as well as accounting, library management, and custom enterprise tools.',
    category: 'Software'
  },
  {
    question: 'Can you build custom Android applications?',
    answer: 'Yes, we develop custom Android apps using modern Kotlin and Jetpack Compose, ranging from business management tools and attendance trackers to productivity apps and e-commerce solutions.',
    category: 'Mobile'
  },
  {
    question: 'Do you develop websites and web applications?',
    answer: 'Absolutely. We build high-performance corporate websites, e-commerce stores, portfolio sites, and complex cloud web applications/dashboards using modern React, Tailwind CSS, and Node.js.',
    category: 'Web'
  },
  {
    question: 'Can you develop POS software for businesses?',
    answer: 'Yes, we have ready and customizable POS solutions for retail stores, medical pharmacies, hotels/restaurants, and service businesses complete with inventory, billing, and reporting.',
    category: 'Software'
  },
  {
    question: 'Do you create custom management systems?',
    answer: 'Yes, we build management systems for educational classes, libraries, clinics, hotels, and general business operations tailored to your exact workflow requirements.',
    category: 'Software'
  },
  {
    question: 'Can I request software according to my specific requirements?',
    answer: 'Yes! We frequently undertake custom software development projects where we design, build, test, and deliver solutions tailored specifically to your business goals.',
    category: 'Custom'
  },
  {
    question: 'How can I discuss my project with your team?',
    answer: 'You can discuss your project by filling out our online Project Inquiry form, emailing us directly at nexifywebtech@gmail.com, or reaching out via WhatsApp.',
    category: 'Process'
  },
  {
    question: 'How can I get a project quotation?',
    answer: 'Fill out our Project Inquiry page with your project type, required platform, budget, and scope, and we will get back to you with a detailed estimate.',
    category: 'Process'
  },
  {
    question: 'Do you provide support after project delivery?',
    answer: 'Yes, we provide dedicated post-launch support, maintenance, bug fixes, and feature enhancement options for all our delivered projects.',
    category: 'Support'
  },
  {
    question: 'Can you improve or modify existing software?',
    answer: 'Yes, our engineering team can audit, refactor, and add new features to your existing software, websites, or mobile applications.',
    category: 'Support'
  },
  {
    question: 'How can I contact NEXIFYWEBTECH?',
    answer: 'You can contact us via email at nexifywebtech@gmail.com or through our contact form on the website.',
    category: 'General'
  }
];

export const COMPANY_VALUES = [
  { title: 'Quality', desc: 'Writing clean, robust, and reliable code that stands the test of time.' },
  { title: 'Innovation', desc: 'Embracing modern technologies to solve real-world problems effectively.' },
  { title: 'Transparency', desc: 'Clear communication, honest timelines, and straightforward pricing.' },
  { title: 'Creativity', desc: 'Designing intuitive, engaging, and beautiful user interfaces.' },
  { title: 'Reliability', desc: 'Delivering secure and stable software you can count on every day.' },
  { title: 'User Satisfaction', desc: 'Focusing on intuitive workflows and exceptional end-user experiences.' },
];
