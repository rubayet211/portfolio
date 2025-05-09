import Logo from "@/components/Logo";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex-1 flex py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-medium mb-8 text-center">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="flex justify-center mb-8 md:mb-0">
            <div className="relative w-80 h-80 border border-white/10 rounded-md p-4">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/profile.png"
                  alt="Profile picture"
                  width={512}
                  height={512}
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>

          <div>
            <p className="text-white/80 mb-4 leading-relaxed">
              I’m Rhyme Rubayet, a software engineer & web developer with a BSc
              in Computer Science and Engineering from AIUB. I bring over 2
              years of experience working with technologies like Nextjs,
              Reactjs, Nestjs, Flutter, and AWS, which I’ve applied to projects
              in ecommerce, tutoring service website, and SaaS solution.
              Currently, I work remotely for ComboKid, a Hong Kong-based company
              as a Full-stack Web Developer, building on my existing skills.
            </p>

            <p className="text-white/80 mb-4 leading-relaxed">
              I approach every project with a commitment to writing clean,
              maintainable code that emphasizes efficiency and scalability. I
              enjoy breaking down complex challenges into smaller, manageable
              tasks, solving them systematically to ensure quality. I thrive in
              collaborative environments—sharing ideas, learning from senior
              engineers, and improving through feedback.
            </p>

            <p className="text-white/80 mb-4 leading-relaxed">
              I’m passionate about using technology to solve real-world problems
              and enhance people’s lives. I believe in creating innovative,
              user-centric products that are functional, reliable, and
              thoughtfully crafted.
            </p>

            <p className="text-white/80 mb-6 leading-relaxed">
              When I’m not coding for work, I love working on personal
              projects—building small apps or experimenting with new tech like
              AI tools and modern libraries.
            </p>
            <a href="/cv.pdf" download="Rhyme_Rubayet_CV.pdf">
              <button className="button-outline">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
