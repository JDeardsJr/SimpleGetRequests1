'use strict';

function getDogImage(newUrlLink) {
  fetch(newUrlLink)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function determineNewUrl() {
    const numberInput = $('#amount').val();
    const urlLink = "https://dog.ceo/api/breeds/image/random/";
    let newUrlLink = urlLink + numberInput;
    getDogImage(newUrlLink);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    determineNewUrl();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});