const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM
import { Home } from "./pages/Home.jsx";
import { AboutUs } from "./pages/AboutUs.jsx";
import { BookApp } from "./pages/BookApp.jsx";
import { BookDetails } from "./pages/BookDetails.jsx";
import { AppHeader } from "./cmps/AppHeader.jsx";

export class App extends React.Component {
    render() {
        return (
            <Router>
                <header>
                    <AppHeader />
                </header>
                <main>
                    <Switch>
                        <Route component={BookDetails} path="/book/:bookId" />
                        <Route component={BookApp} path="/book" />
                        <Route component={AboutUs} path="/about" />
                        <Route component={Home} path="/" />
                        {/* If we want to send props to a route: */}
                        {/* <Route render={(props)=> <AboutUs {...props} name="popo"/>} path="/about" /> */}
                    </Switch>
                </main>
                <footer>
                </footer>
            </Router>
        )
    }
}