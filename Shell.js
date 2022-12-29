function Shell() {
}
let ls = {
    "input": "ls",
    "output": function() {
        return { value: "Applications  Desktop  Downloads  Movies  Pictures<br />Documents  Library  Music  Public" }
    }
}

let cd = function(path) {
    return {
        "input": "cd " + path,
        "output": function(config) {
            config.path = path
            return { value: "" }
        }
    }
}
