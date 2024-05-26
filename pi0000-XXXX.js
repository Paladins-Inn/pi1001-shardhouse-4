import { registerPI0000Settings } from "./settings.js";

Hooks.once("init", async function() {
    console.log("torgeternity | Initializing YYYYYYYYY Module");

    //-----system settings
    registerPI0000Settings()

})
Hooks.on("ready", async function() {
    //----rendering welcome message

    let welcomeMessage = await renderTemplate("modules/pi0000-XXXX/welcomeMessage.hbs");

    if (game.settings.get("pi0000-XXXXX", "welcomeMessage")) {
        let d = new Dialog({
            title: game.i18n.localize("PI0000.Title"),
            content: welcomeMessage,
            buttons: {
                one: {
                    icon: '<i class="fas fa-check"></i>',
                    label: game.i18n.localize("PI0000.Init.Button.OK"),
                },
                two: {
                    icon: '<i class="fas fa-ban"></i>',
                    label: game.i18n.localize("PI0000.Init.Button.DontShowAgain"),
                    callback: () =>
                        game.settings.set("pi0000-XXXX", "welcomeMessage", false),
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