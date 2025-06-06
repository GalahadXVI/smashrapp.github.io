function setCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    const domain = "domain=" + (document.domain.match(/[^\.]*\.[^.]*$/)[0]) + ";";  
    document.cookie = name+"="+value+expires+"; path=/;"+domain;
  }
  function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }
  function eraseCookie(name) { 
      const domain = "domain=" + (document.domain.match(/[^\.]*\.[^.]*$/)[0]) + ";";  
      document.cookie = name +'=; Path=/;'+domain+' Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
