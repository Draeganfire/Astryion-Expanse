class NICEPlayerCard extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["nice", "sheet", "player-card"],
      template: "modules/nice-player-card/templates/player-card.html",
      width: 600,
      height: 700,
      tabs: [
        {
          navSelector: ".tabs",
          contentSelector: ".tab-content",
          initial: "picture"
        }
      ]
    });
  }
}

Actors.registerSheet("nice-player-card", NICEPlayerCard, {
  types: ["character"],
  makeDefault: false
});
