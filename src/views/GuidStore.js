import m from "mithril"
import { Clipboard } from "../models/Clipboard"
import { HistoryView } from "./HistoryView"
import { FooterView } from "./FooterView"
import { History } from "../models/History"
import { GuidGenerator } from "../models/GuidGenerator"

export const GuidStore = {
    view: function () {
        const guid = GuidGenerator.get()
        return m("div.pl2.flex.flex-column", { style: "min-height: 100vh" }, [
            m("div", [
                m("div#logo"),
                m("h1.relative", "the guid store (hygge2)")
            ]),
            m("div", [
                m("span", guid),
                m("button.ml2", { onclick: () => {
                    Clipboard.setClipboard(guid)
                    History.add(guid)
                    GuidGenerator.invalidate(guid)
                    lastPurchase = new Date()
                }}, "buy"),
                m("div.o-0.di-ns.ml2-ns", { onupdate: displayPurchaseMessage }, "copied to clipboard :-)"),
            ]),
            m("div.flex-grow-1", [
                m(HistoryView)
            ]),
            m("div.pt3.pb2", m(FooterView))
        ])
    }
}

var lastPurchase = null
function displayPurchaseMessage (vnode) {
    const now = new Date().getTime()
    if (lastPurchase && now - lastPurchase.getTime() < 10) {
        // Make sure that the class is not on our element.
        vnode.dom.classList.remove("fade-out")

        // Then add the class but only after a cycle
        window.setTimeout(() => vnode.dom.classList.add("fade-out"), 0)
    }
}
