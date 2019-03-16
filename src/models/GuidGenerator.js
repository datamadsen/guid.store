export const GuidGenerator = {
    get: function () {
        return current_guid
    },

    invalidate: function (g) {
        if (current_guid == g)
            current_guid = generate_guid()
    }
}

let current_guid = generate_guid()

function generate_guid () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16).toUpperCase();
    });
}
