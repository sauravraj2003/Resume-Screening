// ResumeClassify Application JavaScript

// Global application state
let appState = {
    currentFile: null,
    extractedText: '',
    analysisResults: null,
    categories: {},
    isProcessing: false
};

// Job categories and keywords data
const CATEGORIES = {
    "Data Science": ["python", "machine learning", "data analysis", "statistics", "pandas", "numpy", "scikit-learn", "tensorflow", "keras", "deep learning", "neural network", "data mining", "visualization", "tableau", "sql", "regression", "classification", "clustering", "nlp", "natural language processing", "data scientist", "analytics", "predictive modeling", "big data", "hadoop", "spark", "r programming"],
    "Java Developer": ["java", "spring", "hibernate", "jsp", "servlet", "maven", "gradle", "junit", "rest api", "microservices", "spring boot", "java ee", "jvm", "object oriented", "design patterns", "multithreading", "collections", "jdbc", "web services", "struts", "jsf", "swing", "android", "kotlin"],
    "Testing": ["testing", "qa", "quality assurance", "selenium", "automation testing", "test cases", "test plan", "bug tracking", "jira", "manual testing", "functional testing", "regression testing", "performance testing", "load testing", "unit testing", "integration testing", "testng", "cucumber", "appium", "postman", "api testing"],
    "Web Designing": ["html", "css", "javascript", "react", "angular", "vue", "bootstrap", "jquery", "responsive design", "ui/ux", "photoshop", "figma", "sketch", "web design", "frontend", "sass", "less", "webpack", "npm", "yarn", "git", "nodejs", "typescript", "material design", "user interface"],
    "Python Developer": ["python", "django", "flask", "fastapi", "rest api", "web development", "object oriented programming", "data structures", "algorithms", "git", "sql", "postgresql", "mysql", "mongodb", "redis", "celery", "pytest", "numpy", "pandas", "requests", "beautifulsoup", "web scraping"],
    "DevOps Engineer": ["devops", "docker", "kubernetes", "jenkins", "ci/cd", "aws", "azure", "gcp", "terraform", "ansible", "chef", "puppet", "linux", "bash", "shell scripting", "monitoring", "logging", "prometheus", "grafana", "elk stack", "git", "gitlab", "continuous integration", "continuous deployment", "infrastructure as code"],
    "HR": ["human resources", "recruitment", "hiring", "talent acquisition", "employee relations", "performance management", "payroll", "compliance", "training", "development", "hr policies", "onboarding", "offboarding", "compensation", "benefits", "workforce planning", "employee engagement", "hr analytics", "hris", "ats"],
    "Database": ["database", "sql", "mysql", "postgresql", "oracle", "sql server", "mongodb", "nosql", "database design", "data modeling", "stored procedures", "triggers", "indexing", "query optimization", "data warehouse", "etl", "olap", "oltp", "database administration", "backup", "recovery", "replication"],
    "Network Security Engineer": ["network security", "cybersecurity", "firewall", "intrusion detection", "vpn", "penetration testing", "vulnerability assessment", "security audit", "encryption", "malware analysis", "incident response", "security protocols", "cissp", "ceh", "network monitoring", "security policies", "risk assessment", "compliance"],
    "SAP Developer": ["sap", "abap", "sap hana", "sap fiori", "sap ui5", "sap bw", "sap mm", "sap sd", "sap fico", "sap hr", "sap basis", "sap workflow", "sap integration", "sap development", "rfc", "bapi", "idoc", "smartforms", "adobe forms"],
    "Business Analyst": ["business analysis", "requirements gathering", "stakeholder management", "process improvement", "business process modeling", "use cases", "user stories", "agile", "scrum", "waterfall", "documentation", "gap analysis", "feasibility study", "business intelligence", "data analysis", "reporting", "excel", "visio", "jira"],
    "Operations Manager": ["operations management", "project management", "team leadership", "process optimization", "supply chain", "logistics", "inventory management", "quality control", "budgeting", "cost reduction", "performance metrics", "kpi", "lean", "six sigma", "pmp", "strategic planning", "vendor management", "risk management"],
    "Electrical Engineering": ["electrical engineering", "circuit design", "power systems", "control systems", "electronics", "embedded systems", "microcontrollers", "plc", "scada", "matlab", "simulink", "autocad", "pcb design", "power electronics", "renewable energy", "automation", "instrumentation", "electrical design"],
    "Mechanical Engineer": ["mechanical engineering", "cad", "autocad", "solidworks", "catia", "ansys", "finite element analysis", "thermodynamics", "fluid mechanics", "manufacturing", "quality control", "project management", "design", "prototyping", "3d modeling", "cnc", "machining", "materials science", "hvac"],
    "Civil Engineer": ["civil engineering", "structural engineering", "construction management", "autocad", "project planning", "site supervision", "concrete", "steel", "surveying", "geotechnical engineering", "transportation engineering", "water resources", "environmental engineering", "building codes", "safety regulations"],
    "Sales": ["sales", "business development", "lead generation", "customer relationship", "crm", "sales process", "negotiation", "closing deals", "target achievement", "market research", "cold calling", "presentation", "account management", "sales strategy", "revenue growth", "client acquisition", "sales funnel"],
    "DotNet Developer": ["c#", ".net", "asp.net", "mvc", ".net core", "entity framework", "sql server", "visual studio", "web api", "wcf", "wpf", "winforms", "linq", "ado.net", "iis", "azure", "nuget", "unit testing", "dependency injection"],
    "Hadoop": ["hadoop", "big data", "hdfs", "mapreduce", "hive", "pig", "hbase", "spark", "kafka", "flume", "sqoop", "oozie", "yarn", "zookeeper", "cloudera", "hortonworks", "data processing", "distributed computing", "data lake", "data pipeline"],
    "Blockchain": ["blockchain", "cryptocurrency", "bitcoin", "ethereum", "smart contracts", "solidity", "web3", "dapp", "consensus", "cryptography", "distributed ledger", "mining", "wallet", "defi", "nft", "hyperledger", "truffle", "metamask", "hash functions"],
    "ETL Developer": ["etl", "data integration", "data warehouse", "ssis", "informatica", "talend", "pentaho", "data modeling", "sql", "stored procedures", "data migration", "data quality", "data validation", "scheduling", "monitoring", "performance tuning"],
    "Automation Testing": ["automation testing", "selenium", "test automation", "cucumber", "testng", "junit", "api testing", "postman", "rest assured", "continuous testing", "test framework", "data driven testing", "keyword driven testing", "bdd", "tdd", "jenkins integration"],
    "PMO": ["project management", "pmo", "pmp", "agile", "scrum", "waterfall", "risk management", "stakeholder management", "project planning", "resource management", "budgeting", "scheduling", "quality assurance", "change management", "communication", "reporting"],
    "Health and fitness": ["health", "fitness", "nutrition", "exercise", "wellness", "physical therapy", "sports medicine", "personal training", "yoga", "pilates", "rehabilitation", "health education", "weight management", "cardiovascular", "strength training"],
    "Arts": ["graphic design", "visual arts", "creative design", "illustration", "photography", "adobe creative suite", "photoshop", "illustrator", "indesign", "art direction", "branding", "typography", "color theory", "digital art", "fine arts", "drawing"],
    "Advocate": ["law", "legal", "attorney", "lawyer", "litigation", "legal research", "court", "legal writing", "contracts", "compliance", "legal advice", "dispute resolution", "legal documentation", "case management", "legal analysis", "bar admission"]
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupFileUpload();
    setupCategorySelector();
    setupPDFWorker();
}

