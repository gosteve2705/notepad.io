var sidebar = require("../helpers/sidebar"),
  NoteModel = require("../models/note");
module.exports = {
  index: function (req, res) {
    var viewModel = {
      notes: [],
    };
    NoteModel.find({}, {}, { sort: { timestamp: -1 } }, function (
      err,
      notes
    ) {
      if (err) {
        throw err;
      }
      viewModel.notes = notes;
      sidebar(viewModel, function (viewModel) {
        res.render("index", viewModel);
      });
    });
  },
};
