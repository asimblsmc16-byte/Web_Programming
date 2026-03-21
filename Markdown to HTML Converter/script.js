function convertMarkdown() {
  const input = document.getElementById('markdown-input').value;
  const satirlar = input.split('\n');
  let sonuc = '';
  
  for (let i = 0; i < satirlar.length; i++) {

    if (satirlar[i].startsWith('![') && satirlar[i].includes('](') && satirlar[i].endsWith(')')) {
      let altBaslangic = satirlar[i].indexOf('[') + 1;
      let altBitis = satirlar[i].indexOf(']');
      let altMetin = satirlar[i].substring(altBaslangic, altBitis);
      
      let srcBaslangic = satirlar[i].indexOf('(') + 1;
      let srcBitis = satirlar[i].indexOf(')');
      let srcMetin = satirlar[i].substring(srcBaslangic, srcBitis);
      
      sonuc += '<img alt="' + altMetin + '" src="' + srcMetin + '">';
    }

    else if (satirlar[i].startsWith('[') && satirlar[i].includes('](') && satirlar[i].endsWith(')')) {
      let metinBaslangic = satirlar[i].indexOf('[') + 1;
      let metinBitis = satirlar[i].indexOf(']');
      let Metin = satirlar[i].substring(metinBaslangic, metinBitis);
      
      let urlBaslangic = satirlar[i].indexOf('(') + 1;
      let urlBitis = satirlar[i].indexOf(')');
      let Url = satirlar[i].substring(urlBaslangic, urlBitis);
      
      sonuc += '<a '+ 'href="' + Url + '"' + ">" + Metin + '</a>';
    }

    else if (satirlar[i].startsWith('# ')) {

      let baslikMetni = satirlar[i].slice(2);

      if (baslikMetni.startsWith('**') && baslikMetni.endsWith('**') ||
          baslikMetni.startsWith('__') && baslikMetni.endsWith('__')) {
        let metin = baslikMetni.slice(2, -2);
        sonuc += '<h1><strong>' + metin + '</strong></h1>';
      }
      else {
        sonuc += '<h1>' + satirlar[i].slice(2) + '</h1>';
      }
    }

    else if (satirlar[i].startsWith('## ')) {
      sonuc += '<h2>' + satirlar[i].slice(3) + '</h2>';
    }
    else if (satirlar[i].startsWith('### ')) {
      sonuc += '<h3>' + satirlar[i].slice(4) + '</h3>';
    }

    else if (satirlar[i].startsWith('> ')) {

      let baslikMetni = satirlar[i].slice(2);

      if (baslikMetni.startsWith('**') && baslikMetni.endsWith('**')) {

        let metin = baslikMetni.slice(2, -2);

        if (metin.includes('*')) {
          let italicBaslangic = metin.indexOf('*');
          let italicBitis = metin.lastIndexOf('*');
          let normalKisim = metin.substring(0, italicBaslangic);
          let italicKisim = metin.substring(italicBaslangic + 1, italicBitis);
          sonuc += '<blockquote><strong>' + normalKisim + '<em>' + italicKisim + '</em></strong></blockquote>';
        }
        else {
          sonuc += '<blockquote><strong>' + metin.slice(2) + '</strong></blockquote>';
        }
      }
      else {
        sonuc += '<blockquote>' + satirlar[i].slice(2) + '</blockquote>';
      }
    }

    else if (satirlar[i].startsWith('**') && satirlar[i].endsWith('**')) {
      sonuc += '<strong>' + satirlar[i].slice(2, -2) + '</strong>';
    }

    else if (satirlar[i].startsWith('__') && satirlar[i].endsWith('__')) {
      sonuc += '<strong>' + satirlar[i].slice(2, -2) + '</strong>';
    }

    else if (satirlar[i].startsWith('*') && satirlar[i].endsWith('*')) {
      sonuc += '<em>' + satirlar[i].slice(1, -1) + '</em>';
    }

    else if (satirlar[i].startsWith('_') && satirlar[i].endsWith('_')) {
      sonuc += '<em>' + satirlar[i].slice(1, -1) + '</em>';
    }

    else {
      sonuc = sonuc + satirlar[i];
    }
  }
  return sonuc;
}

document.getElementById('markdown-input').addEventListener("input", () => {
  const html = convertMarkdown();
  document.getElementById('html-output').textContent = html;
  document.getElementById('preview').innerHTML = html;
});