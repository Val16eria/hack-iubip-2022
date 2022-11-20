import "../css/Main/Box2.css";
import box2 from "../Image/ndfl-2-1.jpg";
import { ChangeEvent, useState } from "react";

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
    table1: {
        "row1": { "mounth": 1, "dohod_code": 201, "sum_dohod": 223, "vichet_code": 21, "sum_vichet": 2001 },
        "row2": { "mounth": 2, "dohod_code": 202, "sum_dohod": 2024, "vichet_code": 22, "sum_vichet": 2101 },
        "row3": { "mounth": 3, "dohod_code": 203, "sum_dohod": 2234, "vichet_code": 23, "sum_vichet": 2021 },
        "row4": { "mounth": 4, "dohod_code": 204, "sum_dohod": 243, "vichet_code": 24, "sum_vichet": 201 },
        "row5": { "mounth": 5, "dohod_code": 205, "sum_dohod": 255, "vichet_code": 25, "sum_vichet": 2012 },
        "row6": { "mounth": 6, "dohod_code": 206, "sum_dohod": 266, "vichet_code": 26, "sum_vichet": 2041 },
        "row7": { "mounth": 7, "dohod_code": 207, "sum_dohod": 264, "vichet_code": 27, "sum_vichet": 2021 },
        "row8": { "mounth": 8, "dohod_code": 208, "sum_dohod": 234, "vichet_code": 28, "sum_vichet": 2301 },
        "row9": { "mounth": 9, "dohod_code": 209, "sum_dohod": 123, "vichet_code": 29, "sum_vichet": 2051 },
        "row10": { "mounth": 10, "dohod_code": 2010, "sum_dohod": 744, "vichet_code": 210, "sum_vichet": 2401 },
        "row11": { "mounth": 11, "dohod_code": 2011, "sum_dohod": 455, "vichet_code": 211, "sum_vichet": 20231 },
        "row12": { "mounth": 12, "dohod_code": 2012, "sum_dohod": 345, "vichet_code": 212, "sum_vichet": 2231 },
    },
    table2: { "code_vichet1": 2, "sum_vichet1": 20, "code_vichet2": 3, "sum_vichet2": 23, "code_vichet3": 3, "sum_vichet3": 23 },
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

