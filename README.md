# Blood-Directory

A simple an mobile application(android/ios) for displaying blood directory.
The application is built by using Ionic framework.The main feature of this application,google form is used as back end.

# How To Use Google Form As Back End

Google Doc has many neat hidden features.

Here how it can be done,

1.First go create a Google Doc spreadsheet, you may do so by create a new Spreadsheet or upload any existing spreadsheet from excel.

2.Go to File > Publish to the web …  an option of Publish to the web will appear. Here you can specific which row or column you’d like to publish. Make sure you click “Start Publishing”

3.Once you have published the spreadsheet, under “Get a link to the published data” you will extract the key from the URL.

The final constructed URL will be as fellow. By leverage Google spreadsheet API

https://spreadsheets.google.com/feeds/list/{{key}}/od6/public/basic?hl=en_US&alt=json

Note the key in URL, can be replaced to your OWN Google Doc key. 

The end result will be a JSON you can use in your application, pretty neat. As long as you include the URL in your application, you can access the data. The downside is you need to publish the spreadsheet as public data. But the advantage of leverage this out weight by the downside by a big margin. You can update the data in the spreadsheet any time you want and your application uses this data will be reflected the data instantly. (Update: Google documentation on this feature)

To build, install cordova, then run:

$ ionic platform add android

$ ionic build android

$ ionic emulate android

Substitute android for ios above to test on Apple.



Created by @Muhsin for the Ionic Framework
