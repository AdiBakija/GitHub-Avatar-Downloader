var request = require('request');

function getRepoContributors(repoOwner, repoName, cb) {
  // request.get('https://api.github.com/repos/jquery/jquery/contributors')
  //      .on('error', function (err) {
  //        throw err;
  //      })


  //      .on('response', function (response) {
  //        console.log('Downloading Image');
  //        console.log('Response Status Code: ', response.statusCode);
  //        console.log('Response Status Message: ', response.statusMessage);
  //        console.log('Content Type: ', response.headers['content-type']);
  //      })

  //      .on('end', function(response) {
  //       console.log("Image Downloaded")
  //      })

  //      .pipe(fs.createWriteStream('./future.jpg'));
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});