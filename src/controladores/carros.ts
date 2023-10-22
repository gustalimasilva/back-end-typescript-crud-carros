import { Request, Response } from "express";
import { knex } from "../bancodedados/conexao";
import { Carro } from "../tipos";

export async function listarCarros(req: Request, res: Response) {
  try {
    const carros = await knex("carros");

    return res.status(200).json(carros);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

export async function detalharCarros(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const carro = await knex<Carro>("carros")
      .where({ id: Number(id) })
      .first();

    if (!carro) {
      return res.status(404).json({ mensagem: "Carro não econtrado" });
    }

    return res.status(200).json(carro);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

export async function cadastrarCarros(req: Request, res: Response) {}

export async function atualizarCarros(req: Request, res: Response) {}

export async function excluirCarros(req: Request, res: Response) {}
