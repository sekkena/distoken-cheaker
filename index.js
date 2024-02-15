const { Client } = require("discord.js");
const fs = require("node:fs")
const readline = require("readline");

async function checkToken(token) {
    let client = new Client();
    try {
        await client.login(token);
        console.log(`Working token: ${token}`);
    } catch (err) {
        if (err.message === "Incorrect login details were provided.") {
            throw new Error(`Incorrect token: ${token}`);
        }
    }
}

module.exports = {
    checkToken,
};