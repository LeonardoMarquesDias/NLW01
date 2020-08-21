const proffys = [
  { 
    name: 'Diego Fernandes',
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "754869571", 
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química", 
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220] 
  },
  { 
    name: 'Juliana Madeira',
    avatar: "/images/juliana.png", 
    whatsapp: "754869571", 
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Português", 
    cost: "20", 
    weekday: [1], 
    time_from: [720], 
    time_to: [1220] 
  },
  { 
    name: 'Leonardo Dias',
    avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHsNDpOKV-SOw/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=BMJstij-GdB3wtDmJjmBOwhT-CqNSYZZlCd2hBSzNGY", 
    whatsapp: "754869571", 
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Matemática", 
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220] 
  }
]

const subjects = [
  'Artes',
  'Biologia',
  'Ciências',
  'Educação física',
  'Física',
  'Geografia',
  'História',
  'Matemática',
  'Português',
  'Química',
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

// Funcionalidades

function getSubject(subjectNumber) {
  const position = +subjectNumber - 1
  return subjects[position]
}

function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
  const data = req.query

  const inNotEmpty = Object.keys(data).length > 0
  if (inNotEmpty) {

    data.subject = getSubject(data.subject)

    proffys.push(data)

    return res.redirect("/study")
  }
  return res.render("give-classes.html", {subjects, weekdays})
}

// Servidor
const express = require('express')
const server = express()

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Início e configuração do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding) 
.get("/study", pageStudy) 
.get("/give-classes", pageGiveClasses)
// Start do servidor
.listen(5500)
