

console.log("predev  OK")


import fs from 'node:fs';
import path from 'node:path';


const walk = (dirpath, callback) => {
  fs.readdir(dirpath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    for (const file of files) {
      const fp = path.join(dirpath, file);
      fs.stat(fp, (err, stats) => {
        if (err) {
          console.error(err);
          return;	
        }
        if (stats.isDirectory()) {
          walk(fp, callback);
        } else {
          if (path.extname(file) === '.tsx' ) {
              callback(fp);
	  } else
          if (path.extname(file) === '.ts' ) {
              callback(fp);
	  }
        }
      });
    }
  });
}

const filename = "src/code.ts"

function get(filePath) {
  const path_ = path.basename(filePath, path.extname(filePath));
  return path_.replace(/^.*[\\\/]/, '');
}

const make = (filepath) => {
  let text = fs.readFileSync(filepath, 'utf-8');
  let fileid    =get( filepath)

  let  code = `
\nconst ${fileid} = \`
${text}\`;
\n\nexport { ${fileid} };\n\n`;

  fs.writeFileSync(filename, code, {  encoding: 'utf8',   mode: 0o666,  flag: 'a' });

}

fs.writeFileSync(filename, "", {  encoding: 'utf8',   mode: 0o666,  flag: 'w' });

walk("src/lesson", make);

