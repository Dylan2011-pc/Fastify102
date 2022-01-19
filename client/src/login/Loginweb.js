import React, { useState } from "react";
import {toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import "./login.scss";
function Loginweb() {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const Laydata = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    setlogin({ ...login, [name]: value });
  };
  const senddata = async (event) => {
    event.preventDefault();
    const config = {
      "Content-Type": "application/json",
    };

    await axios
      .post("http://localhost:5000/api/login", login, { config })
      .then((res) => {
        const data = JSON.parse(res.data.message);
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", data.name);
        localStorage.setItem("avatar", data.avatar);
        Cookies.set("cookielogin", data.msg);
        window.location.href = "/listdevicemuon";
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response.data.message === "usererr") {
          return toast.error("Tài khoản không đúng ");
        } else {
          JSON.parse(err.response.data.message).map((data) => {
            toast.error(data.message);
          });
        }
      });
  };
  return (
<div class="login-box">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  <h3><i class="fa fa-graduation-cap"></i> KMA  <i class="fa fa-laptop"></i></h3>
  <h2><i class="glyphicon glyphicon-user" ></i> ĐĂNG NHẬP</h2>
  <form>
    <div class="user-box">
      <input type="text" name ="email" value={setlogin.email} onChange={Laydata} required />
      <label > <i class="glyphicon glyphicon-envelope"></i> Email</label>
    </div>
    <div class="user-box">
      <input type="password"  name="password" value={setlogin.password} onChange={Laydata} required/>
      <label><i class="fa fa-lock"></i> Mật khẩu</label>
    </div>
    <div class="checkbox pull-left">
      <label><input type="checkbox"/>Ghi nhớ</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button class="btnlogin" type="submit" onClick={senddata}>Đăng nhập <i class="fa fa-sign-in clickable"></i> </button>
      <span></span>
      <span></span>
      <span></span>
    </a>
  </form>
</div>
  );
}

export default Loginweb
