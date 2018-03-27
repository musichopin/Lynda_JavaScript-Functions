(function(){
  var socialMedia = {
    types: { // provides flexibility to place links in an object
      facebook : 'http://facebook.com/viewsource',
      twitter: 'http://twitter.com/planetoftheweb',
      flickr: 'http://flickr.com/planetotheweb',
      youtube: 'http://youtube.com/planetoftheweb'
    },
    mediaMaker() {
      var output = '<ul>', 
  // querySelect() denseydi nodelist yerine tek node seçmiş olup aşağıda looplayamazdık
      myList = document.querySelectorAll('.socialmediaicons');
      // provides flexibility to use one class name for social media container

      for (var key in this.types) {//loops object; specifies what to place in myList
        if(this.types.hasOwnProperty(key)) { // eliminates inherited props
          output += '<li><a href="' + this.types[key] + '">' +// " for html, ' for js
            '<img src="images/' + key + '.png" alt="icon for '+key+'">' +
          '</a></li>'; // img names in harmony with keys
        }
      }
      output+= '</ul>';
      
      for (var i = myList.length - 1; i >= 0; i--) { // specifies where to place ul
        myList[i].innerHTML = output;
  // alt: myList[i].outerHTML = '<nav class="socialmediaicons">' + output + '</nav>';
      };
    }
  };

  socialMedia.mediaMaker()
}())

/* alt1:
(function() {
  var socialMedia = {
    facebook : 'http://facebook.com/viewsource',
    twitter: 'http://twitter.com/planetoftheweb',
    flickr: 'http://flickr.com/planetotheweb',
    youtube: 'http://youtube.com/planetoftheweb'
  };

  var socialList = function(media) { // self invoking function
    var  output = '<ul>', 
      myList = document.querySelectorAll('.socialmediaicons');

    for (var key in media) { // looping object
      output+= '<li><a href="' + media[key] + '">' +
        '<img src="images/' + key + '.png" alt="icon for '+key+'">' +
      '</a></li>';
    }
    output+= '</ul>';
    
    for (var i = myList.length - 1; i >= 0; i--) {
      myList[i].innerHTML = output;
    };
  }(socialMedia); 
  // *we pass whole socialMedia object instead of list of args and 
  // it keeps socialMedia object flexible*
}())
*/


/*
alt2:

var socialList = function() {
  var  output = '<ul>', 
    myList = document.querySelectorAll('.socialmediaicons');

  for (var key in arguments[0]) {
    output+= '<li><a href="' + socialMedia[key] + '">' +
      '<img src="images/' + key + '.png" alt="icon for '+key+'">' +
    '</a></li>';
  }
  output+= '</ul>';
  
  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = output;
  };
};

socialList(socialMedia);
*/