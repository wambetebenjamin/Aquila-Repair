export const cities = [
  ['Nairobi','Kenya'],['Lagos','Nigeria'],['Accra','Ghana'],['Johannesburg','South Africa'],['Kigali','Rwanda'],['Dar es Salaam','Tanzania'],['Addis Ababa','Ethiopia'],['Dakar','Senegal']
];
export const slug = (value: string) => value.toLowerCase().replaceAll(' ', '-');
export const whatsapp = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254112272061'}`;
export const disclaimer = 'Aquila Repair is an independent information directory. We do not perform repairs, hold devices, guarantee work, or process payments. You contract directly with the repairer. We are not a certified standards body.';
