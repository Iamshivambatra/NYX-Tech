import Icons from "../assets/img_icns/index.js";

export const servicesData = [

  {
    id: 1,
    slug: 'azure',
    category: 'Cloud Services',
    title: 'Azure Cloud Solutions',
    subtitle: 'Enterprise-grade cloud computing services powered by Microsoft Azure.',
    description: 'Transform your business with Microsoft Azure cloud solutions. Scalable, secure, and reliable cloud infrastructure for your digital transformation journey.',
    icon: Icons.WebsiteDev,
    heroImage: '/static/final.svg',
    highlights: [
      { icon: Icons.WebsiteDev, title: 'Azure Certified', description: 'Microsoft certified Azure professionals on our team.' },
      { icon: Icons.WebsiteDev, title: 'Scalable Solutions', description: 'Infrastructure that grows with your business needs.' },
      { icon: Icons.WebsiteDev, title: 'Cost Optimization', description: 'Optimize your cloud spending with expert guidance.' }
    ],
    industries: [
      { icon: Icons.WebsiteDev, title: 'Enterprise', description: 'Comprehensive Azure solutions for large-scale enterprise applications.' },
      { icon: Icons.WebsiteDev, title: 'Startups', description: 'Cost-effective cloud infrastructure for growing startups.' },
      { icon: Icons.WebsiteDev, title: 'Financial Services', description: 'Secure and compliant Azure solutions for financial institutions.' },
      { icon: Icons.WebsiteDev, title: 'Healthcare', description: 'HIPAA-compliant Azure cloud services for healthcare providers.' }
    ],
    techStack: {
      frontend: [
        { name: 'Azure Portal', icon: Icons.Html5 },
        { name: 'Azure CLI', icon: Icons.Css3 }
      ],
      backend: [
        { name: 'Azure Functions', icon: Icons.Python },
        { name: 'Azure SQL', icon: Icons.Php },
        { name: 'Azure Storage', icon: Icons.Node }
      ],
      infrastructure: [
        { name: 'Azure VMs', icon: Icons.AWS },
        { name: 'Azure Kubernetes', icon: Icons.GoogleCloud },
        { name: 'Azure DevOps', icon: Icons.Doccer }
      ]
    },
    faqs: [
      { question: 'What Azure services do you specialize in?', answer: 'We specialize in Azure VMs, Azure Functions, Azure SQL Database, Azure Storage, Azure Kubernetes Service, and Azure DevOps for complete cloud solutions.' },
      { question: 'How do you ensure security on Azure?', answer: 'We implement Azure Security Center, Azure Active Directory, encryption, network security groups, and follow Azure best practices for security.' },
      { question: 'Can you migrate our existing infrastructure to Azure?', answer: 'Yes, we provide complete migration services from on-premise or other cloud platforms to Azure with minimal downtime.' }
    ]
  },
  {
    id: 2,
    slug: 'aws',
    category: 'Cloud Services',
    title: 'AWS Cloud Solutions',
    subtitle: 'Robust and scalable cloud infrastructure powered by Amazon Web Services.',
    description: 'Leverage the power of AWS for your business growth. From EC2 to Lambda, we provide complete AWS solutions tailored to your needs.',
    icon: Icons.AWS,
    heroImage: '/static/final.svg',
    highlights: [
      { icon: Icons.AWS, title: 'AWS Certified', description: 'AWS certified solutions architects and engineers.' },
      { icon: Icons.AWS, title: 'High Availability', description: '99.99% uptime with redundant infrastructure.' },
      { icon: Icons.AWS, title: 'Auto Scaling', description: 'Automatic scaling based on traffic and demand.' }
    ],
    industries: [
      { icon: Icons.WebsiteDev, title: 'E-Commerce', description: 'Scalable AWS infrastructure for high-traffic e-commerce platforms.' },
      { icon: Icons.WebsiteDev, title: 'Media & Entertainment', description: 'Content delivery and streaming solutions using AWS.' },
      { icon: Icons.WebsiteDev, title: 'Gaming', description: 'Low-latency gaming infrastructure powered by AWS.' },
      { icon: Icons.WebsiteDev, title: 'IoT', description: 'AWS IoT solutions for connected devices and smart systems.' }
    ],
    techStack: {
      frontend: [
        { name: 'CloudFront', icon: Icons.Html5 },
        { name: 'S3', icon: Icons.Css3 }
      ],
      backend: [
        { name: 'EC2', icon: Icons.Python },
        { name: 'Lambda', icon: Icons.Php },
        { name: 'RDS', icon: Icons.Node }
      ],
      infrastructure: [
        { name: 'VPC', icon: Icons.AWS },
        { name: 'ECS', icon: Icons.GoogleCloud },
        { name: 'CloudWatch', icon: Icons.Doccer }
      ]
    },
    faqs: [
      { question: 'What AWS services do you offer?', answer: 'We offer EC2, Lambda, S3, RDS, CloudFront, VPC, ECS, and many more AWS services for complete cloud solutions.' },
      { question: 'How much does AWS cost?', answer: 'AWS costs vary based on usage. We help optimize your infrastructure to minimize costs while maintaining performance.' },
      { question: 'Do you provide AWS migration services?', answer: 'Yes, we provide complete migration services from on-premise or other clouds to AWS with zero data loss.' }
    ]
  },
  {
    id: 3,
    slug: 'cloud-manage-services',
    category: 'Cloud Services',
    title: 'Cloud Manage Services',
    subtitle: 'Comprehensive cloud management and optimization services.',
    description: 'Expert cloud management services to monitor, optimize, and maintain your cloud infrastructure. Focus on your business while we handle your cloud operations.',
    icon: Icons.WebsiteDev,
    heroImage: '/static/final.svg',
    highlights: [
      { icon: Icons.WebsiteDev, title: '24/7 Monitoring', description: 'Round-the-clock monitoring of your cloud infrastructure.' },
      { icon: Icons.WebsiteDev, title: 'Cost Optimization', description: 'Reduce cloud costs by up to 40% with our optimization.' },
      { icon: Icons.WebsiteDev, title: 'Performance Tuning', description: 'Continuous performance optimization for better results.' }
    ],
    industries: [
      { icon: Icons.WebsiteDev, title: 'SaaS Companies', description: 'Managed cloud services for SaaS platforms ensuring high availability.' },
      { icon: Icons.WebsiteDev, title: 'E-Commerce', description: 'Reliable cloud management for high-traffic e-commerce sites.' },
      { icon: Icons.WebsiteDev, title: 'Fintech', description: 'Secure and compliant cloud management for financial services.' },
      { icon: Icons.WebsiteDev, title: 'Healthcare', description: 'HIPAA-compliant cloud management for healthcare providers.' }
    ],
    techStack: {
      frontend: [
        { name: 'Monitoring Dashboards', icon: Icons.Html5 },
        { name: 'Alert Systems', icon: Icons.Css3 }
      ],
      backend: [
        { name: 'CloudWatch', icon: Icons.Python },
        { name: 'Terraform', icon: Icons.Php },
        { name: 'Ansible', icon: Icons.Node }
      ],
      infrastructure: [
        { name: 'AWS', icon: Icons.AWS },
        { name: 'Azure', icon: Icons.GoogleCloud },
        { name: 'GCP', icon: Icons.Doccer }
      ]
    },
    faqs: [
      { question: 'What does cloud management include?', answer: 'Our cloud management includes 24/7 monitoring, security management, cost optimization, backup and disaster recovery, performance tuning, and compliance management.' },
      { question: 'Do you support multi-cloud environments?', answer: 'Yes, we manage multi-cloud environments across AWS, Azure, Google Cloud, and other cloud platforms.' },
      { question: 'How do you ensure security?', answer: 'We implement security best practices, regular audits, encryption, access controls, and continuous monitoring to ensure your cloud security.' }
    ]
  },
  {
    id: 4,
    slug: 'cloud-migration',
    category: 'Cloud Services',
    title: 'Cloud Migration',
    subtitle: 'Seamless migration of your infrastructure to the cloud.',
    description: 'Expert cloud migration services to move your applications and data to the cloud with zero downtime. We handle the complexity, you enjoy the benefits.',
    icon: Icons.WebsiteDev,
    heroImage: '/static/final.svg',
    highlights: [
      { icon: Icons.WebsiteDev, title: 'Zero Downtime', description: 'Migrate your infrastructure with minimal to zero downtime.' },
      { icon: Icons.WebsiteDev, title: 'Data Security', description: 'End-to-end encryption and secure data transfer.' },
      { icon: Icons.WebsiteDev, title: 'Expert Support', description: 'Dedicated migration specialists throughout the process.' }
    ],
    industries: [
      { icon: Icons.WebsiteDev, title: 'Enterprise', description: 'Large-scale enterprise migrations from on-premise to cloud.' },
      { icon: Icons.WebsiteDev, title: 'SMBs', description: 'Cost-effective cloud migration solutions for small and medium businesses.' },
      { icon: Icons.WebsiteDev, title: 'Legacy Systems', description: 'Modernize legacy applications and move them to the cloud.' },
      { icon: Icons.WebsiteDev, title: 'Data Centers', description: 'Complete data center migration to cloud infrastructure.' }
    ],
    techStack: {
      frontend: [
        { name: 'Migration Tools', icon: Icons.Html5 },
        { name: 'Assessment Tools', icon: Icons.Css3 }
      ],
      backend: [
        { name: 'AWS Migration Hub', icon: Icons.Python },
        { name: 'Azure Migrate', icon: Icons.Php },
        { name: 'Database Migration', icon: Icons.Node }
      ],
      infrastructure: [
        { name: 'AWS', icon: Icons.AWS },
        { name: 'Azure', icon: Icons.GoogleCloud },
        { name: 'GCP', icon: Icons.Doccer }
      ]
    },
    faqs: [
      { question: 'How long does cloud migration take?', answer: 'Migration timeline varies based on the complexity and size of your infrastructure. Simple migrations can take 2-4 weeks, while complex enterprise migrations may take 3-6 months.' },
      { question: 'Will there be downtime during migration?', answer: 'We use strategies like blue-green deployment and phased migration to minimize downtime. Most migrations can be done with zero or minimal downtime.' },
      { question: 'What about data security during migration?', answer: 'We use end-to-end encryption, secure transfer protocols, and follow industry best practices to ensure your data remains secure throughout the migration process.' }
    ]
  },
  {
    id: 5,
    slug: 'analytics',
    category: 'Analytics Services',
    title: 'Analytics Solutions',
    subtitle: 'Data-driven insights to power your business decisions.',
    description: 'Transform your raw data into actionable insights. Our analytics solutions help you understand your business better, predict trends, and make informed decisions.',
    icon: Icons.WebsiteDev,
    heroImage: '/static/final.svg',
    highlights: [
      { icon: Icons.WebsiteDev, title: 'Real-time Analytics', description: 'Get instant insights from your data streams.' },
      { icon: Icons.WebsiteDev, title: 'Predictive Models', description: 'AI-powered predictions to forecast business trends.' },
      { icon: Icons.WebsiteDev, title: 'Custom Dashboards', description: 'Beautiful visualizations tailored to your needs.' }
    ],
    industries: [
      { icon: Icons.WebsiteDev, title: 'E-Commerce', description: 'Customer behavior analysis, sales forecasting, and inventory optimization.' },
      { icon: Icons.WebsiteDev, title: 'Finance', description: 'Risk analysis, fraud detection, and financial forecasting.' },
      { icon: Icons.WebsiteDev, title: 'Healthcare', description: 'Patient analytics, treatment optimization, and operational insights.' },
      { icon: Icons.WebsiteDev, title: 'Retail', description: 'Customer insights, demand forecasting, and marketing analytics.' }
    ],
    techStack: {
      frontend: [
        { name: 'Power BI', icon: Icons.Html5 },
        { name: 'Tableau', icon: Icons.Css3 },
        { name: 'D3.js', icon: Icons.React }
      ],
      backend: [
        { name: 'Python', icon: Icons.Python },
        { name: 'Apache Spark', icon: Icons.Php },
        { name: 'Hadoop', icon: Icons.Node }
      ],
      infrastructure: [
        { name: 'AWS Analytics', icon: Icons.AWS },
        { name: 'Azure Synapse', icon: Icons.GoogleCloud },
        { name: 'BigQuery', icon: Icons.Doccer }
      ]
    },
    faqs: [
      { question: 'What types of analytics do you provide?', answer: 'We provide descriptive, diagnostic, predictive, and prescriptive analytics.' },
      { question: 'Can you work with our existing data?', answer: 'Yes, we integrate with databases, CRMs, ERPs, and other business apps.' },
      { question: 'How do you ensure data privacy?', answer: 'We use encryption, access controls, and comply with regulations like GDPR and HIPAA.' }
    ]
  },
  {
    id: 6,
    slug: 'sap-erp',
    category: 'SAP & ERP',
    title: 'SAP & ERP Solutions',
    subtitle: 'Enterprise resource planning to streamline your business operations.',
    description: 'Comprehensive SAP and ERP solutions to integrate all your business processes. From implementation to support, we help you maximize your ERP investment.',
    icon: Icons.WebsiteDev,
    heroImage: '/static/final.svg',
    highlights: [
      { icon: Icons.WebsiteDev, title: 'SAP Certified', description: 'Certified SAP consultants with years of experience.' },
      { icon: Icons.WebsiteDev, title: 'End-to-End Implementation', description: 'From planning to go-live and beyond.' },
      { icon: Icons.WebsiteDev, title: 'Custom Modules', description: 'Tailored ERP modules for your unique business needs.' }
    ],
    industries: [
      { icon: Icons.WebsiteDev, title: 'Manufacturing', description: 'Production planning, inventory management, and supply chain optimization.' },
      { icon: Icons.WebsiteDev, title: 'Retail', description: 'Point of sale, inventory management, and customer relationship management.' },
      { icon: Icons.WebsiteDev, title: 'Finance', description: 'Financial accounting, controlling, and treasury management.' },
      { icon: Icons.WebsiteDev, title: 'Logistics', description: 'Warehouse management, transportation, and distribution.' }
    ],
    techStack: {
      frontend: [
        { name: 'SAP Fiori', icon: Icons.Html5 },
        { name: 'SAP UI5', icon: Icons.Css3 }
      ],
      backend: [
        { name: 'SAP HANA', icon: Icons.Python },
        { name: 'SAP ECC', icon: Icons.Php },
        { name: 'SAP S/4HANA', icon: Icons.Node }
      ],
      infrastructure: [
        { name: 'SAP Cloud Platform', icon: Icons.AWS },
        { name: 'Azure for SAP', icon: Icons.GoogleCloud },
        { name: 'AWS for SAP', icon: Icons.Doccer }
      ]
    },
    faqs: [
      { question: 'What SAP modules do you implement?', answer: 'We implement SAP FI, CO, MM, SD, PP, HR, and others.' },
      { question: 'How long does SAP implementation take?', answer: 'Typically 6-12 months for mid-size implementations.' },
      { question: 'Do you provide post-implementation support?', answer: 'Yes, ongoing support, maintenance, upgrades, and enhancements.' }
    ]
  },
  {
    id: 7,
    slug: 'software-development',
    category: 'Software & Development',
    title: 'Software Development',
    subtitle: 'Custom software solutions tailored to your business needs.',
    description: 'From web applications to mobile apps, we build custom software that drives your business forward. Agile development, modern technology, and exceptional quality.',
    icon: Icons.WebsiteDev,
    heroImage: '/static/final.svg',
    highlights: [
      { icon: Icons.WebsiteDev, title: 'Agile Development', description: 'Fast iterations and continuous delivery.' },
      { icon: Icons.WebsiteDev, title: 'Modern Tech Stack', description: 'Latest technologies and best practices.' },
      { icon: Icons.WebsiteDev, title: 'Quality Assurance', description: 'Rigorous testing for bug-free software.' }
    ],
    industries: [
      { icon: Icons.WebsiteDev, title: 'E-Commerce', description: 'Custom e-commerce platforms with advanced features and integrations.' },
      { icon: Icons.WebsiteDev, title: 'Healthcare', description: 'HIPAA-compliant healthcare software and patient management systems.' },
      { icon: Icons.WebsiteDev, title: 'Education', description: 'Learning management systems and educational platforms.' },
      { icon: Icons.WebsiteDev, title: 'FinTech', description: 'Secure financial software with payment integrations.' }
    ],
    techStack: {
      frontend: [
        { name: 'React', icon: Icons.React },
        { name: 'Next.js', icon: Icons.NextJs },
        { name: 'Vue.js', icon: Icons.Html5 },
        { name: 'Angular', icon: Icons.Css3 }
      ],
      backend: [
        { name: 'Node.js', icon: Icons.Node },
        { name: 'Python', icon: Icons.Python },
        { name: 'Java', icon: Icons.Php },
        { name: '.NET', icon: Icons.Wordpress }
      ],
      infrastructure: [
        { name: 'AWS', icon: Icons.AWS },
        { name: 'Docker', icon: Icons.Doccer },
        { name: 'Kubernetes', icon: Icons.GoogleCloud }
      ]
    },
    faqs: [
      { question: 'What software development services do you offer?', answer: 'Web app, mobile app, API, microservices, and custom enterprise software.' },
      { question: 'What is your development process?', answer: 'Agile methodology with sprints, daily standups, continuous integration, and regular deployments.' },
      { question: 'Do you sign NDAs?', answer: 'Yes, to protect intellectual property and business info.' }
    ]
  },
  {
    id: 8,
    slug: 'technical-staffing',
    category: 'Staffing Solution',
    title: 'Technical Staffing',
    subtitle: 'Find the right tech talent for your team.',
    description: 'Connect with pre-vetted software developers, engineers, and IT professionals. From contract to full-time, we help you build your dream tech team.',
    icon: '../assets/img_icns/Website_developlent.svg',
    heroImage: '/static/final.svg',

    highlights: [
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'Pre-Vetted Talent',
        description: 'All candidates are thoroughly screened and tested.'
      },
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'Fast Placement',
        description: 'Fill positions in 2-4 weeks, not months.'
      },
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'Flexible Contracts',
        description: 'Contract, contract-to-hire, or full-time options.'
      }
    ],

    industries: [
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'Software Companies',
        description: 'Developers, QA engineers, DevOps, and architects for software firms.'
      },
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'Startups',
        description: 'Full-stack developers and technical co-founders for startups.'
      },
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'Enterprises',
        description: 'Large-scale technical staffing for enterprise projects.'
      },
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'Agencies',
        description: 'Augment your agency team with specialized developers.'
      }
    ],

    techStack: {
      frontend: [
        { name: 'React Developers', icon: '../assets/img_icns/React.svg' },
        { name: 'Angular Developers', icon: '../assets/img_icns/Html5.svg' },
        { name: 'Vue Developers', icon: '../assets/img_icns/Css3.svg' }
      ],
      backend: [
        { name: 'Node.js Developers', icon: '../assets/img_icns/Node.svg' },
        { name: 'Python Developers', icon: '../assets/img_icns/Python.svg' },
        { name: 'Java Developers', icon: '../assets/img_icns/Php.svg' }
      ],
      infrastructure: [
        { name: 'DevOps Engineers', icon: '../assets/img_icns/AWS.svg' },
        { name: 'Cloud Architects', icon: '../assets/img_icns/GoogleCloud.svg' },
        { name: 'QA Engineers', icon: '../assets/img_icns/Doccer.svg' }
      ]
    },

    faqs: [
      {
        question: 'How do you vet candidates?',
        answer: 'We conduct technical assessments, coding challenges, background checks, and multiple rounds of interviews to ensure quality.'
      },
      {
        question: 'What is the hiring process?',
        answer: 'Share requirements → We shortlist candidates → You interview → Make offer → Onboarding. Typically takes 2-4 weeks.'
      },
      {
        question: 'What if the candidate doesnt work out?',
        answer: 'We offer replacement guarantee. If a candidate leaves within the first 90 days, well find a replacement at no additional cost.'
      }
    ]
  },
  {
    id: 9,
    slug: 'people-development',
    category: 'Staffing Solution',
    title: 'People Development',
    subtitle: 'Upskill your team with training and development programs.',
    description: 'Invest in your team with our comprehensive training programs. From technical skills to leadership development, we help your employees reach their full potential.',
    icon: '../assets/img_icns/Website_developlent.svg',
    heroImage: '/static/final.svg',

    highlights: [
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'Custom Programs',
        description: 'Training programs tailored to your team needs.'
      },
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'Expert Trainers',
        description: 'Industry experts with real-world experience.'
      },
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'Measurable Results',
        description: 'Track progress and measure skill improvements.'
      }
    ],

    industries: [
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'IT Companies',
        description: 'Technical training for developers, QA, and DevOps teams.'
      },
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'Enterprises',
        description: 'Leadership development and management training for enterprises.'
      },
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'Startups',
        description: 'Rapid skill development for growing startup teams.'
      },
      {
        icon: '../assets/img_icns/Website_developlent.svg',
        title: 'Government',
        description: 'Digital transformation training for government employees.'
      }
    ],

    techStack: {
      frontend: [
        { name: 'Frontend Training', icon: '../assets/img_icns/React.svg' },
        { name: 'UI/UX Training', icon: '../assets/img_icns/Html5.svg' },
        { name: 'Modern Frameworks', icon: '../assets/img_icns/Css3.svg' }
      ],
      backend: [
        { name: 'Backend Training', icon: '../assets/img_icns/Node.svg' },
        { name: 'Database Training', icon: '../assets/img_icns/Python.svg' },
        { name: 'API Development', icon: '../assets/img_icns/Php.svg' }
      ],
      infrastructure: [
        { name: 'Cloud Training', icon: '../assets/img_icns/AWS.svg' },
        { name: 'DevOps Training', icon: '../assets/img_icns/GoogleCloud.svg' },
        { name: 'Security Training', icon: '../assets/img_icns/Doccer.svg' }
      ]
    },

    faqs: [
      {
        question: 'What training programs do you offer?',
        answer: 'We offer technical training (programming, cloud, DevOps), soft skills training (communication, leadership), and industry-specific training programs tailored to your organization.'
      },
      {
        question: 'Can you customize training for our team?',
        answer: 'Yes, we create custom training programs based on your teams current skill level, learning objectives, and desired outcomes. Each program is tailored to your specific needs.'
      },
      {
        question: 'Do you provide certifications?',
        answer: 'Yes, we provide certificates upon completion and can also prepare your team for industry certifications like AWS, Azure, Google Cloud, and other professional certifications.'
      },
      {
        question: 'What is the duration of training programs?',
        answer: 'Program duration varies based on content and depth. Short programs can be 1-2 weeks, while comprehensive programs may span 2-3 months with ongoing support.'
      },
      {
        question: 'Do you offer online or in-person training?',
        answer: 'We offer both online and in-person training options. We can conduct on-site training at your location or provide virtual training sessions based on your preference.'
      }
    ]
  }
];

export default servicesData;