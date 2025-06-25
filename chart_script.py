import plotly.graph_objects as go
import plotly.express as px

# Data from the provided JSON
categories = ["File Upload", "PDF Processing", "Text Classify", "User Interface", "Deployment Ease", "Performance", "Privacy", "Mobile Support", "Real-time", "Customization"]
original_scores = [8, 7, 9, 6, 4, 6, 5, 3, 5, 7]
webapp_scores = [9, 8, 8, 9, 10, 9, 10, 9, 10, 8]

# Create horizontal bar chart
fig = go.Figure()

# Add original app bars
fig.add_trace(go.Bar(
    y=categories,
    x=original_scores,
    name='Original',
    orientation='h',
    marker_color='#1FB8CD',
    cliponaxis=False
))

# Add web app bars
fig.add_trace(go.Bar(
    y=categories,
    x=webapp_scores,
    name='Enhanced',
    orientation='h',
    marker_color='#FFC185',
    cliponaxis=False
))

# Update layout
fig.update_layout(
    title='Resume App: Original vs Enhanced',
    xaxis_title='Score',
    yaxis_title='Features',
    barmode='group',
    legend=dict(orientation='h', yanchor='bottom', y=1.05, xanchor='center', x=0.5)
)

# Update axes
fig.update_xaxes(range=[0, 10])
fig.update_yaxes(categoryorder='array', categoryarray=categories[::-1])

# Save the chart
fig.write_image('resume_app_comparison.png')