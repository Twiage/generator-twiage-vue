const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    try {
      this.argument("name", {
        type: String,
        required: true,
        description: "The Page component name"
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

    this.fs.copyTpl(
      this.templatePath("src__service__service.ejs"),
      this.destinationPath(`src/${name}/service/${name}.service.js`)
    );
    this.fs.copyTpl(
      this.templatePath("src__store__store.js.ejs"),
      this.destinationPath(`src/${name}/store/${name}.store.js`)
    );
    this.fs.copyTpl(
      this.templatePath("src__ui__ui.vue.ejs"),
      this.destinationPath(`src/${name}/ui/${name}.vue`),
      { name }
    );
  }

  writeTestFiles() {
    const { name } = this.options;

    this.fs.copyTpl(
      this.templatePath("tests__e2e__specs.ejs"),
      this.destinationPath(`tests/e2e/specs/${name}.js`),
      { name }
    );
    this.fs.copyTpl(
      this.templatePath("tests__unit__specs.ejs"),
      this.destinationPath(`tests/unit/${name}/ui/${name}.spec.js`),
      { name }
    );
  }
};
