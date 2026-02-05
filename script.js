// --- 1. DATA STRUCTURE (Sabse Pehle) ---
const allMaps = {
    s1: {"a":"𝕒","b":"𝕓","c":"𝕔","d":"𝕕","e":"𝕖","f":"𝕗","g":"𝕘","h":"𝕙","i":"𝕚","j":"𝕛","k":"𝕜","l":"𝕝","m":"𝕞","n":"𝕟","o":"𝕠","p":"𝕡","q":"𝕢","r":"𝕣","s":"𝕤","t":"𝕥","u":"𝕦","v":"𝕧","w":"𝕨","x":"𝕩","y":"𝕪","z":"𝕫"},
    s2: {"a":"𝒶","b":"𝒷","c":"𝒸","d":"𝒹","e":"𝑒","f":"𝒻","g":"𝑔","h":"𝒽","i":"𝒾","j":"𝒿","k":"𝓀","l":"𝓁","m":"𝓂","n":"𝓃","o":"𝑜","p":"𝓅","q":"𝓆","r":"𝓇","s":"𝓈","t":"𝓉","u":"𝓊","v":"𝓋","w":"𝓌","x":"𝓍","y":"𝓎","z":"𝓏"},
    s3: {"a":"𝓪","b":"𝓫","c":"𝓬","d":"𝓭","e":"𝓮","f":"𝓯","g":"𝓰","h":"𝓱","i":"𝓲","j":"𝓳","k":"𝓴","l":"𝓵","m":"𝓶","n":"𝓷","o":"𝓸","p":"𝓹","q":"𝓺","r":"𝓻","s":"𝓼","t":"𝓽","u":"𝓾","v":"𝓿","w":"𝔀","x":"𝔁","y":"𝔂","z":"𝔃"},
    s4: {"a":"𝔞","b":"𝔟","c":"𝔠","d":"𝔡","e":"𝔢","f":"𝔣","g":"𝔤","h":"𝔥","i":"𝔦","j":"𝔧","k":"𝔨","l":"𝔩","m":"𝔪","n":"𝔫","o":"𝔬","p":"𝔭","q":"𝔮","r":"𝔯","s":"𝔰","t":"𝔱","u":"𝔲","v":"𝔳","w":"𝔴","x":"𝔵","y":"𝔶","z":"𝔷"},
    s5: {"a":"α","b":"в","c":"¢","d":"∂","e":"є","f":"ƒ","g":"g","h":"н","i":"ι","j":"ʝ","k":"к","l":"ℓ","m":"м","n":"η","o":"σ","p":"ρ","q":"q","r":"я","s":"ѕ","t":"т","u":"υ","v":"ν","w":"ω","x":"χ","y":"у","z":"z"},
    s6: {"a":"ค","b":"๒","c":"ς","d":"๔","e":"є","f":"Ŧ","g":"g","h":"ђ","i":"เ","j":"ן","k":"к","l":"l","m":"๓","n":"ภ","o":"๏","p":"ק","q":"ợ","r":"г","s":"ร","t":"т","u":"ย","v":"ש","w":"ฬ","x":"ץ","y":"ץ","z":"z"},
    s7: {"a":"卂","b":"乃","c":"匚","d":"ᗪ","e":"乇","f":"千","g":"Ꮆ","h":"卄","i":"丨","j":"ﾌ","k":"Ҝ","l":"ㄥ","m":"爪","n":"几","o":"ㄖ","p":"卩","q":"Ɋ","r":"尺","s":"丂","t":"ㄒ","u":"ㄩ","v":"ᐜ","w":"山","x":"乂","y":"ㄚ","z":"乙"},
    s8: {"a":"Ꮧ","b":"Ᏸ","c":"ፈ","d":"Ꮄ","e":"Ꮛ","f":"Ꭶ","g":"Ꮆ","h":"Ꮒ","i":"Ꭵ","j":"Ꮰ","k":"Ꮶ","l":"Ꮭ","m":"Ꮇ","n":"Ꮑ","o":"Ꭷ","p":"Ꭾ","q":"Ꭴ","r":"Ꮢ","s":"Ꮥ","t":"Ꮦ","u":"Ꮼ","v":"Ꮙ","w":"Ꮗ","x":"ጀ","y":"Ꭹ","z":"ፗ"},
    s9: {"a":"ą","b":"ც","c":"ƈ","d":"ɖ","e":"ɛ","f":"ʄ","g":"ɠ","h":"ɧ","i":"ı","j":"ʝ","k":"ƙ","l":"Ɩ","m":"ɱ","n":"ŋ","o":"ơ","p":"℘","q":"զ","r":"ཞ","s":"ʂ","t":"ɬ","u":"ų","v":"۷","w":"ῳ","x":"ҳ","y":"ყ","z":"ʑ"},
    s10: {"a":"ﾑ","b":"乃","c":"c","d":"d","e":"乇","f":"ｷ","g":"g","h":"ん","i":"ﾉ","j":"ﾌ","k":"ズ","l":"ﾚ","m":"M","n":"刀","o":"o","p":"ｱ","q":"q","r":"尺","s":"丂","t":"ｲ","u":"u","v":"v","w":"w","x":"ﾒ","y":"ﾘ","z":"乙"},
    s11: {"a":"ᗩ","b":"ᗷ","c":"ᑕ","d":"ᗪ","e":"E","f":"ᖴ","g":"G","h":"ᕼ","i":"I","j":"ᒍ","k":"K","l":"ᒪ","m":"ᗰ","n":"ᑎ","o":"O","p":"ᑭ","q":"ᑫ","r":"ᖇ","s":"ᔕ","t":"T","u":"ᑌ","v":"ᐯ","w":"ᗯ","x":"᙭","y":"Y","z":"ᘔ"},
    s12: {"a":"𝐀","b":"𝐁","c":"𝐂","d":"𝐃","e":"𝐄","f":"𝐅","g":"𝐆","h":"𝐇","i":"𝐈","j":"𝐉","k":"𝐊","l":"𝐋","m":"𝐌","n":"𝐍","o":"𝐎","p":"𝐏","q":"𝐐","r":"𝐑","s":"𝐒","t":"𝐓","u":"𝐔","v":"𝐕","w":"𝐖","x":"𝐗","y":"𝐘","z":"𝐙"},
    s13: {"a":"🅰","b":"🅱","c":"🅲","d":"🅳","e":"🅴","f":"🅵","g":"🅶","h":"🅷","i":"🅸","j":"🅹","k":"🅺","l":"🅻","m":"🅼","n":"🅽","o":"🅾","p":"🅿","q":"🆁","r":"🆂","s":"🆃","t":"🆄","u":"🆅","v":"🆆","w":"🆇","x":"🆈","y":"🆉","z":"🆉"},
    s14: {"a":"ⓐ","b":"ⓑ","c":"ⓒ","d":"ⓓ","e":"ⓔ","f":"ⓕ","g":"ⓖ","h":"ⓗ","i":"ⓘ","j":"ⓙ","k":"ⓚ","l":"ⓛ","m":"ⓜ","n":"ⓝ","o":"ⓞ","p":"ⓟ","q":"ⓠ","r":"ⓡ","s":"ⓢ","t":"ⓣ","u":"ⓤ","v":"ⓥ","w":"ⓦ","x":"ⓧ","y":"ⓨ","z":"ⓩ"},
    s15: {"a":"ɐ","b":"q","c":"ɔ","d":"p","e":"ǝ","f":"ɟ","g":"ƃ","h":"ɥ","i":"ᴉ","j":"ɾ","k":"ʞ","l":"l","m":"ɯ","n":"uu","o":"o","p":"d","q":"b","r":"ɹ","s":"s","t":"ʇ","u":"n","v":"ʌ","w":"ʍ","x":"x","y":"ʎ","z":"z"},
    s16: {"a":"🄰","b":"🄱","c":"🄲","d":"🄳","e":"🄴","f":"🄵","g":"🄶","h":"🄷","i":"🄸","j":"🄹","k":"🄺","l":"🄻","m":"🄼","n":"🄽","o":"🄾","p":"🄿","q":"🅀","r":"🅁","s":"🅂","t":"🅃","u":"🅄","v":"🅅","w":"🅆","x":"🅇","y":"🅈","z":"🅉"},
    s17: {"a":"ค","b":"ც","c":"ς","d":"ᑯ","e":"ꫀ","f":"ϝ","g":"ց","h":"ჩ","i":"і","j":"ʝ","k":"ƙ","l":"ӏ","m":"ო","n":"ո","o":"օ","p":"թ","q":"զ","r":"ɾ","s":"Ⴑ","t":"ե","u":"υ","v":"v","w":"ω","x":"ϰ","y":"ყ","z":"ƽ"},
    s18: {"a":"𝔸","b":"𝔹","c":"ℂ","d":"𝔻","e":"𝔼","f":"𝔽","g":"𝔾","h":"ℍ","i":"𝕀","j":"𝕁","k":"𝕂","l":"𝕃","m":"𝕄","n":"ℕ","o":"𝕆","p":"ℙ","q":"ℚ","r":"ℝ","s":"𝕊","t":"𝕋","u":"𝕌","v":"𝕍","w":"𝕎","x":"𝕏","y":"𝕐","z":"ℤ"},
    s19: {"a":"𝐀","b":"𝐁","c":"𝐂","d":"𝐃","e":"𝐄","f":"𝐅","g":"𝐆","h":"𝐇","i":"𝐈","j":"𝐉","k":"𝐊","l":"𝐋","m":"𝐌","n":"𝐍","o":"𝐎","p":"𝐏","q":"𝐐","r":"𝐑","s":"𝐒","t":"𝐓","u":"𝐔","v":"𝐕","w":"𝐖","x":"𝐗","y":"𝐘","z":"𝐙"},
    s20: {"a":"𝘈","b":"𝘉","c":"𝘊","d":"𝘋","e":"𝘌","f":"𝘍","g":"𝘎","h":"𝘏","i":"𝘐","j":"𝘑","k":"𝘒","l":"𝘓","m":"𝘔","n":"𝘕","o":"𝘖","p":"𝘗","q":"𝘘","r":"𝘙","s":"𝘚","t":"𝘛","u":"𝘜","v":"𝘝","w":"𝘞","x":"𝘟","y":"𝘠","z":"𝘡"},
    s21: {"a":"𝘼","b":"𝘽","c":"𝘾","d":"𝘿","e":"𝙀","f":"𝙁","g":"𝙂","h":"𝙃","i":"𝙄","j":"𝙅","k":"𝙆","l":"𝙇","m":"𝙈","n":"𝙉","o":"𝙊","p":"𝙋","q":"𝙌","r":"𝙍","s":"𝙎","t":"𝙏","u":"𝙐","v":"𝙑","w":"𝙒","x":"𝙓","y":"𝙔","z":"𝙕"},
    s22: {"a":"𝙰","b":"𝙱","c":"𝙲","d":"𝙳","e":"𝙴","f":"𝐅","g":"𝙶","h":"𝙷","i":"𝙸","j":"𝙹","k":"𝙺","l":"𝙻","m":"𝙼","n":"𝙽","o":"𝙾","p":"𝙿","q":"𝚀","r":"𝚁","s":"𝚂","t":"𝚃","u":"𝚄","v":"𝐕","w":"𝚆","x":"𝚇","y":"𝚈","z":"𝚉"},
    s23: {"a":"Λ","b":"B","c":"C","d":"D","e":"Ξ","f":"F","g":"G","h":"H","i":"I","j":"J","k":"K","l":"L","m":"M","n":"И","o":"O","p":"P","q":"Q","r":"Я","s":"S","t":"T","u":"U","v":"V","w":"W","x":"X","y":"Y","z":"Z"},
    s24: {"a":"[̲̅a]","b":"[̲̅b]","c":"[̲̅c]","d":"[̲̅d]","e":"[̲̅e]","f":"[̲̅f]","g":"[̲̅g]","h":"[̲̅h]","i":"[̲̅i]","j":"[̲̅j]","k":"[̲̅k]","l":"[̲̅l]","m":"[̲̅m]","n":"[̲̅n]","o":"[̲̅o]","p":"[̲̅p]","q":"[̲̅q]","r":"[̲̅r]","s":"[̲̅s]","t":"[̲̅t]","u":"[̲̅u]","v":"[̲̅v]","w":"[̲̅w]","x":"[̲̅x]","y":"[̲̅y]","z":"[̲̅z]"},
    s25: {"a":"ₐ","b":"♭","c":"꜀","d":"꜕","e":"ₑ","f":"բ","g":"و","h":"ₕ","i":"ᵢ","j":"ⱼ","k":"ₖ","l":"ₗ","m":"ₘ","n":"ₙ","o":"ₒ","p":"ₚ","q":"q","r":"ᵣ","s":"ₛ","t":"ₜ","u":"ᵤ","v":"ᵥ","w":"w","x":"ₓ","y":"ᵧ","z":"₂"},
    s26: {"a":"ᴀ","b":"ʙ","c":"ᴄ","d":"ᴅ","e":"ᴇ","f":"ꜰ","g":"ɢ","h":"ʜ","i":"ɪ","j":"ᴊ","k":"ᴋ","l":"ʟ","m":"ᴍ","n":"ɴ","o":"ᴏ","p":"ᴘ","q":"ǫ","r":"ʀ","s":"s","t":"ᴛ","u":"ᴜ","v":"ᴠ","w":"ᴡ","x":"x","y":"ʏ","z":"ᴢ"},
    s27: {"a":"🅐","b":"🅑","c":"🅒","d":"🅓","e":"🅔","f":"🅕","g":"🅖","h":"🅗","i":"🅘","j":"🅙","k":"🅚","l":"🅛","m":"🅜","n":"🅝","o":"🅟","p":"🅠","q":"🅡","r":"🅢","s":"🅣","t":"🅤","u":"🅤","v":"🅥","w":"🅦","x":"🅧","y":"🅨","z":"🅩"},
    s28: {"a":"⒜","b":"⒝","c":"⒞","d":"⒟","e":"⒠","f":"⒡","g":"⒢","h":"⒣","i":"⒤","j":"⒥","k":"⒦","l":"⒧","m":"⒨","n":"⒩","o":"⒪","p":"⒫","q":"⒬","r":"⒭","s":"⒮","t":"⒯","u":"⒰","v":"⒱","w":"⒲","x":"⒳","y":"⒴","z":"⒵"},
    s29: {"a":"a̶","b":"b̶","c":"c̶","d":"d̶","e":"e̶","f":"f̶","g":"g̶","h":"h̶","i":"i̶","j":"j̶","k":"k̶","l":"l̶","m":"m̶","n":"n̶","o":"o̶","p":"p̶","q":"q̶","r":"r̶","s":"s̶","t":"t̶","u":"u̶","v":"v̶","w":"w̶","x":"x̶","y":"y̶","z":"z̶"},
    s30: {"a":"a̴","b":"b̴","c":"c̴","d":"d̴","e":"e̴","f":"f̴","g":"g̴","h":"h̴","i":"i̴","j":"j̴","k":"k̴","l":"l̴","m":"m̴","n":"n̴","o":"o̴","p":"p̴","q":"q̴","r":"r̴","s":"s̴","t":"t̴","u":"u̴","v":"v̴","w":"w̴","x":"x̴","y":"y̴","z":"z̴"},
    s31: {"a":"a̷","b":"b̷","c":"c̷","d":"d̷","e":"e̷","f":"f̷","g":"g̷","h":"h̷","i":"i̷","j":"j̷","k":"k̷","l":"l̷","m":"m̷","n":"n̷","o":"o̷","p":"p̷","q":"q̷","r":"r̷","s":"s̷","t":"t̷","u":"u̷","v":"v̷","w":"w̷","x":"x̷","y":"y̷","z":"z̷"},
    s32: {"a":"a̲","b":"b̲","c":"c̲","d":"d̲","e":"e̲","f":"f̲","g":"g̲","h":"h̲","i":"i̲","j":"j̲","k":"k̲","l":"l̲","m":"m̲","n":"n̲","o":"o̲","p":"p̲","q":"q̲","r":"r̲","s":"s̲","t":"t̲","u":"u̲","v":"v̲","w":"w̲","x":"x̲","y":"y̲","z":"z̲"},
    s33: {"a":"a̳","b":"b̳","c":"c̳","d":"d̳","e":"e̳","f":"f̳","g":"g̳","h":"h̳","i":"i̳","j":"j̳","k":"k̳","l":"l̳","m":"m̳","n":"n̳","o":"o̳","p":"p̳","q":"q̳","r":"r̳","s":"s̳","t":"t̳","u":"u̳","v":"v̳","w":"w̳","x":"x̳","y":"y̳","z":"z̳"},
    s34: {"a":"a̾","b":"b̾","c":"c̾","d":"d̾","e":"e̾","f":"f̾","g":"g̾","h":"h̾","i":"i̾","j":"j̾","k":"k̾","l":"l̾","m":"m̾","n":"n̾","o":"o̾","p":"p̾","q":"q̾","r":"r̾","s":"s̾","t":"t̾","u":"u̾","v":"v̾","w":"w̾","x":"x̾","y":"y̾","z":"z̾"},
    s35: {"a":"a♥","b":"b♥","c":"c♥","d":"d♥","e":"e♥","f":"f♥","g":"g♥","h":"h♥","i":"i♥","j":"j♥","k":"k♥","l":"l♥","m":"m♥","n":"n♥","o":"o♥","p":"p♥","q":"q♥","r":"r♥","s":"s♥","t":"t♥","u":"u♥","v":"v♥","w":"w♥","x":"x♥","y":"y♥","z":"z♥"},
    s36: {"a":"a͎","b":"b͎","c":"c͎","d":"d͎","e":"e͎","f":"f͎","g":"g͎","h":"h͎","i":"i͎","j":"j͎","k":"k͎","l":"l͎","m":"m͎","n":"n͎","o":"o͎","p":"p͎","q":"q͎","r":"r͎","s":"s͎","t":"t͎","u":"u͎","v":"v͎","w":"w͎","x":"x͎","y":"y͎","z":"z͎"},
    s37: {"a":"a͛","b":"b͛","c":"c͛","d":"d͛","e":"e͛","f":"f͛","g":"g͛","h":"h͛","i":"i͛","j":"j͛","k":"k͛","l":"l͛","m":"m͛","n":"n͛","o":"o͛","p":"p͛","q":"q͛","r":"r͛","s":"s͛","t":"t͛","u":"u͛","v":"v͛","w":"w͛","x":"x͛","y":"y͛","z":"z͛"},
    s38: {"a":"Ⱥ","b":"Ƀ","c":"Ȼ","d":"Đ","e":"Ɇ","f":"₣","g":"Ǥ","h":"Ħ","i":"Ɨ","j":"Ɉ","k":"Ꝁ","l":"Ł","m":"M","n":"N","o":"Ø","p":"Ᵽ","q":"Ꝗ","r":"Ɍ","s":"S","t":"Ŧ","u":"Ʉ","v":"V","w":"W","x":"X","y":"Y","z":"Ƶ"},
    s39: {"a":"Д","b":"Б","c":"Ҫ","d":"D","e":"Є","f":"Ғ","g":"G","h":"Ң","i":"Ї","j":"Ј","k":"Ҝ","l":"L","m":"M","n":"Ѝ","o":"Ф","p":"ҏ","q":"Ԛ","r":"Я","s":"Ѕ","t":"Ҭ","u":"Ц","v":"V","w":"Ш","x":"Ӿ","y":"Ч","z":"Z"},
    s40: {"a":"ǟ","b":"ɮ","c":"ƈ","d":"ɖ","e":"ɛ","f":"ʄ","g":"ɢ","h":"ɦ","i":"ɨ","j":"ʝ","k":"ӄ","l":"ʟ","m":"ʍ","n":"ռ","o":"օ","p":"ք","q":"զ","r":"ʀ","s":"ֆ","t":"ȶ","u":"ʊ","v":"ʋ","w":"ա","x":"Ӽ","y":"ʏ","z":"ʐ"},
    s41: {"a":"𝔞","b":"🔟","c":"𝔠","d":"𝔡","e":"𝔢","f":"𝔣","g":"𝔤","h":"𝔥","i":"𝔦","j":"𝔧","k":"𝔨","l":"𝔩","m":"𝔪","n":"𝔫","o":"𝔬","p":"𝔭","q":"𝔮","r":"𝔯","s":"𝔰","t":"𝔱","u":"𝔲","v":"𝔳","w":"𝔴","x":"𝔵","y":"𝔶","z":"𝔷"},
    s42: {"a":"𝖆","b":"𝖇","c":"𝖈","d":"𝖉","e":"𝖊","f":"𝖋","g":"𝖌","h":"𝖍","i":"𝖎","j":"𝖏","k":"𝖐","l":"𝖑","m":"𝖒","n":"𝖓","o":"𝖔","p":"𝖕","q":"𝖖","r":"𝖗","s":"𝖘","t":"𝖙","u":"𝖚","v":"𝖛","w":"𝖜","x":"𝖝","y":"𝖞","z":"𝖟"},
    s43: {"a":"𝕒","b":"𝕓","c":"𝕔","d":"𝕕","e":"𝕖","f":"𝕗","g":"𝕘","h":"𝕙","i":"𝕚","j":"𝕛","k":"𝕜","l":"𝕝","m":"𝕞","n":"𝕟","o":"𝕠","p":"𝕡","q":"𝕢","r":"𝕣","s":"𝕤","t":"𝕥","u":"𝕦","v":"𝕧","w":"𝕨","x":"𝕩","y":"𝕪","z":"𝕫"},
    s44: {"a":"𝖺","b":"𝖻","c":"𝖼","d":"𝖽","e":"𝖾","f":"𝖿","g":"𝗀","h":"𝗁","i":"𝗂","j":"𝗃","k":"𝗄","l":"𝗅","m":"𝗆","n":"𝗇","o":"𝗈","p":"𝗉","q":"𝗊","r":"𝗋","s":"𝗌","t":"𝗍","u":"𝗎","v":"𝗏","w":"𝗐","x":"𝗑","y":"𝗒","z":"𝗓"},
    s45: {"a":"𝗮","b":"𝗯","c":"𝗰","d":"𝗱","e":"𝗲","f":"𝗳","g":"𝗴","h":"𝗵","i":"𝗶","j":"𝗷","k":"𝗸","l":"𝗹","m":"𝗺","n":"𝗻","o":"𝗼","p":"𝗽","q":"𝗾","r":"𝗿","s":"𝘀","t":"𝘁","u":"𝘂","v":"𝘃","w":"𝘄","x":"𝘅","y":"𝘆","z":"𝘇"},
    s46: {"a":"𝘢","b":"𝘣","c":"𝘤","d":"𝘥","e":"𝘦","f":"𝘧","g":"𝘨","h":"𝘩","i":"𝘪","j":"𝘫","k":"𝘬","l":"𝘭","m":"𝘮","n":"𝘯","o":"𝘰","p":"𝘱","q":"𝘲","r":"𝘳","s":"𝘴","t":"𝘵","u":"𝘶","v":"𝘷","w":"𝘸","x":"𝘹","y":"ʏ","z":"𝘻"},
    s47: {"a":"𝙖","b":"𝙗","c":"𝙘","d":"𝙙","e":"𝙚","f":"𝙛","g":"𝙜","h":"𝙝","i":"𝙞","j":"𝙟","k":"𝙠","l":"𝙡","m":"𝙢","n":"𝙣","o":"𝙤","p":"𝙥","q":"𝙦","r":"𝙧","s":"𝙨","t":"𝙩","u":"𝙪","v":"𝙫","w":"𝙬","x":"𝙭","y":"𝙮","z":"𝙯"},
    s48: {"a":"𝚊","b":"𝚋","c":"𝚌","d":"𝚍","e":"𝚎","f":"𝚏","g":"𝚐","h":"𝚑","i":"𝚒","j":"𝚓","k":"𝚔","l":"𝚕","m":"𝚖","n":"𝚗","o":"𝚘","p":"𝚙","q":"𝚚","r":"𝚛","s":"𝚜","t":"𝚝","u":"𝚞","v":"𝚟","w":"𝚚","x":"𝚡","y":"𝚢","z":"𝚣"},
    s49: {"a":"🄰","b":"🄱","c":"🄲","d":"🄳","e":"🄴","f":"🄵","g":"🄶","h":"🄷","i":"🄸","j":"🄹","k":"🄺","l":"🄻","m":"🄼","n":"🄽","o":"🄾","p":"🄿","q":"🅀","r":"🅁","s":"🅂","t":"🅃","u":"🅄","v":"🅅","w":"🅆","x":"🅇","y":"🅈","z":"🅉"},
    s50: {"a":"🅰","b":"🅱","c":"🅲","d":"🅳","e":"🅴","f":"🅵","g":"🅶","h":"🅷","i":"🅸","j":"🅹","k":"🅺","l":"🅻","m":"🅼","n":"🅽","o":"🅾","p":"🅿","q":"🆀","r":"🆁","s":"🆂","t":"🆄","u":"🆅","v":"🆆","w":"🆇","y":"🆈","z":"🆉"}
};

