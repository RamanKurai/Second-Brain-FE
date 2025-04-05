import { useNavigate } from "react-router-dom";
import brain from "../assets/brain.png";
import brain2 from "../assets/brain2.png";
import { Button } from "../components/ui/Button";
import FeaturesSection from "../components/ui/FeatureCard";

const howItWorks = [
  { step: "Sign Up", description: "Create your free Brainly account" },
  {
    step: "Save Any Document",
    description: "Save the Documents or Bookmark in Brainly",
  },
  {
    step: "Share Your Brain",
    description: "Send your Brain link to Friends or colleagues",
  },
];

export const Landing = () => {
    const navigate  = useNavigate();
  return (
    <>
      <div className="bg-purple-300">
        <div className="flex justify-between items-center m-auto p-4">
          <div
          className="flex items-center gap-2.5">
            <img src={brain} alt="Logo" width="40px" height="40px" />
            <h2 className="text-2xl font-bold gradient-title pt-2.5">
              Brainly
            </h2>
          </div>
          <Button 
          onClick={() => {
            navigate('/signup')
          }}
          size="md" variant="secondary" text="SignUp" />
        </div>
      </div>
      <div className="bg-purple-300">
        <div className="flex flex-col justify-center items-center p-4 gap-4">
          <img src={brain2} alt="Brain Logo" className="w-24 h-24" />
          <h1 className="text-6xl font-extrabold text-center gradient-title">
            Your Second Brain for the Digital Age.
          </h1>
          <p className="text-xl text-black font-semibold pb-4 ">
            Capture & organize knowledge from Twitter, YouTube, and Many More
          </p>
          <Button 
          onClick={() => {
            navigate('/dashboard')
          }}
          variant="secondary" text={"Get Started"} size={"md"} />
        </div>
      </div>
      <div>
        <FeaturesSection />
      </div>
      <div className=" bg-purple-300">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-title">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <section className="bg-purple-300 py-16 text-center px-5">
        <div className="container mx-auto flex flex-col items-center">
          <h3 className="text-3xl font-bold mb-6 gradient-title">
            Ready to Make Your Second Brain?
          </h3>
          <p className="text-xl text-black font-semibold mb-12">
          Start building your digital mind—collect, organize, and share knowledge like never before.
          </p>
            <Button
            onClick={() => {
             navigate('/signup')
            }}
            variant="secondary" text="Start For Free" size="md" />
        </div>
      </section>
    </>
  );
};
