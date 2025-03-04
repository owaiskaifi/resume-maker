import Link from "next/link";
import Image from "next/image";

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean and contemporary design with a focus on readability",
    thumbnail: "/templates/modern.png",
    tags: ["Professional", "Clean", "Minimal"],
  },
  {
    id: "professional",
    name: "Professional",
    description: "Traditional layout perfect for corporate and executive roles",
    thumbnail: "/templates/professional.png",
    tags: ["Corporate", "Traditional", "Formal"],
  },
  {
    id: "creative",
    name: "Creative",
    description: "Stand out with a unique design for creative industries",
    thumbnail: "/templates/creative.png",
    tags: ["Creative", "Bold", "Unique"],
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple and elegant design that lets your content shine",
    thumbnail: "/templates/minimal.png",
    tags: ["Simple", "Elegant", "Clean"],
  },
  {
    id: "tech",
    name: "Tech",
    description: "Optimized for software and IT professionals",
    thumbnail: "/templates/tech.png",
    tags: ["Technical", "Modern", "Detailed"],
  },
  {
    id: "academic",
    name: "Academic",
    description: "Perfect for academic CVs and research positions",
    thumbnail: "/templates/academic.png",
    tags: ["Academic", "Research", "Detailed"],
  },
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Professional Resume Templates</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose from our collection of professionally designed templates
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[1.4] relative">
                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700">
                  {/* Template preview image would go here */}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {template.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/editor?template=${template.id}`}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                >
                  Use Template
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 