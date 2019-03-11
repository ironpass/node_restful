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
    // for (var i = 0; i < users.length; i++) {
    //     if (users[i].id == id) return users[i];
    // }
    return binSearch(id, 0, users.length);
};

// binary search performs at O(log(n))
var binSearch = function(id, start, end) {
  var mid_idx = Math.floor((start+end)/2);

  if (users[mid_idx].id == id) return users[mid_idx];
  else if (start == mid_idx || end == mid_idx) {
    return;
  } else if (id > users[mid_idx].id) {
    return binSearch(id, mid_idx, end);
  } else {
    return binSearch(id, start, mid_idx);
  }
}

// try adding copious amount of dummies to test searching speed
exports.addDummy = function(amount) {
  for (var i = 0; i< amount; i++) {
    users.push({
        "id": users.length,
        "username": "dummy",
        "name": "idle dummy",
        "position": "loopadder"
    });
  }
}
