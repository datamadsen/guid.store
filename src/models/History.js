let history = [];

export const History = {
    add: function (guid) {
        history.unshift({
            guid: guid,
            added: new Date()
        })
        localStorage.setItem("history", JSON.stringify(history))
    },
    get: function () {
        if (!history.length)
            history = JSON.parse(localStorage.getItem("history")) || []

        return history.sort()
    },
    any: function () {
        return History.get().length > 0
    }
}
