'use strict'

var config = require('./config')
	, MY_TOKEN = config.token
	, NIC_NAME = config.nic;
	
var tg = require('telegram-node-bot')(MY_TOKEN)
	, cp = require('child_process');

tg.router.
	when(['ip'], 'ipController')

tg.controller('ipController', ($) => {
	tg.for('ip', () => {
		var ifconfig_msg;

		cp.exec('ifconfig '+NIC_NAME, (error, stdout, stderr) => {
			if (error) {
				console.error('exec error: ${error}');
				return;
			}
			
      // console.log(stdout);
			$.sendMessage(stdout)
		});

	})
}) 
