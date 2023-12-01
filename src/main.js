import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faXmark, faPlus, faHome, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import DatePick from 'vue-date-pick'
// import 'vue-date-pick/dist/vueDatePick.css'


library.add(faBars, faXmark, faPlus, faGithub, faHome, faCaretUp, faCaretDown)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
// app.component("date-pick", DatePick);
app.mount('#app')