function setupPDFWorker() {
    if (typeof pdfjsLib !== 'undefined') {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
    }
}

function setupFileUpload() {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');

    // Drag and drop handlers
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('dragleave', handleDragLeave);
    uploadArea.addEventListener('drop', handleDrop);
    
    // Click handler for upload area
    uploadArea.addEventListener('click', function() {
        fileInput.click();
    });
    
    // File input handler
    fileInput.addEventListener('change', handleFileSelect);
}

function setupCategorySelector() {
    const categorySelect = document.getElementById('category-select');
    Object.keys(CATEGORIES).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
    
    categorySelect.addEventListener('change', handleCategoryComparison);
}

// File upload handlers
function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        handleFile(files[0]);
    }
}

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        handleFile(file);
    }
}

async function handleFile(file) {
    if (appState.isProcessing) return;
    
    // Validate file
    if (!validateFile(file)) return;
    
    appState.currentFile = file;
    appState.isProcessing = true;
    
    // Show file info
    showFileInfo(file);
    
    // Start processing
    try {
        await processFile(file);
    } catch (error) {
        console.error('Error processing file:', error);
        showError('Error processing file: ' + error.message + '. Please try again.');
        resetProcessing();
    }
}

function validateFile(file) {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['application/pdf', 'text/plain'];
    
    if (file.size > maxSize) {
        showError('File size must be less than 10MB');
        return false;
    }
    
    if (!allowedTypes.includes(file.type)) {
        showError('Only PDF and text files are supported. Selected file type: ' + file.type);
        return false;
    }
    
    return true;
}

