export type ServiceMessage = { message: string };

type ServiceResponseErrorType = 'INVALID_DATA' | 'NOT_FOUND' | 'CONFLICT';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceMessage,
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'SUCCESSFUL_CREATED',
  data: T,
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;