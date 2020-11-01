import Home from './components/Home.vue'
import DisplayCurrency from './components/DisplayCurrency.vue'

export const routes = [
    {path: '', component: Home},
    {
        path: '/coin/:id', 
        component: DisplayCurrency,
        name: 'DisplayCurrency'
    }
];