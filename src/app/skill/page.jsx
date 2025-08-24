export default function service() {
  const skills = [
    "React",
    "Next.js",
    "Nest.js",
    "Spring Boot MVC",
    "Flutter",
    "Java",
    "ASP.NET Core MVC",
    "Godot Game Engine",
    "C++",
    "C#",
    "GdScript",
    "Python",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Dart",
    "Tailwind CSS",
    "Wordpress",
  ];

  return (
    <div className="flex flex-1 py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-8 sm:mb-12 text-center">
          Skills
        </h1>

        <div className="mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 md:mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-secondary/30 border border-white/10 rounded-lg p-3 sm:p-4 md:p-6 text-center hover:border-accent/30 transition-all hover:bg-secondary/50 min-h-[44px] flex items-center justify-center"
              >
                <span className="text-xs sm:text-sm md:text-base font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
