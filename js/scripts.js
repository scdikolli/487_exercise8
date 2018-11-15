$(function(){
  console.log('scripts loaded');

//variables
var url = 'http://api.open-notify.org/iss-now.json';
var url2 = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=-34.44076&lon=-58.70521';
var urlArray = [url, url2];
var data = [];
var coordinates = [];
var iss_position = [];
var html = '';
var i = '';

//for loop?
for (i=0; i < urlArray.length; i ++){

//ajax request
$.ajax({
  type:'GET',
  url: urlArray[i],
  dataType:'json',
  data:data,
  async:true,
  success:function(data){
    console.log(data);

    // iss_position.forEach(function(){
    //   console.log(iss_position.latitude + '' + iss_position.longitude);
    //   //write html message
    //   html += '<h4 class="message">' + iss_position.latitude + iss_position.longitude + '</h4>';
    // });//close coorindates function

    //display html
    $('#results').html(html);

  }//close success

});//close ajax
}//close for loop

});//close ready function
