## Notatka dotycząca aplikacji
Konfigurację HOST i HTTPS wrzuciłem w .env i wrzuciłem ten plik też do repo. Oczywiście wiem, że nie powinno się trzymać żadnych wrażliwych danych w .env, a do repo wrzucać .env.example, ale musiałem pokazać, że wiem jak zrobić konfigurację. 

Każdy input jest typu number, więc po najechaniu na input strzałkami możemy zmieniać jego wartość. Możemy też wpisać od razu konkretną wartość. 

Aplikacja wykorzystuje redux. Architekturę wybrałem modułową. 

Ze swojej strony dorzuciłem jeszcze a11y, customowe hooki, komponent klasowy oraz przykład HOC. 

## Uruchomienie aplikacji
Instlaujemy zależności komendą: npm install

Uruchamiamy projekt: npm run start

Projekt powinien być widoczny pod adresem: https://shop.local:3000/
