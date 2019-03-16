var history = [];

export const History = {
    add: function (guid) {
        history.unshift({
            guid: guid,
            added: new Date()
        })
    },
    get: function () {
        return history.sort()
    },
    any: function () {
        return history.length > 0
    }
}
