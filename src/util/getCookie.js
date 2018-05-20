import React from 'react';
import Cookies from "js-cookie";

const GetCookie = () => {
  return Cookies.get("http://yi-portfolio.surge.sh/");
};

export default GetCookie;
