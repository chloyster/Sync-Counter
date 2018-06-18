/*
 * Entry point for the watch app
 */
import document from "document";
import { me as device } from "device";

let demotext = document.getElementById("demotext");
demotext.text = device.lastSyncTime;
