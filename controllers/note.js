var mkdir = require('mkdirp');
module.exports = {
  index: function (req, res) {
    var viewModel = {
      note: {
        uniqueId: 1,
        category: 'Work',
        title: "Sample note 1",
        description: "This is a sample.",
        filename: "sample1.txt",
        views: 10,
      
        timestamp: Date.now(),
      }
      
    };
    res.render("note", viewModel);
  },
  create: function (req, res) {
    console.log(req.body)
    var savenote = function () {
      /* parse the submitted form , get the category,title and content. */
      var category = req.body.category,
      title = req.body.title,
      content = req.body.content;
      
      mkdir('/tmp/foo/bar/baz' + category,  function(err) { 

        if (err){
          console.log(err);
        }else{
          console.log(category + ' path created ')
        }
    
    }, -m);

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
