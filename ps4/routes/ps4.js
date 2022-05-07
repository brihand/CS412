const express = require('express');
const router = express.Router();

const config = require('./config');
const request = require('request');
const fetch = require('node-fetch');
const {response} = require("express");


// needs to change the path for individual submit button but I hope the base of the code works
// needs to change the action in index.pug

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'PS4 Homepage' });
});


//part B using promises
router.post('/', function (req, res) {
    let city = req.body.city;
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.api.key}'

    const fetchPromise = fetch(url);
    fetchPromise
        .then(response => {
            if (!response.ok) {
                throw new Error("wrong API call")
            }
            return response.json();
        })
        .catch (error => {
            console.error("something wrong")
        });
});

// part C using async and await
router.route('/')
    .get((req, res, next)=> {
        res.render('index', {title: 'PS4 part B'});
    })
    .post(async (req, res, next) => {
        let wait = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.api.key}');
        let data = await wait.json();
        res.render('result', {result: data});
    })


// part D using callback
function callAPI(callback) {
    const apiEndPoint = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.api.key}'
    request(apiEndPoint, function(err, res, body) {
        return callback(err, body);
    });
}
router.post('/', function (req, res) {
    callAPI(function(err, result) {
        if (err) {
            throw new Error("err resulted")
        }
        else {
            res.render('result', {result: result})
        }
    });
})
module.exports = router;