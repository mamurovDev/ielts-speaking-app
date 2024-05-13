import HomeCards from "@/components/HomeCards";
import "@/style/backgoundGradient.css";
export default function Home() {
  const linerStyle = {
    background:
      "linear-gradient(90deg, #ff8c00 0%, #ff6f00 15%, #ff4500 30%, #ff7f50 44%, #ffa07a 58%, #ff7f50 72%, #ff6f00 86%, #ff8c00 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
    fontWeight: "900",
    paddingBottom: "5px",
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center  gradient-container">
      <h1 className="md:text-5xl lg:text-7xl font-bold sm:text-4xl sm:mt-10 md:mt-0 text-center">
        Let&apos;s start <p style={linerStyle}>improving</p> today! 🙂
      </h1>
      <article className="flex mt-8 sm:w-[85%] md:w-[95%] lg:w-[75%] justify-around sm:flex-col md:flex-row">
        <HomeCards
          title="Explore quick questions & answers"
          imagePath="/part1.png"
          imageDescription="Illustration depicting quick question and answer sessions."
          route="/speaking/part1"
        />
        <HomeCards
          title="Learn how to answer part 2 questions"
          imagePath="/part2.png"
          imageDescription="Illustration demonstrating techniques for answering part 2 questions effectively."
          route="/speaking/part2"
        />
        <HomeCards
          title="Find top ideas for part 3 questions"
          imagePath="/part3.png"
          imageDescription="Illustration showcasing top ideas for addressing part 3 questions comprehensively."
          route="/speaking/part3"
        />
      </article>
    </div>
  );
}
