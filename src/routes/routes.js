import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Main from "../components/Layouts/Main";
import QuizDetails from "../components/QuizDetails/QuizDetails";
import Statictics from "../components/Statictics/Statictics";
import Topic from "../components/Topic/Topic";

export const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/topic',
          loader: () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path:'/home/:quizId',
          loader: async({params}) =>{
            // console.log(params.quizId)
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<QuizDetails></QuizDetails>
        },
        {
          path:'/statics',
          element: <Statictics></Statictics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
            path: '/home',
            element: <Topic></Topic>
        }
        
      ]
    },
    {
      path: '*', element: <div>This Page not Found</div>
    }
  ])