/**
 *  JSUtility - v1.0.1
 *  https://github.com/srivenkatesh92/JavascriptUtility
 *  2017-03-19
 *  
 *  Freely distributable
 *  copyright (c) 2017 Srivenkatesh
 *  Email : srivenkatesh123@gmail.com
 *  
 */

 function JSUtility(){};
 
 /**
  * emailValidation
  * 
  * This method return true/false depends on valid/invalid
  * valid email : someemail@domain.com
  * invalid email : someemail@domaildasd
  * 
  */
 var emailValidation = function(email){	    
	        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	        return re.test(email);	   
 };
 
 /**
  * Displaying a number in Indian currency format
  * 
  * This method return indian format currency value with decimal appended
  * unformattedValue : 123456.987
  * return : 1,23,456.987
  */
 
 var INRCurrency = function(unformattedValue){
	 var x=unformattedValue;
	 x=x.toString();
	 var afterPoint = '';
	 if(x.indexOf('.') > 0)
	    afterPoint = x.substring(x.indexOf('.'),x.length);
	 x = Math.floor(x);
	 x=x.toString();
	 var lastThree = x.substring(x.length-3);
	 var otherNumbers = x.substring(0,x.length-3);
	 if(otherNumbers != '')
	     lastThree = ',' + lastThree;
	 var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
	 
	 return res;
 };
 
 /**
  * Only Allow Alphabets. Eg:  onkeypress="return onlyAlphabets(event,this);"
  * 
  */
 var alphaOnly = function (e, t) {
	    try {
	        if (window.event) {
	            var charCode = window.event.keyCode;
	        }
	        else if (e) {
	            var charCode = e.which;
	        }
	        else { return true; }
	        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode == 32 || charCode == 46))
	            return true;
	        else
	            return false;
	    }
	    catch (err) {
	        alert(err.Description);
	    }
	}
 
 /**
  * getRandom 
  *  we are generating lots of random number, and maximum of them are in a range 
  *  e.g. generating random number between X to Y.
  */
var getRandom = function (min, max) {  // Adding getRandom function to Math object
	    if (min && max) {
	        // If min and max both are provided
	        if(max <= min) {
	            return new Error("Max number can not be equal or less then min");
	        } else {
	            return parseInt(min + (Math.random() * (max - min))); // Our logic for getting a random number
	        }
	    } else if (min) { //  If only min provide, then that min will be max and min will be 0
	        if(min < 1) {
	            return new Error("Min number can not be less 1");
	        } else {
	            return parseInt(Math.random() * min)
	        }
	    } else { // If min and max both are not provided then return whatever Math.random returns.
	        return Math.random();
	    }
	};