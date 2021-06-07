/**
 * derece dakika saniye cinsinden verilen noktanın
 * içinde kaldığı pafta isimlerini dönen yardımcı araç
 * author : hakan özoğlu / mhozoglu@yandex.com.tr / 0541 276 9700
 *
 * not : türkiye ulusal pafta bölümlemesine göre çalışmaktadır
 */

const Decimal = require('decimal.js');
const geolib = require('geolib');

const CoordinatTypes = {
    DECIMAL:0,
    SEXADECIMAL:1
}
const findPafta = function (lat=`41.021225596`,long=`29.0040779114`,coordinatType=CoordinatTypes.DECIMAL) {
    if (coordinatType === CoordinatTypes.SEXADECIMAL) {
        _lat = geolib.sexagesimalToDecimal(lat);
        _long = geolib.sexagesimalToDecimal(long);
    } else {
        let _lat = lat;
        let _long = long
    }
    const R12 = [35, 24]
    const cities = [
        {name: "EDİRNE", containing: ["E15", "E16", "E17", "F15", "F16", "F17"]},
        {name: "ÇANAKKALE", containing: ["G15", "G16", "G17", "H15", "H16", "H17"]},
        {name: "AYVALIK", containing: ["I15", "I16", "I17", "J15", "J16", "J17"]},
        {name: "URLA", containing: ["K15", "K16", "K17", "L15", "L16", "L17"]},
        {name: "KIRKLARELİ", containing: ["E18", "E19", "E20", "F18", "F19", "F20"]},
        {name: "BANDIRMA", containing: ["G18", "G19", "G20", "H18", "H19", "H20"]},
        {name: "BALIKESİR", containing: ["I18", "I19", "I20", "J18", "J19", "J20"]},
        {name: "İZMİR", containing: ["K18", "K19", "K20", "L18", "L19", "L20"]},
        {name: "AYDIN", containing: ["M18", "M19", "M20", "N18", "N19", "N20"]},
        {name: "MARMARİS", containing: ["O18", "O19", "O20", "P18", "P19", "P20"]},
        {name: "İSTANBUL", containing: ["E21", "E22", "E23", "F21", "F22", "F23"]},
        {name: "BURSA", containing: ["G21", "G22", "G23", "H21", "H22", "H23"]},
        {name: "DENİZLİ", containing: ["I21", "I22", "I23", "J21", "J22", "J23"]},
        {name: "UŞAK", containing: ["K21", "K22", "K23", "L21", "L22", "L23"]},
        {name: "KÜTAHYA", containing: ["M21", "M22", "M23", "N21", "N22", "N23"]},
        {name: "FETHİYE", containing: ["O21", "O22", "O23", "P21", "P22", "P23"]},
        {name: "EREĞLİ", containing: ["E24", "E25", "E26", "F24", "F25", "F26"]},
        {name: "ADAPAZARI", containing: ["G24", "G25", "G26", "H24", "H25", "H26"]},
        {name: "ESKİŞEHİR", containing: ["I24", "I25", "I26", "J24", "J25", "J26"]},
        {name: "AFYON", containing: ["K24", "K25", "K26", "L24", "L25", "L26"]},
        {name: "ISPARTA", containing: ["M24", "M25", "M26", "N24", "N25", "N26"]},
        {name: "ANTALYA", containing: ["O24", "O25", "O26", "P24", "P25", "P26"]},
        {name: "ZONGULDAK", containing: ["E27", "E28", "E29", "F27", "F28", "F29"]},
        {name: "BOLU", containing: ["G27", "G28", "G29", "H27", "H28", "H29"]},
        {name: "ANKARA", containing: ["I27", "I28", "I29", "J27", "J28", "J29"]},
        {name: "ILGIN", containing: ["K27", "K28", "K29", "L27", "L28", "L29"]},
        {name: "KONYA", containing: ["M27", "M28", "M29", "N27", "N28", "N29"]},
        {name: "ALANYA", containing: ["O27", "O28", "O29", "P27", "P28", "P29"]},
        {name: "KASTAMONU", containing: ["E30", "E31", "E32", "F30", "F31", "F32"]},
        {name: "ÇANKIRI", containing: ["G30", "G31", "G32", "H30", "H31", "H32"]},
        {name: "KIRŞEHİR", containing: ["I30", "I31", "I32", "J30", "J31", "J32"]},
        {name: "AKSARAY", containing: ["K30", "K31", "K32", "L30", "L31", "L32"]},
        {name: "KARAMAN", containing: ["M30", "M31", "M32", "N30", "N31", "N32"]},
        {name: "SİLİFKE", containing: ["O30", "O31", "O32", "P30", "P31", "P32"]},
        {name: "SİNOP", containing: ["E33", "E34", "E35", "F33", "F34", "F35"]},
        {name: "ÇORUM", containing: ["G33", "G34", "G35", "H33", "H34", "H35"]},
        {name: "YOZGAT", containing: ["I33", "I34", "I35", "J33", "J34", "J35"]},
        {name: "KAYSERİ", containing: ["K33", "K34", "K35", "L33", "L34", "L35"]},
        {name: "KOZAN", containing: ["M33", "M34", "M35", "N33", "N34", "N35"]},
        {name: "ADANA", containing: ["O33", "O34", "O35", "P33", "P34", "P35"]},
        {name: "SAMSUN", containing: ["E36", "E37", "E38", "F36", "F37", "F38"]},
        {name: "TOKAT", containing: ["G36", "G37", "G38", "H36", "H37", "H38"]},
        {name: "SİVAS", containing: ["I36", "I37", "I38", "J36", "J37", "J38"]},
        {name: "ELBİSTAN", containing: ["K36", "K37", "K38", "L36", "L37", "L38"]},
        {name: "GAZİANTEP", containing: ["M36", "M37", "M38", "N36", "N37", "N38"]},
        {name: "ANTAKYA", containing: ["O36", "O37", "O38", "P36", "P37", "P38"]},
        {name: "PERŞEMBE", containing: ["E39", "E40", "E41", "F39", "F40", "F41"]},
        {name: "GİRESUN", containing: ["G39", "G40", "G41", "H39", "H40", "H41"]},
        {name: "DİVRİĞİ", containing: ["I39", "I40", "I41", "J39", "J40", "J41"]},
        {name: "MALATYA", containing: ["K39", "K40", "K41", "L39", "L40", "L41"]},
        {name: "URFA", containing: ["M39", "M40", "M41", "N39", "N40", "N41"]},
        {name: "SURUÇ", containing: ["O39", "O40", "O41", "P39", "P40", "P41"]},
        {name: "AKÇAABAT", containing: ["E42", "E43", "E44", "F42", "F43", "F44"]},
        {name: "TRABZON", containing: ["G42", "G43", "G44", "H42", "H43", "H44"]},
        {name: "ERZİNCAN", containing: ["I42", "I43", "I44", "J42", "J43", "J44"]},
        {name: "ELAZIĞ", containing: ["K42", "K43", "K44", "L42", "L43", "L44"]},
        {name: "DİYARBAKIR", containing: ["M42", "M43", "M44", "N42", "N43", "N44"]},
        {name: "CEYLANPINAR", containing: ["O42", "O43", "O44", "P42", "P43", "P44"]},
        {name: "ARTVİN", containing: ["E45", "E46", "E47", "F45", "F46", "F47"]},
        {name: "TORTUM", containing: ["G45", "G46", "G47", "H45", "H46", "H47"]},
        {name: "ERZURUM", containing: ["I45", "I46", "I47", "J45", "J46", "J47"]},
        {name: "MUŞ", containing: ["K45", "K46", "K47", "L45", "L46", "L47"]},
        {name: "MARDİN", containing: ["M45", "M46", "M47", "N45", "N46", "N47"]},
        {name: "KARS", containing: ["G48", "G49", "G50", "H48", "H49", "H50"]},
        {name: "KARAKÖSE", containing: ["I48", "I49", "I50", "J48", "J49", "J50"]},
        {name: "VAN", containing: ["K48", "K49", "K50", "L48", "L49", "L50"]},
        {name: "CİZRE", containing: ["M48", "M49", "M50", "N48", "N49", "N50"]},
        {name: "DOĞUBEYAZIT", containing: ["I51", "I52", "I53", "J51", "J52", "J53"]},
        {name: "BAŞKALE", containing: ["K51", "K52", "K53", "L51", "L52", "L53"]},
        {name: "ÇÖLEMERİK", containing: ["M51", "M52", "M53", "N51", "N52", "N53"]}
    ];
    const cols = ['R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']
    let temp, rem, tempString, tempCity;
    const pafta = {}
    const diff = [lat,long].map(p => new Decimal(p)).map((p, i) => p.sub(R12[i]))
    temp = diff.map(d => d.div(0.5).floor())
    tempString = cols[temp[0]] + (temp[1].plus(12)).toString();
    tempCity = cities.find(city => (city.containing.includes(tempString)))?.name || "";
    if (!!tempCity) {
        pafta["1/250000"] = tempCity
        pafta["1/100000C"] = tempCity+"-"+tempString
        pafta["1/100000"] = tempString
    } else { pafta["1/100000"] = tempString }
    rem = diff.map(p => p.modulo(0.5));
    const lowerLetterNotation = [['d', 'c'], ['a', 'b']];
    const fourNumberNotation = [['4', '3'], ['1', '2']];
    const twentyOneNumberNotation = [
        ['21', '22', '23', '24', '25'],
        ['16', '17', '18', '19', '20'],
        ['11', '12', '13', '14', '15'],
        ['06', '07', '08', '09', '10'],
        ['01', '02', '03', '04', '05'],
    ];
    temp = rem.map(d => d.div(0.25).floor())
    pafta["1/50000"] = pafta["1/100000"] + "-" + lowerLetterNotation[temp[0]][temp[1]]
    pafta["1/50000C"] = pafta["1/100000C"] + "-" + lowerLetterNotation[temp[0]][temp[1]]
    rem = diff.map(p => p.modulo(0.25));

    temp = rem.map(d => d.div(0.05).floor())
    pafta["1/10000"] = pafta["1/50000"] + "-" + twentyOneNumberNotation[temp[0]][temp[1]]
    pafta["1/10000C"] = pafta["1/50000C"] + "-" + twentyOneNumberNotation[temp[0]][temp[1]]

    temp = rem.map(d => d.div(0.125).floor())
    pafta["1/25000"] = pafta["1/50000"] + fourNumberNotation[temp[0]][temp[1]]
    pafta["1/25000C"] = pafta["1/50000C"] + fourNumberNotation[temp[0]][temp[1]]
    rem = diff.map(p => p.modulo(0.05));

    temp = rem.map(d => d.div(0.025).floor())
    pafta["1/5000"] = pafta["1/10000"] + "-" + lowerLetterNotation[temp[0]][temp[1]]
    pafta["1/5000C"] = pafta["1/10000C"] + "-" + lowerLetterNotation[temp[0]][temp[1]]
    rem = diff.map(p => p.modulo(0.025));

    temp = rem.map(d => d.div(0.0125).floor())
    pafta["1/2000"] = pafta["1/5000"] + "-" + fourNumberNotation[temp[0]][temp[1]]
    pafta["1/2000C"] = pafta["1/5000C"] + "-" + fourNumberNotation[temp[0]][temp[1]]
    rem = diff.map(p => p.modulo(0.0125));

    temp = rem.map(d => d.div(0.00625).floor())
    pafta["1/1000"] = pafta["1/2000"] + "-" + lowerLetterNotation[temp[0]][temp[1]]
    pafta["1/1000C"] = pafta["1/2000C"] + "-" + lowerLetterNotation[temp[0]][temp[1]]
    rem = diff.map(p => p.modulo(0.00625));

    temp = rem.map(d => d.div(0.003125).floor())
    pafta["1/500"] = pafta["1/1000"] + "-" + fourNumberNotation[temp[0]][temp[1]]
    pafta["1/500C"] = pafta["1/1000C"] + "-" + fourNumberNotation[temp[0]][temp[1]]
    return ((type,city=false)=>{
        let _type = type
        if (city==true) _type = type+"C"
        return pafta[_type]
    })
}
