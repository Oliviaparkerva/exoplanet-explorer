/*
Instructions:
(1) Rewrite get with the Fetch API: https://davidwalsh.name/fetch
(2) Finish the getJSON method. getJSON should take a URL and return the parsed JSON response.
  (a) getJSON needs to return a Promise!

 */

// Inline configuration for jshint below. Prevents `gulp jshint` from failing with quiz starter code.
/* jshint unused: false */

(function(document) {
  'use strict';

  var home = null;

  /**
   * Helper function to show the search query.
   * @param {String} query - The search query.
   */
  function addSearchHeader(query) {
    home.innerHTML = '<h2 class="page-title">query: ' + query+ '</h2>';
  }

  /**
   * XHR wrapped in a Promise using Fetch.
   * @param  {String} url - The URL to fetch.
   * @return {Promise}    - A Promise that resolves when the XHR succeeds and fails otherwise.
   */
  function get(url) {
    return fetch(url,{
      method: 'get'
    });
  }

  /**
   * Performs an XHR for a JSON and returns a parsed JSON response.
   * @param  {String} url - The JSON URL to fetch.
   * @return {Promise}    - A promise that passes the parsed JSON response.
   */
  function getJSON(url) {
    /*Return a Promise that gets a URL and parses the JSON response. Use your get method from above .then return the response in json format*/
    return get(url).then((response)=>{
      return response.json();
    });
  }
  

  window.addEventListener('WebComponentsReady', function() {
    home = document.querySelector('section[data-route="home"]');
    /*
    (3) Test: 
      .then the getJSON(url) response and pass the response query string from getJSON to addSearchHeader(query) function 
      .catch any error ; console.log the error 
    (4) Handle errors by passing "unknown" to addSearchHeader.
     */
    getJSON('../data/earth-like-results.json')
      .then((response)=>{
        addSearchHeader(response.query)
        console.log(response);
      })
      .catch((error)=>{
        addSearchHeader('unknown');
        console.log(error);
      })
  });
})(document);
