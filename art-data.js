const artStyles = {
    guns: [
        { name: "Battle Tank", art: "▬▬▬ι▬▬▬[ {name} ]▬▬▬ι▬▬▬" },
        { name: "af Jet", art: "🛫—══— {name} —══—🛫" },
        { name: "AWM Sniper", art: "▄︻┻┳═一 {name} 一═┳┻︻▄" },
        { name: "Rocket Launcher", art: "🚀︻╦╤─ {name} ─╤╦︻🚀" },
        { name: "Heavy Machine Gun", art: "╾━╤デ╦︻ {name} ︻デ╤━╼" },
          { name: "Battle Tank T-90", art: "▬▬▬ι▬▬▬[ {name} ]▬▬▬ι▬▬▬" },
        { name: "Heavy Panzer Tank", art: "═╤[̲̅M̲̅A̲̅I̲̅N̲̅-̲̅B̲̅A̲̅T̲̅T̲̅L̲̅E̲̅-̲̅T̲̅A̲̅N̲̅K̲̅]╤═— {name}" },
        { name: "Armored Vehicle", art: "▐▓█▀▀▀▀▀▀█▓▌ {name} ▐▓█▀▀▀▀▀▀█▓▌" },
        { name: "Military Jeep", art: "🚜—═ {name} ═—🚜" },
        { name: "Stealth Fighter Jet", art: "✈️ {name} ══✈️" },
        { name: "F-16 Aeroplane", art: "🛫—══— {name} —══—🛫" },
        { name: "Apache Helicopter", art: "🚁 {name} 🚁" },
        { name: "War Ship", art: "🚢▬▬ι════ {name} ════ι▬▬🚢" },
   { name: "Gloo Wall Shield", art: "🛡️|[ {name} ]|🛡️" },
        { name: "Iron Shield", art: "🚧 {name} 🚧" },
        { name: "Combat Knife", art: "🔪 {name} 🔪" },
        { name: "Katana Sword", art: "⚔️▬▬ι═════ {name} ═════ι▬▬⚔️" },
        { name: "Machete Cut", art: "🗡️ {name} 🗡️" },
        { name: "PUBG Pan (Tawa)", art: "🍳( {name} )🍳" },
        // --- LONG RANGE SNIPERS ---
        { name: "Barrett M82 Sniper", art: "︻╦̵̵͇̿̿̿̿══╤─ {name} ─╤══̵̵͇̿̿̿̿̿╦︻" },
        { name: "Arctic Warfare (AWM)", art: "▄︻┻┳═一 {name} 一═┳┻︻▄" },
        { name: "M24 Sniper Rifle", art: "◤︻╦╤─ {name} ─╤╦︻◥" },
        { name: "Kar98k Iron Sight", art: "«-︻╦╤─ {name} ─╤╦︻-»" },
        { name: "Dragunov SVD", art: "︻╦̵̵͇̿̿̿̿╤── {name} ──╤̵̵͇̿̿̿̿╦︻" },

        // --- ASSAULT RIFLES (AR) ---
        { name: "AK-47 Kalashnikov", art: "╾━╤デ╦︻ {name} ︻╦デ╤━╼" },
        { name: "M416 Glacier", art: "▄︻┻┳═━一 {name} 一━═┳┻︻▄" },
        { name: "SCAR-L Heavy", art: "︻╦̵̵͇̿̿̿̿╤── {name} ──╤̵̵͇̿̿̿̿╦︻" },
        { name: "Groza OTs-14", art: "︻╦╤─ {name} ─╤╦︻" },
        { name: "AUG A3 Special", art: "︻デ═一 {name} 一═デ︻" },
        { name: "M16A4 Burst", art: "╾━╤デ╦︻ {name}" },
        { name: "FAMAS Triple Bolt", art: "︻╦̵̵͇̿̿̿̿══╤─ {name} ─╤══̵̵͇̿̿̿̿̿╦︻" },
        
        // --- HEAVY WEAPONS ---
        { name: "M249 LMG", art: "▄︻┳═一 {name} 一═┳︻▄" },
        { name: "RPG Rocket Launcher", art: "🚀︻╦╤─ {name} ─╤╦︻🚀" },
        { name: "Gatling Minigun", art: "═══[[ {name} ]]═══" },
        { name: "M60 Machine Gun", art: "▄︻┳═一 {name} 一═┳︻▄" },
        { name: "Flame Thrower", art: "🔥╾━╤デ╦︻ {name} ︻╦デ╤━╼🔥" }
    ],
    dark: [
        // --- BODY SHAPES & BOLD ART ---
        { name: "Sitting Curvy", art: "( ͜. ㅅ ͜. ) {name} ( ͜. ㅅ ͜. )" },
        { name: "Chest/Body Art", art: "( . Y . ) {name} ( . Y . )" },
        { name: "Bending Over", art: "🍑💨 {name} ԅ(≖‿≖ԅ)" },
        { name: "Laying Down", art: "ヽ(♡‿♡)ノ {name} ( ͜. ㅅ ͜. )" },
        { name: "Booty Drop", art: "( ° ͜ʖ ° ) {name} ( ㅅ )" },
        { name: "Bold Curves", art: "╰⋃╯ {name} ╰⋃╯" },
        { name: "Holding Shape", art: "ԅ(≖‿≖ԅ) {name}" },
        { name: "Aesthetic Body", art: "(.人.) {name} (.人.)" },
        { name: "Thic Vibe", art: " {name} (‿ˠ‿)" },
        { name: "Back View", art: " (╯°□°)╯ {name} ( ㅅ )" },

        // --- EDGY & DARK BADDIE ---

        { name: "Middle Finger", art: "🖕 {name} 🖕" },
        { name: "Forbidden Sign", art: "🔞 {name} 🔞" },
        { name: "Wild Night", art: "🍷🍒 {name} 🍒🍷" },
        { name: "Dark Room", art: "🕯️🔞 {name} 🔞🕯️" },
        { name: "Collar Chain", art: "⛓️🐕 {name} ⛓️" },
        { name: "Love Pain", art: "🩸🥀 {name} 🥀🩸" },
        { name: "Bedtime", art: "🛌✨ {name} ✨🔞" },
        { name: "Hot Wax", art: "🔥🕯️ {name} 🕯️🔥" },
        { name: "Toxic Bitch", art: "🧪⚠️ {name} ⚠️🧪" },
        { name: "Heart Breaker", art: "💔🍑 {name} 🍑💔" },
        { name: "Naughty Devil", art: "😈💦 {name} 💦😈" },
        { name: "Sensual Dark", art: "🌹🫦 {name} 🫦🌹" },
        { name: "Sinner Style", art: "⚖️🔥 {name} 🔥⚖️" },
        { name: "The End Dark", art: "🔚🖤 {name} 🖤🔚" },
        { name: "Frag Grenade", art: "💣 {name} 💣" },
        { name: "Sticky Bomb", art: "🧨 {name} 🧨" },
        { name: "Landmine", art: "💢 {name} 💢" },
        { name: "C4 Explosive", art: "📟 {name} 📟" },
        { name: "Smoke Screen", art: "💨 {name} 💨" },
        
        // --- DEFENSE & MELEE ---
     
        
        // --- RANK & BADGES ---
        { name: "Grandmaster Rank", art: "🏆 {name} 🏆" },
        { name: "Ace Tier", art: "🎖️ {name} 🎖️" },
        { name: "Heroic Badge", art: "🏵️ {name} 🏵️" },
        { name: "Conqueror Frame", art: "👑 {name} 👑" },
        { name: "Elite Pass", art: "🎫 {name} 🎫" },
        
        // --- WAR ZONE VIBE ---
        { name: "Level 3 Vest", art: "🦺 {name} 🦺" },
        { name: "Level 3 Helmet", art: "🪖 {name} 🪖" },
        { name: "Air Drop Box", art: "📦 {name} 📦" },
        { name: "Flare Gun Signal", art: "🔫✨ {name} ✨🔫" },
        { name: "Medkit Heal", art: "💉 {name} 💉" },
        { name: "Dead Box", art: "⚰️ {name} ⚰️" },
        { name: "Target Locked", art: "🎯 {name} 🎯" },
        { name: "Skull Warrior", art: "💀 {name} 💀" },
        { name: "Biohazard Zone", art: "☣️ {name} ☣️" },
        { name: "Toxic Gas", art: "☢️ {name} ☢️" }
    ]
};
