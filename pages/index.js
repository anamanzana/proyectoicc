import Head from 'next/head';
import Image from 'next/image';
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [country, setCountry] = useState("Chile");
  const [continentInfo, setContinentInfo] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);
  const [btnText1, setBtnText1] = useState("Obten continente");
  const [btnText2, setBtnText] = useState("Obten país");
  const continentes = ["America", "Asia", "Africa", "Europe", "Oceania"];
  /**
   *
   *
   * Fetch country info data
   */
  const getContinentInfo = async (e) => {
    e.preventDefault();

    try {
      setBtnText1("Carga continente");
      const res = await axios.get(`/api/info2`, {
        params2: { continent},
      });

      getContinentInfo(res.data[0]);
    } catch (err) {
      console.log(err);
    }

    setBtnText1("Obten info continente");
  };
  

  const getCountryInfo = async (e) => {
    e.preventDefault();

    try {
      setBtnText("Cargando");
      const res = await axios.get(`/api/info`, {
        params: { country },
      });

      setCountryInfo(res.data[0]);
    } catch (err) {
      console.log(err);
    }

    setBtnText("Obten info país");
  };



  return (
    <div className="flex flex-col items-center">
      <h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
        Web de <span className="text-danger">Información</span> de Países
      </h2>
      <h3 className="text-danger text-2xl font-raleway font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center">
        Selecciona el o los continentes de los paises que quieras ver su información
      </h3>
      <div className="d1">
        <form className="d2">
        <script src="../pages/api/info2.js"></script>
              <select multiple className="form-control" id="listboxc">
                <option value="1">America</option>
                <option value="2">Asia</option>
                <option value="3">Africa</option>
                <option value="4">Europe</option>
                <option value="5">Oceania</option>
              </select>
            <script>
              var listObj = new ListBox();
              listObj.appendTo("#listbox2");
            </script>  
          <button
            className="boton_continente border border-danger text-secondary font-bold font-raleway ml-4 w-52 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
            onClick={getContinentInfo}
          >
            {btnText1}
          </button>
        </form>
      </div>
      {continentInfo && (
      <tr>
                <td className="border-danger border px-4 py-4">Continente</td>
                <td className="border-danger border px-4 py-4">
                  {continentInfo.continent}
                </td>
              </tr>)}
      <div className="flex flex-col mt-10 justify-end h-2 md:h-6"></div>
      <div className="flex flex-col justify-between items-center w-full md:items-center">
        <form className="flex w-full justify-center md:flex-col md:w-5/6 ">
          <input
            autoFocus={true}
            className="border-none outline-none w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
            placeholder="Country..."
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button
            className="outline-none border border-danger text-secondary font-bold font-raleway ml-4 w-52 px-12 py-2 rounded-sm bg-danger text-primary transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4"
            onClick={getCountryInfo}
          >
            {btnText2}
          </button>
        </form>
      </div>
      
      {countryInfo && (
        <div className="flex flex-col text-raleway mt-12 w-3/6 h-4/5 md:w-5/6 md:h-full md:mb-12">
          <table className="text-primary border-danger border md:text-sm md:mx-2">
            <tbody>
              <tr>
                <td className="border-danger border px-4 py-4">Nombre</td>
                <td className="border-danger border px-4 py-4">
                  {countryInfo.name}
                </td>
              </tr>
              <tr>
                <td className="border-danger border px-4 py-4">Bandera</td>
                <td className="border-danger border px-4 py-4">
                  {countryInfo.flag}
                </td>
              </tr>
              <tr>
                <td className="border-danger border px-4 py-4">Código</td>
                <td className="border-danger border px-4 py-4">
                  {countryInfo.code}
                </td>
              </tr>
              <tr>
                <td className="border-danger border px-4 py-4">Telefono</td>
                <td className="border-danger border px-4 py-4">
                  {countryInfo.dialCode}
                </td>
              </tr>
              <tr>
                <td className="border-danger border px-4 py-4">Continente</td>
                <td className="border-danger border px-4 py-4">
                  {countryInfo.continent}
                </td>
              </tr>
              <tr>
                <td className="border-danger border px-4 py-4">
                  Moneda
                </td>
                <td className="border-danger border px-4 py-4">
                  {countryInfo.currencyCode}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div className="flex flex-col mt-10 justify-end h-36 md:h-24">
        <script src="/blog/app.js" async defer></script>
      </div>
    </div>
  );
}
