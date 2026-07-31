import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import Dashboard from "@/components/Dashboard";
import ProgressCard from "@/components/ProgressCard";
import HSKCards from "@/components/HSKCards";
import TOCFLSection from "@/components/TOCFLSection";
import AdvancedFlashcard from "@/components/AdvancedFlashcard";
import DailyChallenge from "@/components/DailyChallenge";
import LearningPath from "@/components/LearningPath";
import AITrainer from "@/components/AITrainer";


export default function Home(){

return (

<main className="
max-w-7xl
mx-auto
p-6
bg-gray-50
min-h-screen
">


<Navbar/>


<HomeHero/>


<Dashboard/>


<ProgressCard/>


<HSKCards/>


<TOCFLSection/>


<section className="
mt-10
">

<h2 className="
text-3xl
font-bold
mb-5
">

🧠 Flashcard hôm nay

</h2>


<AdvancedFlashcard/>


</section>



<DailyChallenge/>


<LearningPath/>


<AITrainer/>


</main>

);

}
