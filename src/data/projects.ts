export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  technologies: string[];
}

// Placeholder projects - Replace with your actual projects
// export const projects: Project[] = [
//   {
//     id: "1",
//     title: "Social Media Content Generator",
//     description:
//       "Built an AI-powered social media content generator using LangChain parallel chains and Google Gemini that creates platform-specific posts from web search results. Implemented RunnableParallel to generate LinkedIn, Twitter, and Instagram content simultaneously, with custom prompt templates for each platform. Integrated TavilySearch for real-time web research and deployed a Streamlit interface for interactive content generation. Gained expertise in parallel chain execution, prompt engineering, and multi-platform content optimization.",
//     image: "/images/Screenshot (143).png",
//     liveUrl: "https://daily-assignment-ps-xoiqjh4p96c9arufyfkefp.streamlit.app",
//     technologies: [
//       "Python",
//       "Streamlit",
//       "LangChain",
//       "Google Gemini",
//       "TavilySearch",
//     ],
//   },
//   {
//     id: "2",
//     title: "Sequential Chain Report Generator",
//     description:
//       "Built an AI-powered report generator using LangChain sequential chains and Google Gemini that creates detailed markdown reports followed by concise 5-point summaries. Implemented a two-stage pipeline where the report chain generates comprehensive analysis on any topic, and the summary chain automatically processes the report to extract key insights. Designed custom prompts for public health analysis with India-urban context, featuring structured sections and evidence-based content. Deployed a Streamlit interface with configurable model settings, tabbed output display, and download functionality. Gained expertise in sequential chain composition, intermediate result handling, and structured content generation workflows.",
//     image: "/images/Screenshot (144).png",
//     liveUrl: "https://bljccmwrgyfdusbwxwtzyg.streamlit.app",
//     technologies: ["Python", "Streamlit", "LangChain", "Google Gemini"],
//   },

//   {
//     id: "3",
//     title: "Blog Topic Generator",
//     description:
//       "Developed an AI-powered blog content generator using LangChain's advanced chain composition with RunnableParallel, RunnableLambda, and RunnablePassthrough. Built a multi-stage pipeline that transforms a broad domain into a complete blog outline: generating a niche topic, creating a catchy title, and writing a comprehensive summary. Implemented complex chain orchestration with data transformation bridges to pass outputs between sequential stages while maintaining parallel execution capabilities. Created a Streamlit interface with formatted markdown output, step-by-step component visualization, and export functionality. Gained expertise in advanced LangChain runnables, chain composition patterns, and multi-step content generation workflows.",
//     image: "/images/Screenshot (144).png",
//     liveUrl: "https://bljccmwrgyfdusbwxwtzyg.streamlit.app",
//     // liveUrl: "https://fgsg6zkv8paybjjblplc8q.streamlit.app/",
//     technologies: ["Python", "Streamlit", "LangChain", "Google Gemini"],
//   },

//   {
//     id: "4",
//     title: "Automated Customer Review Insight & Reply Generator",
//     description: "Built an intelligent customer review analysis system using LangChain parallel chains and conditional routing with Google Gemini. Implemented a fan-out architecture that simultaneously extracts sentiment, pros/cons, star ratings, and summary bullets from reviews. Created a RunnableBranch system that generates context-aware replies based on sentiment classification (positive, negative, mixed, neutral). Designed custom prompt templates with strict output contracts and JSON coercion for structured data extraction. Deployed a Streamlit interface with tabbed output, download functionality, and comprehensive analysis visualization. Gained expertise in parallel chain execution, conditional routing, structured output parsing, and automated customer service workflows.",
//     // image: "/images/Screenshot (146).png",
//     image: "/images/Screenshot (145).png",
//     liveUrl: "https://o4r6qpwhnemfyvxbbjcidb.streamlit.app/",
//     technologies: ["Python", "Streamlit", "LangChain", "Google Gemini"],
//   },
//   {
//     id: "10",
//     title: "AI Travel Assistant",
//     description: "Developed an AI-powered travel assistant using LangChain agents with Google Gemini that handles natural language queries for weather information, flight searches, web research, and calculations. Implemented custom tools including WeatherStack API integration for real-time weather data, AviationStack API for flight information from Delhi to major Indian cities, DuckDuckGo search for travel research, and arithmetic operations. Created an agent-based system that intelligently selects and executes appropriate tools based on user queries. Built a Streamlit interface with conversation history, verbose execution logs, and example query suggestions. Gained expertise in agent architecture, tool integration, API orchestration, and multi-tool agent workflows.",
//     image: "/images/Screenshot (147).png",
//     liveUrl: "https://mrltbfdtatxzyw7ngiebjt.streamlit.app/",
//     technologies: ["Python", "Streamlit", "LangChain", "Google Gemini", "DuckDuckGo Search", "WeatherStack API", "AviationStack API"],
//   },

