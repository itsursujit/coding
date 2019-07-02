import Home from './components/Home';
import About from './components/About';
import Articles from './Articles';

export default {
    mode: "history",
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/articles',
            component: Articles
        }
    ]
}
