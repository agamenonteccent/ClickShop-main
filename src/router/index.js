import { createRouter, createWebHistory } from 'vue-router'
import ProdutosCategorias from '../views/ProdutosCategorias'
import CompProdutos from '../components/CompProdutos'
const routes = [
  {
    path: '/ProdutosCategorias',
    nome: 'produto',
    component: ProdutosCategorias
  },
  {
    path: '/compProdutos',
    name: 'compProdutos',
    component: CompProdutos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