const Box2: React.FC = () => {

    const [api, setApi] = useState(api_data);

    function ndfl2box() {
        // console.log(api);
        const api_ley = "$2b$10$7f5STC60HWK8Nygo1nMTj.XUzg88EqV0W2caUhcOPCnt4PC5JEEzm";
        const access = "$2b$10$5JLgQi52euSPaU/kEiIqFuut/Ko2xvOUWo5fgGgtXzQFcV0KskKHq";

        const api1 = "i14x6ubm8n1anc41ik8whzgrm7rnxjq845toxgbxqqimy3719yno";
        const enapi = btoa('apikey:' + api1).toString();
        console.log(enapi);

        fetch("https://api.jsonbin.io/v3/b/6378a1530e6a79321e4e14a5/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "X-Master-Key": api_ley,
                "X-Access-Key": access
            },
            body: JSON.stringify(api)
        }).then(resp => resp.json()
        ).then(data => console.log(data)
        ).catch(err => console.warn(err));

        console.log("FAST API");

        
        fetch("https://fastreport.cloud/api/rp/v1/Templates/Folder/6379fcfc5f620ebfce9a64b0/ListFiles?skip=0&take=15", {
            method: "GET",
            headers: {
                "Content-Type": "application/json-patch+json",
                'accept': 'text/plain',
                "Authorization": "Basic " + enapi
            }
        }).then(resp => resp.json()
        ).then(data => console.log(data)
        ).catch(err => console.warn(err));


    };
    const handleApi = (name: string, value: any) => {
        setApi(api => {
            return { ...api, [name]: value }
        });
    };

    const hangeTable1Row1 = (name: string, value: any) => {
        setApi(api => {
            return { ...api, table1: { ...api.table1, row1: { ...api.table1.row1, name: value } } }
        });
    };

    const hangeTable1Row2 = (name: string, value: any) => {
        setApi(api => {
            return { ...api, table1: { ...api.table1, row2: { ...api.table1.row2, name: value } } }
        });
    };

    const hangeTable1Row3 = (name: string, value: any) => {
        setApi(api => {
            return { ...api, table1: { ...api.table1, row3: { ...api.table1.row3, name: value } } }
        });
    };

    const hangeTable1Row4 = (name: string, value: any) => {
        setApi(api => {
            return { ...api, table1: { ...api.table1, row4: { ...api.table1.row4, name: value } } }
        });
    };


    const hangeTable1Row5 = (name: string, value: any) => {
        setApi(api => {
            return { ...api, table1: { ...api.table1, row5: { ...api.table1.row5, name: value } } }
        });
    };


    const hangeTable1Row6 = (name: string, value: any) => {
        setApi(api => {
            return { ...api, table1: { ...api.table1, row6: { ...api.table1.row6, name: value } } }
        });
    };


    const hangeTable1Row7 = (name: string, value: any) => {
        setApi(api => {
            return { ...api, table1: { ...api.table1, row7: { ...api.table1.row7, name: value } } }
        });
    };


    const hangeTable1Row8 = (name: string, value: any) => {
        setApi(api => {
            return { ...api, table1: { ...api.table1, row8: { ...api.table1.row8, name: value } } }
        });
    };


    const hangeTable1Row9 = (name: string, value: any) => {
        setApi(api => {
            return { ...api, table1: { ...api.table1, row9: { ...api.table1.row9, name: value } } }
        });
    };

    const hangeTable1Row10 = (name: string, value: any) => {
        setApi(api => {
            return { ...api, table1: { ...api.table1, row10: { ...api.table1.row10, name: value } } }
        });
    };

    const hangeTable1Row11 = (name: string, value: any) => {
        setApi(api => {
            return { ...api, table1: { ...api.table1, row11: { ...api.table1.row11, name: value } } }
        });
    };

    const hangeTable1Row12 = (name: string, value: any) => {
        setApi(api => {
            return { ...api, table1: { ...api.table1, row12: { ...api.table1.row12, name: value } } }
        });
    };

    return (
        <div>
            <div className="ndfl-box-2 ndfl-closed">
                <div className="ndfl-2-1 ndfl">
                    <img src={box2} alt="" width="982px" />
                    <input type="text" name="year" maxLength={4} value={api.years} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("years", e.target.value)} />
                    <input type="date" name="year" value={api.year_from} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("year_from", e.target.value)} />
                    <input type="text" name="oktmo" value={api.code_oktmc} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("code_oktmc", e.target.value)} />
                    <input type="tel" name="tel" value={api.phone} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("phone", e.target.value)} />
                    <input type="tel" name="inn" value={api.INN} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("INN", e.target.value)} />
                    <input type="tel" name="kpp" value={api.KPP} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("KPP", e.target.value)} />
                    <input type="tel" name="nalog-agent" value={api.Agent} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("Agent", e.target.value)} />
                    <input type="tel" name="code" value={api.format_code} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("format_code", e.target.value)} />
                    <input type="tel" name="inn/" value={api.INN2} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("INN2", e.target.value)} />
                    <input type="tel" name="kpp/" value={api.KPP2} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("KPP2", e.target.value)} />
                    <input type="text" name="inn2" value={api.INN_RF} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("INN_RF", e.target.value)} />
                    <input type="text" name="lastname" value={api.surname} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("surname", e.target.value)} />
                    <input type="text" name="name2" value={api.name} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("name", e.target.value)} />
                    <input type="text" name="patronymic" value={api.otchestvo} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("otchestvo", e.target.value)} />
                    <input type="text" name="status-nalog" value={api.nalg_code} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("nlg_code", e.target.value)} />
                    <input type="date" name="date-birthday" value={api.birth_date} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("birth_date", e.target.value)} />
                    <input type="text" name="code-country" value={api.country_code} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("country_code", e.target.value)} />
                    <input type="text" name="code-person" value={api.code_doc} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("code_doc", e.target.value)} />
                    <input type="text" name="passport" value={api.pasport_number} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("pasport_name", e.target.value)} />
                    <input type="text" name="income" value={api.percent} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("persent", e.target.value)} />

                    <input type="text" name="month1" value={api.table1.row1.mounth} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row1("mounth", e.target.value)} />
                    <input type="text" name="month2" value={api.table1.row2.mounth} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row2("mounth", e.target.value)} />
                    <input type="text" name="month3" value={api.table1.row3.mounth} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row3("mounth", e.target.value)} />
                    <input type="text" name="month4" value={api.table1.row4.mounth} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row4("mounth", e.target.value)} />
                    <input type="text" name="month5" value={api.table1.row5.mounth} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row5("mounth", e.target.value)} />
                    <input type="text" name="month6" value={api.table1.row6.mounth} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row6("mounth", e.target.value)} />
                    <input type="text" name="month7" value={api.table1.row7.mounth} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row7("mounth", e.target.value)} />
                    <input type="text" name="month8" value={api.table1.row8.mounth} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row8("mounth", e.target.value)} />
                    <input type="text" name="month9" value={api.table1.row9.mounth} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row9("mounth", e.target.value)} />
                    <input type="text" name="month10" value={api.table1.row10.mounth} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row10("mounth", e.target.value)} />
                    <input type="text" name="month11" value={api.table1.row11.mounth} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row11("mounth", e.target.value)} />
                    <input type="text" name="month12" value={api.table1.row12.mounth} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row12("mounth", e.target.value)} />
                    <input type="text" name="month13" />
                    <input type="text" name="month14" />
                    <input type="text" name="month15" />


                    <input type="text" name="revenue-code1" value={api.table1.row1.dohod_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row1("dohod_code", e.target.value)} />
                    <input type="text" name="revenue-code2" value={api.table1.row2.dohod_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row2("dohod_code", e.target.value)} />
                    <input type="text" name="revenue-code3" value={api.table1.row3.dohod_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row3("dohod_code", e.target.value)} />
                    <input type="text" name="revenue-code4" value={api.table1.row4.dohod_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row4("dohod_code", e.target.value)} />
                    <input type="text" name="revenue-code5" value={api.table1.row5.dohod_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row5("dohod_code", e.target.value)} />
                    <input type="text" name="revenue-code6" value={api.table1.row6.dohod_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row6("dohod_code", e.target.value)} />
                    <input type="text" name="revenue-code7" value={api.table1.row7.dohod_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row7("dohod_code", e.target.value)} />
                    <input type="text" name="revenue-code8" value={api.table1.row8.dohod_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row8("dohod_code", e.target.value)} />
                    <input type="text" name="revenue-code9" value={api.table1.row9.dohod_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row9("dohod_code", e.target.value)} />
                    <input type="text" name="revenue-code10" value={api.table1.row10.dohod_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row10("dohod_code", e.target.value)} />
                    <input type="text" name="revenue-code11" value={api.table1.row11.dohod_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row11("dohod_code", e.target.value)} />
                    <input type="text" name="revenue-code12" value={api.table1.row12.dohod_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row12("dohod_code", e.target.value)} />
                    <input type="text" name="revenue-code13" />
                    <input type="text" name="revenue-code14" />
                    <input type="text" name="revenue-code15" />


                    <input type="text" name="amount-of-income1" value={api.table1.row1.sum_dohod} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row1("sum_dohod", e.target.value)} />
                    <input type="text" name="amount-of-income2" value={api.table1.row2.sum_dohod} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row2("sum_dohod", e.target.value)} />
                    <input type="text" name="amount-of-income3" value={api.table1.row3.sum_dohod} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row3("sum_dohod", e.target.value)} />
                    <input type="text" name="amount-of-income4" value={api.table1.row4.sum_dohod} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row4("sum_dohod", e.target.value)} />
                    <input type="text" name="amount-of-income5" value={api.table1.row5.sum_dohod} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row5("sum_dohod", e.target.value)} />
                    <input type="text" name="amount-of-income6" value={api.table1.row6.sum_dohod} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row6("sum_dohod", e.target.value)} />
                    <input type="text" name="amount-of-income7" value={api.table1.row7.sum_dohod} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row7("sum_dohod", e.target.value)} />
                    <input type="text" name="amount-of-income8" value={api.table1.row8.sum_dohod} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row8("sum_dohod", e.target.value)} />
                    <input type="text" name="amount-of-income9" value={api.table1.row9.sum_dohod} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row8("sum_dohod", e.target.value)} />
                    <input type="text" name="amount-of-income11" value={api.table1.row10.sum_dohod} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row10("sum_dohod", e.target.value)} />
                    <input type="text" name="amount-of-income12" value={api.table1.row11.sum_dohod} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row11("sum_dohod", e.target.value)} />
                    <input type="text" name="amount-of-income13" value={api.table1.row12.sum_dohod} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row12("sum_dohod", e.target.value)} />
                    <input type="text" name="amount-of-income14" />
                    <input type="text" name="amount-of-income15" />
                    <input type="text" name="amount-of-income16" />


                    <input type="text" name="deduction-code1" value={api.table1.row1.vichet_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row1("vichet_code", e.target.value)} />
                    <input type="text" name="deduction-code2" value={api.table1.row2.vichet_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row2("vichet_code", e.target.value)} />
                    <input type="text" name="deduction-code3" value={api.table1.row3.vichet_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row3("vichet_code", e.target.value)} />
                    <input type="text" name="deduction-code4" value={api.table1.row4.vichet_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row4("vichet_code", e.target.value)} />
                    <input type="text" name="deduction-code5" value={api.table1.row5.vichet_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row5("vichet_code", e.target.value)} />
                    <input type="text" name="deduction-code6" value={api.table1.row6.vichet_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row6("vichet_code", e.target.value)} />
                    <input type="text" name="deduction-code7" value={api.table1.row7.vichet_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row7("vichet_code", e.target.value)} />
                    <input type="text" name="deduction-code8" value={api.table1.row8.vichet_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row8("vichet_code", e.target.value)} />
                    <input type="text" name="deduction-code9" value={api.table1.row9.vichet_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row9("vichet_code", e.target.value)} />
                    <input type="text" name="deduction-code10" value={api.table1.row10.vichet_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row10("vichet_code", e.target.value)} />
                    <input type="text" name="deduction-code11" value={api.table1.row11.vichet_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row11("vichet_code", e.target.value)} />
                    <input type="text" name="deduction-code12" value={api.table1.row12.vichet_code} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row12("vichet_code", e.target.value)} />
                    <input type="text" name="deduction-code13" />
                    <input type="text" name="deduction-code14" />
                    <input type="text" name="deduction-code15" />


                    <input type="text" name="deduction-amount1" value={api.table1.row1.sum_vichet} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row1("sum_vichet", e.target.value)} />
                    <input type="text" name="deduction-amount2" value={api.table1.row2.sum_vichet} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row2("sum_vichet", e.target.value)} />
                    <input type="text" name="deduction-amount3" value={api.table1.row3.sum_vichet} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row3("sum_vichet", e.target.value)} />
                    <input type="text" name="deduction-amount4" value={api.table1.row4.sum_vichet} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row4("sum_vichet", e.target.value)} />
                    <input type="text" name="deduction-amount5" value={api.table1.row5.sum_vichet} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row5("sum_vichet", e.target.value)} />
                    <input type="text" name="deduction-amount6" value={api.table1.row6.sum_vichet} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row6("sum_vichet", e.target.value)} />
                    <input type="text" name="deduction-amount7" value={api.table1.row7.sum_vichet} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row7("sum_vichet", e.target.value)} />
                    <input type="text" name="deduction-amount8" value={api.table1.row8.sum_vichet} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row8("sum_vichet", e.target.value)} />
                    <input type="text" name="deduction-amount9" value={api.table1.row9.sum_vichet} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row9("sum_vichet", e.target.value)} />
                    <input type="text" name="deduction-amount11" value={api.table1.row10.sum_vichet} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row10("sum_vichet", e.target.value)} />
                    <input type="text" name="deduction-amount12" value={api.table1.row11.sum_vichet} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row11("sum_vichet", e.target.value)} />
                    <input type="text" name="deduction-amount13" value={api.table1.row12.sum_vichet} onChange={(e: ChangeEvent<HTMLInputElement>) => hangeTable1Row12("sum_vichet", e.target.value)} />
                    <input type="text" name="deduction-amount14" />
                    <input type="text" name="deduction-amount15" />
                    <input type="text" name="deduction-amount16" />

                    <input type="text" name="month1--table-2" />
                    <input type="text" name="month2--table-2" />
                    <input type="text" name="month3--table-2" />
                    <input type="text" name="month4--table-2" />
                    <input type="text" name="month5--table-2" />
                    <input type="text" name="month6--table-2" />
                    <input type="text" name="month7--table-2" />
                    <input type="text" name="month8--table-2" />
                    <input type="text" name="month9--table-2" />
                    <input type="text" name="month10--table-2" />
                    <input type="text" name="month11--table-2" />
                    <input type="text" name="month12--table-2" />
                    <input type="text" name="month13--table-2" />
                    <input type="text" name="month14--table-2" />
                    <input type="text" name="month15--table-2" />


                    <input type="text" name="revenue-code1--table-2" />
                    <input type="text" name="revenue-code2--table-2" />
                    <input type="text" name="revenue-code3--table-2" />
                    <input type="text" name="revenue-code4--table-2" />
                    <input type="text" name="revenue-code5--table-2" />
                    <input type="text" name="revenue-code6--table-2" />
                    <input type="text" name="revenue-code7--table-2" />
                    <input type="text" name="revenue-code8--table-2" />
                    <input type="text" name="revenue-code9--table-2" />
                    <input type="text" name="revenue-code10--table-2" />
                    <input type="text" name="revenue-code11--table-2" />
                    <input type="text" name="revenue-code12--table-2" />
                    <input type="text" name="revenue-code13--table-2" />
                    <input type="text" name="revenue-code14--table-2" />
                    <input type="text" name="revenue-code15--table-2" />


                    <input type="text" name="amount-of-income1--table-2" />
                    <input type="text" name="amount-of-income2--table-2" />
                    <input type="text" name="amount-of-income3--table-2" />
                    <input type="text" name="amount-of-income4--table-2" />
                    <input type="text" name="amount-of-income5--table-2" />
                    <input type="text" name="amount-of-income6--table-2" />
                    <input type="text" name="amount-of-income7--table-2" />
                    <input type="text" name="amount-of-income8--table-2" />
                    <input type="text" name="amount-of-income9--table-2" />
                    <input type="text" name="amount-of-income11--table-2" />
                    <input type="text" name="amount-of-income12--table-2" />
                    <input type="text" name="amount-of-income13--table-2" />
                    <input type="text" name="amount-of-income14--table-2" />
                    <input type="text" name="amount-of-income15--table-2" />
                    <input type="text" name="amount-of-income16--table-2" />


                    <input type="text" name="deduction-code1--table-2" />
                    <input type="text" name="deduction-code2--table-2" />
                    <input type="text" name="deduction-code3--table-2" />
                    <input type="text" name="deduction-code4--table-2" />
                    <input type="text" name="deduction-code5--table-2" />
                    <input type="text" name="deduction-code6--table-2" />
                    <input type="text" name="deduction-code7--table-2" />
                    <input type="text" name="deduction-code8--table-2" />
                    <input type="text" name="deduction-code9--table-2" />
                    <input type="text" name="deduction-code10--table-2" />
                    <input type="text" name="deduction-code11--table-2" />
                    <input type="text" name="deduction-code12--table-2" />
                    <input type="text" name="deduction-code13--table-2" />
                    <input type="text" name="deduction-code14--table-2" />
                    <input type="text" name="deduction-code15--table-2" />


                    <input type="text" name="deduction-amount1--table-2" />
                    <input type="text" name="deduction-amount2--table-2" />
                    <input type="text" name="deduction-amount3--table-2" />
                    <input type="text" name="deduction-amount4--table-2" />
                    <input type="text" name="deduction-amount5--table-2" />
                    <input type="text" name="deduction-amount6--table-2" />
                    <input type="text" name="deduction-amount7--table-2" />
                    <input type="text" name="deduction-amount8--table-2" />
                    <input type="text" name="deduction-amount9--table-2" />
                    <input type="text" name="deduction-amount11--table-2" />
                    <input type="text" name="deduction-amount12--table-2" />
                    <input type="text" name="deduction-amount13--table-2" />
                    <input type="text" name="deduction-amount14--table-2" />
                    <input type="text" name="deduction-amount15--table-2" />
                    <input type="text" name="deduction-amount16--table-2" />

                    <input type="text" name="deduction-code" />
                    <input type="text" name="deduction amount" />
                    <input type="text" name="deduction-code" />
                    <input type="text" name="deduction-amount" />
                    <input type="text" name="deduction-code" />
                    <input type="text" name="deduction-amount" />
                    <input type="text" name="deduction-code" />
                    <input type="text" name="deduction-amount" />

                    <input type="text" name="amount-of-income" />
                    <input type="text" name="tax-base" />
                    <input type="text" name="the-amount" />
                    <input type="text" name="amount-of-withholding-tax" />
                    <input type="text" name="the-amount-is-fixed" />
                    <input type="text" name="the-amount-of-corporate-income-tax" />
                    <input type="text" name="the-amount-of-tax-transferred" />
                    <input type="text" name="the-amount-of-tax-withheld-by-the-agent" />

                    <input type="text" name="the-amount-of-income-from-which-the-tax-is-not-withheld" />
                    <input type="text" name="the-amount-of-the-non-deductible-tax" />

                    <input type="text" name="agent2" value={api.Agent2} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("Agent2", e.target.value)} />
                    <input type="text" name="otchestvo-agent2" value={api.otchestvo2} onChange={(e: ChangeEvent<HTMLInputElement>) => handleApi("otchestvo2", e.target.value)} />
                </div>

                <button
                    onClick={() => ndfl2box()}
                    style={
                        {
                            padding: 20,
                            backgroundColor: '#1E7BB9',
                            color: 'white',
                            border: 'none',
                            marginBottom: 40,
                            marginTop: 20,
                            cursor: 'pointer'
                        }}>
                    <b>Отправить декларацию</b>
                </button>
            </div>

        </div>
    )
}

export default Box2;
