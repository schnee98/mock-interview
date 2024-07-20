import DeveloperSelection from "pages/DeveloperSelection";
import Feedback from "pages/Feedback";
import Question from "pages/Question";
import Result from "pages/Result";
import StartPage from "pages/StartPage";
import ThemeContentSelection from "pages/ThemeContentSelection";
import ThemeSelection from "pages/ThemeSelection";
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
