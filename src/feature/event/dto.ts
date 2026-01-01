export type EventListItem = {
  id: number;
  title: string;
  startsAt: string;
  location: string | null;
};

export type EventDetail = {
  id: number;
  title: string;
  description: string | null;
  startsAt: string;
  location: string | null;
  capacity: number | null;
};
