import fs from "fs-extra";
import path from "path";

// 1. updateHTMLFile
async function updateHTMLFile(filePath, updateMap) {
  try {
    if (!await fs.pathExists(filePath)) {
      return { success: false, error: 'File not found: ' + filePath };
    }
    
    let html = await fs.readFile(filePath, 'utf8');
    let changes = 0;

    for (const [selector, replacement] of Object.entries(updateMap)) {
      if (typeof replacement === 'object' && replacement !== null) {
        // Attribute replacement
        if (replacement.attr && replacement.value !== undefined) {
          // Parse tag[attr=val]
          const elemMatch = selector.match(/^([a-zA-Z0-9]+)\[([a-zA-Z\-]+)=["']?([^\]"']+)["']?\]$/);
          
          if (elemMatch) {
            const [_, tag, searchAttr, searchVal] = elemMatch;
            const targetAttr = replacement.attr;
            const targetValue = replacement.value;
            
            // Regex to find the <tag searchAttr="searchVal"> element
            const regexStr = `<${tag}\\s+(?:[^>]*?\\s+)?${searchAttr}=["']${searchVal}["'][^>]*>`;
            const tagRegex = new RegExp(regexStr, 'gi');
            
            html = html.replace(tagRegex, (match) => {
              const attrRegex = new RegExp(`(${targetAttr}=["'])(.*?)(["'])`, 'i');
              if (attrRegex.test(match)) {
                changes++;
                return match.replace(attrRegex, `$1${targetValue}$3`);
              } else {
                // Insert attribute if it doesn't exist
                changes++;
                return match.replace(/(\/?>)$/, ` ${targetAttr}="${targetValue}"$1`);
              }
            });
          } else if (selector.startsWith('[data-editable="')) {
            // [data-editable="value"]
            const matchVal = selector.match(/\[data-editable="([^"]+)"\]/)[1];
            const targetAttr = replacement.attr;
            const targetValue = replacement.value;
            
            const regexStr = `<[^>]+\\s+data-editable=["']${matchVal}["'][^>]*>`;
            const tagRegex = new RegExp(regexStr, 'gi');
            
            html = html.replace(tagRegex, (match) => {
              const attrRegex = new RegExp(`(${targetAttr}=["'])(.*?)(["'])`, 'i');
              if (attrRegex.test(match)) {
                changes++;
                return match.replace(attrRegex, `$1${targetValue}$3`);
              } else {
                changes++;
                return match.replace(/(\/?>)$/, ` ${targetAttr}="${targetValue}"$1`);
              }
            });
          }
        }
      } else {
        // Inner HTML replacement based on data-editable marker
        let matchSelector = selector;
        if (selector.startsWith('[data-editable="')) {
            matchSelector = selector.match(/\[data-editable="([^"]+)"\]/)[1];
        }

        const regexStr = `(<[^>]+\\s+data-editable=["']${matchSelector}["'][^>]*>)([\\s\\S]*?)(<\\/[a-zA-Z0-9]+>)`;
        const tagRegex = new RegExp(regexStr, 'gi');
        
        html = html.replace(tagRegex, (match, openTag, oldContent, closeTag) => {
           changes++;
           return `${openTag}${replacement}${closeTag}`;
        });
      }
    }

    await fs.writeFile(filePath, html, 'utf8');
    return { success: true, changes };
  } catch (error) {
    console.error(`Error updating HTML file ${filePath}:`, error);
    return { success: false, error: error.message };
  }
}

// 2. updateMetaTags
async function updateMetaTags(filePath, { title, description, ogTitle, ogDescription }) {
  try {
    if (!await fs.pathExists(filePath)) {
      return { success: false, error: 'File not found: ' + filePath };
    }
      
    let html = await fs.readFile(filePath, 'utf8');
    let changes = 0;

    if (title !== undefined) {
      if (/(<title>)(.*?)(<\/title>)/i.test(html)) {
        html = html.replace(/(<title>)(.*?)(<\/title>)/i, (match, openTag, old, closeTag) => {
          changes++;
          return `${openTag}${title}${closeTag}`;
        });
      } else {
        html = html.replace(/(<head[^>]*>)/i, (match, head) => {
          changes++;
          return `${head}\n    <title>${title}</title>`;
        });
      }
    }

    if (description !== undefined) {
      if (/(<meta\s+name=["']description["']\s+content=["'])(.*?)(["']\s*\/?>)/i.test(html)) {
        html = html.replace(/(<meta\s+name=["']description["']\s+content=["'])(.*?)(["']\s*\/?>)/i, (match, prefix, old, suffix) => {
          changes++;
          return `${prefix}${description}${suffix}`;
        });
      } else {
        html = html.replace(/(<head[^>]*>)/i, (match, head) => {
          changes++;
          return `${head}\n    <meta name="description" content="${description}">`;
        });
      }
    }

    if (ogTitle !== undefined) {
      if (/(<meta\s+property=["']og:title["']\s+content=["'])(.*?)(["']\s*\/?>)/i.test(html)) {
        html = html.replace(/(<meta\s+property=["']og:title["']\s+content=["'])(.*?)(["']\s*\/?>)/i, (match, prefix, old, suffix) => {
          changes++;
          return `${prefix}${ogTitle}${suffix}`;
        });
      } else {
        html = html.replace(/(<head[^>]*>)/i, (match, head) => {
          changes++;
          return `${head}\n    <meta property="og:title" content="${ogTitle}">`;
        });
      }
    }

    if (ogDescription !== undefined) {
      if (/(<meta\s+property=["']og:description["']\s+content=["'])(.*?)(["']\s*\/?>)/i.test(html)) {
        html = html.replace(/(<meta\s+property=["']og:description["']\s+content=["'])(.*?)(["']\s*\/?>)/i, (match, prefix, old, suffix) => {
          changes++;
          return `${prefix}${ogDescription}${suffix}`;
        });
      } else {
        html = html.replace(/(<head[^>]*>)/i, (match, head) => {
          changes++;
          return `${head}\n    <meta property="og:description" content="${ogDescription}">`;
        });
      }
    }

    await fs.writeFile(filePath, html, 'utf8');
    return { success: true, changes };
  } catch (error) {
    console.error(`Error updating meta tags in ${filePath}:`, error);
    return { success: false, error: error.message };
  }
}

export {
  updateHTMLFile,
  updateMetaTags
};
