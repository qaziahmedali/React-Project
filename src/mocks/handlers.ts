import { baseUrl } from "./../config/baseUrl";
// src/mocks/handlers.js
import { ResponseComposition, rest, RestContext, RestRequest } from "msw";
import Api from "../routes/api";

export const handlers = [
  rest.get(
    `${baseUrl}${Api.GET_PRODUCT}`,
    (_req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
      return res(
        ctx.status(200),
        ctx.json({
          username: "admin",
        })
      );
    }
  ),
];
