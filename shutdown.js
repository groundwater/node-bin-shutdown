#!/usr/bin/env node

var reboot = require('src-reboot');
var errno = require('src-errno');

var cmd;
var arg = process.argv[2];

if(arg=='-r'){
  cmd = reboot.flags.LINUX_REBOOT_CMD_RESTART;
}else if(arg=='-h'){
  cmd = reboot.flags.LINUX_REBOOT_CMD_POWER_OFF;
}

if(cmd){
  reboot.reboot(cmd);
}
