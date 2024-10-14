import {it, describe, expect, vi, beforeEach} from "vitest";
import {GET} from "@/app/api/leads/[leadId]/route";
import {NextRequest, NextResponse} from "next/server";
import * as dbGet from "@/app/api/leads/_database/get";

describe("GET /leads/[leadId]", () => {
  describe("given a valid lead id", () => {
    describe("that does not exists", () => {
      it('should return 404', async () => {
        const req = {} as NextRequest;
        const params = {leadId: '123'}
        const response = await GET(req, {params}) as NextResponse;
        const result = await response.json()
        expect(response.status).toEqual(404)
        expect(result[0].message).toEqual("Lead with id (123) does not exists")
      });
    })
    describe("that exists", () => {
      const lead = {id: 123, name: 'Juan', age: 12}
      beforeEach(() => {
        const foo = vi.spyOn(dbGet, 'getDatabaseLeadById')
        foo.mockReturnValue(Promise.resolve(lead))
      })
      it('should return results', async () => {
        const req = {} as NextRequest;
        const params = {leadId: '123'}
        const response = await GET(req, {params}) as NextResponse;
        const result = await response.json()
        expect(response.status).toEqual(200)
        expect(result).toMatchObject(lead)
      });
    })
  })
})
