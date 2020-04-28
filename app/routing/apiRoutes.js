var friends = require("../data/friend");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function (req, res) {
    // var BestMatch = friends[totalDifference(req.body).index];
    friends.push(req.body);
    res.json(totalDifference(req.body));
  });
};

function totalDifference(NewFriend) {
  var NewScore = NewFriend.scores;
  var Defferences = [];
  for (friend of friends) {
    Defferences.push(subtarray(friend.scores, NewScore));
  }
  return {
    index: Defferences.indexOf(Math.min(...Defferences)),
    deff: Defferences,
  };
}

function subtarray(arr1, arr2) {
  var TotalDefference = 0;
  for (i = 0; i < arr1.length; i++) {
    TotalDefference += Math.abs(arr1[i] - arr2[i]);
  }
  return TotalDefference;
}
