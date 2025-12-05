# TrustWise AI: One Stop Solution for Smart Loan Assistance


## Project Overview
TrustWise AI is a multilingual conversational AI assistant designed to help users understand loan eligibility, guide them through the loan application process, and provide basic financial literacy tips. The assistant supports both voice and text interactions across multiple languages.

### Vision
"Making loans simple and accessible for everyone through conversations that truly understand you."

## Features

### 1. Multilingual Voice-First Loan Guide (`/loan-guide`)
- **Interactive Voice Agent**: A step-by-step guide that mimics a real loan officer. It asks questions in the user's preferred language using **Sarvam AI's** high-quality Text-to-Speech (TTS).
- **Real-Time Speech Recognition**: Users can answer naturally with their voice. The system records, processes, and transcribes audio in real-time using Sarvam AI's Speech-to-Text (STT).
- **Hybrid Interaction**: Seamlessly switch between voice and text inputs during the application process.

### 2. Intelligent Loan Prediction Engine
- **Smart Analysis**: The `/api/predict-loan` endpoint analyzes the structured data gathered from the user's conversation.
- **Tailored Recommendations**: Suggests specific loan types (Home, Personal, Education, etc.) based on income, requirements, and profile.
- **Visual Feedback**: Provides immediate feedback and routing to relevant loan details.

### 3. Conversational AI Assistant (`/loan-chat`)
- **Context-Aware Chat**: Powered by **LangChain** and **OpenAI GPT-4**, the assistant understands context and previous interactions.
- **Financial Domain Knowledge**: Specifically tuned to answer queries about interest rates, EMI calculations, and documentation requirements.
- **Multilingual Support**: Breaks down language barriers by communicating in regional languages.

### 4. Financial Empowerment Hub
- **Jargon-Free Education**: Simplifies complex financial terms for first-time borrowers.
- **Interactive Tools**: Includes visualizers and calculators to help users plan their finances better.

## Hackathon Project Review

### What We Built
During this hackathon, we focused on solving the **accessibility gap** in financial services. We built **TrustWise AI**, a platform that doesn't just digitize forms but "humanizes" the digital experience through voice.

### Key Achievements
- **End-to-End Voice Integration**: Successfully integrated **Sarvam AI** to enable a truly conversational experience in Indian languages, moving beyond simple text chatbots.
- **Dynamic Loan Guide Flow**: Implemented a state-aware questionnaire engine (`LoanGuide.tsx`) that manages the flow of conversation, handles audio recording states, and aggregates user data for analysis.
- **Real-Time Processing**: Overcame challenges with browser-based audio recording and API latency to create a smooth user experience.
- **PWA Implementation**: Built as a responsive Web Application to ensure accessibility across all devices without requiring app store downloads.

### Technical Highlights
- **Architecture**: A robust Next.js 15 application leveraging Server Actions and API routes for a secure backend.
- **AI Orchestration**: Used LangChain to manage prompt engineering and model interactions, ensuring accurate financial advice.
- **State Management**: Complex frontend state management to handle the asynchronous nature of voice recording, TTS playback, and API loading states.

## Technical Architecture

### Tech Stack

#### Frontend Technologies
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- React Icons
- Radix UI Components
- React Hook Form + Zod (form validation)

#### Backend Technologies
- **Next.js API Routes** (serverless functions)
- LangChain for AI orchestration
- OpenAI GPT-4 for conversational AI
- Sarvam AI for multilingual TTS (Text-to-Speech)

#### Database & Storage
- Firebase/Firestore (optional)
- In-memory session storage for chat history

### Key API Routes

TrustWise AI uses Next.js API Routes as its backend:

#### 1. Chat & Conversation APIs
- `/api/chat` - Main loan advisory chat interface
- `/api/finance-chat` - Financial planning and advisory
- `/api/check-understanding` - Validates user comprehension
- `/api/summarize-chat` - Generates conversation summaries

#### 2. Loan Processing APIs
- `/api/predict-loan` - Loan eligibility prediction
- `/api/loam-application` - Loan application processing
- `/api/visualize-chat` - Creates visual representations of loan data

#### 3. AI Enhancement APIs
- `/api/openai/rephrase` - Rephrases complex financial terms

### Key Components

#### 1. Chat Interface
- Real-time voice and text communication
- Automatic voice activity detection
- Dynamic recording duration based on response length
- Multilingual support with Sarvam AI TTS

