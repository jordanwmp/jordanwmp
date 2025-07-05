import './styles/app.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//core e a função de registro
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaGithub, FaLinkedin } from 'oh-vue-icons/icons/fa'
import { 
  ViFileTypeAngular, 
  ViFileTypeIonic,
  ViFileTypeVue,
  ViFileTypeReactjs,
  ViFileTypeNode,
  ViFileTypeSass,
  BiCodeSlash
 } from "oh-vue-icons/icons";

 addIcons(
  FaGithub, 
  FaLinkedin, 
  ViFileTypeAngular,
  ViFileTypeIonic,
  ViFileTypeVue,
  ViFileTypeReactjs,
  ViFileTypeNode,
  ViFileTypeSass,
  BiCodeSlash
)

const app = createApp(App)
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
