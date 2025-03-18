export enum BrighteService {
  delivery = 'delivery',
  pickUp = 'pick-up',
  payment = 'payment',
}

export const serviceList: BrighteService[] = [
  BrighteService.delivery,
  BrighteService.pickUp,
  BrighteService.payment,
];

export const serviceDisplayMap: Record<BrighteService, string> = {
  [BrighteService.delivery]: 'Delivery',
  [BrighteService.pickUp]: 'Pick-up',
  [BrighteService.payment]: 'Payment',
};
