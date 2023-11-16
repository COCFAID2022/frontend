import { Help } from "./HelpSection/help";
import { History } from "./HistorySection/history";
import { News } from "./NewsSection/news";
import { Partners } from "./Partners/partners";
import { Projects } from "./ProjectsSection/projects";
import { Question } from "./QuestionSection/question";
import { Navbar } from "./Navbar/navbar";
import { Header } from "./Header/header";
export const HomeScreen = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Partners/>
   <Help/>
   <History/>
   <Projects/>
   <News/>
   <Question/>
    </>
  );
};