function showFileInfo(file) {
    const fileInfo = document.getElementById('file-info');
    const fileName = document.getElementById('file-name');
    const fileSize = document.getElementById('file-size');
    
    fileName.textContent = file.name;
    fileSize.textContent = formatFileSize(file.size);
    fileInfo.classList.remove('hidden');
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function processFile(file) {
    showProcessingStatus();
    
    try {
        // Step 1: Extract text
        updateProcessingStep('extract-status', 'processing');
        updateProgress(10);
        
        let text = '';
        if (file.type === 'application/pdf') {
            text = await extractTextFromPDF(file);
        } else {
            text = await extractTextFromTxt(file);
        }
        
        if (!text || text.trim().length === 0) {
            throw new Error('No text could be extracted from the file');
        }
        
        updateProcessingStep('extract-status', 'complete');
        updateProgress(40);
        
        // Step 2: Clean and process text
        updateProcessingStep('clean-status', 'processing');
        const cleanedText = cleanText(text);
        appState.extractedText = cleanedText;
        
        updateProcessingStep('clean-status', 'complete');
        updateProgress(70);
        
        // Step 3: Analyze and classify
        updateProcessingStep('analyze-status', 'processing');
        const results = analyzeResume(cleanedText);
        appState.analysisResults = results;
        
        updateProcessingStep('analyze-status', 'complete');
        updateProgress(100);
        
        // Show results
        setTimeout(() => {
            showResults(results);
            appState.isProcessing = false;
        }, 500);
        
    } catch (error) {
        updateProcessingStep('extract-status', 'error');
        updateProcessingStep('clean-status', 'error');
        updateProcessingStep('analyze-status', 'error');
        throw error;
    }
}

function showProcessingStatus() {
    document.getElementById('processing-status').classList.remove('hidden');
}

function updateProcessingStep(stepId, status) {
    const statusIcon = document.getElementById(stepId);
    switch (status) {
        case 'processing':
            statusIcon.textContent = '⏳';
            break;
        case 'complete':
            statusIcon.textContent = '✅';
            break;
        case 'error':
            statusIcon.textContent = '❌';
            break;
    }
}

function updateProgress(percentage) {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    progressFill.style.width = percentage + '%';
    progressText.textContent = percentage + '%';
}

async function extractTextFromPDF(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = async function() {
            try {
                const typedarray = new Uint8Array(this.result);
                const pdf = await pdfjsLib.getDocument(typedarray).promise;
                let fullText = '';
                
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    const pageText = textContent.items.map(item => item.str).join(' ');
                    fullText += pageText + ' ';
                }
                
                resolve(fullText);
            } catch (error) {
                reject(new Error('Failed to extract text from PDF: ' + error.message));
            }
        };
        fileReader.onerror = () => reject(new Error('Failed to read file'));
        fileReader.readAsArrayBuffer(file);
    });
}

async function extractTextFromTxt(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = function() {
            resolve(this.result);
        };
        fileReader.onerror = () => reject(new Error('Failed to read text file'));
        fileReader.readAsText(file);
    });
}

function cleanText(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ') // Remove special characters
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
}

function analyzeResume(text) {
    const categoryScores = {};
    const foundSkills = new Set();
    const words = text.split(' ');
    
    // Calculate scores for each category
    Object.entries(CATEGORIES).forEach(([category, keywords]) => {
        let score = 0;
        const matchedKeywords = [];
        
        keywords.forEach(keyword => {
            const keywordWords = keyword.split(' ');
            if (keywordWords.length === 1) {
                // Single word keyword
                if (words.includes(keyword)) {
                    score += 1;
                    matchedKeywords.push(keyword);
                    foundSkills.add(keyword);
                }
            } else {
                // Multi-word keyword
                if (text.includes(keyword)) {
                    score += keywordWords.length; // Weight by number of words
                    matchedKeywords.push(keyword);
                    foundSkills.add(keyword);
                }
            }
        });
        
        categoryScores[category] = {
            score: score,
            percentage: Math.min((score / keywords.length) * 100, 100),
            matchedKeywords: matchedKeywords
        };
    });
    
    // Sort categories by score
    const sortedCategories = Object.entries(categoryScores)
        .sort(([,a], [,b]) => b.score - a.score)
        .slice(0, 10); // Top 10 categories
    
    return {
        categoryScores: categoryScores,
        topCategories: sortedCategories,
        foundSkills: Array.from(foundSkills),
        textLength: text.length,
        wordCount: words.length
    };
}

