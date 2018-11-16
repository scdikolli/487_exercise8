$(function(){
  console.log('scripts loaded');

//variables
var url = 'http://api.open-notify.org/iss-now.json';
var url2 = '';
var data = [];
var lat = '';
var long = '';
var html = '';
var data2 = [];

  //fiveSeconds overall function
  function fiveSeconds(){
    //ajax request
    $.ajax({
      type:'GET',
      url: url,
      dataType:'json',
      data:data,
      async:true,
      success:function(data){
        console.log(data);

        console.log(data.iss_position.latitude + ' ' + data.iss_position.longitude);

        lat = data.iss_position.latitude;
        long = data.iss_position.longitude;
        url2 = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + long;
        //second ajax
        $.ajax({
          type:'GET',
          url: url2,
          dataType:'json',
          data:data2,
          async:true,
          success:function(data2){
            console.log(data2);

            //write html message
            if(url2 = data2.error){
              console.log('iss over ocean');
              html += '<p>It is over the ocean.</p>';
            }
            else{
              html += '<p>The International Space Station is over ' + data2.address.country + data2.address.state;
              html += '</p>';
            }
            //display html
            $('#results').html(html);
          }//close success second ajax
        });//close second ajax
     }//close success first ajax
    });//close first ajax
    setTimeout(fiveSeconds, 5000);
  }//close fiveSeconds function
  fiveSeconds();//call fiveSeconds function
});//close ready function
