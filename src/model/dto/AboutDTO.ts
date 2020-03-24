
export class AboutDTO {

    private state: number;
    private district: number;
    private ulb: number;

    private cityName: string;
    private description: string;
    private uuid: string;
    private population: number;

    constructor(request: any) {
        if (request) {
            this.state = request.state_id
            this.district = request.district_id
            this.ulb = request.ulb_id
            this.uuid = request.unique_id
            this.cityName = request.city_name
        }

    }

}