// --- 2. INITIAL SETTINGS ---
// Default: Null rakha hai taaki shuruat mein font normal rahe
let currentStyle = null; 
let currentSelectedFontMap = null; 

// --- 3. MAPPING ENGINE ---
function convertText(text, map) {
    if (!map || Object.keys(map).length === 0) return text;
    return text.toLowerCase().split('').map(char => map[char] || char).join('');
}

// Helper: Fancy conversion agar map select hai toh
function getFancy(text) {
    return (currentSelectedFontMap) ? convertText(text, currentSelectedFontMap) : text;
}

// --- 4. STYLE SELECTION ---
function selectStyle(styleId) {
    currentStyle = styleId;
    currentSelectedFontMap = allMaps[styleId];
    
    // Chips UI update
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.classList.remove('active');
        if(chip.getAttribute('onclick').includes(`'${styleId}'`)) {
            chip.classList.add('active');
        }
    });
    
    updateLive();
    if (document.getElementById('bombText').value) generateBomb();
    if (document.getElementById('allText').value) generateAllPlatformBomb();
    if (typeof previewArt === "function") previewArt(); 
}

// --- 5. LIVE UPDATE (Main Text Box) ---
function updateLive() {
    const inputField = document.getElementById('userInput');
    const outputField = document.getElementById('output');
    if (!inputField || !outputField) return;

    outputField.value = inputField.value ? getFancy(inputField.value) : "";
}

