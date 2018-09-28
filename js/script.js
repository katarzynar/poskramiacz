  document.addEventListener("DOMContentLoaded", function (event) {


      var textBox = document.querySelector(".textInput");


      var text = textBox.value;


      var myTextarea = document.querySelector(".textOutput");

      var btn = document.querySelector(".btn");

      function readyToCopy(readyText) {
          myTextarea.value = readyText;
      }

      function usuwanieWdow(text) {


          //popularne błędy ortograficzne
          text = text.replace(/kurwa/gi, " k\*\*")
          text = text.replace(/wziąść/gi, "wziąć")
          text = text.replace(/ z tąd/g, " stąd")
          text = text.replace(/ z tamtąd/g, " stamtąd")
          text = text.replace(/ z nikąd/g, " znikąd")
          text = text.replace(/ wogóle/g, " w&nbsp;ogóle")
          text = text.replace(/ wogule/g, " w&nbsp;ogóle")
          text = text.replace(/ wogle/g, " w&nbsp;ogóle")
          text = text.replace(/ z przed /g, " sprzed ")
          text = text.replace(/ po środku/g, " pośrodku")
          text = text.replace(/ spowrotem/g, " z&nbsp;powrotem")
          text = text.replace(/ możnaby/g, " można&nbsp;by")
          text = text.replace(/ trzebaby/g, " trzeba&nbsp;by")

          text = text.replace(/ napewno/g, " na&nbsp;pewno")
          text = text.replace(/ narazie /g, " na&nbsp;razie ")
          text = text.replace(/ odrazu /g, " od&nbsp;razu ")
          text = text.replace(/ poprostu /g, " po&nbsp;prostu ")
          text = text.replace(/ conajmniej /g, " co&nbsp;najmniej ")
          text = text.replace(/ na codzień /g, " na&nbsp;co&nbsp;dzień ")
          text = text.replace(/ wszechczasów /g, " wszech&nbsp;czasów ")
          text = text.replace(/ na prawdę/g, " naprawdę")
          text = text.replace(/ nie prawda/g, " nieprawda")
          text = text.replace(/ na przeciwko/g, " naprzeciwko")
          text = text.replace(/ nie często/g, " nieczęsto")
          text = text.replace(/ nielada /g, " nie&nbsp;lada ")
          text = text.replace(/ w cudzysłowiu/g, " w cudzysłowie")

          // ..ł bym
          text = text.replace(/ł by/g, "łby")
          text = text.replace(/ł bym/g, "łbym")
          text = text.replace(/ła by/g, "łaby")
          text = text.replace(/ła bym/g, "łabym")
          text = text.replace(/ło by/g, "łoby")

          //interpunkcyjne
          text = text.replace(/mimo\, że /g, "mimo że ")
          text = text.replace(/mimo\, iż /g, "mimo iż ")

          //skróty
          text = text.replace(/ m\. in. /g, " m.in. ")
          text = text.replace(/ np\: /g, " np. ")
          text = text.replace(/ nr\ /g, " nr ")

          //TWARDE SPACJE//

          //buźki
          text = text.replace(/\ \:\)/g, "&nbsp;:)")
          text = text.replace(/\ \;\)/g, "&nbsp;;)")

          //jedna litera
          text = text.replace(/ i /g, " i&nbsp;")
          text = text.replace(/ I /g, " I&nbsp;")
          text = text.replace(/ w /g, " w&nbsp;")
          text = text.replace(/ W /g, " W&nbsp;")
          text = text.replace(/ o /g, " o&nbsp;")
          text = text.replace(/ O /g, " O&nbsp;")
          text = text.replace(/ u /g, " u&nbsp;")
          text = text.replace(/ U /g, " U&nbsp;")
          text = text.replace(/ a /g, " a&nbsp;")
          text = text.replace(/ A /g, " A&nbsp;")
          text = text.replace(/ z /g, " z&nbsp;")
          text = text.replace(/ Z /g, " Z&nbsp;")


          //dwie litery
          text = text.replace(/ ze /g, " ze&nbsp;")
          text = text.replace(/ za /g, " za&nbsp;")
          text = text.replace(/ we /g, " we&nbsp;")
          text = text.replace(/ do /g, " do&nbsp;")
          text = text.replace(/ od /g, " od&nbsp;")
          text = text.replace(/ na /g, " na&nbsp;")
          text = text.replace(/ Ze /g, " ze&nbsp;")
          text = text.replace(/ Za /g, " za&nbsp;")
          text = text.replace(/ We /g, " we&nbsp;")
          text = text.replace(/ Do /g, " Do&nbsp;")
          text = text.replace(/ Na /g, " na&nbsp;")
          text = text.replace(/ Od /g, " Od&nbsp;")

          //trzy litery
          text = text.replace(/ nie /g, " nie&nbsp;")
          text = text.replace(/ Nie /g, " Nie&nbsp;")

          //łączenie z wyrazem poprzedzającym
          text = text.replace(/ się /g, "&nbsp;się ")
          text = text.replace(/ cm /g, "&nbsp;cm ")
          text = text.replace(/ m /g, "&nbsp;m ")
          text = text.replace(/ l /g, "&nbsp;l ")
          text = text.replace(/ r\./g, "&nbsp;r.")
          text = text.replace(/ zł /g, "&nbsp;zł ")
          text = text.replace(/ zł. /g, "&nbsp;zł. ")


          text = text.replace(/ się\,/g, "&nbsp;się,")
          text = text.replace(/ cm\,/g, "&nbsp;cm,")
          text = text.replace(/ m\,/g, "&nbsp;m,")
          text = text.replace(/ l\,/g, "&nbsp;l,")

          text = text.replace(/ się\./g, "&nbsp;się.")
          text = text.replace(/ cm\./g, "&nbsp;cm.")
          text = text.replace(/ m\./g, "&nbsp;m.")
          text = text.replace(/ l\./g, "&nbsp;l.")

          //interpunkcja

          text = text.replace(/ \, /g, ", ")
          text = text.replace(/ \. /g, ". ")
          text = text.replace(/ \: /g, ": ")
          text = text.replace(/ \; /g, "; ")
          text = text.replace(/ \! /g, "! ")
          text = text.replace(/ \? /g, "? ")


          return text;

      }


      btn.addEventListener("click", function () {
          readyToCopy(usuwanieWdow(textBox.value))
      }, false)
  });
