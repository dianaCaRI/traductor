import "./App.css";
import { useState } from 'react'
import { useTranslation } from "react-i18next"

function App() {
  const [t, i18n] = useTranslation("global")
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav class="bg-white mb-44 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap justify-around items-center mx-auto">
          <div className="w-96 flex flex-row justify-around">
            <p  className="text-white">HOME</p>
            <p onClick={() => { i18n.changeLanguage("en") }}className="text-white cursor-pointer">INGLES</p>
            <p  onClick={() => { i18n.changeLanguage("es") }} className="text-white cursor-pointer">ESPAÑOL</p>
          </div>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li className="text-white">LINKEDIN</li>
              <li className="text-white">TWITTER</li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex flex-row justify-between px-52">
        <div className="w-96 ">
          <p className="text-white text-4xl">DIANA LAURA CARRANZA RIVERA</p>
          <p className="text-white">{t("data.descripcion")}</p>
          <button className="mt-10 bg-green-600 text-white rounded-lg border border-gray-200 p-4 w-48" onClick={() => {setCount(count +1)}}>Contar Visita</button>
          <p className="text-white">{t("data.contador")}{" "}{count}</p>
          <p className="text-white">{t("data.tecnologias")}</p>
        </div>
        <div>
          <img src="https://scontent.fagu1-1.fna.fbcdn.net/v/t1.6435-9/35348781_1744585098956583_2271197582506065920_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEYIU9vFqUdVntWYQjlaJPCEIA7UG2PpcYQgDtQbY-lxs6rdzMUDkDBpBJi2hPSfHp9G3pJuMpUs3TCNOP6Togy&_nc_ohc=NSaLG7DAzHAAX-PFetv&_nc_oc=AQlQuSNoc3AkwcdGoTosVjPWuiZ1X2aUrY5lktz48BzLO93GNUO6e_X3XLg5mxpE0TA&_nc_ht=scontent.fagu1-1.fna&oh=00_AT-GGIeg_wi867B-wT-5rr_1qyHVRA8nOHo1Hd4B1vTThw&oe=62FC5213" className="rounded-full w-56 h-56" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;
