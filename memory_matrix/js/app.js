(function(){


var app=angular.module("assanjobs",[]);

app.controller("GridController",function($scope){

	this.count=0;
	this.items=List;
	this.end="";
	this.score=0;
	this.isSelected=function(item){


		this.count=this.count+1;
		if(this.count <= 4){
			if(item.selected==1)
			{
				this.score=this.score+10;
				item.class = "green";
			}
			else{
				item.class = "red";
			}
			if(this.count==4)
			{
					$scope.myValue=true;
					this.end="Game ended your final score is "+this.score+"/40" ;
			}
		 }
		 else{
		 
		 	return false;

		 }	

		}

});

var List=[
{
	id:1,
	selected:0,
	class:""
},
{
	id:2,
	selected:0,
	class:""
},
{
	id:3,
	selected:1,
	class:""
},
{
	id:4,
	selected:0,
	class:""
},
{
	id:5,
	selected:1,
	class:""
},
{
	id:6,
	selected:0,
	class:""
},
{
	id:7,
	selected:0,
	class:""
},
{
	id:8,
	selected:1,
	class:""
},
{
	id:9,
	selected:0,
	class:""
},
{
	id:10,
	selected:0,
	class:""
},
{
	id:11,
	selected:0,
	class:""
},
{
	id:12,
	selected:0,
	class:""
},
{
	id:13,
	selected:1,
	class:""
},
{
	id:14,
	selected:0,
	class:""
},
{
	id:15,
	selected:0,
	class:""
},
{
	id:16,
	selected:0,
	class:""
},



]




})();