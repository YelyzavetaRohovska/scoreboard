export class IDGenerator {
    private static id = 0;

    static generate(): number {
        return this.id++;
    }
}