// --- 6. BOMBER LOGIC (Vertical Line-by-Line) ---

function generateBomb() {
    const count = parseInt(document.getElementById('bombCount').value);
    const text = document.getElementById('bombText').value;
    const output = document.getElementById('igOutput');
    const counter = document.getElementById('igCharCount');

    if (!count || !text || !output) return;

    const fancyText = getFancy(text);
    let result = "";
    for (let i = 0; i < count; i++) {
        result += fancyText + "\n"; // Vertical line break
    }
    output.value = result.trim();
    if(counter) counter.innerText = `Characters: ${output.value.length}`;
}

function generateAllPlatformBomb() {
    const count = parseInt(document.getElementById('allCount').value);
    const text = document.getElementById('allText').value;
    const output = document.getElementById('allOutput');
    const counter = document.getElementById('charCountDisplay');

    if (!count || !text || !output) return;

    const fancyText = getFancy(text);
    let result = "";
    for (let i = 0; i < count; i++) {
        result += fancyText + "\n"; // Vertical line break
    }
    
    if(result.length > 200000) result = result.substring(0, 200000);
    output.value = result.trim();

    if(counter) {
        counter.innerText = `Characters: ${output.value.length} / 199999`;
        counter.style.color = output.value.length >= 199999? "#ff4d4d" : "#00f2ff";
    }
}

