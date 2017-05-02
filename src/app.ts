export class App {
  router;
  configureRouter(config, router)
  {
    this.router = router;

    config.map([
      {
        route: ["","pessoa"],
        moduleId: "pessoa",
        title: "Pessoas",
        nav: true
      },
      {
        route: ["Sobre"],
        moduleId: "sobre",
        title: "Sobre",
        nav: true
      },
      {
        route: ["GitHub"],
        moduleId: "github",
        title: "Github",
        nav: true
      }
    ])
  }
}
