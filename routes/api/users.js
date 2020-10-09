// let’s pull in our required dependencies and load our input validations & user model.

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../.env");
