export class User{
    constructor(
        private id: number,
        private username: string,
        private email: string,
        private password: object,
        private isconnected: boolean
    ) { }
}