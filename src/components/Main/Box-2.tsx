import "../css/Main/Box2.css";
import box2 from "../Image/ndfl-2-1.jpg";

const Box2: React.FC = () => {

    function ndfl2box() {
        let d = document.querySelector("ndfl-2-1");
        console.log(d);
        let inpElm = d?.querySelectorAll("input");
        console.log(inpElm);
    }


    return (
        <div>
            <div className="ndfl-box-2 ndfl-closed">
                <div className="ndfl-2-1 ndfl">
                    <img src={box2} alt="" width="982px" />
                    <input type="text" name="year" maxLength={4} />
                    <input type="date" name="year" />
                    <input type="text" name="oktmo" />
                    <input type="tel" name="tel" />
                    <input type="tel" name="inn" />
                    <input type="tel" name="kpp" />
                    <input type="tel" name="nalog-agent" />
                    <input type="tel" name="code" />
                    <input type="tel" name="inn/" />
                    <input type="tel" name="kpp/" />
                    <input type="text" name="inn2" />
                    <input type="text" name="lastname" />
                    <input type="text" name="name2" />
                    <input type="text" name="patronymic" />
                    <input type="text" name="status-nalog" />
                    <input type="date" name="date-birthday" />
                    <input type="text" name="code-country" />
                    <input type="text" name="code-person" />
                    <input type="text" name="passport" />
                    <input type="text" name="income" />

                    <input type="text" name="month1" />
                    <input type="text" name="month2" />
                    <input type="text" name="month3" />
                    <input type="text" name="month4" />
                    <input type="text" name="month5" />
                    <input type="text" name="month6" />
                    <input type="text" name="month7" />
                    <input type="text" name="month8" />
                    <input type="text" name="month9" />
                    <input type="text" name="month10" />
                    <input type="text" name="month11" />
                    <input type="text" name="month12" />
                    <input type="text" name="month13" />
                    <input type="text" name="month14" />
                    <input type="text" name="month15" />
                    
                    
                    <input type="text" name="revenue-code1" />
                    <input type="text" name="revenue-code2" />
                    <input type="text" name="revenue-code3" />
                    <input type="text" name="revenue-code4" />
                    <input type="text" name="revenue-code5" />
                    <input type="text" name="revenue-code6" />
                    <input type="text" name="revenue-code7" />
                    <input type="text" name="revenue-code8" />
                    <input type="text" name="revenue-code9" />
                    <input type="text" name="revenue-code10" />
                    <input type="text" name="revenue-code11" />
                    <input type="text" name="revenue-code12" />
                    <input type="text" name="revenue-code13" />
                    <input type="text" name="revenue-code14" />
                    <input type="text" name="revenue-code15" />
                    

                    <input type="text" name="amount-of-income1" />
                    <input type="text" name="amount-of-income2" />
                    <input type="text" name="amount-of-income3" />
                    <input type="text" name="amount-of-income4" />
                    <input type="text" name="amount-of-income5" />
                    <input type="text" name="amount-of-income6" />
                    <input type="text" name="amount-of-income7" />
                    <input type="text" name="amount-of-income8" />
                    <input type="text" name="amount-of-income9" />
                    <input type="text" name="amount-of-income11" />
                    <input type="text" name="amount-of-income12" />
                    <input type="text" name="amount-of-income13" />
                    <input type="text" name="amount-of-income14" />
                    <input type="text" name="amount-of-income15" />
                    <input type="text" name="amount-of-income16" />
                    

                    <input type="text" name="deduction-code1" />
                    <input type="text" name="deduction-code2" />
                    <input type="text" name="deduction-code3" />
                    <input type="text" name="deduction-code4" />
                    <input type="text" name="deduction-code5" />
                    <input type="text" name="deduction-code6" />
                    <input type="text" name="deduction-code7" />
                    <input type="text" name="deduction-code8" />
                    <input type="text" name="deduction-code9" />
                    <input type="text" name="deduction-code10" />
                    <input type="text" name="deduction-code11" />
                    <input type="text" name="deduction-code12" />
                    <input type="text" name="deduction-code13" />
                    <input type="text" name="deduction-code14" />
                    <input type="text" name="deduction-code15" />
                    

                    <input type="text" name="deduction-amount1" />
                    <input type="text" name="deduction-amount2" />
                    <input type="text" name="deduction-amount3" />
                    <input type="text" name="deduction-amount4" />
                    <input type="text" name="deduction-amount5" />
                    <input type="text" name="deduction-amount6" />
                    <input type="text" name="deduction-amount7" />
                    <input type="text" name="deduction-amount8" />
                    <input type="text" name="deduction-amount9" />
                    <input type="text" name="deduction-amount11" />
                    <input type="text" name="deduction-amount12" />
                    <input type="text" name="deduction-amount13" />
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
                </div>

                <button 
                onClick={() => ndfl2box()} 
                style={
                    {padding: 20, 
                    backgroundColor: '#1E7BB9', 
                    color: 'white', 
                    border: 'none', 
                    marginBottom: 40, 
                    marginTop: 20,
                    cursor: 'pointer'}}>
                        <b>Отправить декларацию</b>
            </button>
            </div>

            

        </div>
    )
}

export default Box2;
