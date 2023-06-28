import { expect, test } from "@oclif/test";
import * as fs from "fs";
import * as path from "path";
import * as fse from "fs-extra";

describe("process test height", () => {
  const inputDir = path.join(__dirname, "input");
  const outputDir = path.join(__dirname, "output");

  const expectedContent = `import React from "react";

    interface IIcons {
      fill?: string;
      width?: string;
      height?: string;
    }

    const TestHeight = ({ fill, width, height }: IIcons) => {
      return (
        <div><svg width="32" height="100" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25 24.9999V15.4142L26.2929 16.707C26.6834 17.0976 27.3166 17.0976 27.7071 16.707C28.0976 16.3165 28.0976 15.6834 27.7071 15.2928L18.1213 5.70705C16.9497 4.53547 15.0503 4.53548 13.8787 5.70705L4.29289 15.2928C3.90237 15.6834 3.90237 16.3165 4.29289 16.707C4.68342 17.0976 5.31658 17.0976 5.70711 16.707L7 15.4142V24.9999C7 26.6568 8.34315 27.9999 10 27.9999H22C23.6569 27.9999 25 26.6568 25 24.9999Z" fill="#0B0022"/>
</svg>
    </div>
    );
  };

  export default TestHeight;`;

  before(() => {
    // Create the input and output directories
    fs.mkdirSync(inputDir);
    fs.mkdirSync(outputDir);

    // Create an SVG file in the input directory
    const svgContent = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25 24.9999V15.4142L26.2929 16.707C26.6834 17.0976 27.3166 17.0976 27.7071 16.707C28.0976 16.3165 28.0976 15.6834 27.7071 15.2928L18.1213 5.70705C16.9497 4.53547 15.0503 4.53548 13.8787 5.70705L4.29289 15.2928C3.90237 15.6834 3.90237 16.3165 4.29289 16.707C4.68342 17.0976 5.31658 17.0976 5.70711 16.707L7 15.4142V24.9999C7 26.6568 8.34315 27.9999 10 27.9999H22C23.6569 27.9999 25 26.6568 25 24.9999Z" fill="#0B0022"/>
</svg>
`;

    fs.writeFileSync(path.join(inputDir, "test-height.svg"), svgContent);
  });

  after(async () => {
    // Delete the input and output directories
    await fse.remove(inputDir);
    await fse.remove(outputDir);
  });

  test
    .stdout()
    .command(["process", inputDir, outputDir, "-c", "height=100"])
    .it("runs process cmd", (ctx) => {
      // Check if the output directory contains a file named "test.tsx"
      const outputFiles = fs.readdirSync(outputDir);
      expect(outputFiles).to.include("test-height.tsx");

      // Check if the content of "test.tsx" matches the expected string
      const testTsxContent = fs.readFileSync(
        path.join(outputDir, "test-height.tsx"),
        "utf8"
      );
      expect(testTsxContent.replace(/\s+/g, "")).to.equal(
        expectedContent.replace(/\s+/g, "")
      );
    });
});
