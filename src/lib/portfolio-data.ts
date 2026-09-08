import cvAsset from "@/assets/cv.asset.json";

export const CV_URL = cvAsset.url;

export const profile = {
  name: "Mohamed Ramadan Mohamed Sayed",
  shortName: "Mohamed Ramadan",
  title: "Cybersecurity Engineer | Penetration Testing | Network Security",
  location: "Beni Suef, Egypt",
  email: "abomero72005@gmail.com",
  phone: "+20 115 382 8591",
  linkedin: "https://linkedin.com/in/mrpentest",
  linkedinLabel: "linkedin.com/in/mrpentest",
  github: "#",
  githubLabel: "GitHub — link coming soon",
};

export const navSections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  {
    name: "Offensive Security",
    items: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Web Application Security",
      "Ethical Hacking",
      "Attack Surface Analysis",
    ],
  },
  {
    name: "Network Security",
    items: [
      "Network Security",
      "TCP/IP",
      "IP Routing",
      "VLANs",
      "Access Control Lists",
      "Network Troubleshooting",
    ],
  },
  {
    name: "Security Tools",
    items: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite", "Metasploit", "Splunk"],
  },
  { name: "Programming", items: ["Python", "SQL"] },
  { name: "Systems", items: ["Linux", "Windows"] },
  {
    name: "Other",
    items: ["Machine Learning", "AI-Assisted Security Tools", "Cloud Fundamentals", "Git"],
  },
];

export const experience = [
  {
    role: "Cybersecurity Training",
    org: "National Telecommunication Institute (NTI) | NTRA",
    description:
      "Completed applied training in cybersecurity fundamentals, network security, and penetration testing.",
    tags: ["Kali Linux", "Nmap", "Wireshark", "Network Security", "Penetration Testing"],
  },
  {
    role: "Cisco Networking & Security",
    org: "Cisco Networking Academy",
    description:
      "Completed practical training in network configuration, IP routing, VLANs, and access control lists.",
    tags: [
      "Cisco Packet Tracer",
      "Subnetting",
      "Routing",
      "Switching",
      "VLANs",
      "ACLs",
      "Network Troubleshooting",
    ],
  },
  {
    role: "Splunk Security Monitoring",
    org: "Splunk",
    description:
      "Gained practical experience in centralized log collection, monitoring, and security event analysis.",
    tags: [
      "Splunk Universal Forwarder",
      "Log Collection",
      "Security Monitoring",
      "Security Event Analysis",
      "Dashboards",
      "Multiple Virtual Machines",
    ],
  },
  {
    role: "Database & SQL",
    org: "MySQL",
    description:
      "Developed practical experience in relational database design and SQL query development.",
    tags: ["Tables", "Relationships", "Joins", "Data Management", "SQL"],
  },
];

export const volunteering = {
  role: "HR Volunteer",
  org: "Resala Charity Organization",
  description:
    "Supported HR activities, team coordination, and organizational tasks, including the HR-Visits Activity.",
  additional:
    "Assisted with Food Service activities, supporting team members during organized distribution events.",
};

export const services = [
  {
    title: "Vulnerability Assessment",
    text: "Identify weaknesses and potential attack vectors in controlled environments.",
  },
  {
    title: "Penetration Testing",
    text: "Perform authorized security testing to understand how vulnerabilities can be exploited.",
  },
  {
    title: "Web Security Testing",
    text: "Assess web applications using security testing methodologies and tools.",
  },
  {
    title: "Network Security Assessment",
    text: "Analyse network configurations, services, traffic, and potential weaknesses.",
  },
  {
    title: "Security Monitoring",
    text: "Collect and analyse security logs to identify suspicious activity.",
  },
  {
    title: "Security Research",
    text: "Explore vulnerabilities, attack techniques, and security technologies.",
  },
  {
    title: "Network Configuration",
    text: "Design and troubleshoot networking environments using Cisco technologies.",
  },
  {
    title: "Security Automation",
    text: "Explore Python and AI-assisted approaches for improving security workflows.",
  },
];

