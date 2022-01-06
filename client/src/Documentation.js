import React, { Component } from 'react';
import obrazek from './img.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
      <header>
        <div className="view  jarallax tes" data-jarallax='{"speed": 0.2}'>
          <div className="mask rgba-purple-slight d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row wow fadeIn">
                <div className="col-md-12 text-center">
                <h1 className="display-4 font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInUp">Dokumentacja</h1>
                  <a className="btn btn-purple btn-rounded cs" href="/">
                    Strona główna
                  </a>
                  <div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
      <div class="container">
        <div class="row py-5">
          <div class="col-md-12 text-center w-50 text-center container">
           
          <h3>Architektura systemu</h3>
                      <img src={obrazek} alt="logo" /> <br />
                      <p>
Został dodany serwis oparty na obrazie postgres, którego zadaniem jest przechowywanie wprowadzonych współczynników dla których zostały wyliczone wartości ciągu Fibonacciego
</p>
<p>
Został dodany serwis redis, jego rola sprowadza się do przechowywania informacji o wyliczonych wartościach ciągu Fibonacciego wraz z odpowiadającymi im współczynnikami
</p>
<p>
Został dodany serwis nginx, pełni on funkcję proxy. To z nim wchodzi w interakcję użytkownik gdy łączy się ze stroną. Wiąże aplikację react z backendem stworzonym w node
</p>
<p>
Został dodany serwis worker, który w przypadku wprowadzenia nowego zdarzenia w bazie redis - dodanie współczynnika, zapisuje do bazy redis odpowiednią wartość ciągu Fibonacciego
</p>
<p>
W przypadku aplikcji frontendowej dodano:<br/>
* strone główną,<br/>
* stronę dokumentacji<br/>
* historię wprowadzonych współczynników.
</p>
<p>
Dla strony na której możemy obliczyć wartość ciągu dla podanego współczynnika dodano wyświetlanie informacji o obliczonych wartościach - komunikacja z bazą redis.
</p>
<p>
W celu poprawnego przemiszczania się między stronami został stworzony routing w App.js.
</p>
<p>
Została zmieniona funkcja obliczająca wartości ciągu dla poszczególnych współczynników w workerze. Wpisane zostały statyczne wartości.
Pozwoliło to osiągnąc bardzo szybkie obliczanie wartości. Ograniczona została również maksymalna wartość podawanego współczynnika do 20 
</p>

           </div>
        </div>
      </div>
    </main>
    </div>
    );
  };
