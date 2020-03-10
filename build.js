const fs = require('fs');
const srcDir = './src/';

const src = fs.readdirSync(srcDir)
    .map(file => {
        const content = fs.readFileSync(srcDir + file, 'utf-8');
        return content.substring(content.indexOf('*/') + 3)
    })
    .join('\n\n');

const guacamole = `;(function(){
  ${src}
if(module && module.exports)
  module.exports = Guacamole
else
  window.Guacamole = Guacamole
})();
`;

fs.writeFileSync('./guacamole.js', guacamole);
