export default function Projects() {
  const array = [
    {
      name: "CrediShield",
      description: "Gives financial fraud a panic attack — predicts credit risk like a psychic with spreadsheets.",
      github: "https://github.com/Arv2040/MTC_CODE"
    },
    {
      name: "IntelliBRD",
      description: "Writes your Business Requirement Docs and checks compliance rules so you don’t have to — and it doesn’t complain.",
      github: "https://github.com/Arv2040/hsbc"
    },
    {
      name: "StoryForge",
      description: "Turns your weirdest ideas into visual novels — powered by AI and probably too much caffeine.",
      github: "https://github.com/Arv2040/StoryForge.git"
    }
  ];

  return (
    <section className="w-full flex justify-center mt-10 px-4 bg-[#0D1117]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {array.map((project, index) => (
          <div
            key={index}
            className="bg-[#161B22] border border-[#58A6FF] rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 text-[#C9D1D9] w-full h-full flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold mb-2 text-[#58A6FF]">{project.name}</h2>
            <p className="text-sm text-[#8B949E] mb-4">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block text-sm text-[#58A6FF] hover:underline"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
