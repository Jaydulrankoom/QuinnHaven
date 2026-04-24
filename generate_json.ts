import fs from 'fs';

const htmlContent = fs.readFileSync('about-export-elementor.html', 'utf8');

const elementorExport = {
  "version": "0.4",
  "title": "QuinnHaven - About Us (HTML Block)",
  "type": "page",
  "content": [
    {
      "id": "a1b2cad",
      "settings": {},
      "elements": [
        {
          "id": "b2c3dae",
          "settings": {
            "_column_size": 100
          },
          "elements": [
            {
              "id": "c3d4ebf",
              "settings": {
                "html": htmlContent
              },
              "elements": [],
              "isInner": false,
              "widgetType": "html",
              "elType": "widget"
            }
          ],
          "isInner": false,
          "elType": "column"
        }
      ],
      "isInner": false,
      "elType": "section"
    }
  ],
  "page_settings": {}
};

fs.writeFileSync('about-elementor-template.json', JSON.stringify(elementorExport, null, 2));
console.log("JSON generated successfully.");
