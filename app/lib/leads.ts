export interface Lead {
  id: number;
  name: string;
}

export type CreatableLead = Exclude<Lead, 'id'>;
