import axios from 'axios'
import { QueryClient } from 'react-query'
import { restoreItem } from 'services/storage'
import { SAVE_USERNAME_TOKEN } from 'services/constants'

export const api = axios.create({
  baseURL: 'https://api.bookclub.mapadaprogramacao.com.br/',
  headers: {
    Authorization: `bearer${restoreItem(SAVE_USERNAME_TOKEN)}`
  }
})

export const queryClient = new QueryClient()
