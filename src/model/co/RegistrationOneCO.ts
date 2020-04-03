
import { BadRequestException } from '../../util/exception'

import { REJECTION } from '../../constants'


export class RegistrationOneCO {
    private userId: string = '';
    private username: string = '';
    private password: string = '';
    private firstName: string = '';
    private lastName: string = '';
    private email: string = '';
    private mobile: number = 0;
    private policyStatus: string = '';
    private status: string = '';


    constructor(req: any) {
        this.userId = req.userId;
        this.username = req.username;
        this.password = req.password;
        this.firstName = req.firstName;
        this.lastName = req.lastName;
        this.email = req.email;
        this.mobile = req.mobile;
        this.policyStatus = req.policyStatus;
        this.status = req.status;









    }

    public getUserId(): string {
        return this.userId;
    }

    public setUserId(userId: string): void {
        this.userId = userId;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }


    public getPolicyStatus(): string {
        return this.policyStatus;
    }

    public setPolicyStatus(policyStatus: string): void {
        this.policyStatus = policyStatus;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }


    public getMobile(): number {
        return this.mobile;
    }

    public setMobile(mobile: number): void {
        this.mobile = mobile;
    }



    static validate(request: any): RegistrationOneCO {
        const body = request.body;
        let co: RegistrationOneCO = new RegistrationOneCO({});
        let coKeys = Object.keys(co)
        let status = 0;
        for (let param of coKeys) {
            if (body.hasOwnProperty(param) && body[param] === null || body[param] === undefined || body[param] === '') {
                status = -1;
                break;
            }
        }
        if (status == -1)
            throw new BadRequestException(REJECTION.BAD_REQUEST)

        return new RegistrationOneCO(request)
    }

    static validator(request: any, id: any): RegistrationOneCO {
        id = id.replace(/'/g, '');
        id = id.replace(/"/g, '');
        if (request.method === "POST")
            return RegistrationOneCO.validate(request);
        if (request.method === "PUT") {

            if (!id || id == null || id == undefined || id == "null" || id == "") {
                throw new BadRequestException(REJECTION.BAD_REQUEST)
            }

            return RegistrationOneCO.validate(request);

        }
    }





}

