window.__files = window.__files || {};

window.__files['index.html'] = `
<!DOCTYPE html>
<html>
<head>
    <title>File 1</title>
    <style>
        body {
            background-color: lightblue;
        }
    </style>
</head>
        <div class="c_off spb" style="margin-top: 3em;">
            <button onclick="open();" class="glow-on-hover" type="button">Launch</button>
        </div>
    <script>
function open2() {
  var newTab = window.open('about:blank');
  var fileContent = window.__files["file1.html"]; // Replace '/index.html' with the desired file path

  // Write the file content to the new tab
  newTab.document.open();
  newTab.document.write(fileContent);
  newTab.document.close();

  // Close the current tab
  window.close();
}

    </script>
<body>
    <h1>This is File 1</h1>
    <p>Content of File 1 goes here.</p>
    <script src="file:///C:/Users/joshu/OneDrive/Documents/tgus%20Games%20and%20tools/compiling%20test/compiled.js"></script>
</body>
</html>
`;

window.__files['file1.html'] = `
2
`;

window.__files['file1.js'] = `
console.log('This is JavaScript code for File 1.');
`;

window.__files['file2.html'] = `
<!DOCTYPE html>
<html>
<head>
    <title>File 2</title>
    <style>
        body {
            background-color: lightgreen;
        }
    </style>
</head>
<body>
    <h1>This is File 2</h1>
    <p>Content of File 2 goes here.</p>
    <script src="file2.js"></script>
</body>
</html>
`;

window.__files['file2.css'] = `
p {
    font-weight: bold;
}
`;

window.__files['file2.js'] = `
console.log('This is JavaScript code for File 2.');
`;
