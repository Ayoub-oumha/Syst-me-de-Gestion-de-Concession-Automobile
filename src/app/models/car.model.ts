export interface Car {
  id: number;
  marque_id: number;
  modele: string;
  prix: number;
  carburant: string;
  image: string;
  disponibilite: boolean;
  dateDeMiseEnVente: string;
}

export interface CreateCarDto {
  marque_id: number;
  modele: string;
  prix: number;
  carburant: string;
  image: string;
  disponibilite: boolean;
  dateDeMiseEnVente: string;
}

export interface UpdateCarDto extends Partial<CreateCarDto> {
  id: number;
}
