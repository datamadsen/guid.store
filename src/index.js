import m from 'mithril'
import { GuidStore } from './views/GuidStore'

m.route.prefix("")
m.route(document.body, '/', {
  '/': GuidStore
})
