/** @format */
import React from "react"
import { AppRegistry } from "react-native"
import Setup from "./src/boot"
import { name as appName } from "./app.json"

AppRegistry.registerComponent(appName, () => Setup);
