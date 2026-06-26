import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import './assets/main.css';
import en from '../../../locales/en.json';
import es from '../../../locales/es.json';
import ru from '../../../locales/ru.json';

const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	locale: 'ru',
	messages: { en, es, ru },
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
