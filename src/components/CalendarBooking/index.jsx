import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function CalendarBooking() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h2>Agende seu serviço</h2>

      <Calendar
        onChange={setDate}
        value={date}
      />

      <p>
        Data selecionada:
        {" "}
        {date.toLocaleDateString()}
      </p>
    </div>
  );
}