//   {
//     id: "11",
//     title: "AI-Powered Currency Converter",
//     description: "Built an AI-powered currency converter using Google Gemini and LangChain that interprets natural language queries to provide real-time exchange rates. Implemented custom tools for API integration, created an agent-based system for intelligent query processing, and deployed a user-friendly Streamlit web interface. Gained expertise in agentic AI, tool calling, and production-ready application development with secure API management.",
//     image: "/images/Screenshot (148).png",
//     liveUrl: "https://mrltbfdtatxzyw7ngiebjt.streamlit.app/",
//     technologies: ["Python", "Streamlit", "LangChain", "Google Gemini", "ExchangeRate API"],
//   },
//   {
//     id: "12",
//     title: "Multi-File RAG ChatBot",
//     description: "Developed a sophisticated multi-file RAG (Retrieval-Augmented Generation) chatbot using LangChain, PostgreSQL with pgvector, and Google Gemini embeddings. Implemented document loading for PDF, CSV, and TXT files with RecursiveCharacterTextSplitter for intelligent chunking. Created a dual-path retrieval system that first searches uploaded documents via vector similarity, then falls back to Tavily web search when context is insufficient. Built a Streamlit interface with file upload, chat history, source attribution, and real-time document processing. Gained expertise in vector databases, semantic search, embedding models, hybrid retrieval strategies, and production RAG system architecture.",
//     image: "/images/Screenshot (149).png",
//     liveUrl: "https://tgyrbtqdpswuuifbgbqvqm.streamlit.app/",
//     technologies: ["Python", "Streamlit", "LangChain", "Google Gemini", "PostgreSQL", "pgvector", "TavilySearch", "PyMuPDF"],
//   },

//   {
//     id: "13",
//     title: "LangGraph DAG Workflow",
//     description: "Built a directed acyclic graph (DAG) workflow using LangGraph and Google Gemini for automated research and summarization. Implemented a three-stage pipeline with StateGraph: question normalization, LLM-powered research, and bullet-point summarization. Created state management with TypedDict for type-safe workflow execution and integrated graph visualization using Mermaid diagrams. Designed a Streamlit interface with step-by-step execution tracking, detailed workflow visualization, and downloadable results. Gained expertise in graph-based workflows, state management, DAG architecture, and LangGraph framework fundamentals.",
//     image: "/images/Screenshot (150).png",
//     liveUrl: "https://cyg9vdnmjbjnu5rnxv2nhr.streamlit.app/",
//     technologies: ["Python", "Streamlit", "LangGraph", "LangChain", "Google Gemini"],
//   },

