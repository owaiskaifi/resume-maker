import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            ResumeBuilder Pro
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Create professional resumes that stand out and get you hired
          </p>
        </header>

        <main className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Craft Your Perfect Resume</h2>
            <ul className="space-y-4 mb-8">
              {[
                "Professional templates for every industry",
                "AI-powered content suggestions",
                "ATS compatibility checker",
                "Multiple export formats (PDF, DOCX, TXT)",
                "LinkedIn profile integration",
                "Grammar and keyword optimization"
              ].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/templates" 
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium text-center transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="/demo" 
                className="rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-3 font-medium text-center transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] shadow-2xl rounded-lg overflow-hidden">
            <Image
              src="/resume-preview.jpg"
              alt="Resume preview"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
            />
          </div>
        </main>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Suggestions",
                description: "Get intelligent content recommendations for skills and job descriptions tailored to your target role.",
                icon: "🤖"
              },
              {
                title: "ATS Compatibility",
                description: "Ensure your resume passes through Applicant Tracking Systems with our built-in checker.",
                icon: "✅"
              },
              {
                title: "Drag-and-Drop Editor",
                description: "Easily customize your resume with our intuitive drag-and-drop interface.",
                icon: "🔄"
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} ResumeBuilder Pro. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
