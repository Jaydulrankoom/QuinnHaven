import fs from 'fs';

const filesToConvert = [
  { htmlFile: 'hero-export-elementor.html', jsonFile: 'hero-elementor-template.json', templateTitle: 'QuinnHaven - Homepage Hero & Trust Bar' },
  { htmlFile: 'process-export-elementor.html', jsonFile: 'process-elementor-template.json', templateTitle: 'QuinnHaven - Process (How We Work)' },
  { htmlFile: 'cta-export-elementor.html', jsonFile: 'cta-elementor-template.json', templateTitle: 'QuinnHaven - Final CTA Section' },
  { htmlFile: 'contact-export-elementor.html', jsonFile: 'contact-elementor-template.json', templateTitle: 'QuinnHaven - Full Contact Page' }
];

filesToConvert.forEach(({ htmlFile, jsonFile, templateTitle }) => {
  if (fs.existsSync(htmlFile)) {
    const htmlContent = fs.readFileSync(htmlFile, 'utf8');
    
    // Generate unique Elementor pseudo-IDs to prevent conflict if they upload multiple
    const generateId = () => Math.random().toString(36).substring(2, 9);
    
    const elementorExport = {
      "version": "0.4",
      "title": templateTitle + " (HTML Block)",
      "type": "section", // Makes it portable as a Section block
      "content": [
        {
          "id": generateId(),
          "settings": {},
          "elements": [
            {
              "id": generateId(),
              "settings": {
                "_column_size": 100
              },
              "elements": [
                {
                  "id": generateId(),
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

    fs.writeFileSync(jsonFile, JSON.stringify(elementorExport, null, 2));
    console.log(`Successfully generated JSON: ${jsonFile}`);
  } else {
    console.log(`Could not find ${htmlFile}, skipping...`);
  }
});
