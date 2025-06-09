# TaskEasy - Team Task Management App

A lightweight web application built with React and Next.js to help teams manage tasks efficiently.

## Features

- ✅ Create, read, update, and delete tasks
- 🎯 Task prioritization (Low, Medium, High)
- 📊 Status tracking (To-Do, In Progress, Done)
- 🔄 Automatic priority-based sorting
- 💾 Local storage persistence
- 📱 Responsive design
- 📈 Task statistics dashboard

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd taskeasy
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Run the development server
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Testing

Run the test suite:
\`\`\`bash
npm test
\`\`\`

Run tests in watch mode:
\`\`\`bash
npm run test:watch
\`\`\`

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## XP Practices Implemented

- **Test-Driven Development (TDD)**: Unit tests for utility functions
- **Continuous Integration**: GitHub Actions workflow for automated testing
- **Small Releases**: Incremental feature development
- **Refactoring**: Clean, modular component architecture
- **Pair Programming**: Code structure supports collaborative development

## Project Structure

\`\`\`
src/
├── app/                 # Next.js app directory
├── components/          # React components
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── __tests__/          # Test files
\`\`\`

## Contributing

1. Create a feature branch
2. Write tests for new functionality
3. Implement the feature
4. Ensure all tests pass
5. Submit a pull request

## License

MIT License
