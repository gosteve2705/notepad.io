var fs = require("fs");
var path = require("path");
module.exports = {
  //retrieve a single specific note
  index: function (req, res) {
    var viewModel = {
      note: {
        uniqueId: 1,
        category: "Work",
        title: "Sample note 1",
        description: "This is a sample.",
        filename: "sample1.txt",
        views: 10,

        timestamp: Date.now(),
      },
    };
    res.render("note", viewModel);
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
            res.redirect("/notes/"+title + ".json" );
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
