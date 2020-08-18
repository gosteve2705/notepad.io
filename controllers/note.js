var fs = require("fs"),
  path = require("path"),
  sidebar = require("../helpers/sidebar"),
  Models = require("../models");
module.exports = {
  //retrieve a single specific note
  index: function (req, res) {
    var viewModel = {
      note: {},
    };
    // find the note by searching the filename matching the url
    parameter: Models.note.findOne(
      { filename: { $regex: req.params.note_id } },
      function (err, note) {
        if (err) {
          throw err;
        }
        if (note) {
          // if the note was found, increment its views counter
          note.views = note.views + 1;
          // save the note object to the viewModel:
          viewModel.note = note;
          // save the model (since it has been updated):
          note.save();
          // build the sidebar sending along the viewModel:
          sidebar(viewModel, function (viewModel) {
            // render the page view with its viewModel:
            res.render("note", viewModel);
          });
        } else {
          // if no note was found, simply go back to the homepage:
          res.redirect("/");
        }
      }
    );
    
  },
  create: function (req, res) {
    console.log(req.body);
    var savenote = function () {
      /* parse the submitted form , get the category,title and content. */
      var category = req.body.category,
        title = req.body.title,
        content = req.body.content;

      //   fs.mkdir(path.join(__dirname, '../public/Notes/' + category), (err) => {
      //     if (err) {
      //         return console.error(err);
      //     }
      //     console.log('Directory created successfully!');
      // });

      const note = {
        category: category,
        title: title,
        content: content,
      };

      let notedata = JSON.stringify(note);

      fs.writeFile(
        path.resolve(`./public/Notes/` + title + ".json"),
        notedata,
        (err) => {
          if (err) console.log(err);
          else {
            console.log("File written successfully\n");
            console.log("The written has the following contents:");
            res.redirect("/notes/" + title + ".json");
          }
        }
      );
    };
    savenote();
  },
  edit: function (req, res) {
    res.send("The note:edit POST controller");
  },
  delete: function (req, res) {
    res.send("The note:delete POST controller");
  },
  listAll: function (req, res) {
    res.send("The note:listAll get controller");
  },
  createCategory: function (req, res) {
    res.send("The note:createCategory POST controller");
  },
  addNoteTocategory: function (req, res) {
    res.send("The note:addnoteToCategory POST controller");
  },
};
