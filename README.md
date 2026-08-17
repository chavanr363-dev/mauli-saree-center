# माऊली होलसेल साडी सेंटर — Website

एक हल्की, मोबाइल-फ्रेंडली, बिना backend वाली shop website। सिर्फ HTML + CSS + JavaScript।

## फ़ाइल स्ट्रक्चर

```
maauli-saree-center/
├── index.html
├── style.css
├── script.js
└── assets/
    └── images/        ← सारी placeholder फोटोज़ यहीं हैं
```

सारी placeholder फोटोज़ अभी elegant रंगीन डिज़ाइन के साथ बनी हैं — असली फोटो जोड़ने तक साइट अच्छी दिखेगी।

---

## 1) लोकल पर कैसे चलाएं

कोई इंस्टॉलेशन ज़रूरी नहीं — बस:

1. `maauli-saree-center` फोल्डर को अपने कंप्यूटर पर रखें।
2. `index.html` पर डबल-क्लिक करें → यह browser में खुल जाएगा।

बेहतर experience के लिए (गैलरी/lazy-loading ठीक तरह टेस्ट करने हेतु), VS Code में **Live Server** एक्सटेंशन से `index.html` खोलें, या टर्मिनल में:

```
cd maauli-saree-center
python3 -m http.server 8000
```

फिर browser में खोलें: `http://localhost:8000`

---

## 2) GitHub Pages पर FREE में पब्लिश कैसे करें

1. [github.com](https://github.com) पर अकाउंट बनाएं (अगर नहीं है)।
2. एक नई **Repository** बनाएं — नाम दें जैसे `maauli-saree-center` (Public रखें)।
3. इस फोल्डर की सभी फाइलें (index.html, style.css, script.js, assets/) उस repository में **upload** करें (GitHub की "Add file → Upload files" वाली सुविधा से, या Git कमांड से)।
4. Repository खोलें → **Settings** → बाएं मेनू में **Pages** पर क्लिक करें।
5. "Branch" के नीचे `main` चुनें, folder `/ (root)` रखें → **Save** दबाएं।
6. कुछ मिनट बाद आपकी साइट यहां लाइव होगी:
   `https://<आपका-username>.github.io/<repository-नाम>/`

बस — यह पूरी तरह फ्री होस्टिंग है, कोई सर्वर खर्च नहीं।

---

## 3) WhatsApp नंबर कैसे जोड़ें (सबसे ज़रूरी स्टेप)

1. `script.js` फाइल खोलें।
2. सबसे ऊपर यह लाइन ढूंढें:
   ```js
   const WHATSAPP_NUMBER = "YOUR_NUMBER_HERE";
   ```
3. अपना WhatsApp नंबर country code के साथ, बिना `+`, स्पेस या डैश के डालें।
   उदाहरण: नंबर `98765 43210` है तो लिखें → `"919876543210"`
4. उसी फाइल में थोड़ा नीचे Call बटन के लिए नंबर डालें:
   ```js
   const PHONE_NUMBER = "YOUR_NUMBER_HERE";
   ```
   उदाहरण: `"+919876543210"`

बस इतना करने से **सभी** WhatsApp और Call बटन (header, hero, हर product card, floating button, footer) अपने आप सही नंबर से जुड़ जाएंगे।

---

## 4) प्रोडक्ट फोटो कैसे बदलें

1. `assets/images/` फोल्डर खोलें।
2. अपनी असली फोटो का नाम बिल्कुल वैसा ही रखें जैसा मौजूदा placeholder फाइल का नाम है (उदाहरण: `fancy-saree.jpg`), और उसी फाइल को replace कर दें।
   - इससे `index.html` में कुछ भी बदलने की ज़रूरत नहीं पड़ेगी।
3. अगर नए नाम की फोटो इस्तेमाल करनी है, तो `index.html` में संबंधित `<img src="assets/images/....jpg">` वाली लाइन में नाम बदल दें।
4. बेहतर लोडिंग स्पीड के लिए फोटो को ज़्यादा से ज़्यादा 1200px चौड़ाई और अच्छे compression (JPEG, 70-85% quality) में रखें।

फोटो की पूरी लिस्ट (जो बदलनी हैं):
- `logo.png` — दुकान का लोगो
- `hero-bg.jpg` — होम पेज की बैकग्राउंड फोटो
- `fancy-saree.jpg`, `saree-6-wari.jpg`, `saree-9-wari.jpg`, `printed-saree.jpg`, `blouse-piece.jpg`, `petticoat.jpg`, `astar.jpg`, `gown.jpg`, `baby-clothes.jpg` — 9 product cards
- `fancy-saree-1.jpg`, `fancy-saree-2.jpg`, `saree-6-wari-1.jpg`, `saree-9-wari-1.jpg`, `printed-saree-1.jpg`, `printed-saree-2.jpg`, `baby-clothes-1.jpg`, `baby-clothes-2.jpg` — गैलरी फोटोज़

---

## 5) दुकान का पता, समय और Google Maps जोड़ना

`index.html` में **Contact** सेक्शन ढूंढें (`<!-- ✏️ EDIT HERE -->` कमेंट देखें) और यह भरें:
- पता
- मोबाइल नंबर (टेक्स्ट के तौर पर दिखाने के लिए)
- WhatsApp नंबर (टेक्स्ट के तौर पर दिखाने के लिए)
- दुकान का समय

**Google Maps जोड़ने के लिए:**
1. Google Maps पर अपनी दुकान सर्च करें।
2. **Share** → **Embed a map** → कोड कॉपी करें (उसमें से सिर्फ़ `src="...."` वाला लिंक चाहिए)।
3. `index.html` के Contact सेक्शन में `GOOGLE_MAPS_EMBED_URL_HERE` की जगह वह लिंक डालें, और नीचे मौजूद कमेंट किए हुए `<iframe>` को uncomment कर दें (उसके ऊपर मौजूद placeholder वाला `<div class="map-placeholder">` हटा सकते हैं)।
4. `script.js` में `GOOGLE_MAPS_LINK` वैरिएबल में अपनी दुकान का सामान्य Google Maps "share" लिंक डालें (यह "📍 Google Maps" बटन के लिए है)।

---

## टेस्ट किया जा चुका है ✅

- सभी लिंक और बटन काम कर रहे हैं
- WhatsApp बटन सही pre-filled मैसेज के साथ `wa.me` खोलते हैं
- Call बटन `tel:` लिंक के साथ काम करता है
- मोबाइल पर hamburger मेनू खुलता/बंद होता है
- गैलरी फ़िल्टर और lightbox काम करते हैं
- कहीं भी horizontal scroll नहीं है (मोबाइल पर भी)
- सभी images में `alt` text और lazy-loading है