//   {
//     id: "14",
//     title: "LangGraph Conditional Routing",
//     description: "Developed an intelligent question-answering system using LangGraph with conditional routing that automatically selects between knowledge base lookup and LLM generation. Implemented a decision node that canonicalizes queries and matches against a predefined knowledge base, routing to either fast KB retrieval or dynamic LLM responses. Created a StateGraph workflow with conditional edges, path tracking, and metadata tagging for source attribution. Built a Streamlit interface with path visualization, step-by-step execution details, graph diagrams, and knowledge base management. Gained expertise in conditional routing, graph-based decision making, knowledge base integration, and hybrid retrieval strategies.",
//     image: "/images/Screenshot (151).png",
//     liveUrl: "https://bunu83tajexvbdaaev3swn.streamlit.app/",
//     technologies: ["Python", "Streamlit", "LangGraph", "LangChain", "Google Gemini"],
//   },

//   {
//     id: "15",
//     title: "LangGraph Math Agent",
//     description: "Built a math-solving agent using LangGraph with tool calling capabilities for division and multiplication operations. Implemented ToolNode integration with custom divide and multiply functions, created conditional edges using tools_condition to route between LLM reasoning and tool execution. Designed a MessagesState-based workflow that allows the agent to intelligently decide when to use tools versus answering directly. Built a Streamlit interface with conversation flow visualization, detailed message analysis, tool call tracking, and graph visualization. Gained expertise in tool binding, conditional tool execution, agent architecture, and LangGraph prebuilt components.",
//     image: "/images/Screenshot (153).png",
//     liveUrl: "https://ai-portfolio-43xhlnhzd4kras8dcjkfxb.streamlit.app/",
//     technologies: ["Python", "Streamlit", "LangGraph", "LangChain", "Google Gemini"],
//   },

//   {
//     id: "16",
//     title: "LangGraph ReAct Agent",
//     description: "Developed a ReAct (Reasoning + Acting) agent using LangGraph with persistent memory and multi-step arithmetic problem solving. Implemented three mathematical tools (add, multiply, divide) with proper error handling, created a conversational agent that maintains context across interactions using MemorySaver checkpointer. Built a StateGraph workflow with assistant and tool nodes, conditional routing for tool calls, and thread-based conversation management. Designed a Streamlit chat interface with tool call visualization, conversation history, thread ID tracking, and verbose execution modes. Gained expertise in ReAct pattern implementation, persistent memory, multi-turn conversations, and production-ready agent architectures.",
//     image: "/images/Screenshot (154).png",
//     liveUrl: "https://tcgudtyrcmyzhuspabr7ko.streamlit.app/",
//     technologies: ["Python", "Streamlit", "LangGraph", "LangChain", "Google Gemini"],
//   },

//   {
//     id: "17",
//     title: "CrewAI Content Workflow",
//     description: "Built a collaborative multi-agent content generation system using CrewAI with four specialized agents working sequentially: Researcher (web search), Drafter (content creation), Critic (feedback), and Finalizer (polishing). Implemented TavilySearchTool integration for real-time web research, created task dependencies with context passing between agents, and designed a sequential process workflow. Built a Streamlit interface with verbose execution logs, step-by-step agent output visualization, and comprehensive workflow tracking. Gained expertise in multi-agent systems, agent collaboration patterns, CrewAI framework, task orchestration, and production-ready agentic workflows.",
//     image: "/images/Screenshot (155).png",
//     liveUrl:
//       "https://mohak-tr-day016-langgrapg-react-agentstreamlit-app-qnblpk.streamlit.app/",
//     technologies: ["Python", "Streamlit", "CrewAI", "Google Gemini", "TavilySearch"],
//   },

//   {
//     id: "13",
//     title: "Document Q&A System",
//     description:
//       "An AI system that answers questions about uploaded documents using retrieval-augmented generation and vector databases.",
//     image: "/images/Screenshot (157).png",
//     liveUrl: "https://day17crewaiintro-gt7k5e9trnr3vxgslggyf3.streamlit.app/",
//     technologies: ["Python", "LangChain", "Streamlit", "ChromaDB"],
//   },
//   {
//     id: "14",
//     title: "Document Q&A System",
//     description:
//       "An AI system that answers questions about uploaded documents using retrieval-augmented generation and vector databases.",
//     image: "/images/Screenshot (158).png",
//     liveUrl:
//       "https://picturequeryprogressionschoolassignment-eu4ppbrdbenxnycbzncukw.streamlit.app/",
//     technologies: ["Python", "LangChain", "Streamlit", "ChromaDB"],
//   },
// ];


