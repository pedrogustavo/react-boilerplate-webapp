import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ptBR from './locales/pt-BR.json'
import enUS from './locales/en-US.json'

const resources = {
  'pt-BR': { translation: ptBR },
  'en-US': { translation: enUS }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'pt-BR',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
