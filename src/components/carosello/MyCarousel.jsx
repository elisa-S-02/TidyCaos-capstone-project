import React from "react";
import { Carousel } from "react-bootstrap";
import "./myCarousel.css";

const MyCarousel = () => {
  return (
    <div className="App  ">
      <Carousel>
        <Carousel.Item className="contenitore">
          <a href="https://www.ilfattoquotidiano.it/2024/03/10/che-fine-ha-fatto-il-sogno-di-basaglia-pazienti-intrappolati-nel-gioco-delloca-della-cronicita-strutture-pubbliche-svuotate-e-soldi-ai-privati/7473938/">
            <img
              className="d-block w-100"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVEBUVFRAVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFw8QFi0dFR0rKystLSsrLS0tLS0rLSsrKy0tKystKystLTcrKys3LS0rKzctKy0tKy0tNy0tKy0rK//AABEIAKIBNgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAQIDBQYAB//EAE4QAAEDAQQCCwsHCgcBAQAAAAEAAgMRBAUSISIxBhMyM0FRYXGBkbEjNFNyc5KTobLB0RQkUlSCwtIHF0JDYoOio7PiFRZjZOHw8UR0/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAQADAAMBAAMAAAAAAAAAARECEjEhQWFREzIz/9oADAMBAAIRAxEAPwCvCJifXWhwFNCuAmS1SJQEU4JwTQE8BEPaE7CkYpEUzCu2oJxXn/5RLbIyaNrJHtG1kkNe5tTi5DyJJtNbwxBcIgvFjeE3hpfSv+KT5fN4WT0rvit9P017YIgnCILxH5ZL4WT0jvik+VyeEf6R3xTp+mvcNqC7amrw/wCUyeEf57viu+UyeEf57vinT9TXuO0tXbU1eHfKZPCP893xS/KJPCP893xToa9x2kJdpC8N+UyeEf6R3xSi1SeEf6R3xTp+mvcNpCTaQvEPlUnhH+kd8UvyyXwsnpHfFOn6a9t2gJu0BeLfL5vDSelf8V3+JT+Hl9M/4p0/TXs5gCaYBxrxsXraPDy+mf8AFOF82n6xL6R3xTpf6a9gMA400wcq8iF+2r6xL55Tv8w2v6xJ5ydKa9ZMPKmGNeVf5ktfh3+r4L0m5J3SWeJ7jVzmNLjxmmZUvHFlEOChep3BQvWVCyPQk0oRUoQMwUQO+WupRhqkDU6iCV84a0Eng9yGo6TXk3i4Tzpobn0o0BUMZGAuUi5BaqeBQIiAZIiVKElEoQOCcAkCcEVKwZJwSM1JyBMK80/KS75y0cUQ9bnL0wFeX/lFztf7pg9blrh6UC+4f0WzNMu1CXasDhVpZjIDzkTTsUMlwziuGNzmj9KgbWjQ5wDSakiqKnvuMkyMieJTEIsTpAWMG1hhc1oGuldZ4UbatkMREcoYTK10rmjHoxlwa0YxTSyFcuJb+WVK25pyGkRmjy0NzbUl4q0EVqK8FUS7Y7M1gc4AVbIcILXOBjw5Oocq4tfAj2bKGtDQ2EijongY2hoMeVAA2tDmcyTUoOx33gjDNrqQJRix0ylexxyprGEJ8iJ2xy1DXFqrltjK1aKltMW6pnTXRRx3JOQ0iMnGWgDE2unuKtrVoPBWiLZfxD8e1jf5pqYuGVmHDq4ONFDZW7QO1nE0x4u6aDtrpSjQMq0GslPkV7dj09HEhrQ2MybthxBrg0tBB11OpDWy65Ymh0jKAmm6acLqVwuAOiacBRtkvosYGYAaMlbXFQ1kkZIHauAsGXCmXlegla5rYsG2SbbLpl2J9CNGo0W6RPSnyH2PY7K9uN2iO5kDRc522Pa1ujWo3VRWlaKC67qMrpBVwEQJIbHje6jsNGsBzPHnkj4NkIace090IhD3bYaOELmFtG0yJDACgbFbWNc9z4y4Pzq15ZJGcVaseBlxHjT5Dn3I8vLITtgGHM0jIL60YWvOT8jo5qK03VIxjH0qHNBdlTay57mNaeWrSrmLZSA7FtRJG14XbZV7hHXKR5aS6tamlDkoH38xwLHwksIFAJKOq2V8jc8OrTIPMnyAZLgtADDgqXmQYQ5tWbWaOxZ0A5VFZLpe+0Ns7u5vcaVcKhuiXVy1ig4FbjZMMRcYjpGetHiobM5r6DE0ioLRry5EE6+PnTbRhJDQAGlwqQGFoqQAK51yFFfkQtuKTBO8kDaHBhbQkvcSBo9YPSFA+5bQHBphfiIJApwAgE9FRXnVu3ZOQG9zGINbiNcpJGvjdjcKcIiaE227I2ua9rWOAe2UGu1jC6XDqwNFQMOs5lTaKmS5p2txmMjugipQ4sZFQKdKa+6ZWh5cwtLA0lpBq4PfgGHjzKtv8fjIZjjccD4X5OGltcW1uqeXWFK7ZNG3DgjccIAFWxtBpMyUaLchqI6ldqs3arJJGQJGOYSKgOaRUci9V2K52OHxB6ivO79vRkwY1jXANL3ZtY3N5FQAzm18K9A2GurYoeYj+IrPPwi0eFBIES8KFwXNoFKEFM1WEoQkoUQEAlIT6LqIIMOaKAUTgiWtqacJ1cqojwrlJhSoJ3zlm+RyR8pbib5zKgdNEZY5mOFWuDhyOB7FoDTVRCWi6IJDUsFfpN0XecKFTV6gkoSvuR7d6md4sgDx15O9ZUD2Whm7hxD6Ubgf4XUPVVEwQE4FBstrK0JwnieCw9TqVRQKonYpKqFr04OQPC8t/KAfnjuRjPevU2leVbPD89k5AwfwrXD0rPhaSybH2SRMLcTXkNc5zq00g4kNaQGuFBlR1eOizrRVObKaAYjQGoGI0aeTiK6MryTY4AS3bhWjnZsoBGxwD3E11gEmnIVP/ltuek4VxBtW6Bwxk4sdchXLPl4lncR4z18adjNKVNOKuSmUXMdzxsnayRxLdrlecQLHDaw8CoFTQllRTWCiYbihlG2xPOCtKEGmTRio51CRiJplXJZ2p/6UtUwaB2x6NoLS94fiDWksAaSGykkaWbDgFHKU7F2iri51KyABrQdTZC0g144x1rNFLU8Z60waB+xxmElsjjhc5pIYDmCRiIxaLBQ58oQ09x4ZWR4zpCTWyju513La6QdTR41UCqWqC/tFyRstEUYDi17HkitHktjxAchqpI9jjZA0txRlwBcx2k6KvAQach46FZyp4zXnXB511PWUwXj9jWFpc6UgNFXEREg5OOga5nRzHAUv+VjiwmXUTUiM4SNOmE1zdoZjKlRmqiW3SOYI3PJa3UMuXWRmdZ18ahErvpOFMxpHInWRyplFr/gBM204g2kWNxIr+lhNBUcPKobLdbaPxNkkIm2mkVNHLdmozBOQrTUc1XCRwNQ4g8YcQetIyVza4XOFddHEV56a1RZs2OvIJLwAKAaDjiLhERSnLKB0FV97XeYH4C4Oq0OBHCDX3gqM2h9AMbqDIDGaADiFctQ6kyaRzs3Oc48bnFx9aCAr1LYMa2KPneP4yvLivTdgbvmbfHf7Szz8WL9wULlK4qNxXNQ0oQkoU1stTGbpwBOoa3HmaMyhg2aTcR4R9KXR6mDM9NEEJCHdaW1wtq930WNxEc9Mm9JCtoriac5nuk/Z3DPNGsc5KsYYmsGFjQ0DgAACi4z8d2WiTXhhb58n4WnrRkNwwtIe4GR4zD3uLjXk4BzAK0x1NOSvr1JxGSauRDsmYBaZKCg0DkKa42lKnbIs5yeNkZ/ltXKotbbXA8tNHBpoeI0NMuFZ+C97WzdNilHGCY3dRqPWtBeG9v5lngCpCjYtksY32KWLlLcbetlQrKyXrDLvcrHczhXqVEh57JG/dMaeUgVHMVcOzXSxMcKOaCOUVCrpLii1xl0Z/YdQeYdH1Kgjicze5ZGcmPEOp9UXHe9pbr2uQcoLHdYqD1KYbBr7vtDNy5kg4nAsd5zaj1BBW+3TRt73dXlNWcpxMDj1gIqLZK39ZFIzlAxt/hz9SPs97wSZNkYTxVoeoofCigtU8gq2aAcYax0hHW4dip7y2GTTyulMzCXUzLCNQA1AraWq74ZM3RtJ+lTMczhmhXXY5orFM4ZanabfXn61dwxlItgMo/Xxj9yT6yUUzYLUYZJI3cTmRFjx0g0I5wri7rXaZGNd3LMA6ncIqjh8p/0/Nd8U7X+mRgp9g72OOKSkf0wzFh8YA6uUKaybCopTRlujceJrQT1YltZILQ4EO2ogihG1uzHnIaxXK6J2ONkDXcYhdX21e1TGf/NufrP8r+5OH5Nz9Z/lf3LXhtq44/Qu/GlDLV9KP0LvxqduS5GP/Nv/ALn+V/cl/Nt/uf5X9y2BjtX0o/QO/GuEVr4Cz0Dvxp25GRkPzbH6z/K/uUUv5PC0tHyjdGg7lyV+ktttNs/Y9A/8aa+G11G9nlML8ubSV7cjIx35t3fWR6I/iSH8m7/rDfRH8S2hbahwx+iePvJvzrji8x34k7cjIxX5t3/WG+iP4k0/k4k+sM9G74rbYrV/pea/4ppktPFF/GnamRh3/k6kH/0M8x3xVfadhb25Nnje7gY0Gp588hyr0K1Nne0sc2ItcKEYnj3Kru65TZ3F0UMLSeKST8KTlUxQ2PYI5rcTyx7zqa4uDG8tBm71KB+we0aq2cjmeKdS2hltH0IvSv8AwKCe1zj9XH6V34E71cjDS7BrQPBdD3e8K7uSxWmywYS6EAFzqPxZV/bB9ytbPLaJsW4jDThJFXkmgOVaAaxrREd1x1Dn1kcOF5xUPINQ6ApeVMVljvOaQkCAO4nsedrPS5o9VUYLvlfvsuEfQiy6C859VEZarfHENN7W8QJFTzDhVfNftd6ic79p+g3qOfqU9PgfZbBFHuGAHhOtx53HMpbVbI4xWR7WDlcAqGa0Tv3UuEfRjGHrcanqohm2ZgNaVP0jm4/aOaYdllNsgb+qje/lIwN63Z9QVfPbLTJrkEY4oxU+e74JSFwVZ1orCO5s4dEZnWchmpnKKw72zxQpistzxDfu+NPHFF7AXJb8GlHywx+8LlplbXhvbujtCpWhXV5b27nHaFTBSHJ1E0tCkIULlURytULgpnphQDuCHnha7dNB5xVGEJjmoKi2TSQxvfFI9ha0kAOJFRq0Tkt5ZqmIOJqSypPLRYa/G9xf4tOtbylIDyRn2Sla4pNizO4jmZ7IV9ANLoPuVRsYb3Lq9kK7s7dLoPuV4pRDQpXBA2i1CNwxA5mgpnmjNty3LupaTRUTwVKKICKXPckc41ouN9VROFLHM5uQNFAHJQUBDrZJx9i42p51nsQ7214UtU0Oea5kppC4lIXIEcAh5KDgFU+SRDMNdfGgRzBxKIxjiHUp3KKTMImgrWwUpQZniHEUC+Fv0R1BWVs4Of3FCOCzVZOwszmH+sfZas1NaZpJZmOlcGxyFgazQqMINSRnw8a1FiGnP5Y+y1ZcD5zavLdsbFmNXw+z2Rrcw0VOs0qTznWiUrQn0VZQOChe1EuaontUA5XBPITCiNFd29t5kQ5DXZvTentKJKy6Twy+hnEf9Fvqc5cnXyNGHyZ9T3LlplYXtvf2h2qnare9t7+18VUtUhTgoZdalUT1UR0TSFJwJhQMITHBSFMcEFVfje5O+yOtwW4tIpA/ybvZKxV8juf24x/G1bW8O95PJO9kqVqD9jo7n0+4K8sbKv5h2kKmuIdz6T2BXt2jTI/Z963xZqR11bc6uIDCQc9RySvjLHU4eEV9Y4wjGtAJqmWiNpw661Ga3jKFwUVlsznvcA4igBRUzKFD2W0Bj3a86alFEmwkfpu6v+VJFYSf03DnC5l4Dl6lK23t5epA7/C3eFTH3a4frFFPbYgW1cQXGg0dZzPYFM22MApU9SJqE3c7wh6kx13P8IepTut7eXqUJtreM9SLoGNhDnNJrQ0T2ZdZTYTV7iOEqG21w5GmtIlpZrQBrPQmxNe44qUaPWhrpgFA5xqSNZ41aR01V4Dl0LeMaDtrNR4ne4oNwVpeIoB43uKrXhc66srZB3Sfyv3QsuR86tXlW/0mLVwDus/lB7IWXI+d2rykf9JixFvgoBOolTC5GSOCicnkpjlVQuURUzlEolX91703p7Siihrq3sc57UUVl0njr2GhAf2XjqefiuTr0HcoP3ntBctMjb2GgPG+Kqy1Wt67lvOq8hJ4X1A4KF6IIUMozKIj4EwqQ6kwoGprk4pjkFZfO4byyxD+Y1ba8+95PJu9lYq+Nyzy0H9Vq2t6d7yeIexGos7j3vpKvrpGmfFHaVR3IO5jnK0Fzt0nHkA7VvizVhhz6U58YqMuEJk8pachxouRtC3nC6MfYO2x0KqbPFWQ11f8LQW9marLNH3Q857FitEowGhB9aKZHEf/AFENh15HrVabzd4Lhprz10rqVxncR3zZW1iLBqcSc/2SPejrPZmFgJ1041FLDTrJ7FOGHCMx1H3I0hfA2ooPWo5LOKakbDDWleVK+HIqIpLG3Sd0Ka2RZJ1mZmehFWyKoCsFVYGDAK8SIiIxADl7EyzQtDQHAuy48upT2earqNaA2meWdc1q8mepL1ZojnCqHq8vYaHSFRvC51tmIt+n8cdizL++7V40R/lhaiMd3n8ZvYVmJB88tP7r+msRq+CXBQOCJITTGjIeiQqZzFG4IqFyiKmeoigvbp3sc57UWUHdG99JRpWW54feQ7jCeWUetq5LeG8RePJ9xctMi701M5z2IGiNvXUzp9yCqrCmEIWfWUWUJNrKVDTqUZUnAmFRDCmOUijcoqsvb9UP9xD/AFAtveve7/F+CxN57qH/APRF7QW3vbeHcw7QjXH7WtzDuY5z2rQ3OMz0Kgucdyb09q0Nz6z0LpxZo6QZnnKWKbE5vDmFHOddOPhTbI4lwrTWF0YGXmQACSAARmTQa0BYs5Ok9iJ2QWXbYizUDw0rTlHKDmhrvYWuAJxEChPC7LWo0snGgNUO145M9XapXvqHUGfLxoAufTct84/BEqad4OQ409jwMOlSpy5eRD1J15dKGstomEj4yGuDWtc01wnSLgQfNQXcY6daSQZFNs5JGkKHhANadKkfqKCosg0ndCMtgyChsjcyiLdwcyCus9nBAJNMkpa1slK5kVCfZpAGiqjnJMwoMqcfIos+T723HSFRvV9ew0OkdqoXqVWZj3+fnb95ZiXv20+LD7BWoZv8/Oz7yzE3f1o8WH2SucW+C2otpbRBgLqFSwlw+eiEepnBROCFuoJFCQp3hQuVRd3RvfSfcjSgbn3v7XuCNKjcS27vePyknstXLrWPmzfKu9lq5VBV6/ocx9yAqjr4/Q5j7kACrEvpXISXWUQ5yFl1qI46kwp1clGURxUbk4prkWK+3jTg8vH2raXxvDvse01Yu2b5B5dnvWzvjeXc7Pbao1Fzc+9N6e1aG5tZ6Fn7o3pvT2rQXMMyunFmip3AE140sA0mkfSCZLXEaAa9Z4OhJZ5RtjQTU149S6zxhaWvUqyJ2krG06lU6j0+5ZUaDrSAt4/WocZ4z1pVVLaGtpkfWhbCw43OILRgY0VcCThLs/Wpjr6k5pUBAmA4QmvtPKFFVMlOR5lRJZTmURb/ANHmQ1jGkUXaxqNKinUoA7JGC0V4ktsstHB3IfV/6nxAUyS3nMAWDjqPUEwC3xuOkKiery+dwPGCpJFnkrNM3+f7H3ll5+/rR4kPsuWob3xP9j7yy8vf1o8SH2XLnFvgxqUpGpSqyY5QuU7lA9RUEqhKmlUJQXVznQPje4I0oC5zoHxvcEcVG4ntPew8sfYC5JP3t+++4lVRNfRzbzFVuNH31um8x7VXBIlOAUEusohoQsx0iiOOpRlP4ExEIUwlOTHFFA2rfYPLN7Ctne28nnj9tqxlo32z+Wb2FbO996PjR/1GqVYuro3pvT2rQXRrKoLp3pvT2lX10borrxQy9Zy11AaVJqobq31nOlvgafX2pt1mkjSeAr2cc/xvPd7tHaTrVJHJU9KsZZcTuTNVVncCTQ5V18a8ruNBTqqIU408AcfYg6ufUlaUHbJSxzADXE6hy4ACe1FBo40U+qjlORS05VHIOVVEtkko7NXDVnbK/E8gaxTLkVzDPmQeNQOmsudW5H1FQSyVFHDMajRH1UEzAdaIqr53A8ZqpJFd31uB4w96pZFK0zLO+J/sfeWXl7+tHiQ+y5ahu/z87PvLLyd/WjxYfZK5Rb4MaUqaEpVZMKiepXKFxUEMihKmkUJQW9zHQPP7gjigLn3B5/cEcVHTj4Il72/fD2CuXP72Plh7Dly1PEOvzdN8X3oGJIuUSpEFPuiuXIhOBNcuXIGlMclXIAJ9+s/lR2FbW9t6+1H7bVy5RZ9rq6d7b09pWgujWf8AvEuXLrxSoL13XX2qKy6x0rly9nH/AJuF/wBljaDoP8VdYWjCMuD3Lly8ruJaEpCVcggmGpOokXIHNCVwXLkAUg7rHznsRj9ZXLlYlGwHILnpFygqr73A8Ye9Ur1y5SqzEe/z87fvLLy9/WjxYvYKRcuU9avgxqUrlyrBjlC9cuUEEupQOSrkPpa3NuT43uCPK5co6cfBH/zO8s32HLly5aniP//Z"
              alt="First slide"
            />
          </a>
          <Carousel.Caption>
            <h3 className="black">
              <b>Il Fatto Quotidiano: </b>Che fine ha fatto il sogno di
              Basaglia?
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="contenitore">
          <a href="https://www.ansa.it/umbria/notizie/2024/05/15/in-italia-aumentano-le-richieste-daiuto-per-disturbi-alimentari_b03a13df-904b-4c43-a992-09589579232b.html">
            <img
              className="d-block w-100 h-100 "
              src="https://www.ismstp.it/wp-content/uploads/2022/04/disturbi-alimentari-1.jpg"
              alt="Second slide"
            />
          </a>
          <Carousel.Caption>
            <h3 className="black">
              <b>ANSA.it: </b>In Italia aumentano le richieste d'aiuto per
              disturbi alimentari
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="contenitore">
          <a href="https://www.repubblica.it/salute/2024/03/05/news/salute_mentale_adolescenti-422257833/">
            <img
              className="d-block w-100 h-100"
              src="https://img-prod.ilfoglio.it/2024/01/26/192706880-9fbe368a-c9f3-476b-89f9-0d403b14bad2.jpg"
              alt="Third slide"
            />
          </a>
          <Carousel.Caption>
            <h3 className="black">
              <b>La Repubblica: </b>In Europa 9 milioni di adolescenti hanno
              problemi di salute mentale
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