export const projects: Project[] = [
  {
    id: "1",
    title: "Social Media Content Generator",
    description: "Built an AI-powered social media content generator using LangChain parallel chains and Google Gemini that creates platform-specific posts from web search results. Implemented RunnableParallel to generate LinkedIn, Twitter, and Instagram content simultaneously, with custom prompt templates for each platform. Integrated TavilySearch for real-time web research and deployed a Streamlit interface for interactive content generation. Gained expertise in parallel chain execution, prompt engineering, and multi-platform content optimization.",
    image: "/images/Screenshot (143).png",
    liveUrl: "https://daily-assignment-ps-xoiqjh4p96c9arufyfkefp.streamlit.app",
    technologies: ["Python", "Streamlit", "LangChain", "Google Gemini", "TavilySearch"],
  },
  {
    id: "2",
    title: "Sequential Chain Report Generator",
    description: "Built an AI-powered report generator using LangChain sequential chains and Google Gemini that creates detailed markdown reports followed by concise 5-point summaries. Implemented a two-stage pipeline where the report chain generates comprehensive analysis on any topic, and the summary chain automatically processes the report to extract key insights. Designed custom prompts for public health analysis with India-urban context, featuring structured sections and evidence-based content. Deployed a Streamlit interface with configurable model settings, tabbed output display, and download functionality. Gained expertise in sequential chain composition, intermediate result handling, and structured content generation workflows.",
    image: "/images/Screenshot (146).png",
    liveUrl: "https://o4r6qpwhnemfyvxbbjcidb.streamlit.app/",
    technologies: ["Python", "Streamlit", "LangChain", "Google Gemini"],
  },
  {
    id: "3",
    title: "Blog Topic Generator",
    description: "Developed an AI-powered blog content generator using LangChain's advanced chain composition with RunnableParallel, RunnableLambda, and RunnablePassthrough. Built a multi-stage pipeline that transforms a broad domain into a complete blog outline: generating a niche topic, creating a catchy title, and writing a comprehensive summary. Implemented complex chain orchestration with data transformation bridges to pass outputs between sequential stages while maintaining parallel execution capabilities. Created a Streamlit interface with formatted markdown output, step-by-step component visualization, and export functionality. Gained expertise in advanced LangChain runnables, chain composition patterns, and multi-step content generation workflows.",
    image: "/images/Screenshot (144).png",
    liveUrl: "https://bljccmwrgyfdusbwxwtzyg.streamlit.app",
    technologies: ["Python", "Streamlit", "LangChain", "Google Gemini"],
  },
  {
    id: "4",
    title: "Automated Customer Review Insight & Reply Generator",
    description: "Built an intelligent customer review analysis system using LangChain parallel chains and conditional routing with Google Gemini. Implemented a fan-out architecture that simultaneously extracts sentiment, pros/cons, star ratings, and summary bullets from reviews. Created a RunnableBranch system that generates context-aware replies based on sentiment classification (positive, negative, mixed, neutral). Designed custom prompt templates with strict output contracts and JSON coercion for structured data extraction. Deployed a Streamlit interface with tabbed output, download functionality, and comprehensive analysis visualization. Gained expertise in parallel chain execution, conditional routing, structured output parsing, and automated customer service workflows.",
    image: "/images/Screenshot (145).png",
    
    liveUrl: "https://fgsg6zkv8paybjjblplc8q.streamlit.app/",
    technologies: ["Python", "Streamlit", "LangChain", "Google Gemini"],
  },
  {
    id: "5",
    title: "AI Travel Assistant",
    description: "Developed an AI-powered travel assistant using LangChain agents with Google Gemini that handles natural language queries for weather information, flight searches, web research, and calculations. Implemented custom tools including WeatherStack API integration for real-time weather data, AviationStack API for flight information from Delhi to major Indian cities, DuckDuckGo search for travel research, and arithmetic operations. Created an agent-based system that intelligently selects and executes appropriate tools based on user queries. Built a Streamlit interface with conversation history, verbose execution logs, and example query suggestions. Gained expertise in agent architecture, tool integration, API orchestration, and multi-tool agent workflows.",
    image: "/images/Screenshot (147).png",
    liveUrl: "https://mrltbfdtatxzyw7ngiebjt.streamlit.app/",
    technologies: ["Python", "Streamlit", "LangChain", "Google Gemini", "DuckDuckGo Search", "WeatherStack API", "AviationStack API"],
  },
  {
    id: "6",
    title: "AI-Powered Currency Converter",
    description: "Built an AI-powered currency converter using Google Gemini and LangChain that interprets natural language queries to provide real-time exchange rates. Implemented custom tools for API integration, created an agent-based system for intelligent query processing, and deployed a user-friendly Streamlit web interface. Gained expertise in agentic AI, tool calling, and production-ready application development with secure API management.",
    image: "/images/Screenshot (148).png",
    // NOTE: This URL might need to be different - verify if Travel Assistant and Currency Converter are separate apps
    liveUrl: "https://tgyrbtqdpswuuifbgbqvqm.streamlit.app/",
    technologies: ["Python", "Streamlit", "LangChain", "Google Gemini", "ExchangeRate API"],
  },
  {
    id: "7",
    title: "Multi-File RAG ChatBot",
    description: "Developed a sophisticated multi-file RAG (Retrieval-Augmented Generation) chatbot using LangChain, PostgreSQL with pgvector, and Google Gemini embeddings. Implemented document loading for PDF, CSV, and TXT files with RecursiveCharacterTextSplitter for intelligent chunking. Created a dual-path retrieval system that first searches uploaded documents via vector similarity, then falls back to Tavily web search when context is insufficient. Built a Streamlit interface with file upload, chat history, source attribution, and real-time document processing. Gained expertise in vector databases, semantic search, embedding models, hybrid retrieval strategies, and production RAG system architecture.",
    image: "/images/Screenshot (149).png",
    liveUrl: "https://cyg9vdnmjbjnu5rnxv2nhr.streamlit.app/",
    technologies: ["Python", "Streamlit", "LangChain", "Google Gemini", "PostgreSQL", "pgvector", "TavilySearch", "PyMuPDF"],
  },
  {
    id: "8",
    title: "LangGraph DAG Workflow",
    description: "Built a directed acyclic graph (DAG) workflow using LangGraph and Google Gemini for automated research and summarization. Implemented a three-stage pipeline with StateGraph: question normalization, LLM-powered research, and bullet-point summarization. Created state management with TypedDict for type-safe workflow execution and integrated graph visualization using Mermaid diagrams. Designed a Streamlit interface with step-by-step execution tracking, detailed workflow visualization, and downloadable results. Gained expertise in graph-based workflows, state management, DAG architecture, and LangGraph framework fundamentals.",
    image: "/images/Screenshot (150).png",
    liveUrl: "https://bunu83tajexvbdaaev3swn.streamlit.app/",
    technologies: ["Python", "Streamlit", "LangGraph", "LangChain", "Google Gemini"],
  },
  {
    id: "9",
    title: "LangGraph Conditional Routing",
    description: "Developed an intelligent question-answering system using LangGraph with conditional routing that automatically selects between knowledge base lookup and LLM generation. Implemented a decision node that canonicalizes queries and matches against a predefined knowledge base, routing to either fast KB retrieval or dynamic LLM responses. Created a StateGraph workflow with conditional edges, path tracking, and metadata tagging for source attribution. Built a Streamlit interface with path visualization, step-by-step execution details, graph diagrams, and knowledge base management. Gained expertise in conditional routing, graph-based decision making, knowledge base integration, and hybrid retrieval strategies.",
    image: "/images/Screenshot (151).png",
    liveUrl: "https://ai-portfolio-43xhlnhzd4kras8dcjkfxb.streamlit.app/",
    technologies: ["Python", "Streamlit", "LangGraph", "LangChain", "Google Gemini"],
  },
  {
    id: "10",
    title: "LangGraph Math Agent",
    description: "Built a math-solving agent using LangGraph with tool calling capabilities for division and multiplication operations. Implemented ToolNode integration with custom divide and multiply functions, created conditional edges using tools_condition to route between LLM reasoning and tool execution. Designed a MessagesState-based workflow that allows the agent to intelligently decide when to use tools versus answering directly. Built a Streamlit interface with conversation flow visualization, detailed message analysis, tool call tracking, and graph visualization. Gained expertise in tool binding, conditional tool execution, agent architecture, and LangGraph prebuilt components.",
    image: "/images/Screenshot (153).png",
    liveUrl: "https://tcgudtyrcmyzhuspabr7ko.streamlit.app/",
    technologies: ["Python", "Streamlit", "LangGraph", "LangChain", "Google Gemini"],
  },
  {
    id: "11",
    title: "LangGraph ReAct Agent",
    description: "Developed a ReAct (Reasoning + Acting) agent using LangGraph with persistent memory and multi-step arithmetic problem solving. Implemented three mathematical tools (add, multiply, divide) with proper error handling, created a conversational agent that maintains context across interactions using MemorySaver checkpointer. Built a StateGraph workflow with assistant and tool nodes, conditional routing for tool calls, and thread-based conversation management. Designed a Streamlit chat interface with tool call visualization, conversation history, thread ID tracking, and verbose execution modes. Gained expertise in ReAct pattern implementation, persistent memory, multi-turn conversations, and production-ready agent architectures.",
    image: "/images/Screenshot (154).png",
    liveUrl: "https://mohak-tr-day016-langgrapg-react-agentstreamlit-app-qnblpk.streamlit.app/",
    technologies: ["Python", "Streamlit", "LangGraph", "LangChain", "Google Gemini"],
  },
  {
    id: "12",
    title: "CrewAI Content Workflow",
    description: "Built a collaborative multi-agent content generation system using CrewAI with four specialized agents working sequentially: Researcher (web search), Drafter (content creation), Critic (feedback), and Finalizer (polishing). Implemented TavilySearchTool integration for real-time web research, created task dependencies with context passing between agents, and designed a sequential process workflow. Built a Streamlit interface with verbose execution logs, step-by-step agent output visualization, and comprehensive workflow tracking. Gained expertise in multi-agent systems, agent collaboration patterns, CrewAI framework, task orchestration, and production-ready agentic workflows.",
    image: "/images/Screenshot (155).png",
    liveUrl: "https://day17crewaiintro-gt7k5e9trnr3vxgslggyf3.streamlit.app/",
    technologies: ["Python", "Streamlit", "CrewAI", "Google Gemini", "TavilySearch"],
  },
  {
    id: "13",
    title: "Document Q&A System",
    description: "An AI system that answers questions about uploaded documents using retrieval-augmented generation and vector databases.",
    image: "/images/Screenshot (158).png",
    // NOTE: Verify this URL - it might be different
    liveUrl: "https://chat-bot-with-memory-mt.streamlit.app/",
    technologies: ["Python", "LangChain", "Streamlit", "ChromaDB"],
  },
  {
    id: "14",
    title: "Picture Query Progression System",
    description: "An AI system that processes picture queries and provides progressive responses using advanced document understanding and retrieval-augmented generation.",
    image: "/images/Screenshot (157).png",
    liveUrl: "https://picturequeryprogressionschoolassignment-eu4ppbrdbenxnycbzncukw.streamlit.app/",
    technologies: ["Python", "LangChain", "Streamlit", "ChromaDB"],
  },
];