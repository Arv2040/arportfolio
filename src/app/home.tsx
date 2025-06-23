import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <section className="w-full h-[20em] md:w-[50em] md:h-[25em] bg-[#161B22] border-2 border-[#58A6FF] flex flex-col gap-y-2 justify-center items-center text-white mt-10 rounded-xl">
      <p className="text-[#58A6FF] w-full text-center text-2xl sm:p-2 md:p-4 md:text-6xl font-bold">
        Hello! I am Arav Jain
      </p>
      <div className="text-[#C9D1D9] w-full text-center text-2xl sm:p-2 md:p-4 md:text-4xl">
       <Typewriter
  options={{
    strings: ['Developer', 'Footballer','Guitarist', 'Learner'],
    autoStart: true,
    loop: true,
  }}
/>
      </div>
    </section>
  );
}
