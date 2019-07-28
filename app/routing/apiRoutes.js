
const friends = require("../data/friends")

module.exports = function(app) {
app.get("/api/characters", function(req, res) {
    return res.json(friends);
  });

app.post("/api/characters", function(req, res) {
  var bestMatch = {
    name: "",
    photo: "",
    friendDifference: Infinity
  };

  var userData = req.body;
  var userScores = userData.scores;

  var totalDifference;

  for (var i = 0; i < friends.length; i++) {
    var currentFriend = friends[i];
    totalDifference = 0;

    console.log(currentFriend.name);

    // We then loop through all the scores of each friend
    for (var j = 0; j < currentFriend.scores.length; j++) {
      var currentFriendScore = currentFriend.scores[j];
      var currentUserScore = userScores[j];

      // We calculate the difference between the scores and sum them into the totalDifference
      totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
    }

    if (totalDifference <= bestMatch.friendDifference) {
      // Reset the bestMatch to be the new friend.
      bestMatch.name = currentFriend.name;
      bestMatch.photo = currentFriend.photo;
      bestMatch.friendDifference = totalDifference;
    }
  }

  // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
  // the database will always return that the user is the user's best friend).
  friends.push(userData);
  res.json(bestMatch);
})

}