import React, { useEffect, useState } from "react";
import "./onlineInvestment.css";
import axios from "axios";
function OnlineInvestment() {
  let init = Array([],[],[],[],[],[],[],[],[],[],[],[]);
  let monthlyTotal = new Int32Array(12)
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
let formInitValue = {name:'',date:Date, amount:Number}
  const [data, setData] = useState();
  const [formValue, setFormValue] = useState(formInitValue);
  const [total, setTotal] = useState(); 
  const [edit, setEdit] = useState(false);



  useEffect(() => {
    GetData();
  }, [data]);

  function changeHandler(event) {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }
  function filterDataByMonth(dataFromApi) {
    dataFromApi.map((d) => {
      
      const xmas95 = new Date(d.date);
      const month = xmas95.getMonth();
      switch (month) {
        case 0:
          init[0].push(d);
          monthlyTotal[0] = monthlyTotal[0]+d.amount;
          break;
        case 1:
          init[1].push(d);
          monthlyTotal[1] = monthlyTotal[1]+d.amount;
          break;
        case 2:
          init[2].push(d);
          monthlyTotal[2] = monthlyTotal[2]+d.amount;
          break;
        case 3:
          init[3].push(d);
          monthlyTotal[3] = monthlyTotal[3]+d.amount;
          break;
        case 4:
          init[4].push(d);
          monthlyTotal[4] = monthlyTotal[4]+d.amount;
          break;
        case 5:
          init[5].push(d);
          monthlyTotal[5] = monthlyTotal[5]+d.amount;
          break;
        case 6:
          init[6].push(d);
          monthlyTotal[6] = monthlyTotal[6]+d.amount;
          break;
        case 7:
          init[7].push(d);
          monthlyTotal[7] = monthlyTotal[7]+d.amount;
          break;
        case 8:
          init[8].push(d);
          monthlyTotal[8] = monthlyTotal[8]+d.amount;
          break;
        case 9:
          init[9].push(d);
          monthlyTotal[9] = monthlyTotal[9]+d.amount;
          break;
        case 10:
          init[10].push(d);
          monthlyTotal[10] = monthlyTotal[10]+d.amount;
          break;
        case 11:
          init[11].push(d);
          monthlyTotal[11] = monthlyTotal[11]+d.amount;
          break;
      }
    });
    setTotal(monthlyTotal);
    setData(init);
  }
  function GetData(params) {
    axios
      .get("https://localhost:44336/api/onlineInvestment")
      .then((d) => {
        filterDataByMonth(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function AddData(params) {
    axios
      .post("https://localhost:44336/api/onlineInvestment", formValue)
      .then((d) => {
        alert("Added successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function AddEntry() {
    setEdit(false)
    setFormValue(formInitValue)
  }
  function Edit(id) {
    setEdit(true)
    
    let val=null;
    for (let index = 0; index < data.length; index++) {
      val = data[index].filter((d) => d.id === id)
      if (val !== null && val !=0) {
        break;
      }

    }
    
    setFormValue(val[0])
  }
  function UpdateData(params) {
    alert("update function")
  }
  function Delete(id) {
    axios.delete('https://localhost:44336/api/onlineInvestment/'+id).then((d) =>{
      alert("Deleted successfully")
    }).catch((e) =>{
      console.log(e)
    })
  }
  function tableData(params) {
    let rows = [];
    if (data !== undefined) {
      for (let outerIndex = 0; outerIndex < data.length; outerIndex++) {

        data[outerIndex].map((d, innerIndex) => {
          
          const xmas95 = new Date(d.date);
          const month = xmas95.getMonth();
          const year = xmas95.getFullYear();
          
// console.log(total[outerIndex])
          rows.push(
            <>
              {innerIndex === 0 ? (
                <tr>
                  <div className="oi-month-totalAmount">
                    <h5 className="oi-month-totalAmount-month">{months[month]} {year}</h5>
                    <h5 className="oi-month-totalAmount-total">{total[outerIndex]}</h5>
                  </div>
                </tr>
              ) : (
                <></>
              )}
              <tr>
                <td>{d.name}</td>
                <td>{d.date}</td>
                <td>{d.amount}</td>
                <td>
                  <button onClick={() => Edit(d.id)}>Edit</button> <button onClick={() => Delete(d.id)}>Delete</button>
                </td>
              </tr>
            </>
          );
        });
      }
    } else {
      rows.push(
        <tr>
          <td>No Data Found</td>
        </tr>
      );
    }

    return rows;
  }
  return (
    <div className="oi-main">
      <div className="oi-heading">OnlineInvestment</div>
      <div className="oi-content">
        <div className="oi-content1">
          <div className="oi-left">
            <div className="oi-form-heading">
              {edit?(<h5>Edit Entry</h5>):(<h5>Add Entry</h5>)}
              <h6 onClick={AddEntry}>Add Entry</h6>
              </div>
            <div className="oi-form">
              <div className="oi-form-field">
                <label for="name" className="oi-form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="oi-form-input"
                  value={formValue.name}
                  onChange={changeHandler}
                />
              </div>

              <div className="oi-form-field">
                <label for="date" className="oi-form-label">
                  Date
                </label>
                <input
                  type="datetime-local"
                  name="date"
                  className="oi-form-input"
                  value={formValue.date}
                  onChange={changeHandler}
                />
              </div>
              <div className="oi-form-field">
                <label for="amount" className="oi-form-label">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  className="oi-form-input"
                  value={formValue.amount}
                  onChange={changeHandler}
                />
              </div>
              <div className="oi-form-field">
              {edit ? (
               <input
                  type="button"
                  name="submit"
                  className="oi-form-button"
                  value="Update"
                  onClick={UpdateData}
                />
              ):(
               <input
                  type="button"
                  name="submit"
                  className="oi-form-button"
                  value="Submit"
                  onClick={AddData}
                />
              )}
              </div>
            </div>
          </div>
          <div className="oi-right">
            <table id="customers">
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
              {tableData()}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineInvestment;
