export interface responseGenerator {
    config?: any;
    data?: any;
    headers?: any;
    request?: any;
    status?: number;
    statusText?: string;
}
export type error = {
    status: number;
    message: string;
    type: string;
};
