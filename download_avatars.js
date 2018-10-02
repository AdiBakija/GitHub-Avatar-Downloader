var request = require('request');
var secrets = require('./secrets.js')

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': secrets.GITHUB_TOKEN
    }
  };

  request(options, function(err, res, body) {
    //console.log(res.body);
    if (!err && res.statusCode == 200) {
      var data = JSON.parse(body);
      //console.log(data);
      cb(err, data);
    } else {
      console.log(err)
    }

  });

}

getRepoContributors("jquery", "jquery", function(err, data) {
  for (var index of data) {
    //console.log("Avatar-URL:", result[index].avatar_url);
    console.log(index.avatar_url);
  }

function downloadImageByURL(url, filePath) {
  request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })


       .on('response', function (response) {
         console.log('Downloading Image');
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Content Type: ', response.headers['content-type']);
       })

       .on('end', function(response) {
        console.log("Image Downloaded")
       })

       .pipe(fs.createWriteStream('./future.jpg'));
}

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")

  //console.log("Result:", result);
});





    // var request = require( 'request');
    // module.exports = function getShowInfo( showId , callback ) {

    //     var query = "http://api.tvmaze.com/shows/" + showId;

    //     request.get( query , function ( error, response, body ) {

    //       if ( ! error && response.statusCode == 200 ) {
    //           console.log( body );
    //           var data = JSON.parse( body );
    //           callback( data );
    //       }
    //       else {
    //           console.log( error );
    //       }
    //    });
    // }