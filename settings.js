export function registerPI0000Settings() {

    game.settings.register("pi0000-XXXX", "welcomeMessage", {
        name: game.i18n.localize("PI0000.Settings.welcomeMessage.Name"),
        hint: game.i18n.localize("PI0000.Settings.welcomeMessage.Hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
    });

}