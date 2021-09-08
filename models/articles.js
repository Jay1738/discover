const mongoose = require("mongoose");

const ArticleSchemaHistory = new mongoose.Schema({
  AuthorName: {
    type: String,
    required: true,
  },
  ArticleTitle: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Source: {
    type: String,
    required: true,
  }
},{collection : 'history'});

const ArticleHistory = mongoose.model("Article", ArticleSchemaHistory);

module.exports = ArticleHistory;
