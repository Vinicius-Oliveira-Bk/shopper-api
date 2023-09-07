import { ServiceResponse } from '../interfaces/IServiceResponse';

export default class ShopperService {
    public getAllStatus = async (): Promise<ServiceResponse<[]>> => {
        const response = this.getAll(home, away);
        const teamsStats = this.sortStatsReport(response);
    
        return { status: 'SUCCESSFUL', data: teamsStats };
    };
}
