var friends = require("../data/friend");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function (req, res) {
    var FriendName = req.body.name;
    var FriendPhoto = req.body.photo;
    var ScoreLength = req.body.scores.length;
    console.log(ScoreLength);
    var BestMatch = friends[totalDifference(req.body)];
    friends.push(req.body);
    res.json(BestMatch);
  });
};

function totalDifference(NewFriend) {
  var NewScore = NewFriend.scores;
  var Defferences = [];
  for (friend of friends) {
    Defferences.push(subtarray(friend.scores, NewScore));
  }
  return Defferences.indexOf(Math.min(...Defferences));
}

function subtarray(arr1, arr2) {
  var TotalDefference = 0;
  for (i = 0; i < arr1.length; i++) {
    TotalDefference += Math.abs(arr1[i] - arr2[i]);
  }
  return TotalDefference;
}
