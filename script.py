# First, let's analyze the dataset to understand the job categories and their distribution
import pandas as pd
import numpy as np
from collections import Counter

# Load the resume dataset
try:
    df = pd.read_csv('UpdatedResumeDataSet.csv')
    print("Dataset loaded successfully!")
    print(f"Dataset shape: {df.shape}")
    print(f"Columns: {df.columns.tolist()}")
    print("\nFirst few rows:")
    print(df.head())
    
    # Analyze job categories
    print("\nJob category distribution:")
    category_counts = df['Category'].value_counts()
    print(category_counts)
    
    # Get unique categories
    unique_categories = df['Category'].unique()
    print(f"\nTotal unique categories: {len(unique_categories)}")
    print("Categories:", unique_categories.tolist())
    
    # Sample some resume text to understand the format
    print("\nSample resume texts (first 500 characters):")
    for i in range(3):
        print(f"\nCategory: {df.iloc[i]['Category']}")
        print(f"Resume text: {df.iloc[i]['Resume'][:500]}...")
        
except Exception as e:
    print(f"Error loading dataset: {e}")
    # Create a sample dataset structure if file not found
    sample_data = {
        'Category': ['Data Science', 'HR', 'Web Designing', 'Java Developer', 'Testing'],
        'Resume': [
            'Skills: Python, Machine Learning, Data Analysis, Statistics',
            'Human Resources, Recruitment, Employee Relations, HR Management',
            'Web Development, HTML, CSS, JavaScript, React, Node.js',
            'Java Programming, Spring Framework, Hibernate, REST APIs',
            'Software Testing, QA, Automation Testing, Selenium, Test Cases'
        ]
    }
    df = pd.DataFrame(sample_data)
    print("Created sample dataset")
    print(df)