function showResults(results) {
    // Hide upload section and show results
    document.getElementById('upload-section').style.display = 'none';
    document.getElementById('results-section').classList.remove('hidden');
    
    // Render chart
    renderResultsChart(results.topCategories);
    
    // Show top matches
    renderTopMatches(results.topCategories);
    
    // Show extracted information
    renderExtractedInfo(results);
    
    // Show suggestions
    renderSuggestions(results);
    
    // Scroll to results
    document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
}

function renderResultsChart(topCategories) {
    const ctx = document.getElementById('results-chart').getContext('2d');
    
    const labels = topCategories.slice(0, 5).map(([category]) => category);
    const data = topCategories.slice(0, 5).map(([, data]) => data.percentage);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function renderTopMatches(topCategories) {
    const container = document.getElementById('top-matches');
    container.innerHTML = '';
    
    topCategories.slice(0, 5).forEach(([category, data]) => {
        const matchItem = document.createElement('div');
        matchItem.className = 'match-item';
        matchItem.innerHTML = `
            <span class="match-category">${category}</span>
            <span class="match-score">${data.percentage.toFixed(1)}%</span>
        `;
        container.appendChild(matchItem);
    });
}

function renderExtractedInfo(results) {
    // Render skills
    const skillsContainer = document.getElementById('skills-list');
    skillsContainer.innerHTML = '';
    
    if (results.foundSkills.length === 0) {
        skillsContainer.innerHTML = '<p>No specific skills detected. Try uploading a more detailed resume.</p>';
    } else {
        results.foundSkills.slice(0, 20).forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        });
    }
    
    // Render metrics
    const metricsContainer = document.getElementById('metrics-list');
    metricsContainer.innerHTML = `
        <div class="metric-item">
            <span class="metric-label">Skills Found</span>
            <span class="metric-value">${results.foundSkills.length}</span>
        </div>
        <div class="metric-item">
            <span class="metric-label">Word Count</span>
            <span class="metric-value">${results.wordCount}</span>
        </div>
        <div class="metric-item">
            <span class="metric-label">Top Match</span>
            <span class="metric-value">${results.topCategories[0][0]}</span>
        </div>
        <div class="metric-item">
            <span class="metric-label">Confidence</span>
            <span class="metric-value">${results.topCategories[0][1].percentage.toFixed(1)}%</span>
        </div>
    `;
}

function renderSuggestions(results) {
    const container = document.getElementById('suggestions-list');
    const topCategory = results.topCategories[0][0];
    const topCategoryData = results.topCategories[0][1];
    
    const suggestions = generateSuggestions(topCategory, topCategoryData, results);
    
    container.innerHTML = suggestions.map(suggestion => `
        <div class="suggestion-item">
            <h5>${suggestion.title}</h5>
            <p>${suggestion.description}</p>
        </div>
    `).join('');
}

function generateSuggestions(category, categoryData, results) {
    const suggestions = [];
    
    // Generic suggestions based on analysis
    if (categoryData.percentage < 30) {
        suggestions.push({
            title: 'Strengthen Core Skills',
            description: `Consider adding more ${category.toLowerCase()} specific skills and technologies to improve your match score.`
        });
    }
    
    if (results.foundSkills.length < 10) {
        suggestions.push({
            title: 'Expand Skill Set',
            description: 'Add more technical and soft skills to make your resume more comprehensive.'
        });
    }
    
    if (results.wordCount < 200) {
        suggestions.push({
            title: 'Add More Detail',
            description: 'Expand your resume with more detailed descriptions of your experience and projects.'
        });
    }
    
    // Category-specific suggestions
    const categoryKeywords = CATEGORIES[category];
    const missingKeywords = categoryKeywords.filter(keyword => 
        !categoryData.matchedKeywords.includes(keyword)
    ).slice(0, 5);
    
    if (missingKeywords.length > 0) {
        suggestions.push({
            title: 'Consider Adding Key Technologies',
            description: `Consider gaining experience in: ${missingKeywords.join(', ')}`
        });
    }
    
    return suggestions;
}

