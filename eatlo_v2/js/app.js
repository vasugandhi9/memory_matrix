(function(){
var app=angular.module("eatlo",[]);


app.controller('TestLocationController',function(){

	
	
    this.location=Locations;
  });

 var Locations=[

	{
		name:'BTM Layout',
	},
	{
		name:'Ejipura'
	},
	{
		name:'HSR'
	},
	{
		name:'Indiranagar'
	},
	{
		name:'Kormangala'
	},


 ]

  app.directive('socialMedia' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/socialMediaFile.html'
    } ;
  });



app.controller('SocialMediaController',function(){
    this.media=socialMediaIcons;
  });


var socialMediaIcons = [

    {	
		name:'facebook',
		src : '../images/facebook.png',
		alt:'Facebook',
		href:'https://www.facebook.com/eatloapp'
	},
	{	
		name:'twitter',
		src : '../images/twitter.png',
		alt:'Twitter',
		href:'https://www.twitter.com/eatloapp'
	},
	{	
		name:'Android',
		src : '../images/android.png',
		alt:'Android',
		href:'http://www.eatloapp.com/app'
	},
	{	name:'Apple',
		src : '../images/apple.png',
		alt:'Apple',
		href:'http://www.eatloapp.com/app'
	}
	]


 app.directive('navFooter' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/navFooter.html'
    } ;
  });

app.directive('chooseLocation' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/chooseLocation.html'
    } ;
  });
app.directive('chooseDishes' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/chooseDishes.html'
    } ;
  });
app.directive('placeOrder' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/placeorder.html'
    } ;
  });
app.directive('history' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/history.html'
    } ;
  });

app.directive('mainContent' , function(){
    return {
      restrict:'E',
      templateUrl:'../pages/mainContent.html'
    } ;
  });
app.controller('PanelController',function(){
   
	this.tab=1;
	this.type=0;
	this.place='BTM Layout';

    
    this.setTab = function(setTab){
    	
    	this.tab=setTab;
    };

    this.isSelected = function(checktab){
    	return this.tab===checktab;
    };

    this.getTab = function (){

    	return this.tab;
    }

     this.setType = function(Type){
    	
    	this.type=Type;
    };

     this.getType = function(){
    	
    	return this.type;
    };

    this.isSetType = function(checktype){
    	return this.type===checktype;
    };


     this.setPlace = function(Place){
    	
    	this.place=Place;
    };

     this.getPlace = function(){
    	
    	return this.place;
    };

  });

app.controller('ItemCatlogController',function(){
    this.catlog=Items;
    this.like=function(item){
    	console.log(item.like);
    	item.like=item.like+1;
    }
    this.getLike=function(item){
    	return item.like;
    }
    this.dislike=function(item){
    	console.log(item.dislike)
    	item.dislike=item.dislike+1;
    }
    this.getDislike=function(item){
    	return item.dislike;
    }
  });


var Items = [

    {	
		imgsrc : '../images/fooditems/mixdal.jpg',
		alt:'Mix Daal Tadka',
		intro:'Mix Daal Tadka with Steamed Rice and Salad ',
		amount:'100',
		desc:' Delicious home-style Mix Daal Tadka with split Chana Daal, Moong Daal and Maa ki Daal tempered with Spices. Served with Steamed Rice, Salad and Pickle. veg in kormangala',
		place:'Kormangala',
		type:'1',
		like:0,
		dislike:0
	},
	 {	
		imgsrc : '../images/fooditems/mixdal.jpg',
		alt:'Mix Daal Tadka',
		intro:'Mix Daal Tadka with Steamed Rice and Salad Non-veg ',
		amount:'100',
		desc:' Delicious home-style Mix Daal Tadka with split Chana Daal, Moong Daal and Maa ki Daal tempered with Spices. Served with Steamed Rice, Salad and Pickle. non-veg in BTM',
		place:'BTM Layout',
		type:'2',
		like:0,
		dislike:0

	},
	{	
		imgsrc : '../images/fooditems/mixdal.jpg',
		alt:'Mix Daal Tadka',
		intro:'Mix Daal Tadka with Steamed Rice and Salad Non-veg BTM ',
		amount:'100',
		desc:' Delicious home-style Mix Daal Tadka with split Chana Daal, Moong Daal and Maa ki Daal tempered with Spices. Served with Steamed Rice, Salad and Pickle. non-veg in BTM',
		place:'BTM Layout',
		type:'2',
		like:0,
		dislike:0

	},
	{	
		imgsrc : '../images/fooditems/mixdal.jpg',
		alt:'Mix Daal Tadka',
		intro:'Mix Daal Tadka with Steamed Rice and Salad Veg BTM',
		amount:'100',
		desc:' Delicious home-style Mix Daal Tadka with split Chana Daal, Moong Daal and Maa ki Daal tempered with Spices. Served with Steamed Rice, Salad and Pickle. Veg in BTM',
		place:'BTM Layout',
		type:'1',
		like:0,
		dislike:0

	},
	{	
		imgsrc : '../images/fooditems/mixdal.jpg',
		alt:'Mix Daal Tadka',
		intro:'Mix Daal Tadka with Steamed Rice and Salad NON-veg BTM',
		amount:'100',
		desc:' Delicious home-style Mix Daal Tadka with split Chana Daal, Moong Daal and Maa ki Daal tempered with Spices. Served with Steamed Rice, Salad and Pickle. NON-veg in BTM',
		place:'BTM Layout',
		type:'2',
		like:0,
		dislike:0

	},
	{	
		imgsrc : '../images/fooditems/mixdal.jpg',
		alt:'Mix Daal Tadka',
		intro:'Mix Daal Tadka with Steamed Rice and Salad Veg BTM ',
		amount:'100',
		desc:' Delicious home-style Mix Daal Tadka with split Chana Daal, Moong Daal and Maa ki Daal tempered with Spices. Served with Steamed Rice, Salad and Pickle. veg in BTM',
		place:'BTM Layout',
		type:'1',
		like:0,
		dislike:0

	},
	{	
		imgsrc : '../images/fooditems/mixdal.jpg',
		alt:'Mix Daal Tadka',
		intro:'Mix Daal Tadka with Steamed Rice and Salad NON-veg BTM',
		amount:'100',
		desc:' Delicious home-style Mix Daal Tadka with split Chana Daal, Moong Daal and Maa ki Daal tempered with Spices. Served with Steamed Rice, Salad and Pickle. NON-veg in BTM',
		place:'BTM Layout',
		type:'2',
		like:0,
		dislike:0

	},
	
	
	]


app.filter('PlaceandType', function () {
  return function (items,place,type) {

    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
     
     if(item.place == place){
	     if ( type != 0 && item.type==type) {
	        filtered.push(item);
	     }
	  	else if(type == 0)
	  	{
	  		 filtered.push(item);
	  	}
      }
	}
    
    return filtered;
  };
});


})();
