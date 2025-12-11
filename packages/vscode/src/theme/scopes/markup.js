export default function getMarkupSettings(scheme, term) {
  return [
    {
      name: "Markdown headings",
      scope: [
        "markup.heading",
        "markup.heading.setext",
        "entity.name.section.markdown",
      ],
      settings: {
        fontStyle: "bold",
        foreground: term.normal.blue,
      },
    },
    {
      name: "Markdown bold",
      scope: ["markup.bold", "punctuation.definition.bold"],
      settings: {
        fontStyle: "bold",
        foreground: term.normal.cyan,
      },
    },
    {
      name: "Markdown italic",
      scope: ["markup.italic", "punctuation.definition.italic"],
      settings: {
        fontStyle: "italic",
        foreground: term.normal.magenta,
      },
    },
    {
      name: "Markdown links",
      scope: [
        "markup.underline.link",
        "markup.underline.link.image",
        "string.other.link.title.markdown",
        "string.other.link.description.markdown",
      ],
      settings: {
        foreground: term.normal.green,
      },
    },
    {
      name: "Markdown code",
      scope: [
        "markup.inline.raw",
        "markup.fenced_code.block",
        "markup.quote.markdown",
      ],
      settings: {
        foreground: term.normal.yellow,
      },
    },
    {
      name: "Markdown lists",
      scope: [
        "markup.list.unnumbered",
        "markup.list.numbered",
        "punctuation.definition.list.begin",
      ],
      settings: {
        foreground: term.normal.blue,
      },
    },
    {
      name: "HTML/XML tags",
      scope: [
        "meta.tag",
        "punctuation.definition.tag",
        "entity.name.tag",
      ],
      settings: {
        foreground: term.normal.cyan,
      },
    },
    {
      name: "HTML/XML attributes",
      scope: [
        "entity.other.attribute-name",
      ],
      settings: {
        foreground: term.normal.magenta,
      },
    },
  ];
}