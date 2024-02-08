import React, { useEffect, useState } from "react";
import "./Payments.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VitaAmountRecieved } from "./dairySlice";
function Payments() {
  const initialState = { name: "", date: Date.now, payment: "" };
  // const sampleData = [
  //   {name:"Vita Dairy", date:"14/01/2024",payment:"2440"},
  //   {name:"Vita Dairy", date:"25/01/2024",payment:"1500"},
  //   {name:"Vita Dairy", date:"30/01/2024",payment:"2000"},
  //   {name:"Nitin", date:"5/01/2024",payment:"1600"},
  // ]
  const [newPaymentForm, setnewPaymentForm] = useState(false);
  const [formValue, setFormValue] = useState(initialState);
  const [tableData, setTableData] = useState([])
  const dispatch = useDispatch();


  useEffect(() =>{
    callAllFunctions();
 
  },[])

 async function callAllFunctions(){
   await GetTableData();
    
  }
  function newPaymentFormFunc() {
    setnewPaymentForm(!newPaymentForm);
  }
  function AddVitaPayments() {
    
    let totalVitaAmountRecieved = 0;
    const a = tableData.map((d) => {
      
      if(d.name ==="Vita dairy"){
        let payment = parseFloat(d.payment)
        totalVitaAmountRecieved=totalVitaAmountRecieved + payment;
      }
    }) 
    dispatch(
      VitaAmountRecieved(totalVitaAmountRecieved)
    )
  }
   function GetTableData(){
    const paymentData = axios.get("https://localhost:44336/api/dairyPayments").then((d) =>{
      setTableData(d.data)
      console.log(d)
    }).catch((e) =>{
      console.log(e);
    })
  }

  function AddPayment(){
    axios.post("https://localhost:44336/api/dairyPayments",formValue).then((d) =>{
      setFormValue(initialState)
      GetTableData()
      alert("Added successfully")
    }).catch((e)=> {
      alert("Error while adding data")
    })
  }

  function changeHandler(event) {
    
    setFormValue({
      ...formValue,
      [event.target.name]:event.target.value
    })

  }

  function tableDataFunc(){
    let rows=[];
    if(tableData.length === 0)
    {
      rows.push(<p>No Data Found</p>)
    }
    else{
      tableData.map((d,index)=>{
        rows.push(
          <tr>
            <td>{index+1}</td>
          <td>{d.name}</td>
          <td>{d.date}</td>
          <td>{d.payment}</td>
        </tr>
        )
      })
      AddVitaPayments();
    }
   
    return rows;
  }

  function SubmitData(){
    setTableData([
      ...tableData,
      formValue
    ]);
    alert("Submitted successfully")
  }
  return (
    <div className="PaymentsMain">
      <h1 className="heading">Dairy Payments</h1>
      <Link to="/vitaPayments"><button className="newPaymentButton">
        Vita Payments
      </button></Link>
      
      <button className="newPaymentButton" onClick={newPaymentFormFunc}>
        Add New Payment
      </button>
      {newPaymentForm ? (
        <div className="newPaymentForm">
          <div>
          <label for="name" className="formLabel">Name</label>
          <input
            type="text"
            name="name"
            className="formInput"
            value={formValue.name}
            onChange={changeHandler}
          />
          </div>
          <div>
          <label for="date" className="formLabel">Date</label>

          <input
            type="date"
            name="date"
            className="formInput"
            value={formValue.date}
            onChange={changeHandler}
          />
          </div>
          <div>
          <label for="payment" className="formLabel">Payment (&#8377;)</label>

          <input
            type="text"
            name="payment"
            className="formInput"
            value={formValue.payment}
            onChange={changeHandler}
          />
          </div>
          <div>
            <input type="button" value="Add" className="formAddButton" onClick={AddPayment}/>
            </div>
        </div>
      ) : (
        <></>
      )}
      <h3>Month : January</h3>
      <table id="customers">
        <thead>
          <tr>
            <th>
              <h1>Sr no.</h1>
            </th>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Date</h1>
            </th>
            <th>
              <h1>Payment</h1>
            </th>
          </tr>
        </thead>
       <tbody>
        {tableDataFunc()}
       </tbody>
      </table>
    </div>
  );
}

export default Payments;
