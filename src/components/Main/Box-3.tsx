import React, {useState} from 'react';
import "../css/Main/Box3.css";
import ndfl1 from '../Image/ndfl-1.jpg';
import ndfl2 from '../Image/ndfl-2.jpg';
import ndfl3 from '../Image/ndfl-3.jpg';
import ndfl4 from '../Image/ndfl-4.jpg';
import ndfl5 from '../Image/ndfl-5.jpg';

const Box3: React.FC = () => {

    const [inputValue, setInputValue] = useState('');

    return (
    <div className="ndfl-box-3 ndfl-closed">
        <div className="ndfl-1 ndfl">
                <img className="ndfl-image" src={ndfl1} alt="" />
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" name="INN" maxLength={12} />
                <input type="text" name="Str" maxLength={3} />

                <input type="text" name="adjustment-number" maxLength={3} />

                <input type="text" name="tax-period" maxLength={2} />

                <input type="text" name="reporting-year" maxLength={4} />

                <input type="text" name="submitted-to-the-tax-authority" maxLength={4} />

                <input type="text" name="country-code" maxLength={3} />

                <input type="text" name="taxpayer-category-code" maxLength={3} />

                <input type="text" name="lastname" maxLength={35} />

                <input type="text" name="name" maxLength={35} />

                <input type="text" name="patronymic" maxLength={35} />

                <input type="date" name="date-of-birth" />

                <input type="text" name="document-type-code" maxLength={2} />

                <input type="text" name="passport" maxLength={25} />

                <input type="text" name="taxpayer-status-code" maxLength={1} />

                <input type="tel" name="contact-phone-number" maxLength={20} />

                <input type="text" name="the-declaration-is-drawn-up-on" maxLength={3} />

                <input type="text" name="the-declaration-is-drawn-up-on" maxLength={3} />

                <input type="text" name="reliability-and-completeness-of-information" maxLength={1} />

                <input type="text" name="this-declaration-is-presented-at" maxLength={2} />

                <input type="text" name="taxpayers-last-name" maxLength={20} />

                <input type="text" name="taxpayers-name" maxLength={20} />

                <input type="text" name="taxpayers-patronymic" maxLength={20} />

                <input type="text" name="on-the-pages" maxLength={3} />

                <input type="text" name="with-the-attachment-of-supporting-documents-or-copies-thereof-to" maxLength={3} />

                <input type="date" name="date-of-submission-of-the-declaration" />

                <input type="date" name="date-end" />

                <input type="text" name="name-and-details-of-the-document-confirming-the-powers-of-the-taxpayer's-representative" maxLength={20} />

                <input type="text" name="name-and-details-of-the-document-confirming-the-powers-of-the-taxpayer's-representative" maxLength={20} />
            </div>

            <div className="ndfl ndfl-2">
                <img className="ndfl-image" src={ndfl2} alt="" />
                <input type="text" name="INN" maxLength={12} />
                <input type="text" name="str" maxLength={12} />

                <input type="text" name="lastname" maxLength={30} />

                <input type="text" name="name" maxLength={1} />

                <input type="text" name="patronymic" maxLength={1} />

                <input type="text" name="Budget-classification-code" maxLength={20} />

                <input type="text" name="OKTMO" maxLength={11} />

                <input type="text" name="amount-of-tax-payable" maxLength={13} />

                <input type="text" name="amount-of-tax-refunded" maxLength={13} />

                <input type="text" name="Budget-classification-code" maxLength={20} />

                <input type="text" name="OKTMO" maxLength={11} />

                <input type="text" name="amount-of-tax-payable" maxLength={13} />

                <input type="text" name="amount-of-tax-refunded" maxLength={13} />

                <input type="text" name="budget-classification-code" maxLength={13} />

                <input type="text" name="OKTMO" maxLength={11} />

                <input type="text" name="tax-amount" maxLength={13} />

                <input type="text" name="OKTMO" maxLength={11} />

                <input type="text" name="tax-amount" maxLength={13} />

                <input type="text" name="tax-amount" maxLength={13} />

                <input type="text" name="OKTMO" maxLength={11} />

                <input type="text" name="tax-amount" maxLength={13} />

                <input type="text" name="tax-amount" maxLength={13} />

                <input type="text" name="OKTMO" maxLength={11} />

                <input type="text" name="the-amount-of-the-surcharge" maxLength={13} />

                <input type="text" name="reduction amount" maxLength={13} />
            </div>

            <div className="ndfl ndfl-3">
                <img className="ndfl-image" src={ndfl3} alt="" />
                <input type="text" name="INN" maxLength={12} />
                <input type="text" name="str" maxLength={12} />

                <input type="text" name="lastname" maxLength={30} />

                <input type="text" name="name" maxLength={1} />

                <input type="text" name="patronymic" maxLength={1} />
                <input type="text" name="income-type-code" maxLength={2} />
                <input type="text" name="amount-of-income" maxLength={15} />
                <input type="text" name="the-amount-of-income-not-subject-to-taxation" maxLength={15} />
                <input type="text" name="the-amount-of-income-subject-to-taxation" maxLength={15} />
                <input type="text" name="amount-of-income-tax-deductions" maxLength={15} />
                <input type="text" name="amount-of-expenses" maxLength={15} />
                <input type="text" name="taxe-base" maxLength={15} />
                <input type="text" name="amount-taxe-base" maxLength={15} />
                <input type="text" name="amount-taxe-base" maxLength={15} />
                <input type="text" name="the-amount-of-other" maxLength={15} />
                <input type="text" name="to-be-paid" maxLength={13} />
                <input type="text" name="to-be-paid" maxLength={13} />
                <input type="text" name="to-be-paid" maxLength={13} />
                <input type="text" name="to-be-paid" maxLength={13} />
                <input type="text" name="to-be-paid" maxLength={13} />
                <input type="text" name="to-be-paid" maxLength={13} />
                <input type="text" name="to-be-paid" maxLength={13} />
                <input type="text" name="to-be-paid" maxLength={13} />
                <input type="text" name="to-be-paid" maxLength={13} />
                <input type="text" name="to-be-paid" maxLength={13} />
            </div>

            <div className="ndfl ndfl-4">
                <img className="ndfl-image" src={ndfl4} alt="" />
                <input type="text" name="INN" maxLength={12} />
                <input type="text" name="str" maxLength={12} />

                <input type="text" name="lastname" maxLength={30} />

                <input type="text" name="name" maxLength={1} />

                <input type="text" name="patronymic" maxLength={1} />
                <input type="text" name="income-type-code" maxLength={2} />
                <input type="text" name="tax-rate" maxLength={2} />
                <input type="text" name="inn" maxLength={12} />
                <input type="text" name="kpp" maxLength={9} />
                <input type="text" name="oktmo" maxLength={11} />
                <input type="text" name="name-of-the-source" maxLength={40} />
                <input type="text" name="name-of-the-source" maxLength={40} />
                <input type="text" name="name-of-the-source" maxLength={40} />
                <input type="text" name="name-of-the-source" maxLength={40} />
                <input type="text" name="amount-of-income" maxLength={15} />
                <input type="text" name="tax-amount" maxLength={13} />
                <input type="text" name="the-code-of-the-type-of-income" maxLength={2} />
                <input type="text" name="tax-rate" maxLength={2} />
                <input type="text" name="inn" maxLength={12} />
                <input type="text" name="kpp" maxLength={9} />
                <input type="text" name="oktmo" maxLength={11} /> 
                <input type="text" name="oktmo" maxLength={11} />    
                <input type="text" name="name-income" maxLength={40} />  
                <input type="text" name="name-income" maxLength={40} />  
                <input type="text" name="name-income" maxLength={40} />  
                <input type="text" name="name-income" maxLength={40} />  
                <input type="text" name="summ-income" maxLength={13} />  
                <input type="text" name="the-code-of-the-type-of-income" maxLength={2} />
                <input type="text" name="tax-rate" maxLength={2} />
                <input type="text" name="inn" maxLength={12} />
                <input type="text" name="kpp" maxLength={9} />
                <input type="text" name="oktmo" maxLength={11} /> 
                <input type="text" name="oktmo" maxLength={11} />    
                <input type="text" name="name-income" maxLength={40} />  
                <input type="text" name="name-income" maxLength={40} />  
                <input type="text" name="name-income" maxLength={40} />  
                <input type="text" name="name-income" maxLength={40} />  
                <input type="text" name="summ-income" maxLength={13} /> 
            </div>

            <div className="ndfl ndfl-5">
                <img className="ndfl-image" src={ndfl5} alt="" />
                <input type="text" name="INN" maxLength={12} />
                <input type="text" name="str" maxLength={12} />

                <input type="text" name="lastname" maxLength={30} />

                <input type="text" name="name" maxLength={1} />

                <input type="text" name="patronymic" maxLength={1} />
                <input type="text" name="summ" maxLength={8} />
                <input type="text" name="summ" maxLength={8} />
                <input type="text" name="summ" maxLength={8} />
                <input type="text" name="summ" maxLength={8} />
                <input type="text" name="summ" maxLength={8} />
                <input type="text" name="summ" maxLength={8} /> 
                <input type="text" name="summ" maxLength={8} />
                <input type="text" name="summ" maxLength={8} />

                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
                <input type="text" name="summ" maxLength={14} />
            </div>

            <button 
                onClick={async () => {
                    console.log(inputValue);                   
                }} 
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
    )
}

export default Box3;
