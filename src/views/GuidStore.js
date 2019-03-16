import m from "mithril"
import { Clipboard } from "../models/Clipboard"
import { HistoryView } from "./History"
import { History } from "../models/History"
import { GuidGenerator } from "../models/GuidGenerator"

export const GuidStore = {
    view: function () {
        const guid = GuidGenerator.get()
        return m("div", [
            m("div", [
                m("div#logo"),
                m("h1.relative", "the guid store")
            ]),
            m("span", guid),
            m("button.ml2", { onclick: () => {
                Clipboard.setClipboard(guid)
                History.add(guid)
                GuidGenerator.invalidate(guid)
            }}, "copy"),
            m(HistoryView)
        ])
    }
}
