var Flickr = require('flickr-sdk');
var flickr = new Flickr("e370f8006528ecaccf381abb5834429e");

exports.searchPhotos = function(search){
    let array = [];
    var tet = {};
    var photos = [];
    var test = flickr.photos.search({
      text: search,
      safe_search: 1,
      per_page: 25,
      content_type: 1
    }).then(function(res){
      //console.log('yay', res.body.photos.photo);
      photos = res.body.photos.photo;
      array = photos.map(function(test){
        var obj = {
          title: test.title,
          imgUrl: "https://farm" + test.farm +
             ".staticflickr.com/" + test.server +
               "/" + test.id + "_" + test.secret + "_m.jpg"
        };
       // console.log(obj);
        return obj;
      });
     
      tet.photos = array;
        console.log(tet);
        return tet
    }).catch(function(err){
      console.log(err);
    });
   
    return test
};

//unfollow a user

//users following

//follers

