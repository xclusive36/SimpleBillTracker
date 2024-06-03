export interface Bill {
  id: string;
  name: string;
  type: string;
  amount: number;
  dueDate: string;
  repeat?: string;
  paid: boolean;
}
