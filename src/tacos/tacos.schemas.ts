import { object, number, string } from "yup";

const id = number().integer().positive().required()
const name = string().min(1).required().strict()
const price = number().min(1).integer().positive().required()

export const getOne = object().shape({
  params: object().shape({ id })
})

export const create = object().shape({
  body: object().shape({ name, price })
})

export const update =  object().shape({
  body: object().shape({ name, price }),
  params: object().shape({ id })
})

export const remove = object().shape({
  params: object().shape({ id })
})
