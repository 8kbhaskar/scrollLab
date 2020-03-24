
import { BadRequestException } from '../../util/exception'

import { REJECTION } from '../../constants'


export class AboutCO {
    private stateId: number = 0;
    private districtId: number = 0;
    private ulbId: number = 0;
    private cityName: string = '';
    private description: string = '';

    private area: number = 0;
    private contactId: number = 0;
    private population: number = 0;
    private designation: string = '';



    constructor(request: any) {
        this.stateId = request.body.stateId
        this.districtId = request.body.districtId
        this.cityName = request.body.cityName
        this.ulbId = request.body.ulbId
        this.contactId = request.body.contactId
        this.population = request.body.population
        this.area = request.body.area
        this.designation = request.body.designation
        this.description = request.body.description


    }

    static validate(request: any): AboutCO {
        const body = request.body;
        let co: AboutCO = new AboutCO({});
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

        return new AboutCO(request)
    }

    static validator(request: any, id: any): AboutCO {
        id = id.replace(/'/g, '');
        id = id.replace(/"/g, '');
        if (request.method === "POST")
            return AboutCO.validate(request);
        if (request.method === "PUT") {

            if (!id || id == null || id == undefined || id == "null" || id == "") {
                throw new BadRequestException(REJECTION.BAD_REQUEST)
            }

            return AboutCO.validate(request);

        }
    }



    public getDesignation(): string {
        return this.designation;
    }

    public setDesignation(designation: string): void {
        this.designation = designation;
    }

    public getArea(): number {
        return this.area;
    }

    public setArea(area: number): void {
        this.area = area;
    }

    public getPopulation(): number {
        return this.population;
    }

    public setPopulation(population: number): void {
        this.population = population;
    }

    public getContactId(): number {
        return this.contactId;
    }

    public setContactId(contactId: number): void {
        this.contactId = contactId;
    }

    public getUlbId(): number {
        return this.ulbId;
    }

    public setUlbId(ulbId: number): void {
        this.ulbId = ulbId;
    }

    public getStateId(): number {
        return this.stateId;
    }

    public setStateId(stateId: number): void {
        this.stateId = stateId;
    }

    public getDistrictId(): number {
        return this.districtId;
    }

    public setDistrictId(districtId: number): void {
        this.districtId = districtId;
    }

    public getCityName(): string {
        return this.cityName;
    }

    public setCityName(cityName: string): void {
        this.cityName = cityName;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

}

