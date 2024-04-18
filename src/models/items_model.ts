export interface ItemsResponse {
  data: Item[];
  totle_records: number;
  current_page: number;
  total_pages: number;
}

export interface Item {
  id: number;
  item_id: number;
  name: string;
  cost: number;
  sprite_url: string;
}