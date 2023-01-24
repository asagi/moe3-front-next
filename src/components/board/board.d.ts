type Unit = {
  owner: string;
  kind: string;
  code: string;
};

type Province = {
  owner?: string;
  code: string;
};

type BoardData = {
  seas?: Array<Province>;
  lands: Array<Province>;
  units: Array<Unit>;
};