function handleCategoryComparison() {
    const selectedCategory = document.getElementById('category-select').value;
    const comparisonDiv = document.getElementById('category-comparison');
    
    if (!selectedCategory || !appState.analysisResults) {
        comparisonDiv.classList.add('hidden');
        return;
    }
    
    const categoryData = appState.analysisResults.categoryScores[selectedCategory];
    const categoryKeywords = CATEGORIES[selectedCategory];
    
    const matchingSkills = categoryData.matchedKeywords;
    const missingSkills = categoryKeywords.filter(keyword => 
        !matchingSkills.includes(keyword)
    ).slice(0, 10);
    
    comparisonDiv.innerHTML = `
        <div class="comparison-header">
            <h4>${selectedCategory}</h4>
            <span class="comparison-score">${categoryData.percentage.toFixed(1)}%</span>
        </div>
        <div class="comparison-details">
            <div class="comparison-section">
                <h5>Matching Skills (${matchingSkills.length})</h5>
                <div class="matching-skills">
                    ${matchingSkills.length > 0 ? matchingSkills.map(skill => `<span class="matching-skill">${skill}</span>`).join('') : '<p>No matching skills found</p>'}
                </div>
            </div>
            <div class="comparison-section">
                <h5>Consider Adding (${missingSkills.length})</h5>
                <div class="missing-skills">
                    ${missingSkills.map(skill => `<span class="missing-skill">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    comparisonDiv.classList.remove('hidden');
}

function exportResults() {
    if (!appState.analysisResults) return;
    
    const results = appState.analysisResults;
    const fileName = appState.currentFile.name.replace(/\.[^/.]+$/, "");
    
    const reportContent = generateReportContent(results, fileName);
    downloadTextFile(`${fileName}_analysis_report.txt`, reportContent);
}

function generateReportContent(results, fileName) {
    const topCategory = results.topCategories[0];
    const reportDate = new Date().toLocaleDateString();
    
    return `
RESUME ANALYSIS REPORT
=====================

File: ${fileName}
Date: ${reportDate}
Analyzed by: ResumeClassify

SUMMARY
-------
Top Match: ${topCategory[0]} (${topCategory[1].percentage.toFixed(1)}%)
Skills Found: ${results.foundSkills.length}
Word Count: ${results.wordCount}

TOP CATEGORIES
--------------
${results.topCategories.slice(0, 10).map(([category, data], index) => 
    `${index + 1}. ${category}: ${data.percentage.toFixed(1)}% (${data.score} matches)`
).join('\n')}

EXTRACTED SKILLS
---------------
${results.foundSkills.join(', ')}

RECOMMENDATIONS
---------------
${generateSuggestions(topCategory[0], topCategory[1], results).map(suggestion => 
    `• ${suggestion.title}: ${suggestion.description}`
).join('\n')}

---
Generated by ResumeClassify - AI-Powered Resume Screening
    `.trim();
}

function downloadTextFile(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function showError(message) {
    // Create a better error display
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-error);
        color: white;
        padding: 16px;
        border-radius: 8px;
        z-index: 1000;
        max-width: 400px;
        box-shadow: var(--shadow-lg);
    `;
    errorDiv.textContent = message;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        document.body.removeChild(errorDiv);
    }, 5000);
}

function resetApplication() {
    // Reset state
    appState = {
        currentFile: null,
        extractedText: '',
        analysisResults: null,
        categories: {},
        isProcessing: false
    };
    
    // Reset UI
    document.getElementById('file-input').value = '';
    document.getElementById('file-info').classList.add('hidden');
    document.getElementById('processing-status').classList.add('hidden');
    document.getElementById('results-section').classList.add('hidden');
    document.getElementById('upload-section').style.display = 'block';
    document.getElementById('category-select').value = '';
    document.getElementById('category-comparison').classList.add('hidden');
    
    // Reset progress
    updateProgress(0);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function resetProcessing() {
    appState.isProcessing = false;
    document.getElementById('processing-status').classList.add('hidden');
    updateProgress(0);
}

function scrollToUpload() {
    document.getElementById('upload-section').scrollIntoView({ behavior: 'smooth' });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}