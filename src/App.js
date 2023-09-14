import React, { useState } from "react";
import moment from 'moment';
import "./App.css";


// HOC обертка для стилизации времени и даты публикации
const withDateTimePretty = (WrappedComponent) => {
  return function WithDateTimePretty(props) {
    // logic for date formatting
    const formatDateTime = (date) =>{
      const formattedDate = moment(date).fromNow();
      
      return formattedDate; 
    }
    // создаем форматированную дату путем вызова вышеопределенной 
    // функции и передачи туда полученных от оборачиваемого компонента пропсов
    const formattedDate = formatDateTime(props.date)

    return <WrappedComponent date={formattedDate} />
  }
}

// Создание нового ком-та путем передачи в него вложенного
const DateTimePretty = withDateTimePretty(DateTime)

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item) => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-07-31 13:24:00",
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-09-14 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-02-03 23:16:00",
    },
    {
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-01 16:17:00",
    },
    {
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-12-02 05:24:00",
    },
  ]);

  return <VideoList list={list} />;
}
