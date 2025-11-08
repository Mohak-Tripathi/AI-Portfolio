export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  technologies: string[];
}

// Placeholder projects - Replace with your actual projects
export const projects: Project[] = [
  {
    id: "1",
    title: "AI Chatbot",
    description: "An intelligent conversational AI chatbot built using natural language processing. Features context-aware responses and multi-turn conversations.",
    image: "/placeholder.svg",
    liveUrl: "https://your-app.streamlit.app",
    technologies: ["Python", "Streamlit", "OpenAI", "LangChain"],
  },
  {
    id: "2",
    title: "Image Recognition System",
    description: "A computer vision application that classifies and detects objects in images using deep learning models trained on custom datasets.",
    image: "/placeholder.svg",
    liveUrl: "https://your-app.streamlit.app",
    technologies: ["Python", "TensorFlow", "Streamlit", "OpenCV"],
  },
  {
    id: "3",
    title: "Text Summarization Tool",
    description: "An AI-powered tool that automatically generates concise summaries from long documents using advanced NLP techniques.",
    image: "/placeholder.svg",
    liveUrl: "https://your-app.streamlit.app",
    technologies: ["Python", "Transformers", "Streamlit", "Hugging Face"],
  },
  {
    id: "4",
    title: "Sentiment Analysis Dashboard",
    description: "A real-time sentiment analysis dashboard that processes social media data and visualizes emotional trends using machine learning.",
    image: "/placeholder.svg",
    liveUrl: "https://your-app.streamlit.app",
    technologies: ["Python", "NLTK", "Streamlit", "Plotly"],
  },
  {
    id: "5",
    title: "Recommendation Engine",
    description: "A personalized recommendation system that suggests content based on user preferences using collaborative filtering algorithms.",
    image: "/placeholder.svg",
    liveUrl: "https://your-app.streamlit.app",
    technologies: ["Python", "scikit-learn", "Streamlit", "Pandas"],
  },
  {
    id: "6",
    title: "Document Q&A System",
    description: "An AI system that answers questions about uploaded documents using retrieval-augmented generation and vector databases.",
    image: "/placeholder.svg",
    liveUrl: "https://your-app.streamlit.app",
    technologies: ["Python", "LangChain", "Streamlit", "ChromaDB"],
  },
];

