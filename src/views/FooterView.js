import m from "mithril"

export const FooterView = {
  view: function () {
    return m("div", [
      m("div", m.trust(`Do you have a request or an issue? <a class="dib" href="https://github.com/tmadsen/guid-store">Head over to github</a>`)),
      m("div.mt3", m.trust(`Made by <a href="https://datamadsen.dk">datamadsen.dk</a>`))
    ])
  }
}
