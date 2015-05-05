# devourr-app

This project is a photo-sharing web app for users to share their food simply and quickly.

Current features:

* Edit profile
* Create new post
* Edit post
* View other users' posts

I chose to build this project with Angular.js to expand my coding abilities and get out of my comfort zone. While I feel that I have a good understanding of the requirements Angular has in terms of controllers/directives/factories, I have been having a heluva time getting a file upload to work so that pictures can be stored in AWS. This has been holding up other features I want to add such as:

* Set privacy level of posts (also I will be taking away the view all users page and change it a followers/following view)
* Building social features: likes, comments, reheats (think "retweets" :))
** Adding what I feel would be a killer feature of having a "made" or "inspired" social feature where users can indicate that they made or were inspired by a post and can link directly to it
* Search feature by hashtags

http://www.cheynewallace.com/uploading-to-s3-with-angularjs/

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `npm install && bower install`
Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
