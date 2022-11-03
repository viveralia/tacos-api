import type { Handler } from "express";

import * as tacosRepository from "./tacos.repository";
import type { CreateTaco, UpdateTaco } from "./tacos.types";

export const getAll: Handler = (req, res) => {
  const tacos = tacosRepository.getAll()
  res.status(200).json(tacos)
}

export const getOne: Handler = (req, res) => {
  const tacoId = parseInt(req.params.id)
  const taco = tacosRepository.getById(tacoId)

  if (!taco) return res.status(404).json({ message: `Taco ${tacoId} not found` })

  res.status(200).json(taco)
}

export const create: Handler = (req, res) => {
  const newTaco = req.body as CreateTaco
  const createdTaco = tacosRepository.add(newTaco)
  res.status(201).json(createdTaco)
}

export const remove: Handler = (req, res) => {
  const tacoId = parseInt(req.params.id)

  const taco = tacosRepository.getById(tacoId)

  if (!taco) return res.status(404).json({ message: `Taco ${tacoId} not found` })

  tacosRepository.remove(tacoId)
  res.status(200)
}

export const update: Handler = (req, res) => {
  const tacoId = parseInt(req.params.id)
  const prevTaco = tacosRepository.getById(tacoId)

  if (!prevTaco) return res.status(404).json({ message: `Taco ${tacoId} not found` })

  const propertiesToUpdate = req.body as UpdateTaco
  const taco = tacosRepository.update({ id: tacoId, ...prevTaco, ...propertiesToUpdate })
  res.status(200).json(taco)
}
