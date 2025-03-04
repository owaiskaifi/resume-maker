# ResumeBuilder Pro

A modern, feature-rich resume builder application built with Next.js and React.

## Features

- 🎨 Professional resume templates
- 📱 Responsive drag-and-drop editor
- 💾 Automatic saving
- 📄 Export to PDF and DOCX
- 🎯 ATS-friendly templates
- 🌙 Dark mode support
- 📊 Real-time preview
- 🔄 Section reordering
- 💼 Multiple resume support

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- React-PDF
- Hello Pangea DnD (Drag and Drop)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/resume-maker.git
cd resume-maker
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
resume-maker/
├── app/
│   ├── components/     # Reusable UI components
│   ├── editor/        # Resume editor components
│   ├── store/         # Global state management
│   ├── templates/     # Resume templates
│   ├── utils/         # Utility functions
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── public/            # Static assets
└── styles/           # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
