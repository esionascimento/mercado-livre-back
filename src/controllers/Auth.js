const express = require('express');
const axios = require('axios')
const qs = require('qs');
require('dotenv').config();

const routerAuthentication = express.Router();

/* routerAuthentication.get('/auth', (async (_req, res, _next) => {
    const grantType = process.env.GRANT_TYPE;
    const clientSecret = process.env.CLIENT_SECRET;
    const clientId= process.env.CLIENT_ID;
    const APIPOST = axios.create({
        baseURL: 'https://auth.mercadolivre.com.br',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'grant_type': 'authorization_code',
        }
    });
    try {
        const {data} = await APIPOST.get(`/authorization?response_type=code&client_id=${process.env.APP_ID}`)
        return res.json({data});
    } catch (error) {
        return res.json({error});
    }
})) */

routerAuthentication.post('/auth', (async (req, res, _next) => {
    const { client_id, client_secret, code, redirect_uri, grant_type } = req.body;

    const APIPOST = axios.create({
      baseURL: 'https://api.mercadolibre.com/oauth/token',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });

    try {
      const {data} = await APIPOST.post('', qs.stringify({
            client_id, client_secret, code, redirect_uri, grant_type
        }))
      return res.json({data});
    } catch (error) {
      return res.status(400).json({error});
    }
}));

module.exports = { routerAuthentication }
