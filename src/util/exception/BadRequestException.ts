export class BadRequestException extends Error {

  private status: number= 400;

    public getStatus(): number {
        return this.status;
    }

    public setStatus(status: number): void {
        this.status = status;
    }

  constructor(message) {
    super(message)
  }
}


