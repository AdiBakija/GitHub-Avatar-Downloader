var request = require('request');
var secrets = require('./secrets.js');
var fs = require('fs')

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': secrets.GITHUB_TOKEN
    }
  };

  request(options, function(err, res, body) {
    //If no error & status code is okay parse the data and run callback
    if (!err && res.statusCode == 200) {
      var data = JSON.parse(body);
      //console.log(data);
      cb(err, data);
    } else {
      console.log(err)
    }

  });

}
//This function reads the image and writes to avatars folder
function downloadImageByURL(url, filePath) {
  request.get(url)
      //if error return error
       .on('error', function (err) {
         throw err;
       })

      //Take the response and provide it's header information 'response'  is an event
       .on('response', function (response) {
         console.log('Downloading Image');
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Content Type: ', response.headers['content-type']);
       })
       //Once the process has ended log Image downloaded 'end' is an event
       .on('end', function(response) {
        console.log("Image Downloaded")
       })

       .pipe(fs.createWriteStream(filePath));
}

getRepoContributors("jquery", "jquery", function(err, data) {
  for (var index of data) {
    downloadImageByURL(index.avatar_url, "avatars" + "/" + index.login + ".jpg");
  }
});