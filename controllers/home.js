module.exports = {
    index: function (req, res) {
        var viewModel = {
            notes: [
                {
                    uniqueId: 1,
                    category: 'Work',
                    title: "Sample note 1",
                    description: "this is note 1",
                    filename: "sample1.txt",
                    views: 10,
                    timestamp: Date.now,
                },
                {
                    uniqueId: 2,
                    category: 'Business',
                    title: "Sample note 2",
                    description: 'this is note 3',
                    filename: "sample2.txt",
                    views: 40,
                    
                    timestamp: Date.now,
                },
                {
                    uniqueId: 3,
                    category: 'Code',
                    title: "Sample note 3",
                    description: "note 3",
                    filename: "sample3.txt",
                    views: 6,
                
                    timestamp: Date.now,
                },
                {
                    uniqueId: 4,
                    category: 'Tutorial',
                    title: "Sample note 4",
                    description: "note 5",
                    filename: "sample4.txt",
                    views: 40,
                    
                    timestamp: Date.now,
                },
            ],
        };
        res.render("index", viewModel);
    },
};
