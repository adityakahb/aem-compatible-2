const fs = require('fs');
const toUpper = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}
const generateNav = () => {
  let navstr = `<nav>
  <ul class="list-style-none m-0 p-0">`;
  let varstr = ``;
  fs.readdirSync('./templates').forEach(function (file) {
    // let name = './templates'+'/'+file;
    if (file !== '_baseLayoutPage' && fs.statSync('./templates'+'/'+file).isDirectory()) {
      navstr += `
    <li>
      <!--#if expr='$active_nav = /${file}/' -->
        <div class="bg-light text-align-left p-3">${toUpper(file)}</div>
      <!--#else -->
        <a href="/aem-compatible-2/templates/${file}" class="p-3 display-block">${toUpper(file)}</a>
      <!--#endif -->
    </li>
      `;
      varstr += `
<!-- ***************    ${file.toUpperCase()}    *************** -->
<!--#if expr='$DOCUMENT_URI = /.+\\/${file}\\//' -->
  <!--#set var="active_nav" value="${file}" -->
<!--#endif -->
      `;
    }
  })
  navstr += `</ul>
  </nav>`;
  fs.writeFile('./templates/_baseLayoutPage/left-nav.html', navstr, function (err) {
    if (err) throw err;
    console.log('Nav replaced');
  });
  fs.writeFile('./templates/_baseLayoutPage/apache-vars.html', varstr, function (err) {
    if (err) throw err;
    console.log('Apache Vars replaced');
  });
}

generateNav();