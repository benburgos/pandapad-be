export class CreateTicketDTO {
  readonly url: string;
  readonly subject: string;
  readonly description: string;
  readonly customerId: number;
  readonly agentId: number;
  readonly status: string;
  readonly comments: [{ to: string; from: string; body: string }];
}
