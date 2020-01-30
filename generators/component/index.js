const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    try {
      this.argument("name", {
        type: String,
        required: true,
        description: "The components name"
      });
      this.argument("page", {
        type: String,
        required: false,
        description:
          "The Page components name (when the new component is not global)"
      });
    } catch ({ message }) {
      this.log("ERROR: ", message);
    }
  }

  writing() {
    try {
      this.writeSourceFiles();
      this.writeTestFiles();
    } catch ({ message }) {
      this.log("ERROR: ", message);
    }
  }

  writeSourceFiles() {
    const { name } = this.options;

    const sourceDestinationPath = this.getSourceDestinationPath();

    this.fs.copyTpl(
      this.templatePath("src__ui__ui.vue.ejs"),
      this.destinationPath(`${sourceDestinationPath}/${name}.vue`),
      { name }
    );
  }

  getSourceDestinationPath() {
    const { page } = this.options;

    return page ? `src/${page}/ui` : "src/App/components";
  }

  writeTestFiles() {
    const { name, page } = this.options;
    const sourceDestinationPath = this.getSourceDestinationPath();

    const testDestinationPath = page
      ? `tests/unit/${page}/ui`
      : `tests/unit/App/components`;
    this.fs.copyTpl(
      this.templatePath(`tests__unit__specs.ejs`),
      this.destinationPath(`${testDestinationPath}/${name}.spec.ts`),
      {
        name,
        sourcePath: sourceDestinationPath.replace("src", "@")
      }
    );
  }
};
