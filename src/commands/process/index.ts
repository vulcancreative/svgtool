import {Args, Command, Flags} from '@oclif/core'
import fs from 'fs';
import path from 'path';

export default class Process extends Command {
  static description = 'Process SVG files'

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    change: Flags.string({
        char: 'c',
        description: 'parameter to change, example: width=100',
        required: true,
        multiple: true,
    }),
  }

  static args = {
    inputFolder: Args.string({description: 'Input folder containing the SVG files', required: true}),
    outputFolder: Args.string({description: 'Output folder for the processed SVG files, will contain TSX files', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Process)

    this.log(JSON.stringify(flags));

    this.processSvgFiles(args.inputFolder, args.outputFolder, flags.change);
  }

  processSvgFiles(inputFolder: string, outputFolder: string, changeParams: string[]): void {
    // Get a list of all files in the input folder
    const files = fs.readdirSync(inputFolder);

    for (const fileName of files) {
      // Skip files starting with a dot
      if (fileName.startsWith('.')) {
        continue;
      }
      // Construct the input and output file paths
      const inputFilePath = path.join(inputFolder, fileName);
      const outputFileName = fileName.replace('.svg', '.tsx');
      const outputFilePath = path.join(outputFolder, outputFileName);

      // Check if the file is a regular file
      if (fs.statSync(inputFilePath).isFile()) {
        // Read the content of the input file
        const content = fs.readFileSync(inputFilePath, 'utf8');

        // Get the filename without the extension
        const baseName = path.basename(fileName, path.extname(fileName));

        // Process the content based on the change parameters
        const modifiedContent = this.processSvgContent(baseName, content, changeParams);

        console.log("outputFilePath", outputFilePath);

        // Write the modified content to the output file
        fs.writeFileSync(outputFilePath, modifiedContent);

        this.log(`Processed file: ${fileName}`);
        this.log(`Output file: ${outputFileName}`);
        this.log('-'.repeat(20));
      }
    }
  }

processSvgContent(filename: string, content: string, changeParams: string[]): string {
    // Find the index of the closing bracket of the opening <svg> tag
    const svgStartIndex = content.indexOf('<svg');
    const svgEndIndex = content.indexOf('>', svgStartIndex);

    // Extract the content between <svg> and </svg>
    let svgContent = content.substring(svgStartIndex, svgEndIndex);

    let whParams: string[];
    let otherParams: string[];

    [whParams, otherParams] = changeParams.reduce<string[][]>(([wh, other], changeParam) => {
        const [attr] = changeParam.split('=');
        if (attr === 'width' || attr === 'height') {
            return [[...wh, changeParam], other];
        } else {
            return [wh, [...other, changeParam]];
        }
    }, [[], []]);

    // Apply the changes to the width and height attributes
    for (const changeParam of whParams) {
        const [attr, value] = changeParam.split('=');
        const pattern = new RegExp(`${attr}="[^"]+"`, 'g');
        const replacement = `${attr}="${value}"`;
        svgContent = svgContent.replace(pattern, replacement);
    }

    // Replace the modified content back into the original string
    content = content.substring(0, svgStartIndex) + svgContent + content.substring(svgEndIndex);

    // Apply the changes to the other attributes
    for (const changeParam of otherParams) {
        const [attr, value] = changeParam.split('=');
        const pattern = new RegExp(`${attr}="[^"]+"`, 'g');
        const replacement = `${attr}="${value}"`;
        content = content.replace(pattern, replacement);
    }

    const pascalCaseFilename = filename.replace(/(^|-|_)(\w)/g, function(match, p1, p2) {
        return p2.toUpperCase();
    });

    // Combine the modified content with multi-line strings
    const multiLineStart = `import React from "react";

    interface IIcons {
      fill?: string;
      width?: string;
      height?: string;
    }

    const ${pascalCaseFilename} = ({ fill, width, height }: IIcons) => {
      return (
        <div>`;
    const multiLineEnd = `    </div>
    );
  };

  export default ${pascalCaseFilename};`;

//   const regex = /<g\s+style="([^"]+)"(.*)>/g;
//   const replacement = `<g style={{ $1 }} $2>`;
//   const newContent = content.replace(regex, replacement);

  const regex = /<g\s+style="([^"]+)"\s*(.*)>/g;
const newContent = content.replace(regex, function(match: string, p1: string, p2: string) {
    console.log("p10", p1);
    console.log("p20", p2);
    
    const style = p1.replace(/-(\w)/g, function(match: string, p1: string) {
        console.log("p1", p1);
        return p1.toUpperCase();
    });

    // const style = 'mix-blend-mode:multiply';
    const regex = /:(\w+)/g;
    const newStyle = style.replace(regex, ':"$1"');
    console.log(newStyle); // mix-blend-mode:"multiply"
    return `<g style={{ ${newStyle} }} ${p2}>`;
});

    const combinedContent = `${multiLineStart}${newContent}${multiLineEnd}`;

    return combinedContent;
}
}
