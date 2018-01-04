const child_process = require("child_process");
const open = require("open");
const port = 4200;

main();

async function main() {
    await build(false);

    openWebServer();

    await delay(500);

    openBrowser();

    await delay(500);

    build(true);
}

function openWebServer() {
    child_process.spawn(`node node_modules/http-server/bin/http-server -p ${port}`, {
        stdio: "inherit",
        shell: true,
        detach: true,
    });
}

function openBrowser() {
    open(`http://localhost:${port}/index.html`);
}

function build(watch) {
    return new Promise(function(resolve, reject) {
        let command = "node node_modules/webpack/bin/webpack";

        if(watch) {
            command += " -w";
        }

        child_process.spawn(command, {
            stdio: "inherit",
            shell: true,
        }).on("close", function() {
            resolve();
        });
    });
}

function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms);
    });
}
