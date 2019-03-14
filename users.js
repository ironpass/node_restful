var users = [
    {
        "id": 0,
        "username": "pgstack",
        "name": "Pigeon Stack",
        "position": "raid-commanding flock"
    },
    {
        "id": 1,
        "username": "veganpigs",
        "name": "Two older pigs",
        "position": "builder of ineffective houses"
    },
    {
        "id": 2,
        "username": "toploopcat",
        "name": "Cat loop, the top",
        "position": "top"
    },
    {
        "id": 3,
        "username": "botloopcat",
        "name": "Cat loop, the bottom",
        "position": "bottom"
    },
    {
        "id": 4,
        "username": "wallbug",
        "name": "wall-walking bug",
        "position": "wallker"
    }
];

exports.findAll = function() {
    return users;
};

exports.findById = function (id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) return users[i];
    }
    return;
};
