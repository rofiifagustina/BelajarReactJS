import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Greeting() {
  return (
    <>
      <h1>Halo,Selamat Pagi</h1>
      <p>SEMANGAT YA </p>
    </>
  );
}
//props/properti
function Biodata(props) {
  return (
    <div>
      <p>Nama : {props.nama}</p>
      <p>Kelas : {props.kelas}</p>
      <p>Nisn :{props.Nisn}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Greeting />
      <Biodata nama="Rofiif" kelas="XI PPLG 1" Nisn="21652" />
      <Biodata nama="Budi" kelas="XI MPLB 2" Nisn="21671"/>
      <Biodata nama="Siti" kelas="X AKL 3"Nisn="87651"/>
    </>
  );
}

export default App;