export const projects = [
  {
    title: "Web Security Practice Lab",
    overview:
      "Conducted web application security testing in a controlled training environment using Burp Suite.",
    objective:
      "Understand how common web application weaknesses appear and how they can be verified safely.",
    tech: [
      "Burp Suite",
      "OWASP Top 10",
      "OWASP WSTG",
      "Authentication",
      "Authorization",
      "API Security Assessment",
    ],
    did: [
      "Intercepted and analysed application traffic with Burp Suite.",
      "Tested authentication and authorization behaviour in the lab application.",
      "Reviewed API endpoints against OWASP WSTG guidance.",
    ],
    skills: ["Web Application Security", "Manual Testing Methodology", "Reporting"],
  },
  {
    title: "Network Penetration Testing Lab",
    overview:
      "Performed network reconnaissance and enumeration using Nmap in an authorized lab environment.",
    objective: "Map hosts and services on a lab network and study their exposure.",
    tech: [
      "Kali Linux",
      "Nmap",
      "Metasploit Framework",
      "Wireshark",
      "Reconnaissance",
      "Enumeration",
      "Traffic Analysis",
    ],
    did: [
      "Ran host discovery, port and service scans with Nmap.",
      "Explored the Metasploit Framework workflow against lab targets.",
      "Captured and reviewed traffic in Wireshark to understand protocol behaviour.",
    ],
    skills: ["Reconnaissance", "Enumeration", "Traffic Analysis", "Linux Tooling"],
  },
  {
    title: "Networking Labs",
    overview: "Designed and configured networking environments using Cisco Packet Tracer.",
    objective: "Build working topologies and practise structured troubleshooting.",
    tech: [
      "Cisco Packet Tracer",
      "Subnetting",
      "Routing",
      "Switching",
      "VLANs",
      "Network Troubleshooting",
    ],
    did: [
      "Planned addressing schemes and subnetted networks.",
      "Configured routing, switching, VLANs, and access control lists.",
      "Diagnosed connectivity issues step by step across the topology.",
    ],
    skills: ["Network Design", "Routing & Switching", "Troubleshooting"],
  },
  {
    title: "Splunk Security Monitoring",
    overview:
      "Built a centralized log collection and monitoring setup across multiple virtual machines.",
    objective: "Bring logs from several systems into one place and review security events.",
    tech: [
      "Splunk Universal Forwarder",
      "Centralized Log Collection",
      "Multiple Virtual Machines",
      "Security Event Monitoring",
      "Dashboards",
    ],
    did: [
      "Deployed Splunk Universal Forwarder across multiple virtual machines.",
      "Configured centralized log collection and indexing.",
      "Reviewed security events and built dashboards for monitoring.",
    ],
    skills: ["Security Monitoring", "Log Analysis", "SIEM Fundamentals"],
  },
];

export const courses = [
  { name: "Cybersecurity for Beginner Track", provider: "Mahara Tech" },
  { name: "Ethical Hacking", provider: "Course" },
  { name: "Red Hat System Administration 1", provider: "Course" },
  { name: "Python Programming Basics", provider: "Course" },
  { name: "Implementation of Network Fundamentals", provider: "Course" },
  { name: "Introduction to Network Security", provider: "Course" },
  { name: "Computer Network Fundamentals", provider: "Course" },
];

export const studiedTracks = ["CCNA", "CompTIA Security+", "eJPTv1"];

export const achievements = [
  {
    title: "Cybersecurity Training",
    text: "Applied training in cybersecurity fundamentals, network security, and penetration testing.",
  },
  {
    title: "Practical Security Labs",
    text: "Hands-on testing inside authorized lab environments using industry-standard tooling.",
  },
  {
    title: "Networking Labs",
    text: "Designed, configured, and troubleshot routed and switched networks.",
  },
  {
    title: "Splunk Security Monitoring",
    text: "Centralized log collection and security event analysis across multiple machines.",
  },
  {
    title: "Web Security Practice",
    text: "Web application and API testing guided by OWASP Top 10 and WSTG.",
  },
  {
    title: "Continuous Technical Learning",
    text: "Ongoing study across CCNA, Security+, and eJPTv1 subject areas.",
  },
];

export const approach = [
  { step: "01", name: "Recon", text: "Understand the target and attack surface." },
  {
    step: "02",
    name: "Enumeration",
    text: "Identify services, technologies, and potential entry points.",
  },
  { step: "03", name: "Analysis", text: "Study vulnerabilities and security weaknesses." },
  { step: "04", name: "Validation", text: "Test findings in an authorized environment." },
  { step: "05", name: "Documentation", text: "Clearly document findings and evidence." },
  {
    step: "06",
    name: "Improvement",
    text: "Recommend security improvements and mitigation strategies.",
  },
];
