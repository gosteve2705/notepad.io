var Stats = require("./stats"),
  Notes = require("./notes");

module.exports = function (viewModel, callback) {
  viewModel.sidebar = {
    stats: Stats(),
    popular: Notes.popular(),
    
  };
  callback(viewModel);
};
