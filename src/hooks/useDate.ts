import { useState, useEffect } from "react";

const useDate = () => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const getFormattedDate = () => {
      const currentDate = new Date();
      const month = currentDate.getMonth() + 1;
      const date = currentDate.getDate();
      const year = currentDate.getFullYear();
      const formattedDate = `${getMonthName(month)} ${date}, ${year}`;
      return formattedDate;
    };

    const getMonthName = (monthNumber: number) => {
      const monthNames = [
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
      return monthNames[monthNumber - 1];
    };

    const intervalId = setInterval(() => {
      setFormattedDate(getFormattedDate());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return formattedDate;
};

export default useDate;
