import React, { useState } from "react";
import Mapslider from "../Mapslider/Mapslider";
import Rating from "../Rating/Rating";
import "./Styles/repair.css";
import axios from "axios";
import Loader from './../Loader/ButtonLoad'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Middleware/auth";
import { AutobotBackend } from './../../Middleware/Helper'
import { toast } from "react-toastify";
import HistoryRepair from "../RepairHistory/HistoryRepair";

export default function Repair(props) {
  const [load, setLoad] = useState(true);
  const auth = useAuth();
  const navigate = useNavigate();

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };
  //service handler
  const handleRepair = (e) => {
    e.preventDefault();
    setLoad(null);
    const data = new FormData(e.currentTarget);
    axios
      .post(`${AutobotBackend}/api/repair`, {
        username: auth.user.username,
        name: data.get("name"),
        phone: data.get("phone"),
        carname: data.get("carname"),
        date: data.get("date"),
        time: data.get("time"),
        city: data.get("city"),
      })
      .then((response) => {
        console.log(response);
        setLoad(true);
        if (response.data === "success") {
          navigate("/autobots/home");
          toast.success("Success", {
            position: "bottom-right",
            theme: "dark",
          });
        } else {
          toast.info(response.data, {
            position: "bottom-right",
            theme: "dark",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Server error");
      });
  };

  return (
    <div className="wholerepaircont">
      <HistoryRepair />
      <Mapslider />
      <div className="repair-container ">
        <h1>Welocme to Autobots Repair Services</h1>
        <form onSubmit={handleRepair}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Name:</label>
                </td>
                <td>
                  <input type="text" name="name" />
                </td>
              </tr>

              <tr>
                <td>
                  <label>PhoneNumber:</label>
                </td>
                <td>
                  <input type="number" name="phone" />
                </td>
              </tr>

              <tr>
                <td>
                  <label>CarName:</label>
                </td>
                <td>
                  <input type="text" name="carname" />
                </td>
              </tr>

              <tr>
                <td>
                  <label>Date of request:</label>
                </td>
                <td>
                  <input type="date" name="date" min={disablePastDate()} />
                </td>
              </tr>

              <tr>
                <td>
                  <label>Time :</label>
                </td>
                <td>
                  <input type="time" name="time" />
                </td>
              </tr>

              <tr>
                <td>
                  <label>City :</label>
                </td>
                <td>
                  <input type="text" name="city" />
                </td>
              </tr>
            </tbody>
          </table>
          {load &&
            <button className="tooltip-btn-hover color-2">Book</button>
          }
          {!load &&
            <Loader />
          }
        </form>
      </div>
      <div className="historybtns">
        <div className="history-btn"><Link data-bs-toggle="modal" data-bs-target="#repairhistory">History</Link></div>
      </div>
      <Rating />
    </div>
  );
}
