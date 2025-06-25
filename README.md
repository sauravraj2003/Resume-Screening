# ResumeClassify - AI-Powered Resume Screening App

## Overview

ResumeClassify is a comprehensive, client-side web application that provides intelligent resume screening and job category classification. Built with modern web technologies, it offers real-time analysis of resumes across 25+ job categories without requiring any backend infrastructure.

## Features

### 🔍 **Smart Resume Analysis**
- **PDF & Text Support**: Upload and analyze both PDF and text format resumes
- **Advanced Text Extraction**: Intelligent text extraction with formatting preservation
- **Real-time Processing**: Instant analysis with progress indicators
- **Privacy-First**: All processing happens locally in your browser

### 🎯 **25+ Job Category Classification**
- Data Science
- Java Developer  
- Testing & QA
- Web Designing
- Python Developer
- DevOps Engineer
- HR & Recruitment
- Database Administration
- Network Security
- And 16 more categories...

### 📊 **Comprehensive Analysis**
- **Keyword Matching**: Advanced algorithm matching resume content to job requirements
- **Skill Extraction**: Identify technical and soft skills automatically
- **Experience Parsing**: Extract work history, education, and project details
- **Confidence Scoring**: Get percentage match scores for each category
- **Gap Analysis**: Identify missing skills for target roles

### 💡 **Career Insights**
- **Category Recommendations**: Find the best-fitting job categories
- **Skill Suggestions**: Get recommendations for skills to add
- **Resume Enhancement**: Tips to improve resume for specific roles
- **Industry Trends**: Understand current market demands

### 🚀 **Modern User Experience**
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Drag & Drop**: Intuitive file upload with visual feedback
- **Interactive Charts**: Beautiful visualizations of analysis results
- **Export Results**: Download detailed analysis reports
- **Fast & Smooth**: Optimized for speed and performance

## Technology Stack

- **Frontend**: HTML5, CSS3 (CSS Grid/Flexbox), Vanilla JavaScript
- **PDF Processing**: PDF.js for client-side PDF text extraction
- **Data Visualization**: Chart.js for interactive charts and graphs
- **NLP Processing**: Custom keyword matching and text analysis algorithms
- **Deployment**: Netlify-ready static site (no backend required)

## Quick Start

### Option 1: Netlify Deploy (Recommended)
1. Download the application files
2. Create a new site on [Netlify](https://netlify.com)
3. Drag and drop the project folder to Netlify
4. Your app will be live instantly!

### Option 2: Local Development
```bash
# Clone or download the files
# Serve with any local server (e.g., Python's built-in server)
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

## File Structure

```
resume-screening-app/
├── index.html          # Main application page
├── style.css           # Complete styling and responsive design
├── app.js              # Core application logic and algorithms
├── README.md           # This documentation file
└── netlify.toml        # Netlify configuration (optional)
```

## How It Works

### 1. **File Upload & Text Extraction**
- Users upload PDF or text files via drag-and-drop or file picker
- PDF.js library extracts text content while preserving structure
- Text is cleaned and preprocessed for analysis

### 2. **Intelligent Classification**
- Resume text is analyzed against comprehensive keyword databases
- Each of the 25 job categories has 20-30 relevant keywords
- Advanced scoring algorithm considers keyword frequency, context, and relevance
- Results are ranked by confidence scores

### 3. **Detailed Analysis**
- **Skills Identification**: Extract and categorize technical and soft skills
- **Experience Parsing**: Identify work history, education, certifications
- **Contact Extraction**: Parse names, emails, phone numbers, addresses
- **Gap Analysis**: Compare against target job requirements

### 4. **Results & Recommendations**
- Interactive dashboard showing top matching categories
- Detailed breakdown of found vs. missing keywords
- Personalized suggestions for resume improvement
- Export functionality for detailed reports

## Supported Resume Formats

- **PDF Files**: Supports most PDF formats with extractable text
- **Text Files**: Plain text (.txt) format
- **File Size**: Supports files up to 10MB

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest) 
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS/Android)

## Privacy & Security

- **100% Client-Side**: No data is sent to external servers
- **Local Processing**: All analysis happens in your browser
- **No Data Storage**: Files are processed in memory only
- **Privacy-First**: Your resume data never leaves your device

## Job Categories Supported

| Category | Keywords Coverage | Industry Focus |
|----------|------------------|----------------|
| Data Science | Python, ML, Analytics | Technology |
| Java Developer | Java, Spring, APIs | Software Development |
| Testing | QA, Selenium, Automation | Quality Assurance |
| Web Designing | HTML, CSS, UI/UX | Design & Frontend |
| Python Developer | Django, Flask, APIs | Backend Development |
| DevOps Engineer | Docker, Kubernetes, CI/CD | Infrastructure |
| HR | Recruitment, Talent Management | Human Resources |
| Database | SQL, NoSQL, Administration | Data Management |
| Network Security | Cybersecurity, Penetration Testing | Security |
| And 16 more... | Comprehensive coverage | Various Industries |

## Performance Features

- **Fast Processing**: Analyze resumes in under 3 seconds
- **Lightweight**: Total app size under 500KB
- **Optimized**: Efficient algorithms for quick results
- **Responsive**: Smooth animations and transitions
- **Accessible**: Full keyboard navigation and screen reader support

## Future Enhancements

- **AI Integration**: TensorFlow.js models for advanced analysis
- **Multi-language Support**: Support for non-English resumes
- **ATS Optimization**: Check resume compatibility with ATS systems
- **Salary Insights**: Integrate market salary data
- **Skills Trending**: Real-time skill demand analytics

## Contributing

This is an open-source project. Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For questions or issues:
- Open an issue on the repository
- Check the documentation
- Review the code comments for implementation details

---

**Built with ❤️ for developers and HR professionals**

Transform your resume screening process with intelligent, fast, and privacy-focused analysis.