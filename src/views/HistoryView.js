import m from "mithril"
import moment from "moment"
import { Clipboard } from "../models/Clipboard"
import { History } from "../models/History"
import { GuidGenerator } from "../models/GuidGenerator"

export const HistoryView = {
    oninit: function (vnode) {
        HistoryView.intervalFunction = window.setInterval(m.redraw, 6000)
    },
    view: function () {
        if (!History.any())
            return

        return m("div",
            m("h2", "purchase history"),
            m("table", [
                ...History.get().map(x => m(HistoryItem, { item: x }))
            ])
        )
    },
    onremove: function (vnode) {
        window.clearInterval(HistoryView.intervalFunction)
    },
}

const HistoryItem = {
    view: function (vnode) {
        const item = vnode.attrs.item
        return m("tr", [
            m("td", item.guid),
            m("td.silver.dn.dtc-ns", new moment(item.added).fromNow())
        ])
    }
}
