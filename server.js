var alunoBiblioteca = require("./alunoBiblioteca")
const http = require("http")
http.createServer(function (req, res) {
    res.write("Aluno: " + alunoBiblioteca.primeiroNome + " " + alunoBiblioteca.ultimoNome +
        "\nRGM: " + alunoBiblioteca.RGM)
    res.end()
}).listen(8080)
