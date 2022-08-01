
const express = require('express');
const axios = require('axios');
const newsrou = express.Router();
const moment = require('moment');
const math = require('math');
require('dotenv').config();


newsrou.get('/', async (req, res) => {
    try {
        let url = 'http://newsapi.org/v2/top-headlines?' + 'country=in&' + 'apiKey='+process.env.KEY;

        const get_news = await axios.get(url)
        res.render('news', { articles: get_news.data.articles })

    } catch (error) {
        if (error.response) {
            console.log(error)
        }

    }
})

newsrou.post('/search', async (req, res) => {
    const search = req.body.search


    try {
        let url = `http://newsapi.org/v2/everything?q=${search}&apiKey=`+process.env.KEY
        const get_news = await axios.get(url)
        res.render('news', { articles: get_news.data.articles })

    } catch (error) {
        if (error.response) {
            console.log(error)
        }

    }
})

newsrou.get('/news/:category', async (req, res) => {
    let category = req.params.category;
    try {
        let url = 'http://newsapi.org/v2/top-headlines?country=in&category=' + category + '&apiKey='+process.env.KEY;

        const get_news = await axios.get(url)
        res.render('category', { articles: get_news.data.articles })

    } catch (error) {
        if (error.response) {
            console.log(error)
        }

    }
})

module.exports = newsrou;