# Let's create keyword mappings based on the dataset analysis for classification
import json

# Define comprehensive keyword mappings for each job category based on the dataset analysis
category_keywords = {
    "Data Science": [
        "python", "machine learning", "data analysis", "statistics", "pandas", "numpy", 
        "scikit-learn", "tensorflow", "keras", "deep learning", "neural network", 
        "data mining", "visualization", "tableau", "sql", "regression", "classification",
        "clustering", "nlp", "natural language processing", "data scientist", "analytics",
        "predictive modeling", "big data", "hadoop", "spark", "r programming"
    ],
    "Java Developer": [
        "java", "spring", "hibernate", "jsp", "servlet", "maven", "gradle", "junit",
        "rest api", "microservices", "spring boot", "java ee", "jvm", "object oriented",
        "design patterns", "multithreading", "collections", "jdbc", "web services",
        "struts", "jsf", "swing", "android", "kotlin"
    ],
    "Testing": [
        "testing", "qa", "quality assurance", "selenium", "automation testing", 
        "test cases", "test plan", "bug tracking", "jira", "manual testing",
        "functional testing", "regression testing", "performance testing", 
        "load testing", "unit testing", "integration testing", "testng", "cucumber",
        "appium", "postman", "api testing"
    ],
    "Web Designing": [
        "html", "css", "javascript", "react", "angular", "vue", "bootstrap", "jquery",
        "responsive design", "ui/ux", "photoshop", "figma", "sketch", "web design",
        "frontend", "sass", "less", "webpack", "npm", "yarn", "git", "nodejs",
        "typescript", "material design", "user interface"
    ],
    "Python Developer": [
        "python", "django", "flask", "fastapi", "rest api", "web development",
        "object oriented programming", "data structures", "algorithms", "git",
        "sql", "postgresql", "mysql", "mongodb", "redis", "celery", "pytest",
        "numpy", "pandas", "requests", "beautifulsoup", "web scraping"
    ],
    "DevOps Engineer": [
        "devops", "docker", "kubernetes", "jenkins", "ci/cd", "aws", "azure", "gcp",
        "terraform", "ansible", "chef", "puppet", "linux", "bash", "shell scripting",
        "monitoring", "logging", "prometheus", "grafana", "elk stack", "git", "gitlab",
        "continuous integration", "continuous deployment", "infrastructure as code"
    ],
    "HR": [
        "human resources", "recruitment", "hiring", "talent acquisition", "employee relations",
        "performance management", "payroll", "compliance", "training", "development",
        "hr policies", "onboarding", "offboarding", "compensation", "benefits",
        "workforce planning", "employee engagement", "hr analytics", "hris", "ats"
    ],
    "Database": [
        "database", "sql", "mysql", "postgresql", "oracle", "sql server", "mongodb",
        "nosql", "database design", "data modeling", "stored procedures", "triggers",
        "indexing", "query optimization", "data warehouse", "etl", "olap", "oltp",
        "database administration", "backup", "recovery", "replication"
    ],
    "Network Security Engineer": [
        "network security", "cybersecurity", "firewall", "intrusion detection", "vpn",
        "penetration testing", "vulnerability assessment", "security audit", "encryption",
        "malware analysis", "incident response", "security protocols", "cissp", "ceh",
        "network monitoring", "security policies", "risk assessment", "compliance"
    ],
    "SAP Developer": [
        "sap", "abap", "sap hana", "sap fiori", "sap ui5", "sap bw", "sap mm", "sap sd",
        "sap fico", "sap hr", "sap basis", "sap workflow", "sap integration", 
        "sap development", "rfc", "bapi", "idoc", "smartforms", "adobe forms"
    ],
    "Business Analyst": [
        "business analysis", "requirements gathering", "stakeholder management", 
        "process improvement", "business process modeling", "use cases", "user stories",
        "agile", "scrum", "waterfall", "documentation", "gap analysis", "feasibility study",
        "business intelligence", "data analysis", "reporting", "excel", "visio", "jira"
    ],
    "Operations Manager": [
        "operations management", "project management", "team leadership", "process optimization",
        "supply chain", "logistics", "inventory management", "quality control", "budgeting",
        "cost reduction", "performance metrics", "kpi", "lean", "six sigma", "pmp",
        "strategic planning", "vendor management", "risk management"
    ],
    "Electrical Engineering": [
        "electrical engineering", "circuit design", "power systems", "control systems",
        "electronics", "embedded systems", "microcontrollers", "plc", "scada", "matlab",
        "simulink", "autocad", "pcb design", "power electronics", "renewable energy",
        "automation", "instrumentation", "electrical design"
    ],
    "Mechanical Engineer": [
        "mechanical engineering", "cad", "autocad", "solidworks", "catia", "ansys",
        "finite element analysis", "thermodynamics", "fluid mechanics", "manufacturing",
        "quality control", "project management", "design", "prototyping", "3d modeling",
        "cnc", "machining", "materials science", "hvac"
    ],
    "Civil Engineer": [
        "civil engineering", "structural engineering", "construction management", "autocad",
        "project planning", "site supervision", "concrete", "steel", "surveying",
        "geotechnical engineering", "transportation engineering", "water resources",
        "environmental engineering", "building codes", "safety regulations"
    ],
    "Sales": [
        "sales", "business development", "lead generation", "customer relationship",
        "crm", "sales process", "negotiation", "closing deals", "target achievement",
        "market research", "cold calling", "presentation", "account management",
        "sales strategy", "revenue growth", "client acquisition", "sales funnel"
    ],
    "DotNet Developer": [
        "c#", ".net", "asp.net", "mvc", ".net core", "entity framework", "sql server",
        "visual studio", "web api", "wcf", "wpf", "winforms", "linq", "ado.net",
        "iis", "azure", "nuget", "unit testing", "dependency injection"
    ],
    "Hadoop": [
        "hadoop", "big data", "hdfs", "mapreduce", "hive", "pig", "hbase", "spark",
        "kafka", "flume", "sqoop", "oozie", "yarn", "zookeeper", "cloudera", "hortonworks",
        "data processing", "distributed computing", "data lake", "data pipeline"
    ],
    "Blockchain": [
        "blockchain", "cryptocurrency", "bitcoin", "ethereum", "smart contracts", "solidity",
        "web3", "dapp", "consensus", "cryptography", "distributed ledger", "mining",
        "wallet", "defi", "nft", "hyperledger", "truffle", "metamask", "hash functions"
    ],
    "ETL Developer": [
        "etl", "data integration", "data warehouse", "ssis", "informatica", "talend",
        "pentaho", "data modeling", "sql", "stored procedures", "data migration",
        "data quality", "data validation", "scheduling", "monitoring", "performance tuning"
    ],
    "Automation Testing": [
        "automation testing", "selenium", "test automation", "cucumber", "testng", "junit",
        "api testing", "postman", "rest assured", "continuous testing", "test framework",
        "data driven testing", "keyword driven testing", "bdd", "tdd", "jenkins integration"
    ],
    "PMO": [
        "project management", "pmo", "pmp", "agile", "scrum", "waterfall", "risk management",
        "stakeholder management", "project planning", "resource management", "budgeting",
        "scheduling", "quality assurance", "change management", "communication", "reporting"
    ],
    "Health and fitness": [
        "health", "fitness", "nutrition", "exercise", "wellness", "physical therapy",
        "sports medicine", "personal training", "yoga", "pilates", "rehabilitation",
        "health education", "weight management", "cardiovascular", "strength training"
    ],
    "Arts": [
        "graphic design", "visual arts", "creative design", "illustration", "photography",
        "adobe creative suite", "photoshop", "illustrator", "indesign", "art direction",
        "branding", "typography", "color theory", "digital art", "fine arts", "drawing"
    ],
    "Advocate": [
        "law", "legal", "attorney", "lawyer", "litigation", "legal research", "court",
        "legal writing", "contracts", "compliance", "legal advice", "dispute resolution",
        "legal documentation", "case management", "legal analysis", "bar admission"
    ]
}

# Create category mapping with IDs (matching the original app.py mapping)
category_mapping = {
    0: "Advocate",
    1: "Arts", 
    2: "Automation Testing",
    3: "Blockchain",
    4: "Business Analyst",
    5: "Civil Engineer",
    6: "Data Science",
    7: "Database",
    8: "DevOps Engineer",
    9: "DotNet Developer",
    10: "ETL Developer",
    11: "Electrical Engineering",
    12: "HR",
    13: "Hadoop",
    14: "Health and fitness",
    15: "Java Developer",
    16: "Mechanical Engineer",
    17: "Network Security Engineer",
    18: "Operations Manager",
    19: "PMO",
    20: "Python Developer",
    21: "SAP Developer",
    22: "Sales",
    23: "Testing",
    24: "Web Designing"
}

# Save the mappings to files for the web app
with open('category_keywords.json', 'w') as f:
    json.dump(category_keywords, f, indent=2)

with open('category_mapping.json', 'w') as f:
    json.dump(category_mapping, f, indent=2)

print("Category keywords and mappings saved successfully!")
print(f"Total categories: {len(category_keywords)}")
print("Sample keywords for Data Science:", category_keywords["Data Science"][:10])