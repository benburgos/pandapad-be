export class CreateTicketDTO {
  readonly to: string;
  readonly from: string;
  readonly body: string;
  readonly status: string;
  readonly comments: [{ from: string; body: string }];
}