// --- 7. ART STYLE LOGIC (SR-X-TOOLS FIXED) ---

function loadArtStyles() {
    const selector = document.getElementById('artSelector');
    if (!selector) return;

    // Check karo data available hai ya nahi
    if (typeof artStyles === 'undefined') {
        console.log("Waiting for art-data.js...");
        // 1 second baad firse koshish karega agar data nahi mila
        setTimeout(loadArtStyles, 1000); 
        return;
    }

    // Dropdown Reset
    selector.innerHTML = '<option value="">-- Choose Style --</option>';

    // Guns Category
    if (artStyles.guns) {
        const gunGroup = document.createElement('optgroup');
        gunGroup.label = "🔫 Tactical Guns";
        artStyles.guns.forEach((item, index) => {
            let opt = new Option(item.name, `guns-${index}`);
            gunGroup.appendChild(opt);
        });
        selector.appendChild(gunGroup);
    }

    // Dark Category
    if (artStyles.dark) {
        const darkGroup = document.createElement('optgroup');
        darkGroup.label = "🌑 Dark Styles";
        artStyles.dark.forEach((item, index) => {
            let opt = new Option(item.name, `dark-${index}`);
            darkGroup.appendChild(opt);
        });
        selector.appendChild(darkGroup);
    }
    
    console.log("✅ SR-X Art Styles Loaded!");
}

