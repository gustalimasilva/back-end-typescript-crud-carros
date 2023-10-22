import { Request, Response } from "express";
import { knex } from "../bancodedados/conexao";

export async function listarCarros(req: Request, res: Response) {
  try {
    const carros = await knex("carros");

    return res.status(200).json(carros);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
}

export async function detalharCarros(req: Request, res: Response) {}

export async function cadastrarCarros(req: Request, res: Response) {}

export async function atualizarCarros(req: Request, res: Response) {}

export async function excluirCarros(req: Request, res: Response) {}
