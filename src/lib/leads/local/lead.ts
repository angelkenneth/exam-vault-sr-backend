import {type BrighteService} from "@/lib/leads/local/services";

export interface Lead {
  id: number;
  name: string;
  email: string;
  mobile: string;
  postcode: number;
  service: BrighteService;
}
