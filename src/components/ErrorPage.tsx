import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import { Navbar } from "./Navbar";

const ErrorPage = () => {
  const error = useRouteError();
 ;
  return (
    <div>
      <Navbar/>
    <h1>Oops! Something went wrong.</h1>
      <p>
        
        { isRouteErrorResponse(error) 
          ? 'invalid Page Route'
          : 'An unexpected error occurred'}
      </p>
    </div>
  )
}

export default ErrorPage