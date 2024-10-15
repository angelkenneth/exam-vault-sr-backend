import {it, describe, expect, vi, beforeEach} from "vitest";
import * as dbGet from "@/lib/leads/_database/get";
import {resolvers} from "@/app/graphql/resolver";

describe("GET /leads/[leadId]", () => {
  describe("given a valid lead id", () => {
    describe("that does not exists", () => {
      it('should return 404', async () => {
        const params = {leadId: 123}
        expect(() => resolvers.Query.leadById(null, params)).rejects.toThrowError("Lead with id (123) does not exists")
      });
    })
    describe("that exists", () => {
      const lead = {id: 123, name: 'Juan', age: 12}
      beforeEach(() => {
        const foo = vi.spyOn(dbGet, 'getDatabaseLeadById')
        foo.mockReturnValue(Promise.resolve(lead))
      })
      it('should return results', async () => {
        const params = {leadId: 123}
        const result = await resolvers.Query.leadById(null, params);
        expect(result).toMatchObject(lead)
      });
    })
  })
})
