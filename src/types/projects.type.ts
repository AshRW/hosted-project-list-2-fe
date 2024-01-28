export type ProjectsType = {
  id: number;
  name: string;
  sequenceNo: number;
  description: string;
  link: string;
  extra?: Record<string, unknown>;
};
