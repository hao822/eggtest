'use strict';

const fs = require('fs');
const path = require('path');

const Controller = require('egg').Controller;

const awaitWriteStream = require('await-stream-ready').write;

const sendToWormhole = require('stream-wormhole');

const md5 = require('md5');

class UploadController extends Controller{
    
}

module.exports = UploadController;