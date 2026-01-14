const COMMANDS = {
  help() {
    return `
Available commands:
- help
- clear
- open github
- open youtube
`;
  },

  clear(_, terminal) {
    terminal.clear();
    return "";
  },

  open(args) {
    if (!args.length) {
      return "usage: open [github|youtube]";
    }

    const target = args[0].toLowerCase();

    const links = {
      github: "https://github.com/HAMGEUM",
      youtube: "https://www.youtube.com/@한금그래밍"
    };

    if (!links[target]) {
      return `open: unknown target '${target}'`;
    }

    window.open(links[target], "_blank");

    return `opening ${target}...`;
  }
};
