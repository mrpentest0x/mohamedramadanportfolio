import cvAsset from "@/assets/cv.asset.json";
import trackCert from "@/assets/certs/cyber-beginners-track.pdf.asset.json";
import ethicalHackingCert from "@/assets/certs/ethical-hacking.pdf.asset.json";
import redhatCert from "@/assets/certs/redhat-rh124.pdf.asset.json";
import pythonCert from "@/assets/certs/python-basics.pdf.asset.json";
import networkImplCert from "@/assets/certs/network-implementation.pdf.asset.json";
import networkSecurityCert from "@/assets/certs/network-security-intro.pdf.asset.json";
import networkFundamentalsCert from "@/assets/certs/network-fundamentals.pdf.asset.json";
import ayaTestimonial from "@/assets/testimonials/aya-magdy.jpeg.asset.json";
import khaledTestimonial from "@/assets/testimonials/khaled-gamal.jpeg.asset.json";
import adhamTestimonial from "@/assets/testimonials/adham-eltahawy.jpeg.asset.json";
import moazTestimonial from "@/assets/testimonials/moaz-mohamed.jpeg.asset.json";
import hamdyTestimonial from "@/assets/testimonials/hamdy-mohamed.jpeg.asset.json";
import mohamedTestimonial from "@/assets/testimonials/mohamed-ahmed.jpeg.asset.json";
import mazenTestimonial from "@/assets/testimonials/mazen-ahmed.jpeg.asset.json";

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
  github: "https://github.com/mrpentest0x",
  githubLabel: "github.com/mrpentest0x",
};

export const testimonials = [
  {
    name: "Aya Magdy Youssef",
    role: "Certified Instructor Huawei & Cis…",
    text: "أداءك رائع بالتوفيق دايما ❤️😍",
    rtl: true,
    image: ayaTestimonial.url,
  },
  {
    name: "Khaled Gamal Seif",
    role: "Bug Bounty Hunter @ HackerOne",
    text: "From learning the basics to actually building projects, your progress is really impressive bro. Keep grinding and I'm sure you'll achieve a lot in Cybersecurity",
    rtl: false,
    image: khaledTestimonial.url,
  },
  {
    name: "Adham Eltahawy",
    role: "Penetration Tester Trainee @ D…",
    text: "Proud of you bro! 🔥 You've been putting in a lot of work lately, and it really shows. Keep learning, keep building, and keep going. The best is yet to come ❤️❤️🔥",
    rtl: false,
    image: adhamTestimonial.url,
  },
  {
    name: "Moaz Mohamed",
    role: "Junior Penetration Tester | @DE…",
    text: "Keep going bro 🔥 Your progress is honestly impressive. Keep learning and building, you're on the right track 👏",
    rtl: false,
    image: moazTestimonial.url,
  },
  {
    name: "Hamdy Mohamed",
    role: "Aspiring Full Stack .NET Develop…",
    text: "Well deserved bro! 👏 I know how much effort you've been putting into your Cybersecurity journey. Keep working hard and chasing your goals 🔥",
    rtl: false,
    image: hamdyTestimonial.url,
  },
  {
    name: "Mohamed Ahmed",
    role: "طالب في Beni Suef National Unive…",
    text: "You're doing a great job bro! I've seen how much you've been working on yourself and your technical skills. Keep going, you're definitely getting better every day 🔥",
    rtl: false,
    image: mohamedTestimonial.url,
  },
  {
    name: "mazen ahme…",
    role: "Student at Beni-Suef University",
    text: "Big respect bro 👏 The effort you're putting into Cybersecurity and Networking is clear in everything you're building. Keep pushing and never stop learning",
    rtl: false,
    image: mazenTestimonial.url,
  },
];

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
    name: "Technical",
    items: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Web Application Security",
      "Ethical Hacking",
      "Attack Surface Analysis",
      "Network Security",
      "TCP/IP",
      "IP Routing",
      "VLANs",
      "Access Control Lists",
      "Network Troubleshooting",
      "Linux",
      "Windows",
      "Machine Learning",
      "Cloud Fundamentals",
    ],
  },
  {
    name: "Tools",
    items: [
      "Kali Linux",
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "Metasploit",
      "Splunk",
      "Git",
      "AI-Assisted Security Tools",
    ],
  },
  { name: "Languages", items: ["Python", "SQL"] },
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
    github: profile.github,
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
    github: profile.github,
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
    github: profile.github,
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
    github: profile.github,
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
  {
    name: "Cybersecurity for Beginner Track",
    provider: "Mahara Tech",
    detail: "8 Courses · 35 Hours",
    code: "quCc6cs5VK",
    date: "15/02/24",
    url: trackCert.url,
  },
  {
    name: "Ethical Hacking",
    provider: "Mahara Tech",
    detail: "3 Hours, 29 Minutes",
    code: "5SYev55pIz",
    date: "22/06/26",
    url: ethicalHackingCert.url,
  },
  {
    name: "Red Hat System Administration I",
    provider: "Mahara Tech",
    detail: "9 Hours, 11 Minutes",
    code: "ZyXjEN9YZJ",
    date: "15/02/24",
    url: redhatCert.url,
  },
  {
    name: "Python Programming Basics",
    provider: "Mahara Tech",
    detail: "1 Hour, 38 Minutes",
    code: "SeEUTEXcmS",
    date: "20/2024",
    url: pythonCert.url,
  },
  {
    name: "Implementation of Computer Network Fundamentals",
    provider: "Mahara Tech",
    detail: "2 Hours",
    code: "YZM3yPClSR",
    date: "15/02/24",
    url: networkImplCert.url,
  },
  {
    name: "Introduction to Network Security",
    provider: "Mahara Tech",
    detail: "1 Hour, 15 Minutes",
    code: "o0HxoBqHHm",
    date: "22/06/26",
    url: networkSecurityCert.url,
  },
  {
    name: "Computer Network Fundamentals",
    provider: "Mahara Tech",
    detail: "1 Hour",
    code: "b7gFquYRKY",
    date: "15/02/24",
    url: networkFundamentalsCert.url,
  },
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
