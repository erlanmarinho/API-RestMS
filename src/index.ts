import express from 'express'
import errorHandler from './middlewares/error-handler.middleware'
import statusRoute from './routes/status.route'
import usersRoute from './routes/users.route'

const app = express()
// Configurações da Aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configurações de Rotas
app.use(usersRoute)
app.use(statusRoute)

//Configuração dos Handlers de Erro
app.use(errorHandler);

// Inicialização do servidor
app.listen(3000, () => {
  console.log('Aplicação executando na porta 3000!')
})
