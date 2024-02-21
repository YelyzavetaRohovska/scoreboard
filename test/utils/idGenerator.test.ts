import { IDGenerator } from "../../src/utils/idGenerator";


describe("ID Generator", () => {
    it("should generate a new ID", () => {
        let firstId = IDGenerator.generate();

        expect(firstId).toBe(0);
    });

    it("should generate each next ID incremented", () => {
        for (let i = 1; i < 6; i++) {
            expect(IDGenerator.generate()).toBe(i);
        }
    });
});