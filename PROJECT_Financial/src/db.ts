import Knex from 'knex'
import { knexConfig } from '../knexfile'

export const db = Knex(knexConfig.development)