#### 2. Flow Chart Visualization
- Interactive loan application process visualization
- Dynamic card animations
- Auto-scrolling to latest steps
- Progress tracking

#### 3. Financial Literacy Integration
- Personalized financial tips
- Interactive calculators (SIP, EMI, Tax, etc.)
- Visual data representation

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- OpenAI API key (required)
- Sarvam AI API key (optional, for TTS)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/trustwise-ai.git
cd trustwise-ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Copy the example environment file:
```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your API keys:
```env
# Required: Get from https://platform.openai.com/api-keys
OPENAI_API_KEY=your_actual_openai_api_key

# Optional: Get from https://www.sarvam.ai/
SARVAM_AI_API_KEY=your_actual_sarvam_api_key

# Optional: Firebase config (if using database features)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## How to Use TrustWise AI

### 1. Start with the Loan Guide
- Navigate to the **Loan Guide** section from the home page.
- **Select your language** (e.g., Hindi, Tamil, English).
- The AI will greet you audibly. **Speak your answer** clearly when the microphone icon pulses red.
- You can also **type your answer** if you prefer.
- Answer the questions about your income, age, and loan needs.
- At the end, click **"Predict Loan Type"** to see your personalized recommendation.

### 2. Chat with the Advisor
- Go to the **Loan Chat** page (`/loan-chat`).
- Ask any specific questions like *"What is the current home loan interest rate?"* or *"How much EMI will I pay for 5 lakhs?"*.
- The bot will remember your context from the Loan Guide if you've completed it.

### 3. Explore Financial Tools
- Visit the **Financial Empowerment Hub**.
- Use the **SIP Calculator** to see how small monthly investments grow.
- Check the **Tax Visualizer** to understand your tax slab.
- Read the **Jargon Buster** cards to learn what terms like "Repo Rate" mean.

## Project Structure
```
trustwise-ai/
├── src/
│   ├── app/
│   │   ├── api/                    # Backend API Routes
│   │   │   ├── chat/               # Main chat API
│   │   │   ├── finance-chat/       # Financial advisor API
│   │   │   ├── predict-loan/       # Loan prediction
│   │   │   ├── summarize-chat/     # Chat summarization
│   │   │   └── visualize-chat/     # Data visualization
│   │   ├── loan-chat/              # Chat page
│   │   ├── loan-assist/            # Loan assistance page
│   │   ├── financial-advisor/      # Financial advisor page
│   │   ├── financial-literacy/     # Education modules
│   │   └── page.tsx                # Home page
│   ├── components/
│   │   ├── LandingPage/
│   │   ├── LoanChat/
│   │   ├── FlowChart/
│   │   ├── FinancialAdvisorChat/
│   │   ├── Basic/                  # Navbar, Footer
│   │   └── VoiceAssistant/
│   └── lib/                        # Utility functions
├── public/
│   ├── images/                     # Static images
│   └── TrustWiseAI.mp4             # Demo video
├── .env.local                      # Environment variables (not in git)
├── .env.example                    # Template for env variables
├── package.json
├── tailwind.config.ts
└── next.config.ts
```

## Key Features Implementation

### Voice Activity Detection
The system uses Web Audio API for real-time voice activity detection:
```typescript
scriptProcessorRef.current!.onaudioprocess = (event) => {
  const inputData = event.inputBuffer.getChannelData(0);
  let volume = 0;
  for (let i = 0; i < inputData.length; i++) {
    volume += Math.abs(inputData[i]);
  }
  volume /= inputData.length;

  if (volume > 0.02) {
    if (!isRecording && mediaRecorderRef.current!.state !== 'recording') {
      mediaRecorderRef.current!.start();
      setIsRecording(true);
    }
  } else if (isRecording && mediaRecorderRef.current!.state === 'recording') {
    mediaRecorderRef.current!.stop();
    setIsRecording(false);
  }
};
```

### Dynamic Recording Duration
Recording duration is calculated based on response length:
```typescript
const calculateRecordingDuration = (response: string) => {
  const wordCount = response.split(' ').length;
  const baseDuration = 5000; // 5 seconds minimum
  const perWordDuration = 200; // 200ms per word
  const maxDuration = 30000; // 30 seconds maximum
  
  const calculatedDuration = baseDuration + (wordCount * perWordDuration);
  return Math.min(calculatedDuration, maxDuration);
};
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Sarvam AI for TTS capabilities
- OpenAI for LLM integration
- Firebase for backend services
- All team members for their contributions
