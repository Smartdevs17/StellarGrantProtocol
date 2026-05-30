export type SorobanContractEvent = {
  id: string;
  grantId: number;
  type: string;
  actorAddress: string;
  ledger: number;
  data: Record<string, unknown>;
};

export type SorobanGrant = {
  id: number;
  title: string;
  status: string;
  recipient: string;
  totalAmount: string;
  owner?: string;
};

export interface SorobanContractClient {
  fetchGrants(): Promise<SorobanGrant[]>;
  fetchGrantById(id: number): Promise<SorobanGrant | null>;
  getLatestLedger(): Promise<number>;
  fetchEvents(fromLedger: number, toLedger: number): Promise<SorobanContractEvent[]>;
}
