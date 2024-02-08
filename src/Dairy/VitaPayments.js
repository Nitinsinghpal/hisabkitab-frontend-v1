import axios from "axios";
import React, { useEffect, useState } from "react";
import "./VitaPayments.css";
import { useSelector } from "react-redux";
function VitaPayments() {
  let totalAmount = 0;
  const initialState = {
    quantity: "",
    fat: "",
    snf: "",
    date: "",
    payment: "",
  };
  let fileredDataByMonths = Array(
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  );
  let monthlyTotal = new Int32Array(12);
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

  const [newPaymentForm, setnewPaymentForm] = useState(false);
  const [formValue, setFormValue] = useState(initialState);
  const [tableData, setTableData] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);
  const [total, setTotal] = useState();

  // var vitaPayments = useSelector((state) => state.dairy);

  // console.log("payments = ", payments)
  useEffect(() => {
    GetTableData();
  }, []);
  function newPaymentFormFunc() {
    setnewPaymentForm(!newPaymentForm);
  }

  function GetTableData() {
    const paymentData = axios
      .get("https://localhost:44336/api/vitaPayments")
      .then((d) => {
        // setTableData(d.data);
        // console.log(d);
        filterDataByMonthFunc(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function AddPayment() {
    axios
      .post("https://localhost:44336/api/vitaPayments", formValue)
      .then((d) => {
        setFormValue(initialState);
        GetTableData();
        alert("Added successfully");
      })
      .catch((e) => {
        alert("Error while adding data");
      });
  }

  function changeHandler(event) {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  function filterDataByMonthFunc(dataFromApi) {
    dataFromApi.map((d, index) => {
      // totalAmount = totalAmount + parseFloat(d.payment)
      const xmas95 = new Date(d.date);
      const month = xmas95.getMonth();
      switch (month) {
        case 0:
          fileredDataByMonths[0].push(d);
          monthlyTotal[0] = monthlyTotal[0] + parseFloat(d.payment);
          break;
        case 1:
          fileredDataByMonths[1].push(d);
          monthlyTotal[1] = monthlyTotal[1] + parseFloat(d.payment);
          break;
        case 2:
          fileredDataByMonths[2].push(d);
          monthlyTotal[2] = monthlyTotal[2] + parseFloat(d.payment);
          break;
        case 3:
          fileredDataByMonths[3].push(d);
          monthlyTotal[3] = monthlyTotal[3] + parseFloat(d.payment);
          break;
        case 4:
          fileredDataByMonths[4].push(d);
          monthlyTotal[4] = monthlyTotal[4] + parseFloat(d.payment);
          break;
        case 5:
          fileredDataByMonths[5].push(d);
          monthlyTotal[5] = monthlyTotal[5] + parseFloat(d.payment);
          break;
        case 6:
          fileredDataByMonths[6].push(d);
          monthlyTotal[6] = monthlyTotal[6] + parseFloat(d.payment);
          break;
        case 7:
          fileredDataByMonths[7].push(d);
          monthlyTotal[7] = monthlyTotal[7] + parseFloat(d.payment);
          break;
        case 8:
          fileredDataByMonths[8].push(d);
          monthlyTotal[8] = monthlyTotal[8] + parseFloat(d.payment);
          break;
        case 9:
          fileredDataByMonths[9].push(d);
          monthlyTotal[9] = monthlyTotal[9] + parseFloat(d.payment);
          break;
        case 10:
          fileredDataByMonths[10].push(d);
          monthlyTotal[10] = monthlyTotal[10] + parseFloat(d.payment);
          break;
        case 11:
          fileredDataByMonths[11].push(d);
          monthlyTotal[11] = monthlyTotal[11] + parseFloat(d.payment);
          break;
      }
      setTotal(monthlyTotal);
      setTableData(fileredDataByMonths);
    });
  }

  // function tableDataFunc() {
  //   console.log("Total by months",total)
  //   console.log("Data by months",tableData)

  //   debugger
  //   let rows = [];

  //   if (tableData.length === 0) {
  //     rows.push(<p>No Data Found</p>);
  //   } else {
  //     tableData.map((d, index) => {
  //       // totalAmount = totalAmount + parseFloat(d.payment)

  //       rows.push(
  //         <tr>
  //           <td>{d.id}</td>
  //           <td>{d.quantity}</td>
  //           <td>{d.fat}</td>
  //           <td>{d.snf}</td>
  //           <td>{d.date}</td>
  //           <td>{d.payment}</td>
  //         </tr>
  //       );
  //     });
  //   }

  //   vitaPayments = totalAmount - vitaPayments[0].totalVitaAmountRecieved;

  //   return <tr>No record Found</tr>;
  // }

  function Edit(params) {
    console.log(params);
  }
  function Delete(params) {
    console.log(params);
  }
  function tableDataFunc() {
    let rows = [];
    if (tableData !== undefined) {
      for (let outerIndex = 0; outerIndex < tableData.length; outerIndex++) {
        tableData[outerIndex].map((d, innerIndex) => {
          const xmas95 = new Date(d.date);
          const month = xmas95.getMonth();
          const year = xmas95.getFullYear();

          // console.log(total[outerIndex])
          rows.push(
            <>
              {innerIndex === 0 ? (
               <tr>
                <td colSpan="7" className="vp-month-totalAmount-td">
                  <div className="vp-month-totalAmount">
                  <h5 className="vp-month-totalAmount-month">{months[month]} {year}</h5>
                 <h5 className="vp-month-totalAmount-total"> &#8377; {total[outerIndex]}</h5>
                  </div>
               
                </td>
              
             </tr>
              ) : (
                <></>
              )}
              <tr>
                  <td>{d.id}</td>
                  <td>{d.quantity}</td>
                  <td>{d.fat}</td>
                  <td>{d.snf}</td>
                  <td>{d.date}</td>
                  <td>{d.payment}</td>
                <td>
                  <button onClick={() => Edit(d.id)}>Edit</button>
                  <button onClick={() => Delete(d.id)}>Delete</button>
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
  function SubmitData() {
    setTableData([...tableData, formValue]);
    alert("Submitted successfully");
  }
  return (
    <div className="PaymentsMain">
      <h1 className="heading">Vita Dairy Payments</h1>

      <button className="newPaymentButton" onClick={newPaymentFormFunc}>
        Add New Payment
      </button>
      {newPaymentForm ? (
        <div className="newPaymentForm">
          <div>
            <label for="quantity" className="formLabel">
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              className="formInput"
              value={formValue.quantity}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label for="fat" className="formLabel">
              Fat
            </label>
            <input
              type="text"
              name="fat"
              className="formInput"
              value={formValue.fat}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label for="date" className="formLabel">
              Date
            </label>

            <input
              type="datetime-local"
              name="date"
              className="formInput"
              value={formValue.date}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label for="snf" className="formLabel">
              SNF
            </label>
            <input
              type="text"
              name="snf"
              className="formInput"
              value={formValue.snf}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label for="payment" className="formLabel">
              Payment (&#8377;)
            </label>

            <input
              type="text"
              name="payment"
              className="formInput"
              value={formValue.payment}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type="button"
              value="Add"
              className="formAddButton"
              onClick={AddPayment}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="tableDiv">
      <table id="table">
        <thead>
          <tr>
            <th>
              <h1>Id</h1>
            </th>
            <th>
              <h1>Quantity</h1>
            </th>
            <th>
              <h1>Fat</h1>
            </th>
            <th>
              <h1>SNF</h1>
            </th>
            <th>
              <h1>Date</h1>
            </th>
            <th>
              <h1>Payment</h1>
            </th>
            <th>
              <h1>Actions</h1>
            </th>
          </tr>
        </thead>
        <tbody>{tableDataFunc()}</tbody>
      </table>
      </div>
    </div>
  );
}

export default VitaPayments;
