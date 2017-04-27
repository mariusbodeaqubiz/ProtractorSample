var MyStories = function() {

	var that = this;

	this.addNewStoryBtn = element(by.css(".add-part"));
	this.storyTitleFld = element(by.name("storyTitle"));
	this.storyDescriptionFld = element(by.model("createStory.storyDescription"));
	this.submitBtn = element(by.css("[type='submit']"));
	this.nextBtn = element(by.css(".btn.publish-button"));
	this.uploadBtn = element(by.id("file-submit"));
	this.titleCreatedStoryTxt = element(by.css("div.story-title"));

	this.uploadImage = function(){
		var util = require("util");
		var path = require("path");

		var fileToUpload = './../sweek.png',
			absolutePath = path.resolve(__dirname, fileToUpload);

		$('input[type="file"]').sendKeys(relativePath);    
        $('#uploadButton').click();
	};
}

module.exports = MyStories;