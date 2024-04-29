"use client";

import React, { useEffect, useState } from "react";

const RouteReminder = () => {
  let currentPath = window.location.pathname;
  localStorage.setItem("currentPath", currentPath);
  window.onpopstate = () => {
    localStorage.setItem("currentPath", window.location.pathname);
  };

};

export default RouteReminder;
