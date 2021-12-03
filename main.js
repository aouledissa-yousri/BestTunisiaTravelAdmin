const {app, BrowserWindow} = require('electron')
const url = require("url")
const path = require("path")

function launch(){
    let window = new BrowserWindow({
        width: 1050,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },

        icon: __dirname + "/dist/AdminSpace/assets/logo.png"
    })

    window.loadURL(
        url.format({
            pathname: path.join(__dirname, 'dist/AdminSpace/index.html'),
            protocol: "file",
            slashes: true
        })
    )
    window.on("closed", () => {
        window = null
    })
}

app.on("ready", launch)

app.on("window-all-closed", () => {
    app.quit()
})

app.on("activate", () =>{
    if(window === null) launch() 
})