import { createApp } from 'vue';
import App from './App';
import components from './Components/UI'
import router from './router/router';
import Vintersection from '@/directives/VIntersection';
import directives from '@/directives';
import store from './store';


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app.directive('intersection', Vintersection)

app
.use(router)
.use(store)
.mount('#app')
