const { Router } = require('express');
const userInstagram = require("user-instagram");

// Gets informations about a user
userInstagram('edouard_courty') // Same as getUserData()
  .then(console.log)
  .catch(console.error);