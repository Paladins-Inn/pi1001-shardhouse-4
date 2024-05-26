import { registerPI1001Settings } from "./settings.js";

Hooks.once("init", async function() {
    console.log("torgeternity | Initializing Torganisiertes Spiel - Scherbenhaus 4 Module");

    //-----system settings
    registerPI1001Settings()

})
Hooks.on("ready", async function() {
    //----rendering welcome message

    let welcomeMessage = await renderTemplate("modules/pi1001-shardhouse-4/welcomeMessage.hbs");

    if (game.settings.get("pi1001-shardhouse-4X", "welcomeMessage")) {
        let d = new Dialog({
            title: game.i18n.localize("PI1001.Title"),
            content: welcomeMessage,
            buttons: {
                one: {
                    icon: '<i class="fas fa-check"></i>',
                    label: game.i18n.localize("PI1001.Init.Button.OK"),
                },
                two: {
                    icon: '<i class="fas fa-ban"></i>',
                    label: game.i18n.localize("PI1001.Init.Button.DontShowAgain"),
                    callback: () =>
                        game.settings.set("pi1001-shardhouse-4", "welcomeMessage", false),
                },
            },
        }, {
            left: 100,
            top: 100,
            height: 425,
            width: 450,
            resizable: false
        });
        d.render(true);
    }


})