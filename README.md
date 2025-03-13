# Gemini Chatbot

This AI chatbot is built using Angular 19 and styled with Tailwind CSS, leveraging Google's Gemini model for intelligent and dynamic conversations. The chatbot processes user queries, interacts with the Gemini API, and delivers AI-driven responses in real time.

## Demo
https://gemini-chatbot-model.web.app/

## Overview

This project implements a responsive, user-friendly chatbot interface that leverages Google's Gemini large language model to provide intelligent, context-aware responses. The application is built using Angular 19 framework with Tailwind CSS for styling.

## Features

- **Gemini LLM Integration**: Connects to Google's Gemini API for powerful language understanding and generation
- **Responsive Interface**: Built with Angular 19 and Tailwind CSS for a modern, mobile-friendly experience
- **Conversation History**: Maintains chat history within sessions
- **Markdown Support**: Renders formatted text, code blocks, and lists
- **Customizable Themes**: Supports light and dark modes
- **Typing Indicators**: Provides visual feedback while responses are being generated

## Technologies

- **Frontend**: Angular 19
- **Styling**: Tailwind CSS
- **AI Model**: Google Gemini
- **API Integration**: Google AI/Vertex AI

## Prerequisites

- Node.js (v18.0 or higher)
- npm (v9.0 or higher)
- Angular CLI (v19.0 or higher)
- Google Cloud account with access to Gemini API

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/AniketPotdar-AP/Gemini_chatbot_frontend.git
   cd gemini-chatbot
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your environment variables:
   - Create a `.env` file in the project root
   - Add your Gemini API key:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

4. Start the development server:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`

## Usage

1. Type your message in the input field at the bottom of the chat interface
2. Press Enter or click the send button to submit your query
3. The chatbot will process your input and generate a response
4. Continue the conversation as needed

## Configuration

You can customize the behavior of the chatbot by modifying the following files:

- `src/environments/environment.ts`: API endpoints and keys
- `src/app/shared/services/gemini.service.ts`: Model parameters and prompt engineering
- `tailwind.config.js`: Custom theme configuration

## Deployment

To build the application for production:

```
ng build --configuration=production
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Google Gemini](https://deepmind.google/technologies/gemini/)
- [Angular Framework](https://angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)
