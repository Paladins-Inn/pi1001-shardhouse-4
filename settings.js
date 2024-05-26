export function registerPI1001Settings() {

    game.settings.register("pi1001-shardhouse-4", "welcomeMessage", {
        name: game.i18n.localize("PI1001.Settings.welcomeMessage.Name"),
        hint: game.i18n.localize("PI1001.Settings.welcomeMessage.Hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
    });

}