

// e7b0923e-a941-4bdd-9ba5-2a7a922f21c5
const fetch1 = require('node-fetch');
const fs = require('fs')

const decode = (str) => Buffer.from(str, 'base64').toString('binary');
const encode = (str) => Buffer.from(str, 'binary').toString('base64');



// Create Base64 Object
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/\r\n/g, "\n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t }
}


// {
//     name: 'RootFolder',
//     type: 'Folder',
//     size: 16384,
//     subscriptionId: '6377865f5f620ebfce9a07ce',
//     status: 'None',
//     statusReason: 'None',
//     id: '6377865f5f620ebfce9a07cb',
//     createdTime: '2022-11-18T13:19:27.115Z',
//     creatorUserId: '2df79f83-07f1-41ba-96b5-7757bbf377df',
//     editedTime: '0001-01-01T00:00:00Z'
// }
const main = () => {
    const api = "i14x6ubm8n1anc41ik8whzgrm7rnxjq845toxgbxqqimy3719yno";

    const enapi = Base64.encode('apikey:' + api);
    console.log(enapi);

    // Получение Рабочего пространства

    // fetch1("https://fastreport.cloud/api/rp/v1/Templates/Root?subscriptionId=6377865f5f620ebfce9a07ce", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //         'accept': 'text/plain',
    //         "Authorization": "Basic " + enapi
    //     }
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err))

    // https://fastreport.cloud/api/rp/v1/Templates/Folder/{id}/File


    // Загрузка шаблона отчёта


    // Список файлов в папке
    // 63783bba5f620ebfce9a149e
    // fetch1("https://fastreport.cloud/api/rp/v1/Templates/Folder/6377865f5f620ebfce9a07cb/ListFiles?skip=0&take=10", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json-patch+json",
    //         'accept': 'text/plain',
    //         "Authorization": "Basic " + enapi
    //     }
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err));

    // Получение всех дата сетов
    // fetch1("https://fastreport.cloud/api/data/v1/DataSources?subscriptionId=6377865f5f620ebfce9a07ce&skip=0&take=10", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json-patch+json",
    //         'accept': 'text/plain',
    //         "Authorization": "Basic " + enapi
    //     }
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err));

    // 637844de5f620ebfce9a1605

    // Получение одного датасета
    // fetch1("https://fastreport.cloud/api/data/v1/DataSources/637828055f620ebfce9a12b2", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json-patch+json",
    //         'accept': 'text/plain',
    //         "Authorization": "Basic " + enapi
    //     }
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err));



    // https://fastreport.cloud/api/rp/v1/Reports/Root

    // Получение Корневой папки для отчётов
    // fetch1("https://fastreport.cloud/api/rp/v1/Reports/Root", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //         'accept': 'text/plain',
    //         "Authorization": "Basic " + enapi
    //     }
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err));


    // Создание отчёта
    // Создание файла подготовки перед pdf ()
    // 63783bba5f620ebfce9a149e

    // fetch1("https://fastreport.cloud/api/rp/v1/Templates/File/63783bba5f620ebfce9a149e/Prepare", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //         'accept': 'text/plain',
    //         "Authorization": "Basic " + enapi
    //     },
    //     body: JSON.stringify({
    //         "name": "superOtchetFrog.fpx",
    //         "parentFolderId": "6377865f5f620ebfce9a07cc",
    //     })
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err));



    // ключи доступа
    // Для получения и загрузки json файлы в хранилище
    const api_ley = "$2b$10$7f5STC60HWK8Nygo1nMTj.XUzg88EqV0W2caUhcOPCnt4PC5JEEzm";
    const access = "$2b$10$5JLgQi52euSPaU/kEiIqFuut/Ko2xvOUWo5fgGgtXzQFcV0KskKHq";

    // Получить данные
    // fetch1("https://api.jsonbin.io/v3/b/6378a1530e6a79321e4e14a5/latest?meta=false", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //         "X-Master-Key": api_ley,
    //         "X-Access-Key": access
    //     },
    //     // body: JSON.stringify({
    //     //     "sample": "Hello world"
    //     // })
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err));


    // Пример данных
    // По порядку как в отчёте
    const api_data = {
        years: 4,
        year_from: "2022-21-12",
        code_oktmc: 123,
        phone: "+79283475136",
        INN: 123456789,
        KPP: 987654321,
        Agent: "Agent Agent",
        format_code: 33,
        INN2: 102934968,
        KPP2: 6734908572,
        INN_RF: 324567865432,
        surname: "Surname",
        name: "Простое имя",
        otchestvo: "qwerty",
        nalg_code: 890,
        birth_date: "1990-09-10",
        country_code: 345,
        code_doc: "0001",
        pasport_number: "123123-23",
        percent: 15,
        table1: [
            { "mounth": 1, "dohod_code": 20, "sum_dohod": 200, "vichet_code": 2, "sum_vichet": 201 },
            { "mounth": 1, "dohod_code": 20, "sum_dohod": 200, "vichet_code": 2, "sum_vichet": 201 },
            { "mounth": 1, "dohod_code": 20, "sum_dohod": 200, "vichet_code": 2, "sum_vichet": 201 },
            { "mounth": 1, "dohod_code": 20, "sum_dohod": 200, "vichet_code": 2, "sum_vichet": 201 }
        ],
        table2: [{ "code_vichet": 2, "sum_vichet": 20 }, { "code_vichet": 3, "sum_vichet": 23 }],
        table3: {
            "field1": 12234,
            "field2": 12234,
            "field3": 12234,
            "field4": 12234,
            "field5": 12234,
            "field6": 12234,
            "field7": 12234,
            "field8": 12234,
        },
        table4: { "field1": 123, "field2": 321 },
        Agent2: "agetn2",
        otchestvo2: "Ochestvo 2"
    };


    // // Добавить данные
    // fetch1("https://api.jsonbin.io/v3/b/6378a1530e6a79321e4e14a5/", {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //         "X-Master-Key": api_ley,
    //         "X-Access-Key": access
    //     },
    //     body: JSON.stringify(api_data)
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err));



    // Получение статуса файла
    // fetch1("https://fastreport.cloud/api/rp/v1/Reports/File/6377e94d5f620ebfce9a0d26", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //         'accept': 'text/plain',
    //         "Authorization": "Basic " + enapi
    //     }
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err));

    // Сслыка для скачивания файлы подготовки
    // https://fastreport.cloud/download/r/{id}


    // Получение папки отчётов
    // fetch1("https://fastreport.cloud/api/rp/v1/Reports/Root", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //         'accept': 'text/plain',
    //         "Authorization": "Basic " + enapi
    //     }
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err));

    // 6377865f5f620ebfce9a07cc

    // Список файлов из попки отчётов
    // fetch1("https://fastreport.cloud/api/rp/v1/Reports/Folder/6377865f5f620ebfce9a07cc/ListFiles?skip=0&take=10", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //         'accept': 'text/plain',
    //         "Authorization": "Basic " + enapi
    //     }
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err));

    // 6377e94d5f620ebfce9a0d26

    // Получение директории экспортов
    // fetch1("https://fastreport.cloud/api/rp/v1/Exports/Root", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //         'accept': 'text/plain',
    //         "Authorization": "Basic " + enapi
    //     }
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err));

    // 6377865f5f620ebfce9a07cd

    // Создание экспорта
    // fetch1("https://fastreport.cloud/api/rp/v1/Reports/File/6377e94d5f620ebfce9a0d26/Export", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //         'accept': 'text/plain',
    //         "Authorization": "Basic " + enapi
    //     },
    //     body: JSON.stringify({
    //         "fileName": "SuperExport.pdf",
    //         "folderId": "6377865f5f620ebfce9a07cd",
    //         "locale": "en-GB",
    //         "format": "Pdf"
    //     })
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err));

    // Инфа о экспорте
    // fetch1("https://fastreport.cloud/api/rp/v1/Exports/File/6377eee55f620ebfce9a0d8b", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //         'accept': 'text/plain',
    //         "Authorization": "Basic " + enapi
    //     }
    // }).then(resp => resp.json()
    // ).then(data => console.log(data)
    // ).catch(err => console.warn(err));

};

main()