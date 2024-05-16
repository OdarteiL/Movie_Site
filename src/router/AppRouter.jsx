import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import HomePage from "../pages/HomePage"
import App from "../App"


export const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
        </Route>
    )
)
