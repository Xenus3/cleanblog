const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
mongoose.connect('mongodb://localhost/my_database');

/*BlogPost.create({
title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:'
});

BlogPost.create({
    title: 'How to make Couscous',
    body: 'This Moroccan couscous recipe is a simplified, vegan version of the traditional dish, filled with sweet raisins, crunchy almonds and It might not be authentic, but it makes for an easy, flavorful side dish. Serve it warm with roasted vegetables or your favorite protein.'
    })*/

  /*  var id = "6710cd519ad0593fab9b0361";

    BlogPost.findByIdAndDelete(id)
      .then(deletedBlog => {
        if (deletedBlog) {
          console.log('Blog deleted successfully:', deletedBlog);
        } else {
          console.log('Blog not found');
        }
      })
      .catch(error => {
        console.error('Error deleting Blog:', error);
      });*/

         
