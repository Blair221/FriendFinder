const express = require('express');
const friends = require('friends.js')
app.get("/api/characters", function(req, res) {
    return res.json(characters);
  });