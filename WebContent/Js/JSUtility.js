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
 
 