function previewArt() {
    const selector = document.getElementById('artSelector');
    const nameInput = document.getElementById('artUserName'); 
    const output = document.getElementById('artOutput');
    
    if(!selector || !output || !selector.value) return;

    const [category, index] = selector.value.split('-');
    
    // Safety check taaki error na aaye
    if(typeof artStyles === 'undefined' || !artStyles[category] || !artStyles[category][index]) return;

    let finalArt = artStyles[category][index].art;
    
    // Default name update to SR-X
    const rawName = (nameInput && nameInput.value.trim() !== "") ? nameInput.value : "SR-X";
    
    // Fancy conversion
    const stylishName = (typeof getFancy === "function") ? getFancy(rawName) : rawName; 
    
    output.value = finalArt.replace(/{name}/g, stylishName);
}

// Initialization Fix
document.addEventListener('DOMContentLoaded', loadArtStyles);


// --- 8. COPY & PREMIUM TOAST LOGIC ---

function showPremiumToast(msg) {
    const toast = document.getElementById('toast-container');
    const toastBody = document.getElementById('toast-body');
    
    if (toast && toastBody) {
        // Content Setup
        toastBody.innerHTML = `
            <div style="font-size: 50px; margin-bottom: 12px;">🎉</div>
            <div style="letter-spacing: 2px; font-size: 13px; color: #00f2ff; font-weight:bold; text-transform: uppercase;">SR-X-TOOLS</div>
            <div style="color: #FFD700; font-size: 18px; margin: 10px 0; font-weight: 800;">
                ${msg.substring(0, 20)}${msg.length > 20 ? '...' : ''}
            </div>
        `;
        
        // Popup ko dikhao
        toast.style.display = 'flex'; 

        // Vibration
        if (navigator.vibrate) navigator.vibrate(50);

        // 2 Second baad gayab karne ka logic
        setTimeout(() => { 
            toast.style.display = 'none'; 
        }, 2000);
    } else {
        console.error("Dost, HTML mein 'toast-container' ya 'toast-body' ki ID nahi mil rahi!");
    }
}

        // CSS properties yahan se fix kar di hain taaki dabba dikhe background nahi
        toast.style.display = 'flex';
        toast.style.flexDirection = 'column';
        toast.style.alignItems = 'center';
        toast.style.justifyContent = 'center';
        toast.style.background = 'transparent'; // Background gayab
        toast.style.border = '2px solid #00f2ff'; // Fixed dabba/border
        toast.style.backdropFilter = 'blur(8px)'; // Glass effect (piche ka halka dhundla dikhega)

        // Haptic feedback (Vibration)
        if (navigator.vibrate) navigator.vibrate(50);

        // 2 Second baad hide ho jayega
        setTimeout(() => { 
            toast.style.display = 'none'; 
        }, 2000);
      
function copyText() {
    const val = document.getElementById('output').value;
    if(val) navigator.clipboard.writeText(val).then(() => showPremiumToast("Fancy Text Copied!"));
}

function copyIGText() {
    const val = document.getElementById('igOutput').value;
    if(val) navigator.clipboard.writeText(val).then(() => showPremiumToast("IG Bomb Copied!"));
}

function copyAllPlatformText() {
    const val = document.getElementById('allOutput').value;
    if(val) navigator.clipboard.writeText(val).then(() => showPremiumToast("Mega Bomb Copied!"));
}

function copyArtText() {
    const val = document.getElementById('artOutput').value;
    if(val) navigator.clipboard.writeText(val).then(() => showPremiumToast("Art Copied!"));
}

// --- 9. INITIALIZE ---
document.addEventListener('DOMContentLoaded', () => {
    loadArtStyles(); 
    const toast = document.getElementById('toast-container');
    if(toast) toast.style.display = 'none';
});
