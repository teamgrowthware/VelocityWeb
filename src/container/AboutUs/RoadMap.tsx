import React, { useState } from 'react';

function Roadmap() {

    const roadmapData = [
        {
            year: 2014,
            title: "Foundation/Class Start",
            color: "#0d6efd",
            icon: "🎓",
            description: "Built the groundwork with programming fundamentals, algorithms, and computer science basics. Learned core concepts essential for software development.",
            skills: ["Programming Basics", "Data Structures", "Algorithms", "Problem Solving"]
        },
        {
            year: 2014,
            title: "Software Testing",
            color: "#0d6efd",
            icon: "🧪",
            description: "Mastered manual and automated testing methodologies. Learned quality assurance principles, test case design, and bug tracking systems.",
            skills: ["Manual Testing", "Test Cases", "QA Methodologies", "Bug Tracking"]
        },
        {
            year: 2015,
            title: "Java Development",
            color: "#0d6efd",
            icon: "☕",
            description: "Deep dive into Java programming with OOP concepts, collections, multithreading, and frameworks like Spring and Hibernate.",
            skills: ["Core Java", "Spring Framework", "Hibernate", "J2EE"]
        },
        {
            year: 2016,
            title: "Cloud & AWS",
            color: "#0d6efd",
            icon: "☁️",
            description: "Explored cloud computing architecture with AWS services. Learned about EC2, S3, Lambda, and cloud deployment strategies.",
            skills: ["AWS Services", "Cloud Architecture", "DevOps", "Scalability"]
        },
        {
            year: 2017,
            title: "Data Science",
            color: "#0d6efd",
            icon: "📊",
            description: "Studied machine learning algorithms, statistical analysis, and predictive modeling. Worked with Python libraries like NumPy, Pandas, and Scikit-learn.",
            skills: ["Machine Learning", "Statistical Analysis", "Python Libraries", "Predictive Models"]
        },
        {
            year: 2018,
            title: "Data Analytics",
            color: "#0d6efd",
            icon: "📈",
            description: "Focused on data visualization, business intelligence, and analytics tools. Created dashboards and reports using Tableau and Power BI.",
            skills: ["Data Visualization", "Tableau", "Power BI", "Business Intelligence"]
        },
        {
            year: 2019,
            title: "Salesforce",
            color: "#0d6efd",
            icon: "⚡",
            description: "Became proficient in Salesforce CRM platform. Learned Apex programming, Lightning components, and Salesforce administration.",
            skills: ["Salesforce Admin", "Apex", "Lightning", "CRM Solutions"]
        },
        {
            year: 2021,
            title: "Advance Testing Techniques",
            color: "#0d6efd",
            icon: "🔬",
            description: "Advanced testing with Selenium WebDriver, API testing with Postman, performance testing with JMeter, and CI/CD integration.",
            skills: ["Selenium", "API Testing", "Performance Testing", "CI/CD"]
        },
        {
            year: 2022,
            title: "Front End Development",
            color: "#0d6efd",
            icon: "💻",
            description: "Mastered modern front-end technologies including React, Angular, HTML5, CSS3, and JavaScript ES6+. Built responsive web applications.",
            skills: ["React", "Angular", "HTML5/CSS3", "Responsive Design"]
        },
        {
            year: 2023,
            title: "Corporate Training",
            color: "#0d6efd",
            icon: "🏢",
            description: "Delivered professional training programs to corporate teams. Developed curriculum and mentored professionals in various technologies.",
            skills: ["Training Delivery", "Curriculum Design", "Mentoring", "Soft Skills"]
        },
        {
            year: 2023,
            title: "Python Automation",
            color: "#0d6efd",
            icon: "🐍",
            description: "Automated repetitive tasks using Python scripts. Worked with web scraping, file handling, and workflow automation tools.",
            skills: ["Python Scripting", "Web Scraping", "Task Automation", "Selenium Python"]
        },
        {
            year: 2023,
            title: "ServiceNow",
            color: "#0d6efd",
            icon: "⚙️",
            description: "Learned ServiceNow platform for IT service management. Configured workflows, developed applications, and managed ITSM processes.",
            skills: ["ITSM", "ServiceNow Admin", "Workflow Design", "CMDB"]
        },
        {
            year: 2023,
            title: "Share Market/AR Calling",
            color: "#0d6efd",
            icon: "📱",
            description: "Explored financial markets, trading strategies, and developed augmented reality applications for interactive experiences.",
            skills: ["Trading Analysis", "Market Research", "AR Development", "Financial Tech"]
        },
        {
            year: 2023,
            title: "College Training/Workshop",
            color: "#0d6efd",
            icon: "🎯",
            description: "Conducted workshops and training sessions at colleges. Shared industry knowledge with students on emerging technologies.",
            skills: ["Workshop Facilitation", "Teaching", "Industry Insights", "Student Mentoring"]
        },
        {
            year: 2024,
            title: "Cyber Security",
            color: "#0d6efd",
            icon: "🔒",
            description: "Studied network security, ethical hacking, penetration testing, and security best practices. Learned tools like Kali Linux and Metasploit.",
            skills: ["Ethical Hacking", "Network Security", "Penetration Testing", "Security Tools"]
        },
        {
            year: 2025,
            title: "Project Final Year",
            color: "#0d6efd",
            icon: "🎉",
            description: "Capstone project integrating all learned technologies. Applied full-stack development, testing, deployment, and project management skills.",
            skills: ["Full-Stack Development", "Project Management", "System Design", "Deployment"]
        }
    ];
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(true);
    const visibleData = showAll ? roadmapData : roadmapData.slice(0, 3);

    return (
        <div style={{
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: '#0d6efd',
                        margin: '1rem'
                    }}>
                        Educational Journey Roadmap
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#0d6efd' }}>
                        2014 - 2025 | A Decade of Learning & Growth
                    </p>
                </div>

                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ position: 'relative' }}>
                        <div
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: 0,
                                bottom: 0,
                                width: '4px',
                                background: '#d9e1ed',
                                transform: 'translateX(-50%)',
                                zIndex: 1
                            }}
                        />

                        {visibleData.map((item, index) => (
                            <div
                                key={index}
                                style={{
                                    display: 'flex',
                                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                                    marginBottom: '1rem',
                                    position: 'relative',
                                    alignItems: 'center'
                                }}
                            >
                                {/* Content Card */}
                                <div style={{ flex: '0 0 45%' }}>
                                    <div
                                        style={{
                                            cursor: 'pointer',
                                            transform: selectedItem === index ? 'scale(1.05)' : 'scale(1)',
                                            transition: 'all 0.3s ease',
                                            background: 'rgba(255,255,255,0.95)',
                                            borderRadius: '12px',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                            padding: '1rem'
                                        }}
                                        onClick={() => setSelectedItem(selectedItem === index ? null : index)}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                            e.currentTarget.style.background = item.color;
                                            const title = e.currentTarget.querySelector('h5');
                                            const desc = e.currentTarget.querySelector('p');
                                            if (title) title.style.color = 'white';
                                            if (desc) desc.style.color = 'white';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (selectedItem !== index) {
                                                e.currentTarget.style.transform = 'scale(1)';
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.95)';
                                                const title = e.currentTarget.querySelector('h5');
                                                const desc = e.currentTarget.querySelector('p');
                                                if (title) title.style.color = item.color;
                                                if (desc) desc.style.color = '#6c757d';
                                            }
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                                            <div>
                                                <h5 style={{
                                                    margin: '0 0 0.25rem 0',
                                                    fontWeight: 'bold',
                                                    color: item.color,
                                                    fontSize: '1.25rem'
                                                }}>
                                                    {item.title}
                                                </h5>
                                                <p style={{
                                                    margin: 0,
                                                    color: '#6c757d',
                                                    fontSize: '0.875rem'
                                                }}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline dot */}
                                <div style={{
                                    flex: '0 0 10%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    zIndex: 10
                                }}>
                                    <div
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            background: item.color,
                                            border: '4px solid white',
                                            boxShadow: '0 0 0 4px rgba(255,255,255,0.3)'
                                        }}
                                    />
                                </div>

                                {/* Year label */}
                                <div style={{
                                    flex: '0 0 45%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <div
                                        style={{
                                            padding: '0.75rem 1.5rem',
                                            fontSize: '1.25rem',
                                            fontWeight: 'bold',
                                            background: 'rgba(255,255,255,0.2)',
                                            color: 'white',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '20px'
                                        }}
                                    >
                                        {item.year}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <button
                        onClick={() => setShowAll(!showAll)}
                        style={{
                            padding: '0.875rem 2rem',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            background: 'rgba(255,255,255,0.95)',
                            color: '#667eea',
                            border: '2px solid rgba(255,255,255,0.3)',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.3)';
                            e.currentTarget.style.background = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.95)';
                        }}
                    >
                        {showAll ? "View Less ▲" : "View More ▼"}
                    </button> */}
                </div>

            </div>
        </div>
    );
}

export default Roadmap