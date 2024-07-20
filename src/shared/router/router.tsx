import DeveloperSelection from "pages/selection/DeveloperSelection";
import Feedback from "pages/process/Feedback";
import Question from "pages/process/Question";
import Result from "pages/process/Result";
import StartPage from "pages/home/StartPage";
import ThemeContentSelection from "pages/selection/ThemeContentSelection";
import ThemeSelection from "pages/selection/ThemeSelection";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/selection/developer",
    element: <DeveloperSelection />,
  },
  {
    path: "/selection/theme",
    element: <ThemeSelection />,
  },
  {
    path: "/selection/theme/contents",
    element: <ThemeContentSelection />,
  },
  {
    path: "/question",
    element: <Question />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);
