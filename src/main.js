const { app, BrowserWindow } = require("electron")

function launch(){
    const window = new BrowserWindow({
        width: 600,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    window.loadFile("../dist/AdminSpace/index.html")
}

app.whenReady().then(() => {
    launch()
})

app.on("window-all-closed", function(){
    app.quit()
})

app.on("activate", function(){
    if(BrowserWindow.getAllWindows().length === 0)  createWindow()
})
